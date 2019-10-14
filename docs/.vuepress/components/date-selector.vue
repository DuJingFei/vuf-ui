
<template>
    <div>
      <date-delector :sourceDate='1571035189410'></date-delector>
    </div>
</template>
<script>
import DateSelector from '@components/dateSelector'
export default {
   name:'date-selector',
   components: {
      'date-delector': DateSelector
   }
}
</script>

