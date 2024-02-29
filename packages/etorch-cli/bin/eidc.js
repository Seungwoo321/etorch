#!/usr/bin/env node
require('dotenv').config()
const chalk = require('chalk')
const semver = require('semver')
const requiredVersion = require('../package.json').engines.node
// const minimist = require('minimist')

function checkNodeVersion(wanted, id) {
    if (!semver.satisfies(process.version, wanted, { includePrerelease: true })) {
        console.log(chalk.red(
            'You are using Node ' + process.version + ', but this version of ' + id +
            ' requires Node ' + wanted + '.\nPlease upgrade your Node version.'
        ))
        process.exit(1)
    }
}

checkNodeVersion(requiredVersion, 'eidc')

const { program, Option } = require('commander')

program
    .version(`eidc ${require('../package').version}`)
    .usage('<command> [options]')

program.command('configure')
    .addOption(new Option('--source <source>', 'API Source').choices(['kosis', 'ecos']))
    .option('--api-key <API Key>', 'Please enter API key')
    .action(options => {
        require('../commands/configure')(options)
    })

program.command('oecd cli')
    // .requiredOption('--data-url <dataUrl>', '')
    .option('--ref-area-code <refAreaCode>', 'kor | usa | jpn ...etc')
    .option('--start-period <startPeriod>', 'YYYY-MM')
    .option('--end-period <endPeriod>', 'YYYY-MM')
    .option('--upload', '데이터 베이스에 업로드')
    .option('--latest', '최신 데이터')
    .action((_, options) => {
        require('../commands/oecd')(options)
    })

program.command('ecos')
    .option('--serviceName <serviceName>', '서비스명')
    .option('--language <language>', '언어구분')
    .option('--startCount <startCount', '요청 시작 건수')
    .option('--endCount <endCount', '요청 종료 건수')
    .option('--statCode <statCode>', '통계표 코드')
    .option('--period <period>', '주기')
    .option('--searchStartDate <searchStartDate>', '검색시작 일자')
    .option('--searchEndDate <searchEndDate>', '검색종료 일자')
    .option('--itemCode1 <itemCode1>', '통계 항목 코드1')
    .option('--itemCode2 <itemCode2>', '통계 항목 코드2 (option)')
    .option('--itemCode3 <itemCode3>', '통계 항목 코드3 (option)')
    .option('--itemCode4 <itemCode4>', '통계 항목 코드4 (option)')
    .option('--upload', '데이터 베이스에 업로드')
    .option('--latest', '최신 데이터')
    .action(options => {
        require('../commands/ecos')(options)
    })

program.command('kosis')
    .option('--date-range', '기간조회 방법 중 시점기준으로 조회')
    .option('--latest-date', '기간조회 방법 중 최신자료 기준으로 조회')
    .option('--orgId <orgId>', '')
    .option('--tblId <tblId>', '')
    .option('--itmId <itmId>', '')
    .option('--prdSe <prdSe>', '수록주기')
    .option('--objL1 <objL1>', '')
    .option('--objL2 <objL1>', 'optional')
    .option('--objL3 <objL1>', 'optional')
    .option('--objL4 <objL1>', 'optional')
    .option('--objL5 <objL1>', 'optional')
    .option('--objL6 <objL1>', 'optional')
    .option('--objL7 <objL1>', 'optional')
    .option('--objL8 <objL1>', 'optional')
    .option('--upload', '데이터 베이스에 업로드')
    .option('--latest', '최신 데이터')
    .addOption(new Option('--startPrdDe <startPrdDe>', '시점 기준 조회시 시작 수록 시점').implies('--date-range'))
    .addOption(new Option('--endPrdDe <endPrdDe>', '시점 기준 조회시 종료 수록 시점').implies('--date-range'))
    .addOption(new Option('--newEstPrdCnt <newEstPrdCnt>', '최신자료 기준 조회시 최근 수록 시점 개수').implies('--latest-date'))
    .addOption(new Option('--prdInterval <prdInterval>', '최신자료 기준 조회시 최근 수록 시점 간격').implies('--latest-date'))
    .action(options => {
        require('../commands/kosis')(options)
    })

// output help information on unknown commands
program.on('command', ([cmd]) => {
    program.outputHelp()
    console.log(`  ` + chalk.red(`Unknown command ${chalk.yellow(cmd)}.`))
    console.log()
    process.exitCode = 1
})
program.on('command:', ([cmd]) => {
    program.outputHelp()
    console.log(`  ` + chalk.red(`Unknown command ${chalk.yellow(cmd)}.`))
    console.log()
    process.exitCode = 1
})
program.on('--help', () => {
    console.log()
    console.log(`  Run ${chalk.cyan(`eidc <command> --help`)} for detailed usage of given command.`)
    console.log()
})

program.commands.forEach(c => c.on('--help', () => console.log()))

// enhance common error messages
const enhanceErrorMessages = require('../util/enhanceErrorMessages')

enhanceErrorMessages('missingArgument', argName => {
    return `Missing required argument ${chalk.yellow(`<${argName}>`)}.`
})

enhanceErrorMessages('unknownOption', optionName => {
    return `Unknown option ${chalk.yellow(optionName)}.`
})

enhanceErrorMessages('optionMissingArgument', (option, flag) => {
    return `Missing required argument for option ${chalk.yellow(option.flags)}` + (
        flag ? `, got ${chalk.yellow(flag)}` : ``
    )
})

program.parse(process.argv)