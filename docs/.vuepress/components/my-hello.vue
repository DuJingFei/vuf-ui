<template>
    <div>
      <g-button>默认按钮</g-button>
    </div>
</template>
<script>
import Button from '../../../src/components/button'
import '@scss/jf.scss'
export default {
   name:'button-demos',
   components: {
      'g-button': Button
   }
}
</script>

