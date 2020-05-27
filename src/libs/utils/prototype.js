import Vue from 'vue'
import { 
  kdfindIndexById,
  kdfindIndex,
  cut
} from './common'

Vue.prototype.kdfindIndexById = kdfindIndexById
Vue.prototype.kdfindIndex = kdfindIndex
Vue.prototype.cut = cut