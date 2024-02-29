require('dotenv').config();
const { kosis } = require('eidl')
const KOSIS_API_KEY = process.env.KOSIS_API_KEY;

/** 동행지수 순환변동치 */
const CCI = {
  orgId: '101',
  tblId: 'DT_1C8015',
  itmId: 'T1',
  objL1: 'B03'
}

/** 선행지수 순환변동치 */
const CLI = {
  orgId: '101',
  tblId: 'DT_1C8015',
  itmId: 'T1',
  objL1: 'A03'
}

/** 선행종합지수 */
const LCI = {
  orgId: '101',
  tblId: 'DT_1C8016',
  itmId: 'T1',
  objL1: 'A01'
}

/** 코스피 지수 */
const KOSPI = {
  orgId: '343',
  tblId: 'DT_343_2010_S0029',
  itmId: '13103792816T1',
  objL1: '13102792816A.01'
}

/** 월별 소비자 물가 등락률 전년동월비 (%) */
const CPI_CR_YoY = {
  orgId: '101',
  tblId: 'DT_1J22042',
  itmId: 'T03',
  objL1: '0'
}

/** 코스피 시가총액 */
const KOSPI_MarketCap = {
  orgId: '343',
  tblId: 'DT_343_2010_S0013',
  itmId: '13103792750T1',
  objL1: '13102792750A.05'
}


const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const indicators = [
  CCI,
  CLI,
  LCI,
  KOSPI,
  CPI_CR_YoY,
  KOSPI_MarketCap
]

async function fetchDataAndInsert() {
  const currentYear = 2023 // new Date().getFullYear();
  const startYear = 2023;
  const delayBetweenYears = 1000;

  for (let year = startYear; year <= currentYear; year++) {
    const startPrdDe = `${year}01`;
    const endPrdDe = `${year}01`;

    console.log(startPrdDe, endPrdDe)

    indicators.forEach(async option => {
      const data = await kosis.getIndicatorData({
        ...option,
        apiKey: KOSIS_API_KEY,
        startPrdDe,
        endPrdDe
      });
      console.log(data[0])
      // console.log(data[data.length - 1])
    })
    
    if (year < currentYear) {
      await delay(delayBetweenYears);
    }
  }
}

fetchDataAndInsert();