/**
 * MONHTLY
 */

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

/**
 *  ANNUAL
 */

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

/**
 * QUARTERLY
 */

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

const config = {
  yearly: [
    NGDP_KRW,
    NGDP_USD,
    GDP_RGR,
    GDPD_B2015,
    GDPD_B2015_CR
  ],
  monthly: [
    CCI,
    CLI,
    LCI,
    KOSPI,
    CPI_CR_YoY,
    KOSPI_MarketCap
  ],
  quarterly: [
    RGDP_QoQ_SA,
    RGDP_YoY_V,
    GDPD_CR_YoY_V
  ]
}

export default config