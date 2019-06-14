<template>
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
    </component>
</template>

<script>
export default {
    name: 'ag-button',
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
        primary: Boolean,
        secondary: Boolean,
        dashed: Boolean,
        link: Boolean,
        loading: Boolean,
        icon: String,
        circle: Boolean,
        external: Boolean,
    },
    computed: {
        tag () {
            return this.external ? 'a' : 'button'
        },
        isDefault() {
            const type = [this.primary, this.secondary, this.dashed, this.link]
            return type.every((each) => !each)
        },
        btnSize() {
            return this.size || 'normal'
        }
    }
}
</script>
