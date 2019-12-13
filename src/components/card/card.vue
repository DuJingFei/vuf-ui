<template>
   <div 
     class="basic-kd-card kd-card"
     :class="[shadow, {
        'inline':inline,
     }]"
   >
     <slot></slot>
   </div>
</template>
<script>
export default {
   name: 'card',
   props: {
      inline: Boolean,
      shadow: {
         type: String,
         default: 'always',
         validator (val) {
            return new Set(['always', 'never', 'hover']).has(val)
         }
      }
   },
}
</script>
<style lang="less">

</style>