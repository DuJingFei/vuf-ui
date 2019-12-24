---
title: 树形组件
---

# 树形组件
树形控件
<kd-tree></kd-tree>
### 1. 使用方式
```vue
<kd-tree 
  :data='testData' 
  @node-trigger="handleNodeClick"
  initStatusAtr='code'
  :initUnfolds='{
    1: "1212",
    2: "gyyxl",
    3: "cwkj"
  }'
/>
export default {
    data() {
      return {
        testData: require('../public/treeData.json'),
        curNode: ''
      }
    },
    methods: {
      handleNodeClick(nodeVal) {
        if(nodeVal) {
           this.curNode = nodeVal;
        }
      }
    }
}
```

### 2. 约束
1. 以`data`传入相关数据，以`node-trigger`获取所选层级对象数据，并触发相应事件；
2. 关系数据必须包含唯一标识属性`id`，且子集属性名必须为`childs`;
3. `initUnfolds`和`initStatusAtr`分别为初始化展开节点集和依据，且二者若存在则必须同时存在，其中`initUnfolds`用于传入要展开的节点路径（路径必须从根级开始保持完整，属性名为层级数），`initStatusAtr`为层级状态判定依据的属性名。


### 3. 优势
该树形组件相比其他组件库（element、iview）的优势在于可以自定义不同层级数据的样式。如第一层级，其className为`kd-1-bar`，第二层为：`kd-2-bar`，以此类推。


### 4. 属性
参数 | 说明 | 类型 | 参考 | 默认 | 注意 |
- | :-: | :-: | :-: | :-: |--:
data |关系数据（须包含唯一标识字段id和子集字段childs）| json | — | — | — |
initUnfolds|初始化要展开的层级| json |{1:"one",2:"two",3:"three" }注意属性名须为层级数| — | — |
initStatusAtr|初始状态判定属性| String | id | — |
node-trigger|触发事件，参数获取当前触发节点信息| — | — | — |
