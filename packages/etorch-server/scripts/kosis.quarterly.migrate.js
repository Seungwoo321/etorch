require('dotenv').config();
const { kosis } = require('eidl')
const KOSIS_API_KEY = process.env.KOSIS_API_KEY;

/** 경제 성장률(GDP)(실질, 계절조정, 전기비) */
const RGDP_QoQ_SA = {
  orgId: '301',
  tblId: 'DT_200Y002',
  itmId: '13103134475999',
  objL1: '13102134475ACC_ITEM.10111'
}

/** 경제 성장률(GDP)(실질, 원계열, 전년동기비) */
const RGDP_YoY_V = {
  orgId: '301',
  tblId: 'DT_200Y002',
  itmId: '13103134475999',
  objL1: '13102134475ACC_ITEM.10211'
}

/** GDP 디플레이터 등락률 (원계열, 전년동기비) */
const GDPD_CR_YoY_V = {
  orgId: '301',
  tblId: 'DT_200Y002',
  itmId: '13103134475999',
  objL1: '13102134475ACC_ITEM.301'
}


const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const indicators = [
  RGDP_QoQ_SA,
  RGDP_YoY_V,
  GDPD_CR_YoY_V
]

async function fetchDataAndInsert() {
  const currentYear = new Date().getFullYear();
  const startYear = 2023;
  const delayBetweenYears = 1000;

  for (let year = startYear; year <= currentYear; year++) {
    const startPrdDe = `${year}01`;
    const endPrdDe = `${year}04`;
    
    console.log(startPrdDe, endPrdDe)

    indicators.forEach(async option => {
      const data = await kosis.getIndicatorData({
        ...option,
        apiKey: KOSIS_API_KEY,
        prdSe: 'Q',
        startPrdDe,
        endPrdDe
      });
      console.log(data[0])
      console.log(data[data.length - 1])
    })
    
    if (year < currentYear) {
      await delay(delayBetweenYears);
    }
  }
}

fetchDataAndInsert();