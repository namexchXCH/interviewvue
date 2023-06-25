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
// axios.defaults.baseURL ="http://127.0.0.1:8009";
axios.defaults.baseURL ="http://xinterview.ihk.vipnps.vip";


axios.interceptors.request.use(config=> {
  console.log("请求拦截");
  config.headers.Authorization = localStorage.getItem("authorizationtoken") ;
  return config;
})

axios.interceptors.response.use(res=>{
  console.log("响应拦截");
  return res;
})

// node_modules\@kangc\v-md-editor\lib\theme\hljs.js
import VMdEditor from '@kangc/v-md-editor';
import '@kangc/v-md-editor/lib/style/base-editor.css';
import githubTheme from '@kangc/v-md-editor/lib/theme/github.js';
import '@kangc/v-md-editor/lib/theme/style/github.css';
import createCopyCodePlugin from '@kangc/v-md-editor/lib/plugins/copy-code/index';
import '@kangc/v-md-editor/lib/plugins/copy-code/copy-code.css';
import createLineNumbertPlugin from '@kangc/v-md-editor/lib/plugins/line-number/index';
import createHighlightLinesPlugin from '@kangc/v-md-editor/lib/plugins/highlight-lines/index';
import '@kangc/v-md-editor/lib/plugins/highlight-lines/highlight-lines.css';
import createEmojiPlugin from '@kangc/v-md-editor/lib/plugins/emoji/index';
import '@kangc/v-md-editor/lib/plugins/emoji/emoji.css';
import createAlignPlugin from '@kangc/v-md-editor/lib/plugins/align';
import createTipPlugin from '@kangc/v-md-editor/lib/plugins/tip/index';
import '@kangc/v-md-editor/lib/plugins/tip/tip.css';



// 引入所有语言包
import hljs from 'highlight.js';

VMdEditor.use(createLineNumbertPlugin());
VMdEditor.use(createCopyCodePlugin());
VMdEditor.use(createHighlightLinesPlugin);
VMdEditor.use(createEmojiPlugin());
VMdEditor.use(createAlignPlugin());
VMdEditor.use(createTipPlugin());
VMdEditor.use(githubTheme, {
  Hljs: hljs,
});
Vue.use(VMdEditor);


new Vue({

  router,
  render: h => h(App),
}).$mount('#app')
