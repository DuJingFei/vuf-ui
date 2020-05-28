---
title: DateFormatAdapter
---

### 1. DateFormatAdapter(date, formatString)
#### 1.1 使用方式
```
DateFormatAdapter(new Date(), 'YYYY-MM-DD hh:mm:ss')
// "2020-05-28 16:16:59"

DateFormatAdapter(new Date(), 'YYYY/MM/DD hh:mm')
// "2020/05/28 16:17"

DateFormatAdapter(1590653879252, 'YYYY-MM-DD hh:mm:ss')
// "2020-05-28 16:17:59"
```
#### 1.2 参数
参数 | 说明 | 类型 | 参考 | 默认 | 注意 |
- | :-: | :-: | :-: | :-: |--:
date |传入的日期值| Number时间戳/ 日期格式 | new Date() | — | 不支持字符串时间戳'1590653879252' |
formatString|日期格式| String | 'YYYY/MM/DD' | 'YYYY-MM-DD hh:mm:ss' | 只能是 Y、M、D、h、m、s（区分大小写）|

**该方法在三端已绑定在Vue原型上**


