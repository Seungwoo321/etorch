#/bin/sh

# Database config
export MARIADB_HOST=localhost
export MARIADB_DATABASE=etorch
export MARIADB_USERNAME=etorch
export MARIADB_PASSWORD=etorch
export MARIADB_PORT=3306

# Kosis

# 국내총생산(명목,원화표시) (십억원)
eidc kosis --orgId "301" --tblId "DT_200Y001" --itmId "13103134474999" --objL1 "13102134474ACC_ITEM.10101" --prdSe "A" --upload --next

# 국내총생산(명목,달러표시) (억달러)
eidc kosis --orgId "301" --tblId "DT_200Y001" --itmId "13103134474999" --objL1 "13102134474ACC_ITEM.1010101" --prdSe "A" --upload --next

# 경제 성장률 (실질)(%)
eidc kosis --orgId "301" --tblId "DT_200Y001" --itmId "13103134474999" --objL1 "13102134474ACC_ITEM.20101" --prdSe "A" --upload --next

# GDP 디플레이터 (2015=100)
eidc kosis --orgId "301" --tblId "DT_200Y001" --itmId "13103134474999" --objL1 "13102134474ACC_ITEM.90103" --prdSe "A" --upload --next

# GDP 디플레이터 (2015=100) (등락률) (%)
eidc kosis --orgId "301" --tblId "DT_200Y001" --itmId "13103134474999" --objL1 "13102134474ACC_ITEM.9010301" --prdSe "A" --upload --next

# Ecos

# 시장금리 국고채 (1년)
eidc ecos --statCode "721Y001" --itemCode1 "5030000" --period "A" --upload --next

# 시장금리 국고채 (3년)
eidc ecos --statCode "721Y001" --itemCode1 "5020000" --period "A" --upload --next

# 시장금리 국고채 (10년)
eidc ecos --statCode "721Y001" --itemCode1 "5050000" --period "A" --upload --next

# 회사채수익률 (AA-)
eidc ecos --statCode "721Y001" --itemCode1 "7020000" --period "A" --upload --next

# GDP 디플레이터(2015=100)
eidc ecos --statCode "200Y011" --itemCode1 "1400" --period "A" --upload --next

# GDP 디플레이터(2015=100) 등락률(%)
eidc ecos --statCode "200Y001" --itemCode1 "9010301" --period "A" --upload --next

# 국내총생산(GDP)(명목, 원화표시)(십억원)
eidc ecos --statCode "200Y001" --itemCode1 "10101" --period "A" --upload --next

# 국내총생산(GDP)(명목, 달러표시)(억달러)
eidc ecos --statCode "200Y001" --itemCode1 "1010101" --period "A" --upload --next

# 경제성장률(실질성장률)(%) 
eidc ecos --statCode "200Y001" --itemCode1 "20101" --period "A" --upload --next