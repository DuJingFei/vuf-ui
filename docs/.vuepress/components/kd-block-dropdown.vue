
<template>
    <div>
      <kd-block-option 
         :selectedArray='selectedArray'
      ></kd-block-option>
    </div>
</template>
<script>
import BlockDropdown from '@components/blockDropdown'
export default {
   name:'block-option',
   components: {
      'kd-block-option': BlockDropdown
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
         ]
      }
   },
}
</script>

