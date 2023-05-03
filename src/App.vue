<template>
  <div id="app">
   <!-- <HomePage></HomePage> -->
   <router-view></router-view>

  </div>
</template>

<script>

import HomePage from '@/components/HomePage'

export default {
  name: 'App',
  components: {
    HomePage,

  },

  mounted(){

  },
  created(){

    var isLogin =  localStorage.getItem("isLogin");
    let userid =  localStorage.getItem("userid");
    console.log(isLogin);
    if(isLogin == 'true'){

      this.$axios({
      method:"GET",
      url:"/interview/u_islogin",
      params:{
        UserId:userid,
      },
    
     }).then((res)=>{
      console.log(res);
      if(res.data.code==200){
         this.$mainStore.isLogin = true;
         this.$mainStore.userInfo = res.data.data
         localStorage.setItem("userid",res.data.data.user_id);

      }else{
        this.$router.push("/"); 
      }


     }).catch((res)=>{     
      this.$router.push("/");
      this.$mainStore.isLogin = false;
      console.log(res);
       this.$message.error("请重新登录！");
     })
    }else{
      this.$mainStore.isLogin = false;
      this.$message.error("请先登录！");
      this.$router.push("/");
      this.$mainStore.userInfo={};
    }

  },



  methods:{
   
    
  },

  beforeDestroy(){
    console.log("LKJNKLJNKJL");
    // localStorage.setItem("isLogin",);
    localStorage.setItem("isLogin",this.$mainStore.isLogin);
  }

  }


</script>

<style>
*{
  margin: 0;
  padding: 0;
}
</style>
