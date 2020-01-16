import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'lib-flexible'
import './styles/base.css'
import './styles/iconfont.css'

import HmButton from './components/HmButton.vue'

import { Button, Toast } from 'vant'
Vue.component('HmButton', HmButton)
Vue.use(Button)
Vue.use(Toast)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
