import Vue from 'vue'
import _ from 'lodash'

Vue.directive('outsideClick',{
    bind: function(el,binding,vnode) {
       el.clickOutsideEvent = function(event) {
           if(!(el == event.target || el.contains(event.target))) {
            vnode.context[binding.expression](event)
           }
       }
       document.body.addEventListener('click', el.clickOutsideEvent)
    },
    unbind: function (el) {
       document.body.removeEventListener('click', el.clickOutsideEvent)
    }
})

Vue.prototype.debounce1 = function(fn, timer = 500) {
   let setTimer = '';
   return function() {
       console.log('s')
      if(setTimer) {
        clearTimeout(setTimer);
      }
      setTimer = setTimeout(() => {
          fn.call(this, arguments)
      } , timer)
   }
}


