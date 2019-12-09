<template>
    <div>
      <div class="kd-input-select">
         <div class="kd-input" v-outsideClick='closeDropdown'>
            <input 
              class="kd-input-inner" 
              :class="[{
                'has-icon':hasIcon
              }]"
              type="text" 
              readonly
              :value="result"
              placeholder="请选择" 
              @click="displayDropdown"
            />

            <span class="input-icon" v-if="hasIcon">
              <span class="icon-arrow-up"></span>
            </span>
         </div>
         
         <div v-show="showDropdown">
            <div class="kd-select-dropdown kd-popper">
              <div class="kd-scrollbar">
                <ul ref="dropdownList" class="kd-select-dropdown__list">
                  <slot></slot>
                </ul>       
              </div>
            </div>
         </div>
      </div>
    </div>
</template>
<script>
export default {
  name: "kd-select",
  model: {
    prop: 'bindVal',
    event: 'bindEvent'
  },
  props: {
    bindVal: [Number,String],
    hasIcon: Boolean,
  },
  data() {
    return {
       result: '',
       showDropdown: false,
    }
  },
  methods: {
     displayDropdown() {
       this.showDropdown = !this.showDropdown;
     },
     closeDropdown() {
       this.showDropdown = false;
     },
     getChoice(val) {
       this.result = val.label
       this.$emit('bindEvent', val.value)
     }
  },/*
  directives: {
    outsideClick: {
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
    }
  } */
};
</script>


