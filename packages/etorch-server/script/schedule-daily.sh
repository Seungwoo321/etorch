#/bin/sh

# Database config
export MARIADB_HOST=localhost
export MARIADB_DATABASE=etorch
export MARIADB_USERNAME=etorch
export MARIADB_PASSWORD=etorch
export MARIADB_PORT=3306

# Ecos

# 시장금리 국고채 (1년) 일별
eidc ecos --statCode "817Y002" --itemCode1 "010190000" --period "D" --upload --next

# 시장금리 국고채 (3년) 일별
eidc ecos --statCode "817Y002" --itemCode1 "010200000" --period "D" --upload --next

# 시장금리 국고채 (10년) 일별
eidc ecos --statCode "817Y002" --itemCode1 "010210000" --period "D" --upload --next

# 한국은행 기준금리
eidc ecos --statCode "722Y001" --itemCode1 "0101000" --period "D" --upload --next

# 원/미국달러(매매기준율)(일별)
eidc ecos --statCode "731Y001" --itemCode1 "0000001" --period "D" --upload --next

# 원/위안(매매기준율)(일별)
eidc ecos --statCode "731Y001" --itemCode1 "0000053" --period "D" --upload --next

# 원/일본엔(100엔)(일별)
eidc ecos --statCode "731Y001" --itemCode1 "0000002" --period "D" --upload --next