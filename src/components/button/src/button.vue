<template>
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
        'wathet': wathet,
        'basic': basic,
        'forbid': forbid,
        'small': small,
        'large': large,
        'external': external
      }]"
    >
       <slot name='icon' class="kd-btn-icon"></slot>
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
        wathet: Boolean,
        circle: Boolean,
        plain: Boolean,
        basic: Boolean,
        forbid: Boolean,
        small: Boolean,
        large: Boolean,
    },
    computed: {
        tag () {
            return this.external ? 'a' : 'button'
        },
        isDefault() {
            const type = [this.plain, this.link]
            return type.every((each) => !each)
        }, 
        btnSize() {
            return this.size || 'normal'
        }
    },
}
</script>
