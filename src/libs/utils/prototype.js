import Vue from 'vue'
import { 
  kdfindIndexById,
  kdfindIndex,
  cut,
  getBrowserName
} from './common'

Vue.prototype.kdfindIndexById = kdfindIndexById;
Vue.prototype.kdfindIndex = kdfindIndex;
Vue.prototype.cut = cut;
Vue.prototype.getBrowserName = getBrowserName;