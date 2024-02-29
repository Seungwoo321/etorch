"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ecos = void 0;
const sequelize_1 = require("sequelize");
const db_1 = require("../db");
class Ecos extends sequelize_1.Model {
}
exports.Ecos = Ecos;
Ecos.init({
    stat_code: {
        type: sequelize_1.DataTypes.STRING(50),
    },
    stat_name: {
        type: sequelize_1.DataTypes.STRING(100)
    },
    item_code1: {
        type: sequelize_1.DataTypes.STRING(50),
    },
    item_name1: {
        type: sequelize_1.DataTypes.STRING(100)
    },
    item_code2: {
        type: sequelize_1.DataTypes.STRING(50),
    },
    item_name2: {
        type: sequelize_1.DataTypes.STRING(100),
    },
    item_code3: {
        type: sequelize_1.DataTypes.STRING(50),
    },
    item_name3: {
        type: sequelize_1.DataTypes.STRING(100),
    },
    item_code4: {
        type: sequelize_1.DataTypes.STRING(50),
    },
    item_name4: {
        type: sequelize_1.DataTypes.STRING(100),
    },
    unit_name: {
        type: sequelize_1.DataTypes.STRING(20)
    },
    wgt: {
        type: sequelize_1.DataTypes.STRING(100)
    },
    time: {
        type: sequelize_1.DataTypes.STRING(20)
    },
    data_value: {
        type: sequelize_1.DataTypes.STRING(20)
    },
    period: {
        type: sequelize_1.DataTypes.STRING(5)
    }
}, {
    ...db_1.options,
    modelName: 'ecos'
});
/**
  {
    "STAT_CODE": "722Y001",
    "STAT_NAME": "1.3.1. 한국은행 기준금리 및 여수신금리",
    "ITEM_CODE1": "0101000",
    "ITEM_NAME1": "한국은행 기준금리",
    "ITEM_CODE2": null,
    "ITEM_NAME2": null,
    "ITEM_CODE3": null,
    "ITEM_NAME3": null,
    "ITEM_CODE4": null,
    "ITEM_NAME4": null,
    "UNIT_NAME": "연%",
    "WGT": null,
    "TIME": "20230101",
    "DATA_VALUE": "3.25"
  }
*/
//# sourceMappingURL=ecos.js.map