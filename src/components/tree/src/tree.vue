<template>
  <div class="kd-tree kd-card root">
    <tree-item 
      v-for="item in data"
      :key="item.id"
      :rankNum="initRank"
      :item="item"
      :selectedItemId="curItem && curItem.id"
      :initStatusAtr="initStatusAtr"
      :initUnfolds="initUnfolds"
    />
  </div>
</template>
<script>
import eventBus from '../../../libs/utils/bus.js'; 
import TreeItem from './treeItem'
export default {
  name: 'KdTree',
  components: {
    TreeItem
  },
  props: {
    data: Array,
    initFold: Boolean, 
    initStatusAtr: String, // 初始化状态所判定的属性名
    initUnfolds: Object // 初始化状态参数
  },
  data() {
    return {
      initRank: 1,
      curItem: '',
    }
  },
  mounted() {
    let _this = this;
    eventBus.$on('node-click',(itemData) => {
      if (itemData) {
        _this.curItem = itemData;
        this.$emit('node-trigger', itemData);
      }
    })
  },
}
</script>
<style lang="less">

</style>
