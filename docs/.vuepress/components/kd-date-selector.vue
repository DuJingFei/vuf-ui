
<template>
  <div>
    <kd-date-selector v-model="sourceDate" />
  </div>
</template>
<script>
import DateSelector from '@components/dateSelector'
export default {
   name:'kd-date-selector-demo',
   components: {
      'kd-date-selector': DateSelector
   },
   data() {
      return {
         sourceDate: 1571035189410,
      }
   },
   watch: {
      sourceDate(newVal , val) {
        
      }
   },
}
</script>

