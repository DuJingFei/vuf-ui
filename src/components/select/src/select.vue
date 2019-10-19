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
  watch: {
    bindVal: {
      handler(newVal,val) {
        if(newVal) {
          this.result = this.bindVal;
        }
      },
      immediate: true
    }
  },
  created() {
    // 必须得是在created钩子里注入绑定值
    if(this.bindVal) {
       this.result = this.bindVal;
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
  },
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
  }
};
</script>
<style lang="less">
.kd-input-select {
   width: 180px;
   position: relative;
   .kd-input {
      position: relative;
    .kd-input-inner {
     cursor: pointer;
     background-color: #fff;
     border-radius: 4px;
     border: 1px solid #dcdfe6;
     box-sizing: border-box;
     color: #606266;
     display: inline-block;
     font-size: inherit;
     height: 40px;
     line-height: 40px;
     outline: none;
     padding: 0 15px;
     transition: border-color .2s cubic-bezier(.645,.045,.355,1);
     width: 100%;
     &:focus {
       border: 1px solid #1989fa;
     }
     &.has-icon {
        padding: 0 15px;
        padding-right: 30px;
     }
    }
    .input-icon {
      position: absolute;
      height: 100%;
      right: 5px;
      top: 0;
      text-align: center;
      color: #c0c4cc;
      transition: all .3s;
      pointer-events: none;
    }
  }

  .kd-select-dropdown {
      position: absolute;
      width: 100%;
      margin-top: 12px;
      border: 1px solid #e4e7ed;
      border-radius: 4px;
      background-color: #fff;
      box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
      box-sizing: border-box;
      margin: 5px 0;
      .kd-select-dropdown__list {
        list-style: none;
        padding: 6px 0;
        margin: 0;
        box-sizing: border-box;
      }
  }
}
</style>


