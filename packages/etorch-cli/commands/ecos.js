const GeneratorAPI = require('../util/GeneratorAPI')
const { ecos, Ecos } = require('@etorch/shared-utils')
const moment = require('moment')

async function ecosDownload(options) {
  try {
    const generator = new GeneratorAPI()
    const apiKey = await generator.getData('ecos')
    const { period, latest, upload, next, searchStartDate, searchEndDate } = options
    let lastPeriod = [searchStartDate, searchEndDate]
    if (next) {
      lastPeriod = await findNextPeriod(options)
      console.log('lastPeriod', lastPeriod)
    }
    const responseData = await ecos.getIndicatorData({
      apiKey,
      ...options,
      searchStartDate: lastPeriod[0],
      searchEndDate: lastPeriod[1]
    })
    const rows = responseData.map(value => ({ ...value, period }))
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
    console.log(new Date().toLocaleString('ko-KR', { timeZone: 'Asia/Seoul' }), error.message)
    // throw error
  }
}

async function findNextPeriod (options) {
  const data = await Ecos.findOne({
    where: {
      stat_code: options.statCode,
      period: options.period,
      item_code1: options.itemCode1,
      item_code2: options.itemCode2 || null,
      item_code3: options.itemCode3 || null,
      item_code4: options.itemCode4 || null
    },
    order: [
      ['time', 'DESC']
    ]
  })
  if (data === null) {
    console.log('Not found!')
    return null
  } else {
    const dateString = data.get('time')
    const period = options.period
    let dateObj = moment(dateString, ["YYYY", "YYYYMM", "YYYYQ", "YYYYMMDD"], true);
    if (dateObj.isValid()) {
      if (period === 'Q') {
          dateObj = dateObj.add(1, 'Q').format('YYYYQ');
      } else if (period === 'M') {
          dateObj = dateObj.add(1, 'M').format('YYYYMM');
      } else if (period === 'D') {
          dateObj = dateObj.add(1, 'd').format('YYYYMMDD');
      } else {
          dateObj = dateObj.add(1, 'y').format('YYYY');
      }
      return [dateObj, dateObj]
    } else {
      console.log("Invalid date format");
      return null
    }
  }
}

async function insertData (data) {
  if (data.CODE) throw new Error(`${data.CODE}: ${data.MESSAGE}`)
  try {
    const rows = data.filter(value => !value.err).map(convertRow)
    const fn = rows.map(row => Ecos.findOrCreate({
      where: {
        stat_code: row.stat_code,
        item_code1: row.item_code1,
        item_code2: row.item_code2,
        item_code3: row.item_code3,
        item_code4: row.item_code4,
        wgt: row.wgt,
        time: row.time,
        data_value: row.data_value,
        period: row.period
      },
      defaults: row
    }))

    const values = await Promise.all(fn)
    const createdRows = values.filter(([_, created]) => created)
    if (createdRows.length) {
      return `SUCCESS: Insert Data To Ecos - ${createdRows.length}`
    } else {
      return 'FAILED: Exist Data To Ecos'
    }
  } catch (error) {
    console.log(new Date().toLocaleString('ko-KR', { timeZone: 'Asia/Seoul' }), error.message)
    // throw error
  }
}
const convertRow = row => ({
  stat_code: row.STAT_CODE,
  stat_name: row.STAT_NAME,
  item_code1: row.ITEM_CODE1,
  item_name1: row.ITEM_NAME1,
  item_code2: row.ITEM_CODE2,
  item_name2: row.ITEM_NAME2,
  item_code3: row.ITEM_CODE3,
  item_name3: row.ITEM_NAME3,
  item_code4: row.ITEM_CODE4,
  item_name4: row.ITEM_NAME4,
  unit_name: row.UNIT_NAME,
  wgt: row.WGT,
  time: row.TIME,
  data_value: row.DATA_VALUE,
  period: row.period
})

module.exports = (...args) => {
  return ecosDownload(...args).catch(error => {
    if (error) console.log(error)
    if (!process.env.EIDC_CLI_TEST) {
      process.exit(1)
    }
  })
}