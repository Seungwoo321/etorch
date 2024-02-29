const GeneratorAPI = require('../util/GeneratorAPI')
const { kosis } = require('eidl')
const { Kosis } = require('../model')
async function kosisDownload(options) {
  try {
    const generator = new GeneratorAPI()
    const apiKey = await generator.getData('kosis')
    const fn = options.dateRange ? kosis.getIndicatorData : kosis.getIndicatorLatestData
    const rows = await fn({
      apiKey,
      ...options
    })
    if (options.latest) {
      console.log('latest')
      rows.splice(0, rows.length - 1)
    }
    if (options.upload) {
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
  if (data.CODE) throw new Error(`${data.CODE}: ${data.MESSAGE}`)
  try {
    const rows = data.map(convertRow)
    const fn = rows.map(row => Kosis.findOrCreate({
      where: {
        prd_de: row.prd_de,
        tbl_id: row.tbl_id,
        itm_id: row.itm_id,
        org_id: row.org_id,
        dt: row.dt,
        prd_se: row.prd_se,
        c1: row.c1,
        c2: row.c2 ?? null,
        c3: row.c3 ?? null,
        c4: row.c4 ?? null,
        c5: row.c5 ?? null,
        c6: row.c6 ?? null,
        c7: row.c7 ?? null,
        c8: row.c8 ?? null
      },
      defaults: row
    }))

    const values = await Promise.all(fn)
    const createdRows = values.filter(([_, created]) => created)
    if (createdRows.length) {
      return `SUCCESS: Insert Data To Kosis - ${createdRows.length}`
    } else {
      return 'FAILED: Exist Data To Kosis'
    }
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
module.exports = (...args) => {
  return kosisDownload(...args).catch(error => {
    if (error) console.log(error)
    if (!process.env.EIDC_CLI_TEST) {
        process.exit(1)
    }
  })
}