---
title: 按钮
---

# 哈哈
按钮
<kd-button></kd-button>

```vue
<kd-button primary>浅色按钮</kd-button>
<kd-button circle>默认按钮</kd-button>
<kd-button circle wathet>
    <i class="kd-icon-add kd-btn-icon" slot="icon"></i>
    图标
</kd-button>
<kd-button warn>橙色</kd-button>
<kd-button forbid>禁止</kd-button>
<kd-button large>大图标</kd-button>
<kd-button large>
    <i class="icon-upload-image kd-btn-icon" slot="icon"></i>
    icon大图标
</kd-button>

<kd-button plain basic>浅色按钮</kd-button>
<kd-button plain circle>默认按钮</kd-button>
<kd-button plain warn>橙色</kd-button>

<kd-button primary circle small>浅色按钮</kd-button>
<kd-button circle small>默认按钮</kd-button>
<kd-button warn small>橙色</kd-button>
<kd-button forbid small>禁止</kd-button>
<kd-button plain basic small>普通小</kd-button>
<kd-button circle wathet small>
    <i class="kd-icon-add kd-btn-icon" slot="icon"></i>
    标准
</kd-button>
<kd-button circle small>关注</kd-button>
<kd-button external primary>默认按钮</kd-button>
```
#### 1.说明
1. 对外目前只暴露`@click`事件，内部icon必须的类名必须含`kd-btn-icon`;
2. 推荐设置button以“类型 —— 尺寸 —— 圆角”定义，如`<kd-button primary circle small>关注</kd-button>`；
