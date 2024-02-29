const { oecd } = require('eidl')
const { Oecd } = require('../model')
async function oecdDownload(options) {
  try {
    const { refAreaCode, startPeriod, endPeriod, upload, latest } = options
    const dataUrl = `https://sdmx.oecd.org/public/rest/data/OECD.SDD.STES,DSD_STES@DF_CLI,4.0/${refAreaCode.toLowerCase()}.M.LI...AA...H?startPeriod=${startPeriod}&endPeriod=${endPeriod}&dimensionAtObservation=AllDimensions&detail=DataOnly&format=jsondata`
    const responseData = await oecd.getIndicatorData(dataUrl.toString())
    const rows = responseData.map(value => ({ ...value, refAreaCode }))
    if (latest) {
      console.log('latest')
      rows.splice(0, rows.length - 1)
    }
    if (upload) {
      console.log('upload')
      const result = await insertData(rows)
      console.log(result)
    } else {
      console.log(rows)
    }
  } catch (error) {
    console.log(error.message)
    throw error
  }
}

async function insertData (data) {
  try {
    const rows = data.map(convertRow)
    console.log(rows)
    if (!rows.length) {
      console.log(data)
      return
    }
    const fn = rows.map(row => Oecd.findOrCreate({
      where: {
        ref_area: row.ref_area,
        ref_area_code: row.ref_area_code,
        value: row.value,
        freq: row.freq,
        measure: row.measure,
        unit_measure: row.unit_measure,
        activity: row.activity,
        adjustment: row.adjustment,
        transformation: row.transformation,
        time_horiz: row.time_horiz,
        methodology: row.methodology,
        time_period: row.time_period
      },
      defaults: row
    }))

    const values = await Promise.all(fn)
    const createdRows = values.filter(([_, created]) => created)
    if (createdRows.length) {
      return `SUCCESS: Insert Data To Oecd - ${createdRows.length}`
    } else {
      return 'FAILED: Exist Data To Oecd'
    }
  } catch (error) {
    console.log(error.message)
    throw error
  }
}

const convertRow = row => ({
  ref_area: row.REF_AREA,
  ref_area_code: row.refAreaCode.toLowerCase(),
  value: row.value,
  freq: row.FREQ,
  measure: row.MEASURE,
  unit_measure: row.UNIT_MEASURE,
  activity: row.ACTIVITY,
  adjustment: row.ADJUSTMENT,
  transformation: row.TRANSFORMATION,
  time_horiz: row.TIME_HORIZ,
  methodology: row.METHODOLOGY,
  time_period: row.TIME_PERIOD
})

module.exports = (...args) => {
  return oecdDownload(...args).catch(error => {
    if (error) console.log(error)
    if (!process.env.EIDC_CLI_TEST) {
      process.exit(1)
    }
  })
}