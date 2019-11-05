<template>
   <div 
     class="basic-card card"
     :class="{
        'inline':inline
     }"
   >
     <slot></slot>
   </div>
</template>
<script>
export default {
   name: 'card',
   props: {
      inline: [Boolean]
   },
}
</script>
<style lang="less">

</style>