<template>
  <div>
    <!-- <MyLogin></MyLogin> -->
    <!-- <register></register> -->
    <ForgotPassword></ForgotPassword>
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
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped>
</style>