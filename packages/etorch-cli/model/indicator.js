"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Indicator = void 0;
const sequelize_1 = require("sequelize");
const db_1 = require("../db");
class Indicator extends sequelize_1.Model {
}
exports.Indicator = Indicator;
Indicator.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name_ko: {
        type: sequelize_1.DataTypes.STRING(100)
    },
    name_en: {
        type: sequelize_1.DataTypes.STRING(100)
    },
    description_ko: {
        type: sequelize_1.DataTypes.STRING(100)
    },
    description_en: {
        type: sequelize_1.DataTypes.STRING(100)
    },
    source: {
        type: sequelize_1.DataTypes.ENUM,
        values: ['kosis', 'ecos', 'oecd']
    },
    unit_ko: {
        type: sequelize_1.DataTypes.STRING(100)
    },
    unit_en: {
        type: sequelize_1.DataTypes.STRING(100)
    },
    time_unit: {
        type: sequelize_1.DataTypes.STRING(100)
    }
}, {
    ...db_1.options,
    modelName: 'indicator'
});
//# sourceMappingURL=indicator.js.map