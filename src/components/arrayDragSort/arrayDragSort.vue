<template>
  <div class="kd-array-drag-sort">
    <header v-if="sortArray && sortArray.length > 1">
      当前共{{ sortArray.length }} 个{{ sortName }}
    </header>
    <article class="kd-array-drag-sort-main-content">
      <p 
        v-for="(item, i) in sortArray" 
        :key="item.id"
        :draggable="true"
        :class="{'kd-cur-node': curItem && curItem.id && item.id == curItem.id}"
        class="kd-item-drag" 
        @dragstart="drag($event,item)"
        @dragover.prevent
        @drop="drop($event,item,curTempItem)"
      >
        <span style="margin-right:20px">{{ i+1 }}</span>
        {{ item.name }}
      </p>
    </article>
    <p class="kd-label-tips"> 
      注：<span>请在非IE内核浏览器下，</span>
      拖拽表格中所需调整位置的行至目标行
    </p>
    <footer>
      <Button 
        class="kd-button normal default"
        @click="$emit('updateArraySort', sortArray)"
      >
        确定
      </Button>
      <Button 
        class="kd-button normal plain basic"
        @click="$emit('cancelArraySort')"
      >
        取消
      </Button>
    </footer>
  </div>
</template>
<script>
export default {
  name: 'KdArrayDragSort',
  props: {
    curItem: {
      type: [Object],
      default: () => { return {}}
    },
    sortArray: {
      type: Array,
      default: () => { return []}
    },
    sortName: {
      type: [String],
      default: '排序对象'
    }
  },
  data() {
    return {
      curTempItem: ''
    }
  },
  methods: {
    /**
     * item: 当前拖拽目标元素
     * i: 当前拖拽目标的索引
    */
    drag(ev,item) {
      if(!item) return
      ev.dataTransfer.setData('aaa',null);
      this.curTempItem = item;  
    //  ev.dataTransfer.setData("Text",ev.target.data);
    },

    /**
     *  item: 当前拖拽最终位置上的节点
     *  curTempItem: 当前拖拽节点
    */
    drop(ev,item,curTempItem) {
      if((curTempItem.id == item.id) || !item || !curTempItem) return
      let curTempItemIndex = this.kdfindIndex(this.sortArray, { id: curTempItem.id });
      let itemIndex = this.kdfindIndex(this.sortArray, { id: item.id });
      this.sortArray.splice(curTempItemIndex,1);
      let insertIndex = (curTempItemIndex > itemIndex) ? itemIndex : itemIndex - 1;
      this.sortArray.splice(insertIndex, 0, curTempItem); 
    },
  }
}
</script>