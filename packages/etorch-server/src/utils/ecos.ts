import { Ecos, ecos } from '@etorch/shared-utils'
import EcosConfig from '../config/ecos'

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const getPeriodDate = ({ period, searchStartDate, searchEndDate }) => {
  const startYear = searchStartDate.substring(0, 4)
  const endYear = searchEndDate.substring(0, 4)
  const strStart = period === 'D' ? '0101' : (period === 'M' ? '01' : 'Q1')
  const strEnd = period === 'D' ? '1231' : (period === 'M' ? '12' : 'Q4')
  const endCount = period === 'D' ? 365 : (period === 'M' ? 12 : 4)
  const list = []
  if (startYear === endYear) {
    list.push([searchStartDate, searchEndDate, endCount])
    return list
  }
  for (let year = startYear; year <= endYear; year ++) {
    if (year.toString() === startYear) {
      list.push([searchStartDate, `${startYear}${strEnd}`, endCount])
    } else if (year.toString() === endYear) {
      list.push([`${endYear}${strStart}`, searchEndDate, endCount])
    } else {
      list.push([`${year}${strStart}`, `${year}${strEnd}`, endCount])
    }
  }
  return list
}

export async function fetchDataAndInsertByAnnualFromEcos ({
  period,
  searchStartDate,
  searchEndDate
}) {
  const indicators = EcosConfig.yearly
  const endCount = (Number(searchEndDate) - Number(searchStartDate)).toString()
  const fn = indicators.map(option => ecos.getIndicatorData({
    ...option,
    apiKey: process.env.ECOS_API_KEY,
    searchStartDate,
    searchEndDate,
    period,
    endCount
  }))
  try {
    const values = await Promise.all(fn)
    return values.reduce((acc, cur) => {
      return acc.concat(cur)
    }, [])
  } catch (error) {
    console.log(error.message)
    throw error
  }
}

export async function fetchDataAndInsertByDailyAndMonthlyAndQuarterlyFromEcos ({
  period,
  searchStartDate,
  searchEndDate
}) {
  try {
    const delayTime = 1000
    const periodOptions = getPeriodDate({ period, searchStartDate, searchEndDate })
    const indicators = EcosConfig[period === 'D' ? 'daily' : (period === 'M' ? 'monthly' : 'quarterly')]
    let values = []
    for (let i = 0; i < indicators.length; i ++) {
      const option = indicators[i]
      for (let j = 0; j < periodOptions.length; j ++) {
        const [startDate, endDate, endCount] = periodOptions[j]
        const data = await ecos.getIndicatorData({
          ...option,
          apiKey: process.env.ECOS_API_KEY,
          period,
          searchStartDate: startDate,
          searchEndDate: endDate,
          endCount
        })
        if (data.length) {
          console.log(startDate, endDate, option, data.length)
          values = values.concat(data.map(value => ({ ...value, period })))
        }
        if (i < indicators.length && j < periodOptions.length) {
          await delay(delayTime);
        }
      }
    }
    return values
  } catch (error) {
    console.log(error.message)
    throw error
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

export async function importDataToEcos (data) {
  if (data.CODE) throw new Error(`${data.CODE}: ${data.MESSAGE}`)
  try {
    const rows = data.filter(value => !value.err).map(convertRow)
    if (!rows.length) return data[0].errMsg
    return await Ecos.bulkCreate(
      rows,
      { validate: true }
    )
  } catch (error) {
    console.log(error.message)
    throw error
  }
}

export async function countDataFromEcos (period) {
  try {
    const { count } = await Ecos.findAndCountAll({
      where: {
        period
      }
    })
    if (count > 0) throw new Error(`[Warning] ecos rows: ${count}`)
  } catch (error) {
    console.log(error.message)
    throw error
  } 
}