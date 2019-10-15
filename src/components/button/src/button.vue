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
        'add-icon':uploadImage,
        'forbid': forbid,
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
    }
}
</script>
