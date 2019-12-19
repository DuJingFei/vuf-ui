<template>
   <div class="kd-tree kd-card root">
      <tree-item 
        v-for="item in data"
        :rankNum='initRank'
        :key="item.id"
        :item='item'
      >
      </tree-item>
   </div>
</template>
<script>
import eventBus from '../../../libs/utils/bus.js'; 
import TreeItem from './treeItem'
export default {
  name: 'kd-tree',
  props: {
    data: Array,
    initFold: Boolean, 
    initStatusAtr: String,
    initUnfolds: Object
  },
  components: {
     TreeItem
  },
  data() {
     return {
       initRank: 1
     }
  },
  mounted() {
     eventBus.$on("node-click",(itemData) => {
        this.$emit("node-trigger", itemData);
     })
  },
  methods: {
    
  },
}
</script>
<style lang="less">

</style>
