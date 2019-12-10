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
        'basic': basic,
        'forbid': forbid,
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
        circle: Boolean,
        plain: Boolean,
        basic: Boolean,
        forbid: Boolean,
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
    },
}
</script>
