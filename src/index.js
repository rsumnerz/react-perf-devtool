import { ReactPerfDevtool } from './extension/components/ReactPerfDevtool'
import { registerObserver } from './npm/hook'

export { ReactPerfDevtool, registerObserver }
module.exports = require('./components/ReactPerfPanel')
