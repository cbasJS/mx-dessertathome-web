// Packages
import _ from 'lodash'

// Assets
import baseConfig from './environments/base.json'
import developmentConfig from './environments/development.json'
import productionConfig from './environments/production.json'
import stagingConfig from './environments/staging.json'

const configs: { [x: string]: { [x: string]: any } } = {
  development: _.merge({}, baseConfig, developmentConfig),
  staging: _.merge({}, baseConfig, developmentConfig, stagingConfig),
  production: _.merge({}, baseConfig, developmentConfig, stagingConfig, productionConfig)
}

const environment = process.env.GATSBY_ACTIVE_ENV || 'development'

const config = configs[environment]

export default config
