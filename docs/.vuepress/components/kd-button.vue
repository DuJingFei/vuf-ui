<template>
    <div>
       <section class="full-background">
         <kd-button primary>浅色按钮</kd-button>
         <kd-button circle>默认按钮</kd-button>
         <kd-button warn>橙色</kd-button>
         <kd-button uploadImage>上传图片</kd-button>
         <kd-button size='large'>大图标</kd-button>
         <kd-button size='large' uploadImage>icon大图标</kd-button>
       </section>

       <section class="plain-background">
         <kd-button plain primary>浅色按钮</kd-button>
         <kd-button plain basic>浅色按钮</kd-button>
         <kd-button plain circle>默认按钮</kd-button>
         <kd-button plain warn>橙色</kd-button>
         <kd-button plain uploadImage>上传图片</kd-button>
         <kd-button plain size='large'>大图标</kd-button>
         <kd-button plain size='large' uploadImage>icon大图标</kd-button>
       </section>


    </div>
    
</template>
<script>
import Button from '@components/button'
//import '@scss/jf.scss'
import '@less/common.less'
export default {
   name:'kd-button-demos',
   components: {
      'kd-button': Button
   }
}
</script>
<style lang="less">
section {
   margin: 5px 0;
}
</style>

