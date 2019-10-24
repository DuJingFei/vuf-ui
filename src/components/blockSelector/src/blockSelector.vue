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
         >{{item.name}}</a>
      </div>

      <div class="kd-block-dropdown">
        <div class="kd-dropdown-select">
           <ul class="kd-select-scrollbar">
                <li 
                    class="kd-type-list"
                    v-for="(firstRankItem, f) in selectedList"
                    :key="f"
                >
                    <p class="kd-option-item-type">
                       <span>
                         {{firstRankItem.name}}
                       </span>
                    </p>
                    <div class="kd-option-list">
                        <kd-button 
                          class="kd-option-item"
                          v-for="(item,i) in firstRankItem.childs"
                         :key="i"
                          size='small'
                          plain circle
                          @click="optionSelector(item)"
                        >{{item.name}}</kd-button>
                    </div>
                </li>
            </ul>
        </div>
      </div>
   </div>
</template>
<script>
import _ from 'lodash'
import Button from '../../button/src/button'
export default {
   name: 'block-selector',
   props: {
     selectedArray1: {
         type: [Array],
         default: []
     },
     optionsArray: {
         type: [Array],
         default: []
     },
   },
   components: {
      'kd-button': Button
   },
   data() {
      return {
         selectedArray: [
             {
                 id: 1,
                 name:'财务新世界'
             },
             {
                 id: 1,
                 name:'财务前沿'
             },
             {
                 id: 1,
                 name:'财务动态'
             },
             {
                 id: 1,
                 name:'金蝶云客户'
             },
             {
                 id: 1,
                 name:'用户成就'
             }
         ],
         selectedList: [
             {
                 id: 1,
                 name:'财务新世界',
                 childs: [
                     {id: 1 , name: '生物多姿'},
                     {id: 1 , name: '生物多姿'},
                     {id: 1 , name: '生物多姿'},
                     {id: 1 , name: '生物多姿'}
                 ]
             },
             {
                 id: 1,
                 name:'财务前沿',
                 childs: [
                     {id: 1 , name: '曼联'},
                     {id: 1 , name: '生物多姿'},
                     {id: 1 , name: '生物多姿'},
                     {id: 1 , name: '生物多姿'}
                 ]
             },
             {
                 id: 1,
                 name:'财务动态'
             },
             {
                 id: 1,
                 name:'金蝶云客户'
             },
             {
                 id: 1,
                 name:'用户成就'
             }
         ],
         isInitedOptionsArray: false, // 是否已经初始化了所有选项，目的在于要给所有选项初始化带上isSeleted标识
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
           if(newVal && this.optionsArray.length > 0 && !this.isInitedOptionsArray) {

             this.optionsArray.forEach((item,f) => {
                if(item.childs && item.childs.length > 0) {
                   item.childs.forEach((option,s) => {
                       if(this.optionsArray.indexof(option.id) !== -1) {
                          Vue.set(this.optionsArray[f].childs[s], 'isSelected' , 1)
                       }
                   })
                }
                
             });
             
           }
         },
         immediate: true,
         deep: true
      },
   },
   methods: {
      optionSelector(item) {
         let index = _.findIndex(this.selectedArray, { id: item.id })
         if (index) {
            this.selectedArray.splice(index, 1);
            item.selected = !item.selected
         }
         else {
            
         }
      },

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
                    
                }
            }
          }
       }
    }
}
</style>