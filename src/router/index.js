import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/index',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/test',
      name: 'testMd',
      component: r => require.ensure([], () => r(require('../docs/test.md')))
    }
  ]
})
