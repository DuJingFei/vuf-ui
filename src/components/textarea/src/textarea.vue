<template>
   <div class="kd-textarea">
       <section>
          <textarea 
           v-model="bindValue"
           :placeholder="placeHolder"
           :rows='rows'
           :maxlength="maxLength"
           @input="changeContent()"
           @focus="focus()"
          ></textarea>
          <div v-show="needRemind && bindValue.length > 0" class="limit-remind" >还可输入{{capacity}}个字</div>
       </section>
       <section v-if="remoteSearch">
           <slot></slot>
       </section>
   </div>
</template>
<script>
export default {
   name:'kd-textarea',
   model: {
      prop: 'bindValue',
      event: 'bindEvent'
   },
   props: {
       bindValue: [String, Number],
       needRemind: { // 是否需要输入文字数提示
          type: Boolean,
          default: true
       },
       maxLength: { // 限制输入字数
          type: Number,
          default: 50
       },
       remoteSearch: { // 是否远程搜搜
          type: Boolean,
          default: false
       },
       rows: {
           type: Number,
           default: 1
       },
       placeHolder: {
           type: String,
           default:''
       }
   },
   computed: {
      capacity() {
          return this.maxLength - this.bindValue.length;
      }
   },
   methods: {
      changeContent() {
          
          console.log('1212');
      },
      focus() {
          
          console.log(2);
      }
   }
}
</script>
<style lang="less">
.kd-textarea {
    display: block;
    textarea {
        cursor: pointer;
        -webkit-appearance: none;
        background-color: #fff;
        border-radius: 2px;
        border: 1px solid #dcdfe6;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        color: #1A1A1A;
        display: inline-block;
        font-size: 14px;
        height: 60px;
        line-height: 26px;
        outline: 0;
        padding: 8px 13px;
        transition: border-color 0.2s
            cubic-bezier(0.645, 0.045, 0.355, 1);
        width: 100%;
        margin: 2px 0px;
        &:focus {
            border-radius: 2px;
            border: 1px solid #2386EE;
            box-shadow:0px 0px 6px 0px rgba(5,96,195,0.5);
        }
    }
    .limit-remind {
        position: absolute;
        right: 15px;
        bottom: 15px;
        font-size: 12px;
        color: #797979;
    }
}
</style>