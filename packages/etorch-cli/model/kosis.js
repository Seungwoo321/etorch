"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Kosis = void 0;
const sequelize_1 = require("sequelize");
const db_1 = require("../db");
class Kosis extends sequelize_1.Model {
}
exports.Kosis = Kosis;
/**
C1_OBJ_NM ~ C8_OBJ_NM	분류명1 ~ 분류명8
C1_OBJ_NM_ENG ~ C8_OBJ_NM_ENG	분류 영문명1 ~ 분류 영문명8
C1_NM ~ C8_NM	분류값 명1 ~ 분류값 명8
C1_NM_ENG ~ C8_NM_ENG
 */
Kosis.init({
    tbl_nm: {
        type: sequelize_1.DataTypes.STRING(100),
        allowNull: false
    },
    prd_de: {
        type: sequelize_1.DataTypes.STRING(20),
        allowNull: false
    },
    tbl_id: {
        type: sequelize_1.DataTypes.STRING(100),
        allowNull: false
    },
    itm_nm: {
        type: sequelize_1.DataTypes.STRING(100),
        allowNull: false
    },
    itm_nm_eng: {
        type: sequelize_1.DataTypes.STRING(100),
        allowNull: false
    },
    itm_id: {
        type: sequelize_1.DataTypes.STRING(100),
        allowNull: false
    },
    org_id: {
        type: sequelize_1.DataTypes.STRING(20),
        allowNull: false
    },
    c1_obj_nm: {
        type: sequelize_1.DataTypes.STRING(100),
        allowNull: false
    },
    c1_obj_nm_eng: {
        type: sequelize_1.DataTypes.STRING(100),
        allowNull: false
    },
    c2_obj_nm: {
        type: sequelize_1.DataTypes.STRING(100),
    },
    c2_obj_nm_eng: {
        type: sequelize_1.DataTypes.STRING(100),
    },
    c3_obj_nm: {
        type: sequelize_1.DataTypes.STRING(100),
    },
    c3_obj_nm_eng: {
        type: sequelize_1.DataTypes.STRING(100),
    },
    c4_obj_nm: {
        type: sequelize_1.DataTypes.STRING(100),
    },
    c4_obj_nm_eng: {
        type: sequelize_1.DataTypes.STRING(100),
    },
    c5_obj_nm: {
        type: sequelize_1.DataTypes.STRING(100),
    },
    c5_obj_nm_eng: {
        type: sequelize_1.DataTypes.STRING(100),
    },
    c6_obj_nm: {
        type: sequelize_1.DataTypes.STRING(100),
    },
    c6_obj_nm_eng: {
        type: sequelize_1.DataTypes.STRING(100),
    },
    c7_obj_nm: {
        type: sequelize_1.DataTypes.STRING(100),
    },
    c7_obj_nm_eng: {
        type: sequelize_1.DataTypes.STRING(100),
    },
    c8_obj_nm: {
        type: sequelize_1.DataTypes.STRING(100),
    },
    c8_obj_nm_eng: {
        type: sequelize_1.DataTypes.STRING(100),
    },
    dt: {
        type: sequelize_1.DataTypes.STRING(20),
        allowNull: false
    },
    prd_se: {
        type: sequelize_1.DataTypes.STRING(20),
        allowNull: false
    },
    c1: {
        type: sequelize_1.DataTypes.STRING(100),
        allowNull: false
    },
    c1_nm: {
        type: sequelize_1.DataTypes.STRING(100),
        allowNull: false
    },
    c1_nm_eng: {
        type: sequelize_1.DataTypes.STRING(100),
        allowNull: false
    },
    c2: {
        type: sequelize_1.DataTypes.STRING(100),
    },
    c2_nm: {
        type: sequelize_1.DataTypes.STRING(100),
    },
    c2_nm_eng: {
        type: sequelize_1.DataTypes.STRING(100),
    },
    c3: {
        type: sequelize_1.DataTypes.STRING(100),
    },
    c3_nm: {
        type: sequelize_1.DataTypes.STRING(100),
    },
    c3_nm_eng: {
        type: sequelize_1.DataTypes.STRING(100),
    },
    c4: {
        type: sequelize_1.DataTypes.STRING(100),
    },
    c4_nm: {
        type: sequelize_1.DataTypes.STRING(100),
    },
    c4_nm_eng: {
        type: sequelize_1.DataTypes.STRING(100),
    },
    c5: {
        type: sequelize_1.DataTypes.STRING(100),
    },
    c5_nm: {
        type: sequelize_1.DataTypes.STRING(100),
    },
    c5_nm_eng: {
        type: sequelize_1.DataTypes.STRING(100),
    },
    c6: {
        type: sequelize_1.DataTypes.STRING(100),
    },
    c6_nm: {
        type: sequelize_1.DataTypes.STRING(100),
    },
    c6_nm_eng: {
        type: sequelize_1.DataTypes.STRING(100),
    },
    c7: {
        type: sequelize_1.DataTypes.STRING(100),
    },
    c7_nm: {
        type: sequelize_1.DataTypes.STRING(100),
    },
    c7_nm_eng: {
        type: sequelize_1.DataTypes.STRING(100),
    },
    c8: {
        type: sequelize_1.DataTypes.STRING(100),
    },
    c8_nm: {
        type: sequelize_1.DataTypes.STRING(100),
    },
    c8_nm_eng: {
        type: sequelize_1.DataTypes.STRING(100),
    }
}, {
    ...db_1.options,
    modelName: 'kosis'
});
Kosis.afterBulkCreate('kosis', function (instances, options) {
    console.log('afterBulkCreate');
});
/**
[
  {
    "TBL_NM":"경기종합지수(2020＝100)(10차)",
    "PRD_DE":"202312",
    "TBL_ID":"DT_1C8015",
    "ITM_NM":"경기종합지수",
    "ITM_NM_ENG":"Composite Economic Indexes(2020＝100)",
    "ITM_ID":"T1",
    "ORG_ID":"101",
    "C1_OBJ_NM":"지수별",
    "C1_OBJ_NM_ENG":"By indicators",
    "DT":"98.6",
    "PRD_SE":"M",
    "C1":"B03",
    "C1_NM":"동행지수 순환변동치",
    "C1_NM_ENG":"Cyclical Component of Coincident Index"
  }
]
*/ 
//# sourceMappingURL=kosis.js.map