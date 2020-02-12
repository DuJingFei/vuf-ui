---
title: 选择器
---

# 选择器
选择器
<kd-select></kd-select>

### 1. 使用方式
```vue
<kd-select v-model="endVal">
  <kd-option 
    v-for="(item,i) in tempOptions" 
    :key="i" 
    :value='item.value' 
    :label='item.label'
  />
</kd-select>
export default {
  data() {
    return {
      endVal: '',
      tempOptions: [
        {
            value: 'Juventus',
            label:'尤文图斯',
        },
        {
            value: 'RealMadrid',
            label:'皇家马德里',
        },
        {
            value: 'Barcelona',
            label:'巴塞罗那',
        },
        {
            value: 'ManchesterUnited',
            label:'曼联',
        }
      ]
    }
  },
  mounted() {
    let getVal = setTimeout(()=> {
      this.endVal = 'Juventus'
    },2000)
  }
}
```

