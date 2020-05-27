import fileDisplay from './fileDisplay.vue'
fileDisplay.install = function (Vue) {
  Vue.component(fileDisplay.name, fileDisplay)
}
export default fileDisplay
