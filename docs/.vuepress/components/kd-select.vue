<template>
   <div>
      <section>
        <kd-select v-model="endVal">
            <kd-option 
              v-for="(item,i) in tempOptions" 
              :key="i" 
              :value='item.value' 
              :label='item.label'
            />
        </kd-select>
      </section>
   </div>
</template>
<script>
import Select from '@components/select'
import Option from '@components/option'
export default {
   name: 'kd-select-demos',
   components: {
      'kd-select': Select,
      'kd-option': Option
   },
   data() {
      return {
        endVal: '',
        tempOptions: [
            {
              value: 'Juventus',
              label:'尤文图斯',
            },
            {
              value: 'RealMadrid',
              label:'皇家马德里',
            },
            {
              value: 'Barcelona',
              label:'巴塞罗那',
            },
            {
              value: 'ManchesterUnited',
              label:'曼联',
            }
        ]
      }
   },
   watch: {
     endVal(newVal , val) {
        debugger
     }
   },
   methods: {
      getChoice(val) {
          debugger
      }
   }
}
</script>