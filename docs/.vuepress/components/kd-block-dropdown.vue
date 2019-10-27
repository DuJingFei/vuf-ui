
<template>
    <div>
      <kd-block-dropdwon 
         :selectedArray='selectedArray'
      ></kd-block-dropdwon>
    </div>
</template>
<script>
import BlockDropdown from '@components/blockDropdown'
export default {
   name:'block-dropdown',
   components: {
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
         ]
      }
   },
}
</script>

