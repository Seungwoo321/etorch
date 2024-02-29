import { sequelize } from '../db';
import { config } from '../config'

(async () => {
  if (config.EIDC_CLI === 'true' || config.ENVIRONMENT === 'production') return
  try {
    await sequelize.sync({ force: true });
    console.log('SUCCESS')
  } catch (error) {
    console.log(error) 
  }
})();

export { Indicator } from './indicator';
export { Ecos } from './ecos'
export { Kosis } from './kosis'
export { Oecd } from './oecd'
