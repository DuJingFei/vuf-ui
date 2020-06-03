<template>
  <div class="kd-file-display">
    <template v-if="fileArray && fileArray.length > 0">
      <p 
        v-for="(item,index) in fileArray" 
        :key="(item.id !== undefined || item.id !== null) ? item.id : index"
        class="kd-attach-item" 
      >
        <i 
          class="kd-file-icon"
          :class="fileType(item.name)"
        />
        <a 
          class="kd-file-content"
          href="javascript:void(0);"
          @click="downloadFile(item)"
        >{{ cut(item.name, cutLength) }}</a>  
        <span class="kd-file-size">({{ fileSizeConvert(item.fileSize) }})</span>
      </p>
    </template>
    <template v-else>
      <p class="kd-no-file">
        暂无任何资料
      </p>
    </template>
  </div>
</template>
<script>
export default {
  name:'KdFileDisplay',
  props: {
    fileArray: {
      type: Array,
      default: () => {
        return []
      }
    },
    cutLength: {
      type: Number,
      default: 30
    }
  },
  data() {
    return {
      fileTypeList: {
        'default': 'kd-icon-file-default',
      } 
    }
  },
  methods: {
    fileType (fileName) {
      if(!fileName && fileName.indexOf('.') == -1){
        return 'kd-icon-file-default'
      }
      let arry = fileName.split('.')
      let type = arry[arry.length-1];
      if (type.indexOf('doc') > -1) {
        return 'kd-icon-file-word';
      } else if (type.indexOf('ppt') > -1) {
        return 'kd-icon-file-ppt';
      } else if (type.indexOf('xls') > -1) {
        return 'kd-icon-file-excel';
      } else if (type.indexOf('pdf') > -1) {
        return 'kd-icon-file-pdf';
      } else if (type.indexOf('zip') > -1) {
        return 'kd-icon-file-zip';
      } else {
        return 'kd-icon-file-default';
      }
    },
    fileSizeConvert(val) {
      let sizeVal = Number(val);
      if (sizeVal < 130) {
        return `${sizeVal}B`
      }
      else if (sizeVal > 130 && sizeVal <= 1024 * 1024) {
        return `${(sizeVal / 1024).toFixed(2)}KB`
      }
      else {
        return `${(Number(val) / (1024 * 1024)).toFixed(2)}MB`
      }
    },
    downloadFile(item) {
      this.$emit('downLoadItem', item ) 
    }
  }
}
</script>