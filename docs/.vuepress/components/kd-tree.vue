<template>
   <kd-tree 
     @node-click="handleNodeClick">
     <span slot="control">+</span>
   </kd-tree>
</template>
<script>
import Tree from '@components/tree'
export default {
   name: 'kd-tree-demos',
   components: {
      'kd-tree': Tree
   },
   methods: {
      handleNodeClick(nodeVal) {
         debugger
      }
   }
}
</script>