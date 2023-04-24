<template>
    <div>
      <div class="longin">
        <Row>
          <Col flex="2" class="col1">
            <svg-icon icon-class="hahaha" class="myicon"></svg-icon>
            <svg-icon icon-class="ahaha1" class="myicon"></svg-icon>
          </Col>
          <Col flex="3" class="col2">
            <div class="myloign" v-show="true">
              <Form
              ref="formInline"
              :model="formInline"
              :rules="ruleInline"
              inline
              class="form"
            >
              <FormItem prop="user">
                <Input
                  type="text"
                  v-model="formInline.user"
                  placeholder="手机号"
                >
                  <template #prepend>
                    <Icon type="ios-person-outline"></Icon>
                  </template>
                </Input>
              </FormItem>
              <FormItem prop="password">
                <Input
                  type="password"
                  v-model="formInline.password"
                  placeholder="密码"
                >
                  <template #prepend>
                    <Icon type="ios-lock-outline"></Icon>
                  </template>
                </Input>
              </FormItem>
              <div class="demo-auto-login">
                <!-- <Checkbox v-model="autoLogin" size="large">自动登录</Checkbox> -->
                <a>忘记密码</a>
              </div>
              <FormItem class="huih">
                <Button @click="handleSubmit('formInline')" style="width: 7em"
                  >注册</Button
                >
                <Button
                  type="primary"
                  @click="handleSubmit('formInline')"
                  style="margin-left: 5em; width: 7em"
                  >登录</Button
                >
              </FormItem>
            </Form>
            </div>
            <div class="myregister">
  
            </div>
  
            <div class="forgotPassword">
  
            </div>

          </Col>
        </Row>
      </div>
    </div>
  </template>
  
  <script>
  import SvgIcon from "./SvgIcon.vue";
  export default {
    components: { SvgIcon },
    name: "myLogin",
  
    data() {
      return {
        formInline: {
          user: "",
          password: "",
        },
        ruleInline: {
          user: [
            {
              type: "number",
              required: true,
              message: "请正确输入手机号",
              trigger: "blur",
              transform(value) {
                let phone = /^[1][3,4,5,7,8][0-9]{9}$/;
  
                if (!phone.test(value)) {
                  console.log(value);
                } else {
                  return Number(value);
                }
              },
            },
          ],
          password: [
            {
              required: true,
              message: "至少6位数字或字母",
              trigger: "blur",
            },
            {
              type: "string",
              min: 6,
              message: "The password length cannot be less than 6 bits",
              trigger: "blur",
            },
          ],
        },
      };
    },
  
    mounted() {},
  
    methods: {
      handleSubmit(name) {
        this.$refs[name].validate((valid) => {
          if (valid) {
            this.$Message.success("Success!");
          } else {
            this.$Message.error("Fail!");
          }
        });
      },
    },
  };
  </script>
  
  <style lang="scss" scoped>
  .longin {
    width: 500px;
    height: 400px;
    margin-top: 20px;
    // background-color: aquamarine;
  }
  .col1 {
    height: 400px;
    //   background-color: aqua;
  }
  .col2 {
    display: flex;
    height: 400px;
    align-items: center;
  }
  .myicon {
    height: 14em;
    width: 14em;
  }
  
  // login
  .huih {
    width: 21em;
  }
  
  .demo-auto-login {
    margin-bottom: 24px;
    text-align: left;
    width: 5em;
  }
  .demo-auto-login a {
    float: right;
    cursor: pointer;
  }
  </style>