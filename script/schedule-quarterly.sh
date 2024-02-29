#/bin/sh

# Database config
export MARIADB_HOST=localhost
export MARIADB_DATABASE=etorch
export MARIADB_USERNAME=etorch
export MARIADB_PASSWORD=etorch
export MARIADB_PORT=3306

# Kosis

# 경제 성장률(GDP)(실질, 계절조정, 전기비)
eidc kosis --orgId "301" --tblId "DT_200Y002" --itmId "13103134475999" --objL1 "13102134475ACC_ITEM.10111" --upload --next

# 경제 성장률(GDP)(실질, 원계열, 전년동기비)
eidc kosis --orgId "301" --tblId "DT_200Y002" --itmId "13103134475999" --objL1 "13102134475ACC_ITEM.10211" --upload --next

# GDP 디플레이터 등락률 (원계열, 전년동기비)
eidc kosis --orgId "301" --tblId "DT_200Y002" --itmId "13103134475999" --objL1 "13102134475ACC_ITEM.301" --upload --next

# Ecos

# 시장금리 국고채 (1년)
eidc ecos --statCode "721Y001" --itemCode1 "5030000" --period "Q" --upload --next

# 시장금리 국고채 (3년)
eidc ecos --statCode "721Y001" --itemCode1 "5020000" --period "Q" --upload --next

# 시장금리 국고채 (10년)
eidc ecos --statCode "721Y001" --itemCode1 "5050000" --period "Q" --upload --next

# 회사채수익률 (AA-)
eidc ecos --statCode "721Y001" --itemCode1 "7020000" --period "Q" --upload --next

# 국내총생산(GDP)(계절조정, 명목) 
eidc ecos --statCode "200Y003" --itemCode1 "1400" --period "Q" --upload --next

# 국내총생산(GDP)(계절조정, 실질) 
eidc ecos --statCode "200Y004" --itemCode1 "1400" --period "Q" --upload --next

# 국내총생산(GDP)(원계열, 명목)
eidc ecos --statCode "200Y005" --itemCode1 "1400" --period "Q" --upload --next

# 국내총생산(GDP)(원계열, 실질)
eidc ecos --statCode "200Y006" --itemCode1 "1400" --period "Q" --upload --next

# GDP 디플레이터 (2015=100)
eidc ecos --statCode "200Y011" --itemCode1 "1400" --period "Q" --upload --next

# 경제성장률(GDP)(실질, 계절조정, 전기비)
eidc ecos --statCode "200Y002" --itemCode1 "10111" --period "Q" --upload --next

# 경제성장률(GDP)(실질, 원계열, 전년동기비)
eidc ecos --statCode "200Y002" --itemCode1 "10211" --period "Q" --upload --next

# GDP 디플레이터 등락률(원계열, 전년동기비)
eidc ecos --statCode "200Y002" --itemCode1 "301" --period "Q" --upload --next