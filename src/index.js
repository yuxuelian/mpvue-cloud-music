import Vue from 'vue'
import App from './App'
import cuCustom from './colorui/components/cu-custom.vue'

Vue.config.productionTip = false
App.mpType = 'app'
// vue配置全局组件
Vue.component('cu-custom', cuCustom)
const app = new Vue(App)
app.$mount()
