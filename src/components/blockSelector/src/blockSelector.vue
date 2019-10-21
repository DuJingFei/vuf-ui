<template>
   <div class="kd-block-selector">
      <div class="kd-selector-control" @click.stop="openDropdown">
         <div class="selector-remind">
            <span>添加话题</span>
         </div>
         <a 
            class="block-options-selector"
            v-for="(item,i) in selectorList"
            :key="i"
         >{{item.name}}</a>
      </div>

      <div class="kd-block-dropdown">
        <ul class="block-dropdown-container">
           <li 
             v-for="(firstRankItem, f) in selectedList"
             :key="i"
           >
             <p>{{firstRankItem.name}}</p>
             <div>
                 <a 
                   v-for="(item,i) in firstRankItem.secondList"
                   :key="i"
                  >{{item.name}}</a>
             </div>
           </li>
        </ul>
      </div>
   </div>
</template>
<script>
export default {
   name: 'block-selector',
   data() {
      return {
         selectorList: [
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
                 secondList: [
                     {id: 1 , name: '生物多姿'},
                     {id: 1 , name: '生物多姿'},
                     {id: 1 , name: '生物多姿'},
                     {id: 1 , name: '生物多姿'}
                 ]
             },
             {
                 id: 1,
                 name:'财务前沿',
                 secondList: [
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
         ]
      }
   }
}
</script>
<style lang="less">
.kd-block-selector {
  position: relative;
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
  }
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
</style>