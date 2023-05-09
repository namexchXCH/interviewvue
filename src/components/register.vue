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
      let phone  = /^[1][3,4,5,7,8,9][0-9]{9}$/; //手机号正则
      let mima = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/; //数字+大写字母+小写字母：
      // console.log(this.phonenumber);
      // console.log(mima.test(this.password1));


      if(!phone.test(this.phonenumber)){
        this.loading2 = false;
        this.$Message.error('请正确输入手机号');
        return;
      }
       if(!mima.test(this.password1) || !mima.test(this.repassword)){
        this.loading2 = false;
        this.$Message.error('密码至少8位,含大小写字母，和数字');
        return;
       }

    if(this.password1==this.repassword){
        this.$axios({
         method:"POST",
         url:"/interview/register",
         params:{
           phoneNumber:this.phonenumber,
           password:this.password1,
        },
    
     }).then((res)=>{

      this.loading2 = false;
      // console.log(res)
      if(res.data.code==200){
        this.$Message.success('注册成功，赶紧去登陆吧！');  
      }else{
        this.$Message.error(res.data.message);
      }

     }).catch((res)=>{
       this.$Message.error("亲，账号注册出问题了呢，请稍后再尝试");
       this.loading2 = false;
     })

       }
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