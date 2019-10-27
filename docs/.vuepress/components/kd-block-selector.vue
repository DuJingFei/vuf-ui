
<template>
    <div>
      <kd-block-delector 
         :selectedArray='selectedArray'

      >
         <kd-block-option 
           v-for="(item,i) in selectedList"
           :key="i"
           :option='item'
         ></kd-block-option>
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
                     {id: 102 , name: '财务新世界'},
                     {id: 105 , name: '生物多姿'},
                     {id: 106 , name: '生物多1姿'},
                     {id: 107 , name: '生物2多姿'}
                 ]
             },
             {
                 id: 2,
                 name:'世界',
                 childs: [
                     {id: 103 , name: '财务前沿'},
                     {id: 112 , name: '生物多姿'},
                     {id: 14 , name: '生物多姿'},
                     {id: 12 , name: '生物多姿'}
                 ]
             },
             {
                 id: 13,
                 name:'财务动态'
             },
             {
                 id: 14,
                 name:'金蝶云客户'
             },
             {
                 id: 11,
                 name:'用户成就'
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

