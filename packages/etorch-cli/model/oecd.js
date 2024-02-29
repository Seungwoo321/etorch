"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Oecd = void 0;
const sequelize_1 = require("sequelize");
const db_1 = require("../db");
class Oecd extends sequelize_1.Model {
}
exports.Oecd = Oecd;
Oecd.init({
    ref_area: {
        type: sequelize_1.DataTypes.STRING(50)
    },
    ref_area_code: {
        type: sequelize_1.DataTypes.STRING(50)
    },
    value: {
        type: sequelize_1.DataTypes.STRING(50)
    },
    freq: {
        type: sequelize_1.DataTypes.STRING(50)
    },
    measure: {
        type: sequelize_1.DataTypes.STRING(100)
    },
    unit_measure: {
        type: sequelize_1.DataTypes.STRING(50)
    },
    activity: {
        type: sequelize_1.DataTypes.STRING(50),
        allowNull: true
    },
    adjustment: {
        type: sequelize_1.DataTypes.STRING(50),
        allowNull: true
    },
    transformation: {
        type: sequelize_1.DataTypes.STRING(50),
        allowNull: true
    },
    time_horiz: {
        type: sequelize_1.DataTypes.STRING(50),
        allowNull: true
    },
    methodology: {
        type: sequelize_1.DataTypes.STRING(50),
        allowNull: true
    },
    time_period: {
        type: sequelize_1.DataTypes.STRING(50),
        allowNull: true
    }
}, {
    ...db_1.options,
    modelName: 'oecd'
});
/**
[
  {
    REF_AREA: 'Korea',
    value: 99.97101,
    FREQ: 'Monthly',
    MEASURE: 'Composite leading indicator (CLI)',
    UNIT_MEASURE: 'Index',
    ACTIVITY: 'Not applicable',
    ADJUSTMENT: 'Amplitude adjusted',
    TRANSFORMATION: 'Index',
    TIME_HORIZ: 'Not applicable',
    METHODOLOGY: 'OECD harmonised',
    TIME_PERIOD: '2023-11'
  },
  {
    REF_AREA: 'Korea',
    value: 100.1254,
    FREQ: 'Monthly',
    MEASURE: 'Composite leading indicator (CLI)',
    UNIT_MEASURE: 'Index',
    ACTIVITY: 'Not applicable',
    ADJUSTMENT: 'Amplitude adjusted',
    TRANSFORMATION: 'Index',
    TIME_HORIZ: 'Not applicable',
    METHODOLOGY: 'OECD harmonised',
    TIME_PERIOD: '2023-12'
  },
  {
    REF_AREA: 'Korea',
    value: 100.2729,
    FREQ: 'Monthly',
    MEASURE: 'Composite leading indicator (CLI)',
    UNIT_MEASURE: 'Index',
    ACTIVITY: 'Not applicable',
    ADJUSTMENT: 'Amplitude adjusted',
    TRANSFORMATION: 'Index',
    TIME_HORIZ: 'Not applicable',
    METHODOLOGY: 'OECD harmonised',
    TIME_PERIOD: '2024-01'
  }
]
*/
//# sourceMappingURL=oecd.js.map