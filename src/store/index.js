import Vue from 'vue';
import { defineStore } from 'pinia'



Vue.config.devtools = true;
export const mainStore = defineStore('main', {

    state:() => {
        return {
            userInfo:{
                
            },
          
        }
    },

    /*
    * 类似于组件的 computed，用于封装计算属性，有缓存功能
    */
    getters: {
       
    },
    /*
    * 类似于组件的 methods，封装业务逻辑，修改 state
    */
    actions: {
     
      
    }
})
