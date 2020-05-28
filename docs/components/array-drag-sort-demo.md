---
title: 数组拖拽排序
---

# 数组拖拽排序
<kd-array-drag-sort></kd-array-drag-sort>

**注意：H5拖拽不能在低端浏览器上生效**
### 1. 使用方式
```vue
<kd-array-drag-sort 
  :curItem="curItem"
  :sortArray="fileArray"
  @updateArraySort="updateArraySort"
  @cancelArraySort="cancelArraySort"
/>
export default {
  data() {
    return {
      fileArray: [
        {
          id: 12,
          name: 'node与deno.ppt',
          fileSize: 82621434
        },
        {
          id: 13,
          name: '金蝶云社区开发部2020年12月26日集团年终大会报名人员统计汇总表（附具体获奖人员名单）.docs',
          fileSize: 82621
        },
        {
          id: 15,
          name: '金蝶云社区开发部2020年12月26日集团年终大会报名人员统计汇总表（附具体获奖人员名单）.xls',
          fileSize: 82621
        },
        {
          id: 16,
          name: '金蝶云社区开发部文档.docs',
          fileSize: 82621
        },
        {
          id: 17,
          name: '金蝶云社区开发部资料包.zip',
          fileSize: 82621
        },
        {
          id: 14,
          name: '金蝶云社区默认文档',
          fileSize: 82621
        }
      ],
      curItem: {
        id: 17,
        name: '金蝶云社区开发部资料包.zip',
        fileSize: 82621
      }
    }
  },
  methods: {
    putArraySort() {
      alert(`下载内容：`)
    },
    cancelArraySort() {
      
    }
  }
}
```
### 2. 属性
参数 | 说明 | 类型 | 参考 | 默认 | 注意 |
- | :-: | :-: | :-: | :-: |--:
sortArray |排列数组对象| Array | — | 空数组[] | 需为数组对象 |
curItem|初始化当前对象节点| Object | — | 空对象{} | — |
updateArraySort|获取排序结果方法| 参数为排序结果对象数组 |  | — |
cancelArraySort|回调取消排序参数| — | — | 在此方法内可执行其他操作，如关闭当前排序弹窗等 |


