<template>
    <section class="tree-item" :class="[outStandardClass,outClassName]">
       <p :class="[barClass]">
         <span :class="[nameClass]">{{item.name}}</span>
         <span>V</span>
       </p>
       <ul v-if="item.childs && item.childs.length > 0">
          <tree-item 
            v-for="(secondItem, s) in item.childs"
            :key="secondItem.id"
            :item='secondItem'
            :rankNum='(rankNum + 1)'
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
           barClass: `kd-${this.item.type}-bar`,
           nameClass: `kd-${this.item.type}-name`,
       }
   },
   
}
</script>
