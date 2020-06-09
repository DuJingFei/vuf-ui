<template>
  <div class="kd-calendar">
    <header>
      <i 
        class="kd-icon-right kd-left" 
        @click="previousMonth"  
      />
      <p class="big-date">
        {{ DateFormatAdapter(datetimeStamp, 'YYYY年MM月') }}
      </p>
      <i 
        class="kd-icon-right" 
        @click="nextMonth"  
      />
    </header>
    <nav class="kd-week-content">
      <li 
        v-for="(item, i) in week"
        :key="item.id"
        class="kd-week-item"
      >
        {{ item.name }}
      </li>
    </nav>
    <article class="main-calendar">
      <p 
        v-for="(day, i) in dayCount"
        :key="i"
        :datetimeStamp="(i + 1 - firstDayWeek > 0) ? `${curYear}/${curMonth}/${i + 1 - firstDayWeek}` : ''"
        class="calendar-item"
        :class="{
          'calendar-item-today': curDay == (i + 1 - firstDayWeek),
          'calendar-item-normal': (i + 1 - firstDayWeek > 0), 
        }"
        @click="dayChoice(i + 1 - firstDayWeek)"
      >
        {{ (i + 1 - firstDayWeek > 0) ? i + 1 - firstDayWeek : '' }}
      </p>
    </article>
  </div>
</template>
<script>
export default {
  name: 'KdCalendar',
  model: {
    prop: 'datetimeStamp',
    event: 'changeDatetimeStamp'
  },
  props: {
    datetimeStamp: {
      type: [Number],
      default: new Date().getTime()
    }
  },
  data() {
    return {
      week: [
        { 
          id: 1,
          name: '日'
        },
        { 
          id: 2,
          name: '一'
        },
        { 
          id: 3,
          name: '二'
        },
        { 
          id: 4,
          name: '三'
        },
        { 
          id: 5,
          name: '四'
        },
        { 
          id: 6,
          name: '五'
        },
        { 
          id: 7,
          name: '六'
        }
      ],
      curYear: '',
      curMonth: '',
      curDay: '',
      firstDayWeek: '',
      dayCount: ''
    }
  },
  computed: {
    dateString() {
      return `${this.curYear}-${this.curMonth}-${this.curDay}`
    }
  },
  watch: {
    dateString(newVal , val) {
      if (newVal && newVal != val) {
        let tempDate = `${this.curYear}/${this.curMonth}/${this.curDay} 00:00:00`;
        this.$emit('changeDatetimeStamp', new Date(tempDate).getTime());
      }
    }
  },
  created() {
    this.getMonthInfo();
  },
  methods: {
    getMonthInfo() {
      if (!this.datetimeStamp) return

      this.curYear = new Date(this.datetimeStamp).getFullYear();
      this.curMonth = new Date(this.datetimeStamp).getMonth() + 1;
      this.changeDateContent();
    },
    changeDateContent() {
      // 获取第一天是周几
      this.firstDayWeek = new Date(`${this.curYear}/${this.curMonth}/01 00:00:00`).getDay();
      
      // 天数
      this.dayCount = this.getDateCount(this.curYear, this.curMonth) + this.firstDayWeek;
      if (!this.curDay) {
        this.curDay = new Date(this.datetimeStamp).getDate();
      }
      else {
        if (this.curDay > this.getDateCount(this.curYear, this.curMonth)) {
          this.curDay = 1;
        }
      }
    },
    getDateCount(year, month) {
      if (!year || !month) return 
      return new Date(year, month, 0).getDate()
    },
    previousMonth() {
      if (this.curMonth > 1) {
        this.curMonth = this.curMonth - 1;
      }
      else {
        this.curYear = this.curYear - 1;
        this.curMonth = 12;
      }
      this.changeDateContent();
    },
    nextMonth() {
      if (this.curMonth < 12) {
        this.curMonth = this.curMonth + 1;
      }
      else {
        this.curYear = this.curYear + 1;
        this.curMonth = 1;
      }
      this.changeDateContent();
    },
    dayChoice(day) {
      if (!day || day < 0) return
      this.curDay = day;
    }
  }
}
</script>
<style lang="less">
.kd-calendar {
  .kd-left {
    transform: rotate(180deg);
  }
}
</style>