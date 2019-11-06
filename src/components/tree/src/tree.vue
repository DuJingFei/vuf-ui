<template>
   <div class="kd-tree">
      <section class="kd-product-line">
        <p class="kd-product-bar">
          <span class="kd-product-name">财务产品</span>
          <span>V</span>
        </p>
        <ul class="kd-rank-domain">
           <p class="kd-doamin-bar">
            <span class="kd-doamin-name">财务领域</span>
            <span>V</span>
           </p>
           <ul class="kd-rank-module">
              <!-- 业务对象 -->
              <p class="kd-module-bar">
                 <span class="kd-module-name">财务模块</span>
                 <span>V</span>
              </p>
              <ul class="kd-rank-bizentity">
                 <p class="kd-bizentity-bar">
                    <span class="kd-bizentity-name">财务对象</span>
                    <span>V</span>
                 </p>
              </ul>
           </ul>
        </ul>
      </section>
   </div>
</template>
<script>
export default {
   name: 'kd-tree',

}
</script>
<style lang="less">

</style>
