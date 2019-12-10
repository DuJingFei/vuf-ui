<template>
    <div class="kd-button-area">
       <section style="margin: 5px 0;min-width:600px" class="full-background">
         <kd-button primary>浅色按钮</kd-button>
         <kd-button circle>默认按钮</kd-button>
         <kd-button warn>橙色</kd-button>
         <kd-button forbid>禁止</kd-button>
         <kd-button size='large'>大图标</kd-button>
         <kd-button size='large'>
            <i class="icon-upload-image kd-btn-icon" slot="icon"></i>
            icon大图标
         </kd-button>
       </section>

       <section  style="margin: 5px 0;min-width:600px" class="plain-background">
         <kd-button plain primary>浅色按钮</kd-button>
         <kd-button plain basic>浅色按钮</kd-button>
         <kd-button plain circle>默认按钮</kd-button>
         <kd-button plain warn>橙色</kd-button>
       </section>
    </div>
</template>
<script>
import Button from '@components/button'
export default {
   name: 'kd-button-demos',
   components: {
      'kd-button': Button
   }
}
</script>

