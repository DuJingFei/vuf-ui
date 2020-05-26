<template>
  <div>
    <div class="kd-input-select">
      <div 
        v-outsideClick="closeDropdown"
        class="kd-input"
      >
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
        >
        <span 
          v-if="hasIcon"
          class="input-icon"
        >
          <span class="icon-arrow-up"></span>
        </span>
      </div>
      <div v-show="showDropdown">
        <div class="kd-select-dropdown kd-popper">
          <div class="kd-scrollbar">
            <ul 
              ref="dropdownList" 
              class="kd-select-dropdown__list"
            >
              <slot />
            </ul>       
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'KdSelect',
  model: {
    prop: 'bindVal',
    event: 'bindEvent'
  },
  props: {
    bindVal: [Number, String],
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
  }
};
</script>


