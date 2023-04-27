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
          path:'/',
          redirect:"/home/onepage",
   },
        
  {
    path: '/home',
    name: "home",
    redirect: "/home/onepage",
    component: () => import("../components/HomePage.vue"),
    children: [
     {
        path:"onepage",
        name:"onepage",
        component:()=>import("../components/OnePage.vue"),

     },
     {
        path:"eighteartessay",
        name:"eighteartessay",
        component:()=>import("../components/EightPartEssay.vue"),
     },
     {
        path:"skilltree",
        name:"skilltree",
        component:()=>import("../components/SkillTree.vue"),
     },
     {
        path:"courserecom",
        name:"courserecom",
        component:()=>import("../components/CourseRecom.vue"),
     },
     {
        path:"projectpractice",
        name:"projectpractice",
        component:()=>import("../components/ProjectPractice.vue"),
     },
     {
        path:"bookrecom",
        name:"bookrecom",
        component:()=>import("../components/BookRecom.vue"),
     }
    ]
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,

})

export default router;

