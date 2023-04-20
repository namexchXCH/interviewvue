import Vue from 'vue';
import App from './App.vue';

import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
Vue.use(ViewUI);


import axios from 'axios';

import router from './router/router';

import{createPinia} from "pinia";
import {mainStore} from "./store/index"
import './Icons/index.js'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);




const pinia = createPinia();
Vue.use(pinia);
Vue.prototype.$mainStore = mainStore();
Vue.prototype.$axios = axios;//全局引用axios
Vue.config.productionTip = false;
axios.defaults.withCredentials = true;

new Vue({
  router,

  
  render: h => h(App),
}).$mount('#app')
