import * as development from './default.config'
import * as prod from './prod.config'
import * as _ from 'lodash'
import { Config } from '../typing/config'

const env: string = process.env.NODE_ENV || 'development'
const configs: Object = {
  development: development.config,
  production: prod.config
}

const defaultConfig: Object = {
  env: env,
  appRoot: process.env.PWD
}

export let config: Config
config = _.merge(defaultConfig, configs[env])
