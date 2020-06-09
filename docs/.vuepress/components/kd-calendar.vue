<template>
    <div class="background-wall">
      <kd-calendar v-model="curTime" />
      <footer style="margin: 13px 0; text-align: center">
        选取时间：
        <span>{{ new Date(curTime) }}</span>
      </footer>
   </div>
</template>
<script>
import Calendar from '@components/calendar'
export default {
  name:'kd-calendar-demos',
  components: {
    'kd-calendar': Calendar
  },
  data() {
    return {
      curTime: new Date().getTime()
    }
  }
}
</script>