import Calendar from './calendar'
Calendar.install = function(Vue) {
  Vue.component(Calendar.name, Calendar)
}

export default Calendar