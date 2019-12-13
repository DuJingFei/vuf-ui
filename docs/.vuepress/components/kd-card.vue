<template>
    <div class="background-wall">
      <kd-card>
         <header>默认一直悬浮</header>
         <p>“用金蝶软件打天下算盘”改变了中国千万财务人员的工作方式。2017年金蝶集团主席徐少春先生提出“让天下没有假账”的倡议，我们诚邀您一起共建共享财务管理新世界。</p>
      </kd-card>

      <kd-card shadow='hover'>
         <header>鼠标悬停悬浮 shadow='hover'</header>
         <p>金蝶云社区是金蝶发起的专业知识分享平台，链接中国财务和企业IT精英人脉圈子，分享财务信息化、企业上云及中国管理模式实践，交流财税、金融、企业信息化技术等知识。</p>
      </kd-card>

      <kd-card shadow='never'>
         <header>永不悬浮 shadow='never'</header>
         <p>学海无涯，提问作舟。互助，成长，改变就发生在您我他的一问一答之间。学习，永远都是最好的投资。不管您是小白还是大牛，这里总有适合您的课程，让您成为更好的自己。</p>
      </kd-card>
   </div>
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
.kd-card {
   margin-bottom: 15px;
}
</style>