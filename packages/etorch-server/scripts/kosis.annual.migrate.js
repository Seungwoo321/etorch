require('dotenv').config();
const { kosis } = require('eidl')
const KOSIS_API_KEY = process.env.KOSIS_API_KEY;

/** 국내총생산(명목,원화표시) (십억원) */
const NGDP_KRW = {
  orgId: '301',
  tblId: 'DT_200Y001',
  itmId: '13103134474999',
  objL1: '13102134474ACC_ITEM.10101'
}

/** 국내총생산(명목,달러표시) (억달러) */
const NGDP_USD = {
  orgId: '301',
  tblId: 'DT_200Y001',
  itmId: '13103134474999',
  objL1: '13102134474ACC_ITEM.1010101'
}

/** 경제 성장률 (실질)(%) */
const GDP_RGR = {
  orgId: '301',
  tblId: 'DT_200Y001',
  itmId: '13103134474999',
  objL1: '13102134474ACC_ITEM.20101'
}

/** GDP 디플레이터 (2015=100)  */
const GDPD_B2015 = {
  orgId: '301',
  tblId: 'DT_200Y001',
  itmId: '13103134474999',
  objL1: '13102134474ACC_ITEM.90103'
}

/** GDP 디플레이터 (2015=100) (등락률) (%) */
const GDPD_B2015_CR = {
  orgId: '301',
  tblId: 'DT_200Y001',
  itmId: '13103134474999',
  objL1: '13102134474ACC_ITEM.9010301'
}

// const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const indicators = [
  NGDP_KRW,
  NGDP_USD,
  GDP_RGR,
  GDPD_B2015,
  GDPD_B2015_CR
]

async function fetchDataAndInsert() {
  const startPrdDe = '1960';
  const endPrdDe = new Date().getFullYear().toString();
  const fn = indicators.map(option => kosis.getIndicatorData({
    ...option,
    apiKey: KOSIS_API_KEY,
    prdSe: 'A',
    startPrdDe,
    endPrdDe
  }))
  try {
    const values = await Promise.all(fn)
    console.log(values)
  } catch (error) {
    console.log(error)
  }
}

fetchDataAndInsert();