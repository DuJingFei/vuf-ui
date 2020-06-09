---
title: 日历选择器
---

# 日历选择器
<div>
  <kd-calendar></kd-calendar>
</div>

### 1. 使用方式
```vue
<kd-calendar v-model="curTime" />

<footer>
  选取时间：
  <span>{{ new Date(curTime) }}</span>
</footer>

export default {
  data() {
    return {
      curTime: new Date().getTime()
    }
  }
}
```
### 2. 注意事项
必须传入**时间戳**

### 2. 属性
参数 | 说明 | 类型 | 参考 | 默认 | 注意 |
- | :-: | :-: | :-: | :-: |--:
shadow |悬浮方式| String | never/hover | 悬浮 | — |
