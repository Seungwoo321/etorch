"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.options = exports.sequelize = void 0;
const sequelize_1 = require("sequelize");
const env_1 = require("./env");
const { MARIADB_HOST, MARIADB_DATABASE, MARIADB_USERNAME, MARIADB_PASSWORD } = env_1.config;
exports.sequelize = new sequelize_1.Sequelize(MARIADB_DATABASE, MARIADB_USERNAME, MARIADB_PASSWORD, {
    host: MARIADB_HOST,
    dialect: 'mariadb',
    dialectOptions: {
        charset: 'utf8',
        collate: 'utf8_general_ci'
    }
});
exports.options = {
    sequelize: exports.sequelize,
    schema: MARIADB_DATABASE,
    freezeTableName: true,
    underscored: true
};
//# sourceMappingURL=db.js.map