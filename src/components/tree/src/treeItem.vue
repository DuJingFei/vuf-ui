<template>
  <section 
    class="tree-item" 
    :class="[outStandardClass,outClassName]"
  >
    <div
      class="kd-bar" 
      :class="[barClass, {
        'has-selected': selectedItemId == item.id
      }]"
      :style="{'paddingLeft': `${ rankNum * 10}px`}"  
      @click="controlChildNodes"
    >
      <span :class="[nameClass]">{{ item.name }}</span>
      <i 
        v-if="item.childs && item.childs.length > 0"
        class="control-area" 
        :class="{'kd-icon-fold': !foldChildNodes, 'kd-icon-unfold': foldChildNodes}"  
      ></i>
    </div>
    <ul v-show="item.childs && item.childs.length > 0 && !foldChildNodes">
      <tree-item 
        v-for="secondItem in item.childs"
        :key="secondItem.id"
        :item="secondItem"
        :rankNum="(rankNum + 1)"
        :parentNode="item"
        :initStatusAtr="initStatusAtr"
        :initUnfolds="initUnfolds"
        :selectedItemId="selectedItemId"
      />
    </ul>
  </section>
</template>
<script>
import eventBus from '../../../libs/utils/bus.js'; 
export default {
  name: 'TreeItem',
  props: {
    item: [Object],
    parentNode: [Object],
    rankNum: [Number],
    initStatusAtr: String, // 初始化状态所判定的属性名
    initUnfolds: Object, // 初始化状态参数,
    selectedItemId: [String , Number]
  },
  data() {
    return {
      outClassName: `kd-${this.item.type}`,
      outStandardClass: `kd-${this.rankNum}`,
      barClass: `kd-${this.rankNum}-bar`,
      nameClass: `kd-${this.rankNum}-name`,
      foldChildNodes: true, // 是否折叠子节点
    }
  },
  computed: {
    accordWithUnfold() {
      if (this.initUnfolds && this.initStatusAtr && this.item && this.rankNum) {
        return this.item[this.initStatusAtr] == this.initUnfolds[this.rankNum] ? false : true
      }
      return true
    }
  },
  watch: {
    accordWithUnfold: {
      handler(newVal , val) {
        if (!newVal) {
          if (this.initUnfolds[this.rankNum + 1]) {
            this.foldChildNodes = false;
          }
          else {
            this.$nextTick(function() {
              this.controlChildNodes();
            })
          }
        }
      },
      immediate: true
    }
  }, 
  methods: {
    controlChildNodes() {
      this.foldChildNodes = !this.foldChildNodes;
      eventBus.$emit("node-click", this.item);
    }
  }
}
</script>
