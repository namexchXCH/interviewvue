
import { defineStore } from 'pinia'

export const mainStore = defineStore('main', {

    state:() => {
        return {

            userInfo:{
                head_sculpture: "",
                net_name: "",
                password: "",
                phone_number: "",
                user_id: "",

            },
            isLogin:false,
          
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
