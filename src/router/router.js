import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter)
// 防止连续点击多次路由报错
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

const routes = [




  {
    path: '/mylogin',
    name: "mylogin",
    component: () => import("../components/myLogin.vue"),
  },
  //  {
  //     path:"/teacherHome",
  //     name:"teacherHome",
  //     component:()=>import("../components/TeacherModule/teacherHome.vue"),
  //     children:[
  //       {
  //          path:"Profile",
  //          name:"Profile",
  //          component:()=>import("../components/index.vue"),
  //       },
  //       {
  //          path:"Homepage",
  //          name:"Homepage",
  //          component:()=>import("../components/TeacherModule/Homepage.vue")
  //      },
  //       {
  //          path:"myCourse",
  //          name:"myCourse",
  //          component:()=>import("../components/TeacherModule/myCourse.vue")
  //       },
  //       {
  //          path:"myExperiment",
  //          name:"myExperiment",
  //          component:()=>import("../components/TeacherModule/myExperiment.vue")
  //       },
  //       {
  //          path:"onlineDemonstration",
  //          name:"onlineDemonstration",
  //          component:()=>import("../components/TeacherModule/onlineDemonstration.vue")
  //       }
  //     ]
  //  },
  //  {
  //     path:"/studentHome",
  //     name:"studentHome",
  //     component:()=>import("../components/StudentModule/studentHome.vue"),
  //  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,

})

export default router;

