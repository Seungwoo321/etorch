#/bin/sh

curl localhost:3000/migrate/kosis/annual/1960/2024
curl localhost:3000/migrate/kosis/quarterly/196001/202401
curl localhost:3000/migrate/kosis/monthly/196001/202402
curl localhost:3000/migrate/ecos/annual/1960/2024
curl localhost:3000/migrate/ecos/quarterly/1960Q1/2024Q1
curl localhost:3000/migrate/ecos/monthly/196001/202401
curl localhost:3000/migrate/ecos/daily/19600101/20240229
curl localhost:3000/migrate/oecd/cli/kor/196001/202402