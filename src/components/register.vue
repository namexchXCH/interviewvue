<template>
  <div>
    <div class="longin">
      <Row>
        <Col flex="2" class="col1">
          <svg-icon icon-class="hahaha" class="myicon"></svg-icon>
          <svg-icon icon-class="ahaha1" class="myicon"></svg-icon>
        </Col>
        <Col flex="3" class="col2">
          <div class="myregister">
            <Input
              v-model="phonenumber"
              placeholder="手机号"
              style="width: 17em"
            >
              <Icon type="ios-call-outline" slot="prepend" size="22"></Icon>
            </Input>
            <Input
              v-model="password1"
              placeholder="密码"
              style="width: 17em; margin-top: 1.2em"
            >
              <Icon type="ios-lock-outline" slot="prepend" size="22"></Icon>
            </Input>
            <Input
              v-model="repassword"
              placeholder="确认密码"
              style="width: 17em; margin-top: 1.2em"
            >
              <Icon type="ios-lock-outline" slot="prepend" size="22"></Icon>
            </Input>
            <div>
                <Button type="info" style="margin-top: 2em" ghost  @click.native="gologin">去登陆</Button>
                <Button type="primary" :loading="loading2" @click="handleSubmit('formInline')" style="width: 10em; margin-top: 2em;margin-left: 1.5em;">
                 <span v-if="!loading2">注册</span>
                   <span v-else>Loading...</span>
                  
                  </Button>
       
            </div>
          </div>

          <div class="forgotPassword"></div>
        </Col>
      </Row>
    </div>
  </div>
</template>
  
  <script>
import SvgIcon from "./SvgIcon.vue";
export default {
  components: { SvgIcon },
  name: "register",

  data() {
    return {
      loading2: false,
      phonenumber: "",
      password1: "",
      repassword: "",
    };
  },

  mounted() {},

  methods: {
    handleSubmit() {
      this.loading2 = true;
      let phone  = /^[1][3,4,5,7,8][0-9]{9}$/; //手机号正则
      let mima = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/; //数字+大写字母+小写字母：
      console.log(phone.test(this.phonenumber));
      console.log(mima.test(this.password1));
    },
    gologin(){
       this.loading2 = false,
        this.$emit("Mylogin","login")
      }
  },
};
</script>
  
  <style lang="scss" scoped>
.longin {
  width: 500px;
  height: 400px;
  margin-top: 20px;
}
.col1 {
  height: 400px;
  //   background-color: aqua;
}
.col2 {
  display: flex;
  height: 400px;
  align-items: center;
  justify-content: center;
}
// .myregister {
//   // background-color: aqua;
// }
.myicon {
    width: 14em;
  height: 14em;
 
}
</style>