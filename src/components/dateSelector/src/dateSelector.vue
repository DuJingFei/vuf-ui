<template>
    <div class="date-selector">
       <select 
       class="year select"
       v-model="currentDate.year"
        @change='judgeDay'
        placeholder="年">
          <option
            v-for="item in years"
            :key="item"
            :label="item"
            :value="item">
          </option>
       </select>
       <select 
       class="month select"
       v-model="currentDate.month" 
       @change='judgeDay'
       placeholder="月">
          <option
            v-for="item in months"
            :key="item"
            :label="String(item).length==1?String('0'+item):String(item)"
            :value="item">
          </option>
       </select>
       <select 
       class="day select"
       :class="{'error':hasError}"
       v-model="currentDate.day" 
       placeholder="日">
          <option
            v-for="item in days"
            :key="item"
            :label="String(item).length==1?String('0'+item):String(item)"
            :value="item">
          </option>
       </select>
    </div>
</template>
<script>
export default {
  props: {
    sourceDate: {
      type: [String, Number]
    }
  },
  name: "date-selector",
  data() {
    return {
      currentDate: {
        year: "",
        month: "",
        day: ""
      },
      maxYear: new Date().getFullYear(),
      minYear: 1930,
      years: [],
      months: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      normalMaxDays: 31,
      days: [],
      hasError: false
    }
  },
  watch: {
    sourceDate() {
      if (this.sourceDate) {
        this.currentDate = this.timestampToTime(this.sourceDate);
      }
    },
    normalMaxDays() {
      this.getFullDays();
      if (this.currentDate.year && this.currentDate.day > this.normalMaxDays) {
        this.currentDate.day = "";
      }
    },
    currentDate: {
      handler(newValue, oldValue) {
        this.judgeDay();
        if (newValue.year && newValue.month && newValue.day) {
          this.hasError = false;
        } else {
          this.hasError = true;
        }
        this.emitDate();
      },
      deep: true
    }
  },
  created() {
    this.getFullYears();
    this.getFullDays();
  },
  methods: {
    emitDate() {
      let timestamp; //暂默认传给父组件时间戳形式
      if (
        this.currentDate.year &&
        this.currentDate.month &&
        this.currentDate.day
      ) {
         let month = this.currentDate.month < 10 ? ('0'+ this.currentDate.month):this.currentDate.month

         let day = this.currentDate.day < 10 ? ('0'+ this.currentDate.day):this.currentDate.day

        let dateStr =
          this.currentDate.year +
          "-" +
          month +
          "-" +
          day;
        timestamp = new Date(dateStr).getTime();
      } else {
        timestamp = "";
      }
      this.$emit("dateSelected", timestamp);
    },
    timestampToTime(timestamp) {
      let dateObject = {};
      if (typeof timestamp == "number") {
        dateObject.year = new Date(timestamp).getFullYear();
        dateObject.month = new Date(timestamp).getMonth() + 1;
        dateObject.day = new Date(timestamp).getDate();
        return dateObject;
      }
    },
    getFullYears() {
      for (let i = this.minYear; i <= this.maxYear; i++) {
        this.years.push(i);
      }
    },
    getFullDays() {
      this.days = [];
      for (let i = 1; i <= this.normalMaxDays; i++) {
        this.days.push(i);
      }
    },
    judgeDay() {
      if ([4, 6, 9, 11].indexOf(this.currentDate.month) !== -1) {
        this.normalMaxDays = 30;
        if (this.currentDate.day && this.currentDate.day == 31) {
          this.currentDate.day = "";
        }
      } else if (this.currentDate.month == 2) {
        if (this.currentDate.year) {
          if (
            (this.currentDate.year % 4 == 0 &&
              this.currentDate.year % 100 != 0) ||
            this.currentDate.year % 400 == 0
          ) {
            this.normalMaxDays = 29;
          } else {
            this.normalMaxDays = 28;
          }
        } else {
          this.normalMaxDays = 28;
        }
      } else {
        this.normalMaxDays = 31;
      }
    }
  }
};
</script>
<style lang="less">
.date-selector {
  .select {
    margin-right: 10px;
    width: 80px;
    text-align: center;
  }
  .year {
    width: 100px;
  }
  .error {
    border: 1px solid #f1403c;
    border-radius: 4px;
  }
}
</style>


