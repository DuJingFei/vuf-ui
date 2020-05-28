import Button from './button'
import Card from './card'
import DateSelector from './DateSelector'
import Select from './select'
import Option from './option'
import Textarea from './textarea'
import Tree from './tree'
import BlockSelector from './blockSelector'
import BlockDropdown from './blockDropdown'
import FileDisplay from './file'
import ArrayDragSort from './arrayDragSort'
//import '../scss/jf.scss'
import '../styleLess/common.less'

const components = {
  Button,
  Card,
  DateSelector,
  Select,
  Option,
  Textarea,
  Tree,
  BlockSelector,
  BlockDropdown,
  FileDisplay,
  ArrayDragSort
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
