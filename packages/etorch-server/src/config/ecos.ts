/**
 * 월
 */

/** 원/미국달러(매매기준율)(월별) */
const KRW_USD_M = {
  statCode: '731Y004',
  itemCode1: '0000001',
  itemCode2: '0000200'
}
/** 원/위안(매매기준율)(월별) */
const KRW_CNY_M = {
  statCode: '731Y004',
  itemCode1: '0000053',
  itemCode2: '0000200'
}
/** 원/일본엔(100엔)(월별) */
const KRW_JPY_M = {
  statCode: '731Y004',
  itemCode1: '0000002',
  itemCode2: '0000200'
}
/** 원유-WTI */
const CrudeOil = {
  statCode: '902Y003',
  itemCode1: '010101'
}
/** 장기금리(IRLT) */
const IRLT = {
  statCode: '902Y023',
  itemCode1: 'IRLT'
}
/** 단기금리(IR3TIP) */
const IR3TIP = {
  statCode: '902Y023',
  itemCode1: 'IR3TIB'
}

/** M2(평잔, 원계열) */
const M2_AVG_V = {
  statCode: '101Y004',
  itemCode1: 'BBHA00'
}
/** 현금통화(단기부동자금) */
const CURRENCY = {
  statCode: '101Y004',
  itemCode1: 'BBHA01'
}
/** 요구불예금(단기부동자금) */
const DEMAND_DEPOSITS = {
  statCode: '101Y004',
  itemCode1: 'BBHA02'
}
/** 수시입출식저축성예금(단기부동자금) */
const SAVINGS_ACCOUNT_DEPOSITS = {
  statCode: '101Y004',
  itemCode1: 'BBHA03'
}
/** MMF(단기부동자금) */
const MMF = {
  statCode: '101Y004',
  itemCode1: 'BBHA04'
}
/** 양도서예금증서(단기부동자금) */
const NCD = {
  statCode: '101Y004',
  itemCode1: 'BBHA06'
}
/** CMA(단기부동자금) */
const CMA = {
  statCode: '101Y004',
  itemCode1: 'BBHA08'
}
/** 환매조건부채권매도(단기부동자금) */
const REPO = {
  statCode: '101Y004',
  itemCode1: 'BBHA15'
}
/** Lf */
const Lf = {
  statCode: '101Y004',
  itemCode1: 'LA00000'
}

/**
 * 일
 */

/** 시장금리 국고채 (1년) */
const Bond_Yield_1yr_D = {
  statCode: '817Y002',
  itemCode1: '010190000',
}
/** 시장금리 국고채 (3년) */
const Bond_Yield_3yr_D = {
  statCode: '817Y002',
  itemCode1: '010200000',
}
/** 장금리 국고채 (10년) */
const Bond_Yield_10yr_D = {
  statCode: '817Y002',
  itemCode1: '010210000',
}
/** 원/미국달러(매매기준율)(일별) */
const KRW_USD_D = {
  statCode: '731Y001',
  itemCode1: '0000001'
}
/** 원/위안(매매기준율)(일별) */
const KRW_CNY_D = {
  statCode: '731Y001',
  itemCode1: '0000053'
}
/** 원/일본엔(100엔)(일별) */
const KRW_JPY_D = {
  statCode: '731Y001',
  itemCode1: '0000002'
}

/**
 * 월, 분기, 년 
 */

/** 시장금리 국고채 (1년) */
const Bond_Yield_1yr = {
  statCode: '721Y001',
  itemCode1: '5030000',
}
/** 시장금리 국고채 (3년) */
const Bond_Yield_3yr = {
  statCode: '721Y001',
  itemCode1: '5020000',
}
/** 장금리 국고채 (10년) */
const Bond_Yield_10yr = {
  statCode: '721Y001',
  itemCode1: '5050000',
}
/** 회사채수익률 (AA-) */
const C_Bond_Yield_AA_ = {
  statCode: '721Y001',
  itemCode1: '7020000',
}

/**
 * 
 * 월, 일
 */

/** 한국은행 기준금리 */
const BOK_RATE = {
  statCode: '722Y001',
  itemCode1: '0101000' 
}

/**
 * 분기
 */

/** 국내총생산(GDP)(계절조정, 명목)  */
const NGDP_SA = {
  statCode: '200Y003',
  itemCode1: '1400' 
}

/** 국내총생산(GDP)(계절조정, 실질)  */
const RGDP_SA = {
  statCode: '200Y004',
  itemCode1: '1400' 
}

/** 국내총생산(GDP)(원계열, 명목) */
const NGDP_V = {
  statCode: '200Y005',
  itemCode1: '1400'
}

/** 국내총생산(GDP)(원계열, 실질) */
const RDGP_V = {
  statCode: '200Y006',
  itemCode1: '1400'
}

/** GDP 디플레이터 (2015=100) */
const GDPD_B2015 = {
  statCode: '200Y011',
  itemCode1: '1400'
}

/** 경제성장률(GDP)(실질, 계절조정, 전기비) */
const RGDP_QoQ_SA = {
  statCode: '200Y002',
  itemCode1: '10111'
}

/** 경제성장률(GDP)(실질, 원계열, 전년동기비) */
const RGDP_YoY_V = {
  statCode: '200Y002',
  itemCode1: '10211'
}

/** GDP 디플레이터 등락률(원계열, 전년동기비) */
const GDPD_CR_YoY_V = {
  statCode: '200Y002',
  itemCode1: '301'
}

/**
 * 연간
 */
// GDPD_B2015

const GDPD_B2015_CR = {
  statCode: '200Y001',
  itemCode1: '9010301'
}

const NGDP_KRW = {
  statCode: '200Y001',
  itemCode1: '10101'
}

const NGDP_USD = {
  statCode: '200Y001',
  itemCode1: '1010101'
}

const GDP_RGR = {
  statCode: '200Y001',
  itemCode1: '20101'
}

const config = {
  daily: [
    Bond_Yield_1yr_D,
    Bond_Yield_3yr_D,
    Bond_Yield_10yr_D,
    BOK_RATE,
    KRW_USD_D,
    KRW_CNY_D,
    KRW_JPY_D
  ],
  yearly: [
    Bond_Yield_1yr,
    Bond_Yield_3yr,
    Bond_Yield_10yr,
    C_Bond_Yield_AA_,
    GDPD_B2015,
    GDPD_B2015_CR,
    NGDP_KRW,
    NGDP_USD,
    GDP_RGR
  ],
  monthly: [
    Bond_Yield_1yr,
    Bond_Yield_3yr,
    Bond_Yield_10yr,
    C_Bond_Yield_AA_,
    BOK_RATE,
    KRW_USD_M,
    KRW_CNY_M,
    KRW_JPY_M,
    CrudeOil,
    IRLT,
    IR3TIP,
    M2_AVG_V,
    CURRENCY,
    DEMAND_DEPOSITS,
    SAVINGS_ACCOUNT_DEPOSITS,
    MMF,
    NCD,
    CMA,
    REPO,
    Lf
  ],
  quarterly: [
    Bond_Yield_1yr,
    Bond_Yield_3yr,
    Bond_Yield_10yr,
    C_Bond_Yield_AA_,
    NGDP_SA,
    RGDP_SA,
    NGDP_V,
    RDGP_V,
    GDPD_B2015,
    RGDP_QoQ_SA,
    RGDP_YoY_V,
    GDPD_CR_YoY_V
  ]
}

export default config