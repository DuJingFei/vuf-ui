---
title: kdfindIndexById
---

### 1. kdfindIndexById(objArry, conObj)
#### 1.1 使用方式
```
kdfindIndexById(testArr, queryObj ) 
// 1

kdfindIndexById(testArr, conObj1 ) 
// -1

let testArr = [
  {
    id: 20,
    name: 'sd'
  },
  {
    id: '18',
    name: 's1d'
  },
  {
    id: 15,
    name: 'sd2'
  },
  {
    id: '23',
    name: 'fds'
  }
];

let conObj = { id: 18 }
let conObj1 = { id: 28 }
```
#### 1.2 参数
参数 | 说明 | 类型 | 参考 | 默认 | 注意 |
- | :-: | :-: | :-: | :-: |--:
objArry |对象数组| Array | — | — | 对象值须包含有id的属性 |
conObj|id判定条件对象| Object | { id: 6 } | — | id属性可以包含`id`、`iD`、`Id`、`ID` |

**该方法在三端已绑定在Vue原型上，且条件对象只支持单一id属性**


