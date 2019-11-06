
<template>
    <div>
      <date-delector v-model="sourceDate" ></date-delector>
    </div>
</template>
<script>
import DateSelector from '@components/dateSelector'
export default {
   name:'date-selector',
   components: {
      'date-delector': DateSelector
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

