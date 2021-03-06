// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './libs/directives'
import './libs/utils/prototype'
//import './scss/jf.scss'
import './styleLess/common.less'
import lyui from './components/index'
Vue.use(lyui)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
