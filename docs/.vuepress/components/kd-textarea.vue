<template>
   <div>
      <kd-textarea 
         v-model="textVal"  
         :needRemind='true'
         :remoteSearch='true'
      >
         <kd-option 
            v-for="(item,i) in tempOptions" 
            :key="i" 
            :value='item.value' 
            :label='item.label'
         />
      </kd-textarea>
   </div>
</template>
<script>
import Textarea from '@components/textarea'
import Option from '@components/option'
export default {
   name: 'kd-textarea-demos',
   components: {
      'kd-textarea': Textarea,
      'kd-option': Option
   },
   data() {
      return {
         textVal: 'hello Richel',
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
         ],
      }
   },
}
</script>