<template>
   <div class="kd-tree kd-card root">
      <tree-item 
        v-for="item in data"
        :rankNum='initRank'
        :key="item.id"
        :item='item'
        :initStatusAtr='initStatusAtr'
        :initUnfolds='initUnfolds'
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
    initStatusAtr: String, // 初始化状态所判定的属性名
    initUnfolds: Object // 初始化状态参数
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
