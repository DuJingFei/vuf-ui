<template>
    <div>
       <li 
        class="kd-select-dropdown__item"
        @click="choice({ value:value, label:label })"
        >{{label}}</li>
    </div>
</template>
<script>
export default {
   name:'kd-option',
   props: ['value', 'label'],
   watch: {
     '$parent.result': {
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
.kd-select-dropdown__item {
    font-size: 14px;
    padding: 0 20px;
    position: relative;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    color: #606266;
    height: 34px;
    line-height: 34px;
    box-sizing: border-box;
    cursor: pointer;
    &:hover {
        background-color: #f5f7fa;
    }
}
</style>