<template>
   <div class="container">
      <kd-tree 
        :data='testData'
        @node-trigger="handleNodeClick">
      </kd-tree>
      <section v-show="curNode">
         当前点击的节点是：{{curNode.name}},
         类型是：{{curNode.type}}
      </section>
   </div>
</template>
<script>
import Tree from '@components/tree'
export default {
   name: 'kd-tree-demos',
   components: {
      'kd-tree': Tree
   },
   data() {
      return {
          testData: require('../public/treeData.json'),
          curNode:''
      }
   },
   methods: {
      handleNodeClick(nodeVal) {
         if(nodeVal) {
            this.curNode = nodeVal;
         }
      }
   }
}
</script>