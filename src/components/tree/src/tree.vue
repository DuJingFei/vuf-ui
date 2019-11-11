<template>
   <div class="kd-tree card root">
      <tree-item 
        v-for="(item, i) in data"
        :rankNum='initRank'
        :key="item.id"
        :item='item'
      >
      </tree-item>
      <!--
      <section class="kd-product-line" v-for="(productLine , pl) in testData">
        <p class="kd-product-bar">
          <span class="kd-product-name">{{productLine.name}}</span>
          <span>V</span>
        </p>
        <ul class="kd-rank-product" v-if="productLine.childs && productLine.childs.length > 0">
           <section class="kd-product" v-for="(product , p) in productLine.childs">
              <p class="kd-product-bar">
                <span class="kd-product-name">{{product.name}}</span>
                <span>V</span>
              </p>
              <ul class="kd-rank-domain" v-if="product.childs && product.childs.length > 0">
                <section class="kd-domain" v-for="(domain , d) in product.childs">
                        <p class="kd-doamin-bar">
                            <span class="kd-doamin-name">{{domain.name}}</span>
                            <span>V</span>
                        </p>
                        <ul class="kd-rank-module" v-if="domain.childs && domain.childs.length > 0">
                            <section v-for="(moduleObj, d) in domain.childs">
                               <p class="kd-module-bar">
                                  <span class="kd-module-name">{{moduleObj.name}}</span>
                                  <span>V</span>
                                </p>
                                <ul class="kd-rank-bizentity" v-if="moduleObj.childs && moduleObj.childs.length > 0">
                                    <p class="kd-bizentity-bar" v-for="(bizentity, b) in moduleObj.childs">
                                        <span class="kd-bizentity-name">{{bizentity.name}}</span>
                                        <span>V</span>
                                    </p>
                                </ul>
                            </section>
                        </ul>
                </section>
              </ul>
           </section>
        </ul>
      </section> -->
   </div>
</template>
<script>
import eventBus from '../../../libs/utils/bus.js'; 
import TreeItem from './treeItem'
export default {
  name: 'kd-tree',
  props: {
    data: [Array],
    initFold: [Boolean], 
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
