import Vue from 'vue'
import { 
  kdfindIndexById,
  kdfindIndex,
  cut,
  getBrowserName,
  DateFormatAdapter
} from './common'

Vue.prototype.kdfindIndexById = kdfindIndexById;
Vue.prototype.kdfindIndex = kdfindIndex;
Vue.prototype.cut = cut;
Vue.prototype.getBrowserName = getBrowserName;
Vue.prototype.DateFormatAdapter = DateFormatAdapter;