<template>
   <div class="kd-icons-content">
      <div 
        v-for="(item , i) in icons"
        :key="i"
        class="icon-item-content">
         <span>
           <i :class='item'></i>
           <p>{{item}}</p>
         </span>
      </div>
      
   </div>
</template>
<script>
export default {
   name: 'kd-icon-demos',
   data() {
      return {
         icons: [
            'kd-icon-add-h',
            'kd-icon-support-h',
            'kd-icon-support',
            'kd-icon-eyes',
            'kd-icon-comment',
            'kd-icon-collect-h',
            'kd-icon-collect',
            'kd-icon-adopte',
            'kd-icon-recommend',
            'kd-icon-useful-h',
            'kd-icon-useful',
            'kd-icon-useless-h',
            'kd-icon-useless',
            'kd-icon-circle',
            'kd-icon-to-top',
            'kd-icon-to-down',
            'kd-icon-edit',
            'kd-icon-delete',
            'kd-icon-share',
            'kd-icon-hot-f',
            'kd-icon-hot-s',
            'kd-icon-hot-t',
            'kd-icon-label',
            'kd-icon-ask',
            'kd-icon-answer',
            'kd-icon-artical',
            'kd-icon-loop',
            'kd-icon-clock',
            'kd-icon-right-c',
            'kd-icon-qr',
            'kd-icon-search',
            'kd-icon-label',
            'kd-icon-catalog',
            'kd-icon-classfy',
            'kd-icon-notify',
            'kd-icon-msg',
         ]
      }
   }
}
</script>
<style lang="less">
.kd-icons-content {
  overflow: hidden;
  .icon-item-content {
     float: left;
     width: 120px;
     height: 100px;
     border: 1px solid #eee;
      display: inline-block;
      text-align: center;
      vertical-align: middle;
      line-height: normal;
      color: #99a9bf;
      transition: color .15s linear;
      font-size: 12px;
      > span {
         display: block;
         margin-top: 30px;
         > i {
           margin-bottom: 15px;
         }
      }
 }
}
</style>