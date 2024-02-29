import { DataTypes, Model, InferAttributes, InferCreationAttributes } from 'sequelize'
import { options } from '../db'

export class Indicator extends Model<InferAttributes<Indicator>, InferCreationAttributes<Indicator>> {
  declare id: number;
  declare name_ko: string;
  declare name_en: string;
  declare description_ko: string;
  declare description_en: string;
  declare source: string;
  declare unit_ko: string;
  declare unit_en: string;
  declare time_unit: string;
}

Indicator.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name_ko: {
    type: DataTypes.STRING(100)
  },
  name_en: {
    type: DataTypes.STRING(100)
  },
  description_ko: {
    type: DataTypes.STRING(100)
  },
  description_en: {
    type: DataTypes.STRING(100)
  },
  source: {
    type: DataTypes.ENUM,
    values: ['kosis', 'ecos', 'oecd']
  },
  unit_ko: {
    type: DataTypes.STRING(100)
  },
  unit_en: {
    type: DataTypes.STRING(100)
  },
  time_unit: {
    type: DataTypes.STRING(100)
  }
}, {
  ...options,
  modelName: 'indicator'
})