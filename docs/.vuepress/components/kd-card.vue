<template>
    <kd-card><slot></slot></kd-card>
</template>
<script>
import Card from '@components/card'
export default {
   name:'kd-card-demos',
   components: {
      'kd-card': Card
   }
}
</script>
<style lang="less">
.card {
    padding: 18px;
    .title {
       font-size: 20px;
       font-weight: 600;
       line-height: 1.6;
    }
}
</style>