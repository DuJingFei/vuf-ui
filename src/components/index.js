import Button from './button'
import DateSelector from './DateSelector'
import Select from './select'
import Option from './option'
import '../scss/jf.scss'
import '../styleLess/common.less'

const components = {
  Button,
  DateSelector,
  Select,
  Option
}

const install = function (Vue) {
  if (install.installed) return
  // components.map(component => Vue.component(component.name, component))
  Object.keys(components).forEach(key => {
    Vue.component(components[key].name, components[key])
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

const API = {
  install,
  ...components
}

export default API
