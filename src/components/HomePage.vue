<template>
  <div>
    <div class="head">
      <div class="logo">
        <img
          src="../../public/mag/16UHJ4)6(8IX3MXHM[9XERU.png"
          alt=""
          class="logo"
        />
      </div>
      <div class="xcv">
        <el-menu
        :default-active="activeIndex"
          class="el-menu-demo"
          mode="horizontal"
          color="#000"
          @select="handleSelect"
        >
          <el-menu-item index="1" class="kk">首页</el-menu-item>
          <el-menu-item index="2" class="kk">面经</el-menu-item>
          <el-menu-item index="3" class="kk">学习</el-menu-item>
          <el-menu-item index="4" class="kk">哈哈哈</el-menu-item>
        </el-menu>
      </div>
      <div class="right1">
       
      </div>
    </div>
    <div class="center"></div>
  </div>
</template>

<script>
export default {
  name: "HomePage",

  data() {
    return {
      activeIndex: "1",
    };
  },

  mounted() {},

  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>

<style lang="css" scoped>
.head {
  display: flex;
  width: 100%;
  height: 8vh;
  background-color: #ffffff;
  align-items: center;
}

.center {
  height: 92vh;
  width: 100%;
  background-image: linear-gradient(to top, #ffffff 0%, #e7f5f5);
  box-shadow: inset 0px 15px 15px -18px rgb(171, 204, 237);
}

.logo {
  width: 90px;
  height: 50px;
  margin-left: 10%;
}
.xcv {
  display: flex;
  /* width: 30%; */
  height: 50px;
  margin-left: 10%;

  align-items: center;
  background-color: #e7f5f5;
}
.right1 {
  width: 400px;
  height: 50px;
  margin-left: 30%;
  background-color: #e7f5f5;
}
.t1 {
  width: 50px;
  height: 30px;
  display: inline-block;
  /* background-color: aquamarine; */
  margin-left: 15px;
  text-align: center;
  line-height: 30px;
}

.t1:hover {
  color: #2b9c7c;
  cursor: pointer;
}

.t1:active {
  color: #2b9c7c;
}

.kk{
  font-size: 16px;
  color: #000;
}
</style>