<template>
    <!--
    <component
        :is="tag"
        class="ange-btn"
        :class="[ btnSize, color, {
            'default': isDefault,
            'primary': primary,
            'secondary': secondary,
            'dashed': dashed,
            'link': link,
            'icon': icon,
            'circle': circle
        }]"
        @click="$emit('click', $event)"
        :disabled="loading">
        <span class="ange-btn-content">
            <slot />
        </span>
    </component>  -->

    <component 
      :is="tag"
      class="kd-button"
      @click="$emit('click', $event)"
      :class="[btnSize, color,{
        'default': isDefault,
        'plain': plain,
        'primary': primary,
        'circle': circle,
        'warn': warn,
        'basic': basic,
        'add-icon':uploadImage
      }]"
    >
       <span class="icon-upload-image" v-if="uploadImage"></span>
       <slot/>
    </component>
</template>

<script>
export default {
    name: 'kd-button',
    props: {
        size: {
            type: String,
            validator (val) {
                return new Set(['large', 'normal', 'small']).has(val)
            }
        },
        color: {
            type: String,
            validator (val) {
                return new Set(['success', 'warn', 'danger']).has(val)
            }
        },
        external: Boolean,
        primary: Boolean,
        warn: Boolean,
        circle: Boolean,
        uploadImage: Boolean,
        plain: Boolean,
        basic: Boolean,
    },
    computed: {
        tag () {
            return this.external ? 'a' : 'button'
        },
        isDefault() {
            const type = [this.plain, this.secondary, this.dashed, this.link]
            return type.every((each) => !each)
        }, 
        btnSize() {
            return this.size || 'normal'
        }
    }
}
</script>
<style lang="less">
.kd-button {
    padding: 0 16px;
    line-height: 34px;
    border-radius: 2px;
    font-size: 14px;
    cursor: pointer;
    &.default {
       color: #fff;
       background: #2386EE;
       border: 1px solid #2386EE;
       .btn-change-status-block();
       &.warn {
          background-color: #fe7d00;
          border: 1px solid #fe7d00;
       }
    }
    &.plain {
       color: #606266;
       background: #fff;
       &.basic {
          color: #2386EE;
          border: 1px solid #2386EE;
       }
       &.warn {
          color: #fe7d00;
          background-color: #fff;
          border: 1px solid #fe7d00;
       }
    }
    &.large {
        padding:0 22px;
        line-height: 45px;
        border-radius: 4px;
        font-size: 16px;
    }
    &.primary {
        color: #606266;
        background: #fff;
        border: 1px solid #dcdfe6; 
        .btn-change-status-gray();
    }
    &.circle {
        border-radius: 16px;
    }
}

.btn-change-status-block {
    text-align: center;
    transition: .1s;
    &:hover {
        background: #5BA2F2;
        border-color: #5BA2F2;
    }
    &:visited {
        background: #2472CA;
        color: #fff;
    }
    &[disabled] {
        background: #9BC3F0;
        border-color: #9BC3F0;
    }
    span {
        vertical-align: middle;
    }
}

.btn-change-status-gray {
    text-align: center;
    transition: .1s;
    &:hover{
        background: #8590A6;
    }
    &.selected{
        background: #97A0A6;
    }
    &[disabled] {
        background: #CACFD2;
    }
    span{
        vertical-align: middle;
    }
}

</style>
