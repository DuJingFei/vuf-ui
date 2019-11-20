<template>
    <section class="tree-item" :class="[outStandardClass,outClassName]">
       <div
         class="kd-bar" 
         :class="[barClass]"
         :style="{'paddingLeft': `${ rankNum * 10}px`}"  
       >
          <span  :class="[nameClass]">{{item.name}}</span>
          <i
            class="icon-add-cicle control-area" @click="controlChildNodes"></i>
       </div>
       <ul v-if="item.childs && item.childs.length > 0 && !foldChildNodes">
          <tree-item 
            v-for="secondItem in item.childs"
            :key="secondItem.id"
            :item='secondItem'
            :rankNum='(rankNum + 1)'
            :parentNode='item'
          ></tree-item>
       </ul>
    </section>
</template>
<script>
import eventBus from '../../../libs/utils/bus.js'; 
export default {
   name: 'tree-item',
   props: {
      item: [Object],
      parentNode: [Object],
      rankNum: [Number]
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
   methods: {
      controlChildNodes() {
         this.foldChildNodes = !this.foldChildNodes;
         eventBus.$emit("node-click", this.item);
      }
   },
}
</script>
