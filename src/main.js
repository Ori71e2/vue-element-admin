import Vue from 'vue'

import Cookies from 'js-cookie'

import 'normalize.css/normalize.css' // A modern alternative to CSS resets

import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// import 'material-design-icons-iconfont/dist/material-design-icons.css'

import '@/styles/index.scss' // global css

import App from './App'
import router from './router'
import store from './store'

import i18n from './lang' // Internationalization
import './icons' // icon
import './errorLog' // error log
import './permission' // permission control
import './mock' // simulation data

import VueFormGenerator from 'vue-form-generator'
import fieldTimePicker from './vue-form-generator/FieldTimePicker'
import fieldSelectIcon from './vue-form-generator/FieldSelectIcon'
import 'vue-form-generator/dist/vfg.css'

Vue.component('fieldTimePicker', fieldTimePicker)
Vue.component('fieldSelectIcon', fieldSelectIcon)
Vue.use(VueFormGenerator)

import VueAMap from './vue-amap'
Vue.use(VueAMap)
if (!window.amap) {
  // 包括center在内的所有属性都不是在这里设置
  VueAMap.initAMapApiLoader({
    resizeEnable: true,
    // 高德key
    key: 'c46f30625ff814b3983110be101fd461',
    v: '1.4.12',
    uiVersion: '1.0.11'
  })
}

import * as filters from './filters' // global filters

Vue.use(Element, {
  size: Cookies.get('size') || 'medium', // set element-ui default size
  i18n: (key, value) => i18n.t(key, value)
})

// register global utility filters.
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  i18n,
  render: h => h(App)
})
