
<template>
    <div>
      <kd-block-delector></kd-block-delector>
    </div>
</template>
<script>
import BlockSelector from '@components/blockSelector'
export default {
   name:'block-selector',
   components: {
      'kd-block-delector': BlockSelector
   }
}
</script>

