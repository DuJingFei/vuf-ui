---
title: 文件（附件）展示
---

# 文件（附件）展示
<kd-file-display></kd-file-display>

### 1. 使用方式
```vue
<kd-file-display 
  :fileArray='fileArray'
  @downLoadItem="downLoadFile"
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
      ]
    }
  },
  methods: {
    downLoadFile(fileItem) {
      alert(`下载内容：${fileItem.name}`)
    }
  }
}
```