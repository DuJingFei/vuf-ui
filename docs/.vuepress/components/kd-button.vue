<template>
    <div class="kd-button-area">
       <section style="margin: 5px 0;min-width:600px" class="full-background">
         <kd-button primary>浅色按钮</kd-button>
         <kd-button circle>默认按钮</kd-button>
         <kd-button wathet circle>
           <i class="icon-add-small-blue kd-btn-icon" slot="icon"></i>
            图标
         </kd-button>
         <kd-button warn>橙色</kd-button>
         <kd-button forbid>禁止</kd-button>
         <kd-button large>大图标</kd-button>
         <kd-button large>
            <i class="icon-upload-image kd-btn-icon" slot="icon"></i>
            icon大图标
         </kd-button>
       </section>

       <section  style="margin: 10px 0;min-width:600px" class="plain-background">
         <kd-button plain basic>浅色按钮</kd-button>
         <kd-button plain circle>默认按钮</kd-button>
         <kd-button plain warn>橙色</kd-button>
       </section>

       <section>
         <kd-button primary small circle>浅色按钮</kd-button>
         <kd-button small circle>默认按钮</kd-button>
         <kd-button warn small>橙色</kd-button>
         <kd-button forbid small>禁止</kd-button>
         <kd-button plain basic small>普通小</kd-button>
         <kd-button wathet small circle>
           <i class="icon-add-small-blue kd-btn-icon" slot="icon"></i>
            标准
         </kd-button>
         <kd-button small circle>关注</kd-button>
         <kd-button external primary>默认按钮</kd-button>
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

