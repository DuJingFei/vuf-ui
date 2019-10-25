<template>
   <div class="kd-block-dropdown">
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
                          :class="{'is-selected':item.isSelected}"
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
export default {
   name: 'kd-block-dropdown',
   props: {
      selectedList: {
        type: [Array],
        default: []
      }
   },
   data() {
      return {
        selectedList1: [
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
   methods: {
      optionSelector(item) {
         debugger
         let index = _.findIndex(this.selectedArray, { id: item.id })
         if (index !== -1) {
            this.selectedArray.splice(index, 1);
         }
         else {
            this.selectedArray.push(item);
         }
      },
    },
}
</script>
<style lang="less">
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