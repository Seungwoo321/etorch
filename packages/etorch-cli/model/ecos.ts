import { DataTypes, Model, InferAttributes, InferCreationAttributes } from 'sequelize'
import { options } from '../db'

export class Ecos extends Model<InferAttributes<Ecos>, InferCreationAttributes<Ecos>> {
  stat_code: string;
  stat_name: string;
  item_code1: string;
  item_name1: string;
  item_code2: string;
  item_name2: string;
  item_code3: string;
  item_name3: string;
  item_code4: string;
  item_name4: string;
  unit_name: string;
  wgt: string;
  time: string;
  data_value: string;
  period: string;
}

Ecos.init({
  stat_code: {
    type: DataTypes.STRING(50),
  },
  stat_name: {
    type: DataTypes.STRING(100)
  },
  item_code1: {
    type: DataTypes.STRING(50),
  },
  item_name1: {
    type: DataTypes.STRING(100)
  },
  item_code2: {
    type: DataTypes.STRING(50),
  },
  item_name2: {
    type: DataTypes.STRING(100),
},
  item_code3: {
    type: DataTypes.STRING(50),
  },
  item_name3: {
    type: DataTypes.STRING(100),
},
  item_code4: {
    type: DataTypes.STRING(50),
  },
  item_name4: {
    type: DataTypes.STRING(100),
},
  unit_name: {
    type: DataTypes.STRING(20)
  },
  wgt: {
    type: DataTypes.STRING(100)
  },
  time: {
    type: DataTypes.STRING(20)
  },
  data_value: {
    type: DataTypes.STRING(20)
  },
  period: {
    type: DataTypes.STRING(5)
  }
}, {
  ...options,
  modelName: 'ecos'
})


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
