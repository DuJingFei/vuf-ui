<template>
    <section class="tree-item" :class="{`kd-${item.type}`: true}">
       <p :class="{`kd-${item.type}-bar`: true}">
         <span :class="{`kd-${item.type}-name`: true}">{{item.name}}</span>
         <span>V</span>
       </p>
       <ul :class="{`kd-rank-${item.type}`}" v-if="item.childs && item.childs.length > 0">
          <tree-item 
            :item='secondItem' 
            v-for="(secondItem, s) in item.childs"
          ></tree-item>
       </ul>
    </section>
</template>
<script>
export default {
   name: 'tree-item',
   props: {
      item: [Object]
   }
}
</script>
