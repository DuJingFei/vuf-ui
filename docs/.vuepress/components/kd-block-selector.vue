
<template>
    <div>
      <kd-block-delector 
         :selectedArray='selectedArray'
      >
        <kd-block-dropdown :selectedList='selectedList'></kd-block-dropdown>
      </kd-block-delector>
    </div>
</template>
<script>
import BlockSelector from '@components/blockSelector'
import BlockDropdown from '@components/blockDropdown'
export default {
   name:'block-selector',
   components: {
      'kd-block-delector': BlockSelector,
      'kd-block-dropdown': BlockDropdown
   },
   data() {
      return {
         selectedArray: [
            {
                 id: 102,
                 name:'财务新世界'
             },
             {
                 id: 103,
                 name:'财务前沿'
             }
         ],
         selectedList: [
             {
                 id: 1,
                 name:'财务',
                 childs: [
                     {id: 102 , name: '财务新世界'},
                     {id: 105 , name: '生物多姿'},
                     {id: 106 , name: '生物多1姿'},
                     {id: 107 , name: '生物2多姿'}
                 ]
             },
             {
                 id: 2,
                 name:'世界',
                 childs: [
                     {id: 103 , name: '财务前沿'},
                     {id: 112 , name: '生物多姿'},
                     {id: 14 , name: '生物多姿'},
                     {id: 12 , name: '生物多姿'}
                 ]
             },
             {
                 id: 13,
                 name:'财务动态'
             },
             {
                 id: 14,
                 name:'金蝶云客户'
             },
             {
                 id: 11,
                 name:'用户成就'
             }
         ], 
      }
   },
   methods: {
      
   },
}
</script>

