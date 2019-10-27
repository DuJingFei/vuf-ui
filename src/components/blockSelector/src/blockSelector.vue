<template>
   <div class="kd-block-selector">
      <div class="kd-selector-control" @click.stop="openDropdown">
         <div class="selector-remind">
            <span>添加话题</span>
         </div>
         <a 
            class="block-options-selector"
            v-for="(item,i) in selectedArray"
            :key="i"
            @click.prevent='removeItem(item)'
         >{{item.name}}</a>
      </div>
      <div class="kd-block-dropdown">
        <div class="kd-dropdown-select">
           <ul class="kd-select-scrollbar">
               <slot></slot>
            </ul>
        </div>
      </div> 
   </div>
</template>
<script>
import _ from 'lodash'
import Vue from 'vue'
import Button from '../../button/src/button'
export default {
   name: 'block-selector',
   props: {
     selectedArray: {
         type: [Array],
         default: []
     }
   },
   components: {
      'kd-button': Button
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
      },
      removeItem(item) {
         let itemIndex = _.findIndex(this.selectedArray, { id: item.id });
         if(itemIndex === -1) {
            this.selectedArray.push(item);
         }
         else {
           this.selectedArray.splice(itemIndex, 1);
         }
      },
      openDropdown() {
         
      }
   },
}
</script>
<style lang="less">
.kd-block-selector {
  position: relative;
}
.kd-selector-control {
    border: 1px solid #dcdfe6;
    border-radius: 4px;
    background-color: #fff;
    cursor: pointer;
    outline: 0;
    padding: 5px 13px;
    position: relative;
    line-height: normal;
    white-space: normal;
    align-items: center;
    flex-wrap: wrap;
    min-height: 36px;
    overflow: hidden;
    .block-options-selector {
        font-size: 14px;
        line-height: 26px;
        float: left;
        background-color:  #2386EE ;
        color:#FFFFFF ;
        border-color: #2386EE;
        border-radius: 20px;
        margin:4px 4px;
        padding: 0 18px;
        border: 1px solid transparent;
        > span {
        color: #FFFFFF;
        }
    }
}
.kd-block-dropdown {
    width: 100%;
    transform-origin: center top 0;
    margin-top: 12px;
    z-index: 1000;
    position: absolute;
    border: 1px solid #e4e7ed;
    border-radius: 4px;
    background-color: #fff;
    box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
    box-sizing: border-box;
    margin: 5px 0;
    .kd-dropdown-select {
       overflow: scroll;
       max-height: 343px;
       margin-bottom: -17px;
       .kd-select-scrollbar {
          position: relative;
          list-style: none;
          padding: 6px 0;
          margin: 0;
          box-sizing: border-box;
          .kd-type-list {
            font-size: 14px;
            margin: 0 10px;
            position: relative;
            white-space: nowrap;
            overflow: hidden;
            color: #606266;
            line-height: 26px;
            box-sizing: border-box;
            list-style: none;
            .kd-option-item-type {
                display: block;
                width: 100%;
                padding: 0 10px;
                text-align: left;
                box-sizing: border-box;
                > span {
                   color: #8590a6;
                }
            }
            .kd-option-list {
                overflow: hidden;
                .kd-option-item {
                    background: none;
                    color: #999;
                    border: 1px solid #999;
                    margin: 7px 4px;
                    &.is-selected {
                        background-color: #2386ee;
                        color: #fff;
                        border-color: #2386ee;
                    }
                }
            }
          }
       }
    }
}
</style>