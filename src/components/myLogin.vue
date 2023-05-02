<template>
  <div>
    <div class="longin">
      <Row>
        <Col flex="2" class="col1">
          <svg-icon icon-class="hahaha" class="myicon"></svg-icon>
          <svg-icon icon-class="ahaha1" class="myicon"></svg-icon>
        </Col>
        <Col flex="3" class="col2">
          <div class="mylogin">
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
            <div>
              <Button type="primary" @click="handleSubmit('formInline')" style="width: 17em;margin-top: 2em;" :loading="loading2">
                <span v-if="!loading2">登录</span>
                   <span v-else>Loading...</span>
                  
               </Button>
           
            </div>
            <div>
                <Button type="text" style="margin-top: 1em" @click="gologin" >注册</Button>
                 <Button type="text"  style="width: 10em; margin-top: 1em;margin-left: 3em;" @click="Forget">忘记密码</Button>
            </div>


          </div>
        </Col>
      </Row>
    </div>
  </div>
</template>
  
  <script>
import SvgIcon from "./SvgIcon.vue";
export default  {
  components: { SvgIcon },
  name: "register",

  data() {
    return {
      loading2: false,
      password1: "",
      phonenumber: "",
     
    };
  },

  mounted() {},

  methods: {
    handleSubmit() {
      this.loading2 = true;
      let phone = /^[1][3,4,5,7,8][0-9]{9}$/; //手机号正则
      let mima = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/; //数字+大写字母+小写字母：
      console.log();
      console.log(mima.test(this.password1));
     if(phone.test(this.phonenumber) && mima.test(this.password1)){

      this.$axios({
      method:"POST",
      url:"/interview/loginp",
      params:{
        phoneNumber:this.phonenumber,
        code:this.password1,
      },
    
     }).then((res)=>{

      this.loading2 = false;
      console.log(res)
      if(res.data.code==200){
         this.$mainStore.isLogin = true;
         this.$mainStore.userInfo = res.data.data;
         

      }

      console.log(this.$mainStore.isLogin);
      console.log(this.$mainStore.userInfo);

     }).catch((res)=>{
      console.log(res);
       this.$message.error("获取用户信息失败！");
       this.loading2 = false;
     })

     }else{
      this.$message.error("请正确输入密码或手机号");
      this.loading2 = false;
     }
      

    },


    gologin(){
      
       this.loading2 = false,
        this.$emit("Mylogin","register")
    },
    Forget(){
      this.loading2 = false,
     this.$emit("Mylogin","forget")
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
// .mylogin {
//   // background-color: aqua;
// }
.myicon {
  height: 14em;
  width: 14em;
}
</style>