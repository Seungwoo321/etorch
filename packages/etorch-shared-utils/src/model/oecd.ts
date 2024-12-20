import { DataTypes, Model, InferAttributes, InferCreationAttributes } from 'sequelize'
import { options } from '../db'

export class Oecd extends Model<InferAttributes<Oecd>, InferCreationAttributes<Oecd>> {
  declare ref_area: string;
  declare ref_area_code: string;
  declare value: string;
  declare freq: string;
  declare measure: string;
  declare unit_measure: string;
  declare activity: string;
  declare adjustment: string;
  declare transformation: string;
  declare time_horiz: string;
  declare methodology: string;
  declare time_period: string;
}

Oecd.init({
  ref_area: {
    type: DataTypes.STRING(50)
  },
  ref_area_code: {
    type: DataTypes.STRING(50)
  },
  value: {
    type: DataTypes.STRING(50)
  },
  freq: {
    type: DataTypes.STRING(50)
  },
  measure: {
    type: DataTypes.STRING(100)
  },
  unit_measure: {
    type: DataTypes.STRING(50)
  },
  activity: {
    type: DataTypes.STRING(50),
    allowNull: true
  },
  adjustment: {
    type: DataTypes.STRING(50),
    allowNull: true
  },
  transformation: {
    type: DataTypes.STRING(50),
    allowNull: true
  },
  time_horiz: {
    type: DataTypes.STRING(50),
    allowNull: true
  },
  methodology: {
    type: DataTypes.STRING(50),
    allowNull: true
  },
  time_period: {
    type: DataTypes.STRING(50),
    allowNull: true
  }
}, {
  ...options,
  modelName: 'oecd'
})

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
