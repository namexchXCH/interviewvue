<template>
  <div>
    <Row class="top">
      <Col span="4">
        <div class="logo">
          <img src="../../public/mag/16UHJ4)6(8IX3MXHM[9XERU.png" class="img" />
        </div>
      </Col>
      <Col span="14">
        <Menu mode="horizontal" :theme="theme1" active-name="1">
          <MenuItem name="1" @click.native="goOnePage">
            <Icon type="ios-paper" color="#037CFF" size="16" />
            首页
          </MenuItem>
          <MenuItem name="2" @click.native="goEightPartEssay">
            <Icon type="ios-book" color="#009961" size="16" />
            面试八股
          </MenuItem>
          <MenuItem name="3" @click.native="goSkillTree" >
            <Icon type="ios-construct" color="#E5010F" size="16" />
            技能树
          </MenuItem>
          <Submenu name="4">
            <template slot="title">
              <Icon type="ios-stats" color="#5FC948" size="16" />
              学习
            </template>

            <MenuItem name="3-1" @click.native="goCourseRecom"
              ><Icon type="md-list-box" color="#419F4E" />课程推荐</MenuItem
            >
            <MenuItem name="3-2" @click.native="goProjectPractice"
              ><Icon type="md-cube" color="#0E4740" />项目实战</MenuItem
            >
            <MenuItem name="3-3" @click.native="goBookRecom"
              ><Icon type="md-book" color="#FC8A15" />书籍推荐</MenuItem
            >
          </Submenu>
        </Menu>
      </Col>

      <Col span="6">
        <div class="topright">
          <Row class="tophead">
            <Col span="6">
              <MenuItem name="3-1" class="myitem"  @click.native="modal1 = true"
                ><svg-icon iconClass="denlu" class="icon1"></svg-icon>登录注册</MenuItem
              >
            </Col>

            <Modal v-model="modal1" >
              <!-- <p slot="header" style="color: #f60; text-align: center"> </p> -->
              <div style="text-align: center">
                <LoginRegister></LoginRegister>
              </div>
              <div slot="footer">
             
              </div>
            </Modal>
      
            <Col span="6">
              <!-- <MenuItem name="3-1" class="myitem"><svg-icon iconClass="denlu"></svg-icon >个人中心</MenuItem > -->
            </Col>
            <Col span="6"></Col>
            <Col span="6"></Col>
          </Row>
        </div>
      </Col>
    </Row>

    <div class="center">

      <router-view></router-view>
    </div>

  </div>
</template>

<script>

import LoginRegister from "./LoginRegister.vue";
import OnePage from "./OnePage.vue";
export default {
  components: {
    OnePage,
    LoginRegister,
  },
  name: "HomePage",

  data() {
    return {
      theme1: "light",
      modal1: false,
    };
  },

  mounted() {},

  methods: {
    goOnePage() {
      this.$router.push("/");
      // console.log("lkjhlkj")

    },
    goEightPartEssay(){
      this.$router.push("/home/eighteartessay");
    },
    goSkillTree(){
      this.$router.push("/home/skilltree");
    },
    goCourseRecom(){
      this.$router.push("/home/courserecom");
    },
    goProjectPractice(){
      this.$router.push("/home/projectpractice");
    },
    goBookRecom(){
      this.$router.push("/home/bookrecom");
    },
    ok() {
      
      this.$Message.info("Clicked ok");
    },
    cancel() {
      this.$Message.info("Clicked cancel");
    },
  },
};
</script>

<style lang="css" scoped>
.top {
  align-items: center;
}
.logo {
  height: 45px;
  width: 125px;
  margin-left: 20%;
}
.img {
  width: 8em;
  height: 45px;
}

.center {
  height: 91vh;
  width: 100%;
  background-image: linear-gradient(to top, #ffffff 0%, #e7f5f5);
  box-shadow: inset 0px 15px 15px -18px rgb(171, 204, 237);
}

.tophead {
  /* background-color: rgb(14, 14, 63); */
  width: 27em;
  height: 55px;
  align-items: center;
}
.myitem {
  display: flex;
  justify-content: center;
}
.myitem:hover {
  color: #6578f6;
}

.icon1{
  height: 1.6em;
  width: 1.6em;
}
</style>


