<template>
    <li class="kd-type-list">
        <p class="kd-option-item-type">
            <span>
                {{option.name}}
            </span>
        </p>
        <div class="kd-option-list">
            <kd-button 
                class="kd-option-item"
                :class="{ 'is-selected':item.isSelected }"
                v-for="(item,c) in option.childs"
                :key="c"
                size='small'
                plain circle
                @click="optionSelector(item)"
            >
               {{item.name}}
            </kd-button>
        </div>
    </li>
</template>
<script>
import _ from 'lodash'
import Vue from 'vue'
import Button from '../../button/src/button'
export default {
   name: 'kd-block-dropdown',
   props: {
      option: {
         type: Object,
         default: {
             id: 1,
             name: '',
             isSelected: 0
         }
      }
   },
   components: {
      'kd-button': Button
   },
   computed: {
     // 所有已选项id集
      selectedIds() {
         return this.$parent && this.$parent.selectedArray && this.$parent.selectedArray.map(item => {
           return item.id
         })
      }
   },
   watch: {
      selectedIds: {
         handler(newVal , val) {
           this.statusHandler();
         },
         immediate: true,
         deep: true
      }
   },
   methods: {
      statusHandler() {
         if(!this.option.childs) {
          return Vue.set(this.option,'isSelected', ((this.selectedIds.indexOf(this.option.id) !== -1) ? 1 : 0))
         }
        return this.option.childs.forEach((item,i) => {
            let isSelected = (this.selectedIds.indexOf(item.id) !== -1) ? 1 : 0;
            Vue.set(this.option.childs[i],'isSelected', isSelected);
         });
      },
      optionSelector(item) {
         let index = _.findIndex(this.$parent.selectedArray, { id: item.id })
         if (index !== -1) {
            this.$parent.selectedArray.splice(index, 1);
         }
         else {
            this.$parent.selectedArray.push(item);
         }
      },
    },
}
</script>
