import Router from '@koa/router'
import {
  fetchDataAndInsertByAnnualFromKosis,
  fetchDataAndInsertByMonthlyAndQuarterlyFromKosis,
  importDataToKosis,
  countDataFromKosis
} from '../utils/kosis'
import {
  fetchDataAndInsertByAnnualFromEcos,
  fetchDataAndInsertByDailyAndMonthlyAndQuarterlyFromEcos,
  importDataToEcos,
  countDataFromEcos
} from '../utils/ecos'
import {
  countDataFromOecd,
  fetchDataAndInsertMonthlyFromOecd,
  importDataToOecd
} from '../utils/oecd'
const router = new Router();

router.get('/kosis/annual/:startPrdDe/:endPrdDe', async ctx => {
  const prdSe = 'A'
  try {
    await countDataFromKosis(prdSe)
    const data = await fetchDataAndInsertByAnnualFromKosis({
      prdSe,
      ...ctx.params
    })
    const result = await importDataToKosis(data)
    ctx.body = result
  } catch (error) {
    ctx.body = error.message
  }
})

router.get('/kosis/quarterly/:startPrdDe/:endPrdDe', async ctx => {
  const prdSe = 'Q'
  try {
    await countDataFromKosis(prdSe)
    const data = await fetchDataAndInsertByMonthlyAndQuarterlyFromKosis({
      prdSe,
      ...ctx.params
    })
    const result = await importDataToKosis(data)
    ctx.body = result
  } catch (error) {
    ctx.body = error.message
  }  
})

router.get('/kosis/monthly/:startPrdDe/:endPrdDe', async ctx => {
  const prdSe = 'M'
  try {
    await countDataFromKosis(prdSe)
    const data = await fetchDataAndInsertByMonthlyAndQuarterlyFromKosis({
      prdSe,
      ...ctx.params
    })
    const result = await importDataToKosis(data)
    ctx.body = result
  } catch (error) {
    ctx.body = error.message
  }
})

router.get('/ecos/annual/:searchStartDate/:searchEndDate', async ctx => {
  const period = 'A'
  try {
    await countDataFromEcos(period)
    const data = await fetchDataAndInsertByAnnualFromEcos({
      period,
      ...ctx.params
    })
    const result = await importDataToEcos(data)
    ctx.body = result
  } catch (error) {
    ctx.body = error.message
  }
})

router.get('/ecos/quarterly/:searchStartDate/:searchEndDate', async ctx => {
  const period = 'Q'
  try {
    await countDataFromEcos(period)
    const data = await fetchDataAndInsertByDailyAndMonthlyAndQuarterlyFromEcos({
      period,
      ...ctx.params
    })
    const result = await importDataToEcos(data)
    ctx.body = result  
  } catch (error) {
    ctx.body = error.message
  }  
})

router.get('/ecos/monthly/:searchStartDate/:searchEndDate', async ctx => {
  const period = 'M'
  try {
    await countDataFromEcos(period)
    const data = await fetchDataAndInsertByDailyAndMonthlyAndQuarterlyFromEcos({
      period,
      ...ctx.params
    })
    const result = await importDataToEcos(data)
    ctx.body = result
  } catch (error) {
    ctx.body = error.message
  }
})

router.get('/ecos/daily/:searchStartDate/:searchEndDate', async ctx => {
  const period = 'D'
  try {
    await countDataFromEcos(period)
    const data = await fetchDataAndInsertByDailyAndMonthlyAndQuarterlyFromEcos({
      period,
      ...ctx.params
    })
    const result = await importDataToEcos(data)
    ctx.body = result
  } catch (error) {
    ctx.body = error.message
  }
})

router.get('/oecd/cli/:refAreaCode/:startPeriod/:endPeriod', async ctx => {
  const freq = 'Monthly'
  try {
    await countDataFromOecd(freq, ctx.params.refAreaCode)
    const data = await fetchDataAndInsertMonthlyFromOecd({
      freq,
      ...ctx.params
    })
    const result = await importDataToOecd(data)
    ctx.body = result
  } catch (error) {
    ctx.body = error.message
  }
})

module.exports = router