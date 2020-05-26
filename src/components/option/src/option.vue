<template>
  <div>
    <li 
      class="kd-select-dropdown__item"
      @click="choice({ value:value, label:label })"
    >
      {{ label }}
    </li>
  </div>
</template>
<script>
export default {
  name:'kd-option',
  props: ['value', 'label'],
  watch: {
    '$parent.bindVal': {
      handler(newVal , val) {
        if(newVal && newVal === this.value) {
          this.$parent.result = this.label;
        }
      },
      immediate: true
    }
  },
  mounted() {
    if(this.$parent.result && this.$parent.result === this.value) {
      this.$parent.result = this.label
    }
  },
  methods: {
    choice(val) {
      this.$parent.getChoice(val)
    }
  }
}
</script>
<style lang="less">

</style>