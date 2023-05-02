<template>
  <div>
    <Row class="top">
      <Col span="4">
        <div class="logo">
          <img src="../../public/mag/16UHJ4)6(8IX3MXHM[9XERU.png" class="img" />
        </div>
      </Col>
      <Col span="8">
        <Menu mode="horizontal" :theme="theme1" active-name="1">
          <MenuItem name="1" @click.native="goOnePage">
            <Icon type="ios-paper" color="#037CFF" size="16" />
            首页
          </MenuItem>
          <MenuItem name="2" @click.native="goEightPartEssay">
            <Icon type="ios-book" color="#009961" size="16" />
            面试八股
          </MenuItem>
          <MenuItem name="3" @click.native="goSkillTree">
            <Icon type="ios-construct" color="#E5010F" size="16" />
            技能树
          </MenuItem>
          <Submenu name="4">
            <template slot="title">
              <Icon type="ios-stats" color="#5FC948" size="16" />
              学习
            </template>

            <MenuItem name="4-1" @click.native="goCourseRecom"
              ><Icon type="md-list-box" color="#419F4E" />课程推荐</MenuItem
            >
            <MenuItem name="4-2" @click.native="goProjectPractice"
              ><Icon type="md-cube" color="#0E4740" />项目实战</MenuItem
            >
            <MenuItem name="4-3" @click.native="goBookRecom"
              ><Icon type="md-book" color="#FC8A15" />书籍推荐</MenuItem
            >
          </Submenu>
        </Menu>
      </Col>

      <Col span="6"> </Col>

      <Col span="6">
        <div class="topright">
          <Row class="tophead">
            <Col span="6">
              <MenuItem
                name="3-1"
                class="myitem"
                @click.native="tanmodal"
                v-show="!this.$mainStore.isLogin"
              >
                <Button type="primary" shape="circle">登录/注册</Button>
              </MenuItem>
            </Col>

            <Modal v-model="modal1"
            @on-cancel="cancel">
              <div style="text-align: center">
                <LoginRegister></LoginRegister>
              </div>
              <div slot="footer"></div>
            </Modal>

            <Col span="4">
              <MenuItem
                name="3-1"
                class="myitem"
                v-show="this.$mainStore.isLogin"
              >
                <Dropdown>
                  <svg-icon icon-class="denglu" class="icon"></svg-icon>
                  <DropdownMenu slot="list">
                  
                    <div class="card1">

                      <Row>
                        <Col span="24" style="height:4em;" >

                          <Row>
                            <Col span="12" class="mycarcol1">
                              <svg-icon icon-class="denglu" class="iconcol1" ></svg-icon>
                              <div>
                                  <p style="margin-left: 0.5em;color:#030211">{{this.$mainStore.userInfo.net_name}}</p>
                                  <div style="margin-left: 0.5em;font-size: small; color:#4f5152;">
                                    已登陆
                                  </div>
                              </div>
                            
                          
                             
                            </Col>
                            <Col span="6">
                              
                            </Col>
                            <Col span="6" class="mycarcol2" style="margin-top: 2em;">
                            个人主页<p>></p>
                            </Col>
                          </Row>

                        </Col>
                        <Col span="24" style="height:5em;" class="mycarcol3" >
                          <!-- background-color: #1025aa; -->
                          <div style="width:19em;height:5em; border-radius: 0.5em;">

                          </div>
                        </Col>
                        <Col span="24" style="height:3em;">
                        
                          <Row>
                             <Col span="12"  class="coltan">
                              账号设置
                             </Col>
                             <Col span="12" class="coltan">
                             退出登录
                             </Col>
                         </Row>

                        </Col>
                      </Row>

                    </div>
                  </DropdownMenu>
                </Dropdown>
              </MenuItem>
            </Col>

            <Col span="10">
              <MenuItem
                name="3-1"
                class="myitem"
                v-show="this.$mainStore.isLogin"
              >
                <Button type="primary" ghost shape="circle">个人主页</Button>
              </MenuItem>
            </Col>
            <!-- <Col span="6"></Col> -->
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
import SvgIcon from "./SvgIcon.vue";

export default {
  components: {
    OnePage,
    LoginRegister,
    SvgIcon,
  },
  name: "HomePage",

  data() {
    return {
      theme1: "light",
      modal:false,
    };
  },

  mounted() {},

  computed: {
  modal1:{
    get(){
      this.$Modal.remove();
      return !this.$mainStore.isLogin && this.modal;
    },

    set(val){
      return val;
    }
  }
  },

  methods: {

    cancel(){
      this.modal = false;

    },

    tanmodal() {
      this.modal = true;
    },

    goOnePage() {
      this.$router.push("/");
    },

    goEightPartEssay() {
      this.$router.push("/home/eighteartessay");
    },

    goSkillTree() {
      this.$router.push("/home/skilltree");
    },

    goCourseRecom() {
      this.$router.push("/home/courserecom");
    },

    goProjectPractice() {
      this.$router.push("/home/projectpractice");
    },
    
    goBookRecom() {
      this.$router.push("/home/bookrecom");
    },

    ok() {
      this.$Message.info("Clicked ok");
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
  align-items: center;
  color: #149635;
}
.myitem:hover {
  color: #1025aa;
}

.icon1 {
  height: 1.6em;
  width: 1.6em;
}
.icon {
  height: 2.3em;
  width: 2.3em;
}
.card1 {
  width: 20em;
  height: 12em;
  border-radius: 5%;
}
.coltan{
  height:3em;
  text-align: center;
  line-height: 3em;
}
.coltan:hover{
    color: #39c99b;
    
}
.mycarcol1{
  display: flex;
  /* justify-content: center; */
  align-items: center;
  
}
.mycarcol2{
  color: #0ac78b;
  display: flex;
  /* justify-content: center; */
  align-items: center;
  
}
.mycarcol2:hover{
  color: #149635;
}
.iconcol1{
  height: 3em;
  width: 3em;
  margin-left: 0.5em;
}
.iconcol1:hover{
  box-shadow: 10px 10px rgb(69, 69, 151);
}
.mycarcol3{
  display: flex;
  justify-content: center;
  /* align-items: center; */
}
</style>


