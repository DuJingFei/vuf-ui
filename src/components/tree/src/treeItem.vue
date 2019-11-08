<template>
    <section class="tree-item" :class="[outStandardClass,outClassName]">
       <p 
         class="kd-bar" 
         :class="[barClass]"
         :style="{'paddingLeft': `${ rankNum * 15}px`}"  
       >
         <span :class="[nameClass]">{{item.name}}</span>
         <span @click="controlChildNodes">V</span>
       </p>
       <ul v-if="item.childs && item.childs.length > 0 && !foldChildNodes">
          <tree-item 
            v-for="(secondItem, s) in item.childs"
            :key="secondItem.id"
            :item='secondItem'
            :rankNum='(rankNum + 1)'
            :parentNode='item'
          ></tree-item>
       </ul>
    </section>
</template>
<script>
export default {
   name: 'tree-item',
   props: {
      item: [Object],
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
         this.$emit('click',)
      }
   },
   
}
</script>
