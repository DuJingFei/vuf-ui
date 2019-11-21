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
  @node-trigger="handleNodeClick">
</kd-tree>
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
树形组件目前多用于知识库前端台页面，设计初衷即对数据层级做鲜明表达。以`data`传入相关数据，以`node-trigger`获取所选层级对象数据，并触发相应事件。<font color='red'>注意：数据层级关系需以`childs`属性名做层级递进</font>。

### 3. 优势
该树形组件相比其他组件库（element、iview）的优势在于可以自定义不同层级数据的样式。如第一层级，其className为`kd-1-bar`，第二层为：`kd-2-bar`，以此类推。
