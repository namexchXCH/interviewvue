import Vue from 'vue';
import App from './App.vue';

Vue.config.devtools = true;

import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
Vue.use(ViewUI);

import { createPinia,storeToRefs } from 'pinia';
const pinia = createPinia();
Vue.use(pinia);
import {mainStore} from "./store/index"
Vue.prototype.$mainStore = mainStore();//全局引用 mainStore
Vue.prototype.$storeToRefs = storeToRefs;//全局引用 mainStore

import axios from 'axios';
Vue.prototype.$axios = axios;//全局引用axios

import './Icons/index'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

import router from './router/router';

Vue.config.productionTip = false;
axios.defaults.withCredentials = true;
axios.defaults.baseURL ="http://127.0.0.1:8009";

axios.interceptors.request.use(config=> {
  console.log("请求拦截");
  config.headers.Authorization = localStorage.getItem("authorizationtoken") ;
  return config;
})

axios.interceptors.response.use(res=>{
  console.log("响应拦截");
  return res;
})

new Vue({

  router,
  render: h => h(App),
}).$mount('#app')
