#/bin/sh

CURRENT_YEAR=`TZ=KST date '+%Y'`
CURRENT_MONTH=`TZ=KST date '+%m'`
CURRENT_DATE=`TZ=KST date '+%d'`

# Database config
export MARIADB_HOST=localhost
export MARIADB_DATABASE=etorch
export MARIADB_USERNAME=etorch
export MARIADB_PASSWORD=etorch
export MARIADB_PORT=3306

echo $CURRENT_YEAR 
echo $CURRENT_MONTH
echo $CURRENT_DATE


# KOSIS

# # 동행지수 순환변동치 
# eidc kosis --orgId "101" --tblId "DT_1C8015" --itmId "T1" --objL1 "B03" --latest-date --upload 

# # 선행지수 순환변동치
# eidc kosis --orgId "101" --tblId "DT_1C8015" --itmId "T1" --objL1 "A03" --latest-date --upload

# # 선행종합지수
# eidc kosis --orgId "101" --tblId "DT_1C8016" --itmId "T1" --objL1 "A01" --latest-date --upload

# # 코스피 지수
# eidc kosis --orgId "343" --tblId "DT_343_2010_S0029" --itmId "13103792816T1" --objL1 "13102792816A.01" --latest-date --upload

# # 월별 소비자 물가 등락률 전년동월비 (%)
# eidc kosis --orgId "101" --tblId "DT_1J22042" --itmId "T03" --objL1 "0" --latest-date --upload

# # KOSPI_MarketCap
# eidc kosis --orgId "343" --tblId "DT_343_2010_S0013" --itmId "13103792750T1" --objL1 "13102792750A.05" --latest-date --upload


# ECOS

# # 시장금리 국고채 (1년) 월별
# eidc ecos --statCode "721Y001" --itemCode1 "5030000" --period "M" --searchStartDate "202401" --searchEndDate "202402"

# # 시장금리 국고채 (3년) 월별
# eidc ecos --statCode "721Y001" --itemCode1 "5020000" --period "M" --searchStartDate "202401" --searchEndDate "202402"

# # 시장금리 국고채 (10년) 월별
# eidc ecos --statCode "721Y001" --itemCode1 "5050000" --period "M" --searchStartDate "202401" --searchEndDate "202402"

# # 회사채수익률 (AA-) 월
# eidc ecos --statCode "721Y001" --itemCode1 "7020000" --period "M" --searchStartDate "202401" --searchEndDate "202402"