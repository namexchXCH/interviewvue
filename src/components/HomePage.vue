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
          <MenuItem name="1" @click="shouye">
            <Icon type="ios-paper" color="#037CFF" size=16 />
            首页
          </MenuItem>
          <MenuItem name="2">
            <Icon type="ios-book" color="#009961" size=16 />
            面试八股
          </MenuItem>
          <MenuItem name="3">
            <Icon type="ios-construct" color="#E5010F" size=16 />
            技能树
          </MenuItem>
          <Submenu name="4">
            <template slot="title" >
              <Icon type="ios-stats" color="#5FC948" size=16 />
              学习
            </template>
            <MenuItem name="3-1"><Icon type="ios-paper" color="#419F4E" />课程推荐</MenuItem>
            <MenuItem name="3-2"><Icon type="ios-paper" color="#0E4740"/>项目实战</MenuItem>
            <MenuItem name="3-3"><Icon type="ios-paper" color="#FC8A15"/>书籍推荐</MenuItem>
          </Submenu>

        </Menu>
      </Col>

      <Col span="6">
        <div class="topright">
          <Row >
            <Col span="6">col-8</Col>
            <Col span="6">col-8</Col>
            <Col span="6">col-8</Col>
            <Col span="6">col-8</Col>
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

export default {
  name: "HomePage",

 
  data() {
    return {
      theme1: "light",
    };
  },

  mounted() {},

  methods: {
    shouye(){
      
    }
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
  /* background-color: aqua; */
}
.img {
  width: 8em;
  height: 45px;
}

.topright {

  width: 27em;
  height: 55px;
  /* background-color: rgb(14, 14, 63); */
  align-items: center;
}
.center {
  height: 90vh;
  width: 100%;
  background-image: linear-gradient(to top, #ffffff 0%, #e7f5f5);
  box-shadow: inset 0px 15px 15px -18px rgb(171, 204, 237);
}
.icon{
  width: 20px;
  height: 20px;
}

</style>