<template>
  <div>
    <MyLogin v-show="itemlogin == 'login'"  @Mylogin="butlogin" ></MyLogin>
    <register v-show="itemlogin == 'register'" @Mylogin="butlogin"></register>
    <ForgotPassword v-show="itemlogin == 'forget'"  @Mylogin="butlogin"></ForgotPassword>
  </div>
</template>


<script>
import ForgotPassword from './ForgotPassword.vue';
import MyLogin from "./myLogin.vue";
import register from './register.vue';
export default {
  name: "LoginRegister",
  components: {
    
    MyLogin,
    register,
    ForgotPassword,
  },

  data() {
    return {
      itemlogin:"login",
   
    };
  },

  mounted() {},

  methods: {

    butlogin(item){
    
      console.log(item)
      this.itemlogin = item;
    }
  },
};
</script>

<style lang="scss" scoped>
</style>