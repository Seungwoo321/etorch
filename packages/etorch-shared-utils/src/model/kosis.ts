import { DataTypes, Model, InferAttributes, InferCreationAttributes } from 'sequelize'
import { options } from '../db'

export class Kosis extends Model<InferAttributes<Kosis>, InferCreationAttributes<Kosis>> {
  declare tbl_nm: string;
  declare prd_de: string;
  declare tbl_id: string;
  declare itm_nm: string;
  declare itm_nm_eng: string;
  declare itm_id: string;
  declare org_id: string;
  declare c1_obj_nm: string;
  declare c1_obj_nm_eng: string;
  declare c2_obj_nm: string;
  declare c2_obj_nm_eng: string;
  declare c3_obj_nm: string;
  declare c3_obj_nm_eng: string;
  declare c4_obj_nm: string;
  declare c4_obj_nm_eng: string;
  declare c5_obj_nm: string;
  declare c5_obj_nm_eng: string;
  declare c6_obj_nm: string;
  declare c6_obj_nm_eng: string;
  declare c7_obj_nm: string;
  declare c7_obj_nm_eng: string;
  declare c8_obj_nm: string;
  declare c8_obj_nm_eng: string;
  declare dt: string;
  declare prd_se: string;
  declare c1: string;
  declare c1_nm: string;
  declare c1_nm_eng: string;
  declare c2: string;
  declare c2_nm: string;
  declare c2_nm_eng: string;
  declare c3: string;
  declare c3_nm: string;
  declare c3_nm_eng: string;
  declare c4: string;
  declare c4_nm: string;
  declare c4_nm_eng: string;
  declare c5: string;
  declare c5_nm: string;
  declare c5_nm_eng: string;
  declare c6: string;
  declare c6_nm: string;
  declare c6_nm_eng: string;
  declare c7: string;
  declare c7_nm: string;
  declare c7_nm_eng: string;
  declare c8: string;
  declare c8_nm: string;
  declare c8_nm_eng: string;
}
/**
C1_OBJ_NM ~ C8_OBJ_NM	분류명1 ~ 분류명8
C1_OBJ_NM_ENG ~ C8_OBJ_NM_ENG	분류 영문명1 ~ 분류 영문명8
C1_NM ~ C8_NM	분류값 명1 ~ 분류값 명8
C1_NM_ENG ~ C8_NM_ENG
 */
Kosis.init({
  tbl_nm: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  prd_de: {
    type: DataTypes.STRING(20),
    allowNull: false
  },
  tbl_id: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  itm_nm: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  itm_nm_eng: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  itm_id: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  org_id: {
    type: DataTypes.STRING(20),
    allowNull: false
  },
  c1_obj_nm: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  c1_obj_nm_eng: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  c2_obj_nm: {
    type: DataTypes.STRING(100),
  },
  c2_obj_nm_eng: {
    type: DataTypes.STRING(100),
  },
  c3_obj_nm: {
    type: DataTypes.STRING(100),
  },
  c3_obj_nm_eng: {
    type: DataTypes.STRING(100),
  },
  c4_obj_nm: {
    type: DataTypes.STRING(100),
  },
  c4_obj_nm_eng: {
    type: DataTypes.STRING(100),
  },
  c5_obj_nm: {
    type: DataTypes.STRING(100),
  },
  c5_obj_nm_eng: {
    type: DataTypes.STRING(100),
  },
  c6_obj_nm: {
    type: DataTypes.STRING(100),
  },
  c6_obj_nm_eng: {
    type: DataTypes.STRING(100),
  },
  c7_obj_nm: {
    type: DataTypes.STRING(100),
  },
  c7_obj_nm_eng: {
    type: DataTypes.STRING(100),
  },
  c8_obj_nm: {
    type: DataTypes.STRING(100),
  },
  c8_obj_nm_eng: {
    type: DataTypes.STRING(100),
  },
  dt: {
    type: DataTypes.STRING(20),
    allowNull: false
  },
  prd_se: {
    type: DataTypes.STRING(20),
    allowNull: false
  },
  c1: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  c1_nm: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  c1_nm_eng: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  c2: {
    type: DataTypes.STRING(100),
  },
  c2_nm: {
    type: DataTypes.STRING(100),
  },
  c2_nm_eng: {
    type: DataTypes.STRING(100),
  },
  c3: {
    type: DataTypes.STRING(100),
  },
  c3_nm: {
    type: DataTypes.STRING(100),
  },
  c3_nm_eng: {
    type: DataTypes.STRING(100),
  },
  c4: {
    type: DataTypes.STRING(100),
  },
  c4_nm: {
    type: DataTypes.STRING(100),
  },
  c4_nm_eng: {
    type: DataTypes.STRING(100),
  },
  c5: {
    type: DataTypes.STRING(100),
  },
  c5_nm: {
    type: DataTypes.STRING(100),
  },
  c5_nm_eng: {
    type: DataTypes.STRING(100),
  },
  c6: {
    type: DataTypes.STRING(100),
  },
  c6_nm: {
    type: DataTypes.STRING(100),
  },
  c6_nm_eng: {
    type: DataTypes.STRING(100),
  },
  c7: {
    type: DataTypes.STRING(100),
  },
  c7_nm: {
    type: DataTypes.STRING(100),
  },
  c7_nm_eng: {
    type: DataTypes.STRING(100),
  },
  c8: {
    type: DataTypes.STRING(100),
  },
  c8_nm: {
    type: DataTypes.STRING(100),
  },
  c8_nm_eng: {
    type: DataTypes.STRING(100),
  }  
}, {
  ...options,
  modelName: 'kosis'
})

Kosis.afterBulkCreate('kosis', function (instances, options) {
  console.log('afterBulkCreate')
})

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