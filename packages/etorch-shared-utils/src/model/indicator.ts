import { DataTypes, Model, InferAttributes, InferCreationAttributes } from 'sequelize'
import { options } from '../db'

export class Indicator extends Model<InferAttributes<Indicator>, InferCreationAttributes<Indicator>> {
  declare id: number;
  declare code: string;
  declare origin: string;
  declare name_ko: string;
  declare name_en: string;
  declare description_ko: string;
  declare description_en: string;
  declare unit_ko: string;
  declare unit_en: string;
  declare has_month: boolean;
  declare has_quarter: boolean;
  declare has_year: boolean;
  declare has_day: boolean;
}

Indicator.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  code: {
    type: DataTypes.STRING(100)
  },
  origin: {
    type: DataTypes.ENUM,
    values: ['kosis', 'ecos', 'oecd', 'bea']
  },
  name_ko: {
    type: DataTypes.STRING(100)
  },
  name_en: {
    type: DataTypes.STRING(100)
  },
  description_ko: {
    type: DataTypes.TEXT
  },
  description_en: {
    type: DataTypes.TEXT
  },
  unit_ko: {
    type: DataTypes.STRING(100)
  },
  unit_en: {
    type: DataTypes.STRING(100)
  },
  has_month: {
    type: DataTypes.BOOLEAN
  },
  has_quarter: {
    type: DataTypes.BOOLEAN
  },
  has_year: {
    type: DataTypes.BOOLEAN
  },
  has_day: {
    type: DataTypes.BOOLEAN
  }
}, {
  ...options,
  modelName: 'indicator'
})