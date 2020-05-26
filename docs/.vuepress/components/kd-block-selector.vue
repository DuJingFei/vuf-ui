
<template>
    <div>
      <kd-block-delector 
        :selectedArray='selectedArray'
      >
        <kd-block-option 
          v-for="(item,i) in selectedList"
          :key="i"
          :option='item'
        />
      </kd-block-delector>
    </div>
</template>
<script>
import _ from 'lodash'
import Vue from 'vue';
import BlockSelector from '@components/blockSelector'
import BlockDropdown from '@components/blockDropdown'
export default {
   name:'block-selector',
   components: {
      'kd-block-delector': BlockSelector,
      'kd-block-option': BlockDropdown
   },
   data() {
      return {
         selectedArray: [
            {
                 id: 102,
                 name:'财务新世界'
             },
             {
                 id: 103,
                 name:'财务前沿'
             }
         ],
         selectedList: [
             {
                 id: 1,
                 name:'财务',
                 childs: [
                     {id: 102 , name: '电子发票'},
                     {id: 105 , name: '会计成长'},
                     {id: 106 , name: '报表分析'},
                     {id: 107 , name: '预算估值'},
                     {id: 108 , name: '偷税举报'}
                 ]
             },
             {
                 id: 2,
                 name:'金融',
                 childs: [
                     {id: 103 , name: '指数基金'},
                     {id: 112 , name: '定投指南'},
                     {id: 14 , name: '沪深资讯'}
                 ]
             },
             {
                 id: 13,
                 name:'前端开发',
                 childs: [
                     {id: 10343 , name: 'Vue高阶'},
                     {id: 1766 , name: 'React高阶'},
                     {id: 1432 , name: 'ES6基础'},
                     {id: 1299 , name: 'TypeScript'}
                 ]
             },
             {
                 id: 14,
                 name:'后端开发',
                 childs: [
                     {id: 1033 , name: 'Java入门'},
                     {id: 1129 , name: 'C#本质论'},
                     {id: 1263 , name: 'Node.js'}
                 ]
             }
         ], 
      }
   },
   computed: {
       // 所有已选项id集
       selectedIds() {
          return this.selectedArray && this.selectedArray.map(item => {
              return item.id
          })
       }
   },
   watch: {
      selectedIds: {
         handler(newVal , val) {
         //  this.statusHandler();
         },
         immediate: true,
         deep: true
      }
   },
   created() {
      
   },
   methods: {
      optionSelector(item) {
         let index = _.findIndex(this.selectedArray, { id: item.id })
         if (index !== -1) {
            this.selectedArray.splice(index, 1);
         }
         else {
            this.selectedArray.push(item);
         }
      },
      statusHandler() {
         if(this.selectedIds && this.selectedList && this.selectedList.length > 0) {
             this.selectedList.forEach((item,f) => {
                if(item.childs && item.childs.length > 0) {
                   item.childs.forEach((option,s) => {
                       let itemIsSelected = Boolean(this.selectedIds.indexOf(option.id) !== -1);
                       Vue.set(this.selectedList[f].childs[s], 'isSelected' , itemIsSelected ? 1: 0)
                   })
                }
             });
           }
      }
   },
}
</script>

