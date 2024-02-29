import { Kosis } from '../model'
import { kosis } from 'eidl'
import kosisConfig from '../config/kosis'

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const getPeriodDate = ({ prdSe, startPrdDe, endPrdDe }) => {
  const startYear = startPrdDe.substring(0, 4)
  const endYear = endPrdDe.substring(0, 4)
  const strEnd = prdSe === 'M' ? '12' : '04'
  const list = []
  if (startYear === endYear) {
    list.push([startPrdDe, endPrdDe])
    return list
  }
  for (let year = startYear; year <= endYear; year ++) {
    if (year.toString() === startYear) {
      list.push([startPrdDe, `${startYear}${strEnd}`])
    } else if (year.toString() === endYear) {
      list.push([`${endYear}01`, endPrdDe])
    } else {
      list.push([`${year}01`, `${year}${strEnd}`])
    }
  }
  return list
}

export async function fetchDataAndInsertByAnnualFromKosis({
  prdSe,
  startPrdDe,
  endPrdDe
}) {
  const indicators = kosisConfig.yearly
  const fn = indicators.map(option => kosis.getIndicatorData({
    ...option,
    apiKey: process.env.KOSIS_API_KEY,
    prdSe,
    startPrdDe,
    endPrdDe
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

export async function fetchDataAndInsertByMonthlyAndQuarterlyFromKosis({
  prdSe,
  startPrdDe,
  endPrdDe
}) {
  const delayTime = 1000
  const periodOptions = getPeriodDate({ prdSe, startPrdDe, endPrdDe })
  const indicators = kosisConfig[prdSe === 'M' ? 'monthly' : 'quarterly']
  let values = []
  try {
    for (let i = 0; i < indicators.length; i ++ ) {
      const option = indicators[i]
      for (let j = 0; j < periodOptions.length; j ++ ) {
        const [startDate, endDate] = periodOptions[j]
        const data = await kosis.getIndicatorData({
          ...option,
          apiKey: process.env.KOSIS_API_KEY,
          prdSe,
          startPrdDe: startDate,
          endPrdDe: endDate
        })
        if (data.length) {
          console.log(startDate, endDate, option, data.length)
          values = values.concat(data)
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
  tbl_nm: row.TBL_NM,
  prd_de: row.PRD_DE,
  tbl_id: row.TBL_ID,
  itm_nm: row.ITM_NM,
  itm_nm_eng: row.ITM_NM_ENG,
  itm_id: row.ITM_ID,
  org_id: row.ORG_ID,
  c1_obj_nm: row.C1_OBJ_NM,
  c1_obj_nm_eng: row.C1_OBJ_NM_ENG,
  c2_obj_nm: row.C2_OBJ_NM,
  c2_obj_nm_eng: row.C2_OBJ_NM_ENG,
  c3_obj_nm: row.C3_OBJ_NM,
  c3_obj_nm_eng: row.C3_OBJ_NM_ENG,
  c4_obj_nm: row.C4_OBJ_NM,
  c4_obj_nm_eng: row.C4_OBJ_NM_ENG,
  c5_obj_nm: row.C5_OBJ_NM,
  c5_obj_nm_eng: row.C5_OBJ_NM_ENG,
  c6_obj_nm: row.C6_OBJ_NM,
  c6_obj_nm_eng: row.C6_OBJ_NM_ENG,
  c7_obj_nm: row.C7_OBJ_NM,
  c7_obj_nm_eng: row.C7_OBJ_NM_ENG,
  c8_obj_nm: row.C8_OBJ_NM,
  c8_obj_nm_eng: row.C8_OBJ_NM_ENG,
  dt: row.DT,
  prd_se: row.PRD_SE,
  c1: row.C1,
  c1_nm: row.C1_NM,
  c1_nm_eng: row.C1_NM_ENG,
  c2: row.C2,
  c2_nm: row.C2_NM,
  c2_nm_eng: row.C2_NM_ENG,
  c3: row.C3,
  c3_nm: row.C3_NM,
  c3_nm_eng: row.C3_NM_ENG,
  c4: row.C4,
  c4_nm: row.C4_NM,
  c4_nm_eng: row.C4_NM_ENG,
  c5: row.C5,
  c5_nm: row.C5_NM,
  c5_nm_eng: row.C5_NM_ENG,
  c6: row.C6,
  c6_nm: row.C6_NM,
  c6_nm_eng: row.C6_NM_ENG,
  c7: row.C7,
  c7_nm: row.C7_NM,
  c7_nm_eng: row.C7_NM_ENG,
  c8: row.C8,
  c8_nm: row.C8_NM,
  c8_nm_eng: row.C8_NM_ENG,
})

export async function importDataToKosis (data) {
  if (data.CODE) throw new Error(`${data.CODE}: ${data.MESSAGE}`)
  try {
    const rows = data.filter(value => !value.err).map(convertRow)
    if (!rows.length) return data[0].errMsg
    return await Kosis.bulkCreate(
      rows,
      { validate: true }
    )
  } catch (error) {
    console.log(error.message)
    throw error
  }
}

export async function countDataFromKosis (prdSe) {
  try {
    const { count } = await Kosis.findAndCountAll({
      where: {
        prd_se: prdSe
      }
    })
    if (count > 0) throw new Error(`[Warning] kosis rows: ${count}`)
  } catch (error) {
    console.log(error.message)
    throw error
  } 
}