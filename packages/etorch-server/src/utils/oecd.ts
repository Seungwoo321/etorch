import { oecd, Oecd } from '@etorch/shared-utils'

const getPeriodDate = ({ freq, startPeriod, endPeriod }) => {
  if (freq !== 'Monthly') return []
  const startYear = startPeriod.substring(0, 4)
  const endYear = endPeriod.substring(0, 4)
  const list = []
  if (startYear === endYear) {
    list.push([startPeriod, endPeriod])
    return list
  }
  for (let year = startYear; year <= endYear; year++ ) {
    if (year.toString() === startYear) {
      list.push([startPeriod, `${startYear}-12`])
    } else if (year.toString() === endYear) {
      list.push([`${endYear}-01`, endPeriod])
    } else {
      list.push([`${year}-01`, `${year}-12`])
    }
  }
  return list
}

export async function fetchDataAndInsertMonthlyFromOecd ({
  freq,
  refAreaCode,
  startPeriod,
  endPeriod
}) {
  const periodOptions = getPeriodDate({ freq, startPeriod, endPeriod })
  const fn = periodOptions.map(([startPeriodOption, endPeriodOption]) => oecd.getIndicatorData(`https://sdmx.oecd.org/public/rest/data/OECD.SDD.STES,DSD_STES@DF_CLI,4.0/${refAreaCode.toLowerCase()}.M.LI...AA...H?startPeriod=${startPeriodOption}&endPeriod=${endPeriodOption}&dimensionAtObservation=AllDimensions&detail=DataOnly&format=jsondata`))
  try {
    const values = await Promise.all(fn)
    return values.reduce((acc, cur) => {
      return acc.concat(cur.map((v => ({ ...v, refAreaCode }))))
    }, [])
  } catch (error) {
    console.log(new Date().toLocaleString('ko-KR', { timeZone: 'Asia/Seoul' }), error.message)
    // throw error
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

export async function importDataToOecd (data) {
  if (!data) throw new Error('No data')
  try {
    const rows = data.map(convertRow)
    return await Oecd.bulkCreate(
      rows,
      { validate: true }
    )
  } catch (error) {
    console.log(new Date().toLocaleString('ko-KR', { timeZone: 'Asia/Seoul' }), error.message)
    throw error
  }
}

export async function countDataFromOecd (freq, refAreaCode) {
  try {
    const { count } = await Oecd.findAndCountAll({
      where: {
        freq,
        ref_area_code: refAreaCode
      }
    })
    if (count > 0) throw new Error(`[Warning] oecd rows: ${count}`)
  } catch (error) {
    console.log(new Date().toLocaleString('ko-KR', { timeZone: 'Asia/Seoul' }), error.message)
    throw error
  }
}