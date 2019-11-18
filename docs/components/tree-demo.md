---
title: 树形组件
---

# 树形组件
树形控件
<kd-tree></kd-tree>

```vue
<kd-tree 
  :data='testData' 
  @node-trigger="handleNodeClick">
</kd-tree>
export default {
    data() {
      return {
        testData: require('../public/treeData.json'),
        curNode:''
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