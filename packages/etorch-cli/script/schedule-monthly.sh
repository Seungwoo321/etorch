#/bin/sh

# Database config
export MARIADB_HOST=localhost
export MARIADB_DATABASE=etorch
export MARIADB_USERNAME=etorch
export MARIADB_PASSWORD=etorch
export MARIADB_PORT=3306

# KOSIS

# 동행지수 순환변동치 
eidc kosis --orgId "101" --tblId "DT_1C8015" --itmId "T1" --objL1 "B03" --upload --next
# 선행지수 순환변동치
eidc kosis --orgId "101" --tblId "DT_1C8015" --itmId "T1" --objL1 "A03" --upload --next
# 선행종합지수
eidc kosis --orgId "101" --tblId "DT_1C8016" --itmId "T1" --objL1 "A01" --upload --next
# 코스피 지수
eidc kosis --orgId "343" --tblId "DT_343_2010_S0029" --itmId "13103792816T1" --objL1 "13102792816A.01" --upload --next
# 월별 소비자 물가 등락률 전년동월비 (%)
eidc kosis --orgId "101" --tblId "DT_1J22042" --itmId "T03" --objL1 "0" --upload --next
# KOSPI_MarketCap
eidc kosis --orgId "343" --tblId "DT_343_2010_S0013" --itmId "13103792750T1" --objL1 "13102792750A.05" --upload --next

# ECOS
# 시장금리 국고채 (1년) 월별
eidc ecos --statCode "721Y001" --itemCode1 "5030000" --period "M" --upload --next
# 시장금리 국고채 (3년) 월별
eidc ecos --statCode "721Y001" --itemCode1 "5020000" --period "M" --upload --next
# 시장금리 국고채 (10년) 월별
eidc ecos --statCode "721Y001" --itemCode1 "5050000" --period "M" --upload --next
# 회사채수익률 (AA-) 월별
eidc ecos --statCode "721Y001" --itemCode1 "7020000" --period "M" --upload --next
# 한국은행 기준금리
eidc ecos --statCode "722Y001" --itemCode1 "0101000" --period "M" --upload --next
# 원/미국달러(매매기준율)(월별)
eidc ecos --statCode "731Y004" --itemCode1 "0000001" --period "M" --upload --next
# 원/위안(매매기준율)(월별)
eidc ecos --statCode "731Y004" --itemCode1 "0000053" --period "M" --upload --next
# 원/일본엔(100엔)(월별)
eidc ecos --statCode "731Y004" --itemCode1 "0000002" --period "M" --upload --next
# 원유-WTI
eidc ecos --statCode "902Y003" --itemCode1 "010101" --period "M" --upload --next
# 장기금리(IRLT)
eidc ecos --statCode "902Y023" --itemCode1 "IRLT" --period "M" --itemCode2 "KOR" --upload --next
# 단기금리(IR3TIP)
eidc ecos --statCode "902Y023" --itemCode1 "IR3TIB" --period "M" --itemCode2 "KOR" --upload --next
# 미국 주가지수
eidc ecos --statCode "902Y002" --itemCode1 "USA" --period "M" 
# M2(평잔, 원계열)
eidc ecos --statCode "101Y004" --itemCode1 "BBHA00" --period "M" --upload --next
# 현금통화(단기부동자금)
eidc ecos --statCode "101Y004" --itemCode1 "BBHA01" --period "M" --upload --next
# 요구불예금(단기부동자금)
eidc ecos --statCode "101Y004" --itemCode1 "BBHA02" --period "M" --upload --next
# 수시입출식저축성예금(단기부동자금)
eidc ecos --statCode "101Y004" --itemCode1 "BBHA03" --period "M" --upload --next
# MMF(단기부동자금)
eidc ecos --statCode "101Y004" --itemCode1 "BBHA04" --period "M" --upload --next
# 양도서예금증서(단기부동자금)
eidc ecos --statCode "101Y004" --itemCode1 "BBHA06" --period "M" --upload --next
# CMA(단기부동자금)
eidc ecos --statCode "101Y004" --itemCode1 "BBHA08" --period "M" --upload --next
# 환매조건부채권매도(단기부동자금)
eidc ecos --statCode "101Y004" --itemCode1 "BBHA15" --period "M" --upload --next
# Lf
eidc ecos --statCode "111Y004" --itemCode1 "LA00000" --period "M" --upload --next
