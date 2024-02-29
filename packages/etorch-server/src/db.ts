import { Sequelize } from 'sequelize'
import { config } from './env'

const { MARIADB_HOST, MARIADB_DATABASE, MARIADB_USERNAME, MARIADB_PASSWORD } = config

export const sequelize = new Sequelize(MARIADB_DATABASE, MARIADB_USERNAME, MARIADB_PASSWORD, {
  host: MARIADB_HOST,
    dialect: 'mariadb',
    dialectOptions: {
      charset: 'utf8',
      collate: 'utf8_general_ci'
    }
  })

export const options = {
    sequelize: sequelize,
    schema: MARIADB_DATABASE,
    freezeTableName: true,
    underscored: true
}
