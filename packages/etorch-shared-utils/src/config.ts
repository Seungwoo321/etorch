import { resolve } from 'path'
import * as dotenv from 'dotenv'

export function init () {
  dotenv.config({ path: resolve(__dirname, '../.env.production')})
}

init()

const env = {
  get(key) {
    return process.env[key]
  },
  getInt(key) {
    return parseInt(process.env[key], 10)
  },
  getFloat(key) {
    return parseFloat(process.env[key])
  },
  getBoolean(key) {
    return process.env[key].toLowerCase() === 'true'
  }
}

export const config = {
  MARIADB_HOST: env.get('MARIADB_HOST'),
  MARIADB_DATABASE: env.get('MARIADB_DATABASE'),
  MARIADB_USERNAME: env.get('MARIADB_USERNAME'),
  MARIADB_PASSWORD: env.get('MARIADB_PASSWORD'),
  MARIADB_PORT: env.get('MARIADB_PORT'),
  EIDC_CLI: env.get('EIDC_CLI'),
  ENVIRONMENT: env.get('ENVIRONMENT')
}
