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
          redirect:"/home",
   },
        
  {
    path: '/home',
    name: "home",
    redirect:"/home/onepage",
    component: () => import("../components/HomePage.vue"),
    
    children: [
     {
        path:"onepage",
        name:"onepage",
        component:()=>import("../components/OnePage.vue"),

     },
     {
      path:"mytoollibrary",
      name:"toollibrary",
      component:()=>import("../components/ToolLibrary.vue"),
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
        path:"learnsharing",
        name:"learnsharing",
        component:()=>import("../components/LearnSharing.vue"),
     },
   //   {
   //      path:"projectpractice",
   //      name:"projectpractice",
   //      component:()=>import("../components/ProjectPractice.vue"),
   //   },
   //   {
   //      path:"bookrecom",
   //      name:"bookrecom",
   //      component:()=>import("../components/BookRecom.vue"),
   //   },
     {
      path:"personalhomepage",
      name:"personalhomepage",
      component:()=>import("../components/PersonalHomepage.vue"),
     },
     {
      path:"accountset",
      name:"accountset",
      component:()=>import("../components/AccountSet.vue"),
   },
   {
      path:"details",
      name:"details",
      component:()=>import("../components/EightDetails/Details.vue"),
   }
    ]
  },

//  管理员登录路由
  {
   path: '/admin',
   name: "admin",
   component: () => import("../components/admin/AdministratorLogin.vue"),
  },

//  管理首页
  {
   path: '/interviewadmin',
   name: "interviewadmin",
   redirect:"/interviewadmin/adminhomepage",
   component: () => import("../components/admin/InterviewAdmin.vue"),
   children: [
     //  管理首页
      {
         path:"adminhomepage",
         name:"adminhomepage",
         component:()=>import("../components/admin/AdminHomepage.vue"),
      },
      // 工具管理
      {
         path:"toolmanagement",
         name:"toolmanagement",
         component:()=>import("../components/admin/ToolManagement.vue"),
      },
      //  八股管理
      {
         path:"eightmanagement",
         name:"eightmanagement",
         component:()=>import("../components/admin/EightManagement.vue"),
      },
   //   技能管理
      {
         path:"skillmanagement",
         name:"skillmanagement",
         component:()=>import("../components/admin/SkillManagement.vue"),
      },
      //   学习管理
      {
         path:"learnmanagement",
         name:"learnmanagement",
         component:()=>import("../components/admin/LearnManagement.vue"),
      },
      //   本站信息
      {
         path:"thiswebsite",
         name:"thiswebsite",
         component:()=>import("../components/admin/ThisWebsite.vue"),
      },
      //   用户管理
      {
         path:"usermanagement",
         name:"usermanagement",
         component:()=>import("../components/admin/UserManagement.vue"),
      },
      //   管理员
      {
         path:"administrator",
         name:"administrator",
         component:()=>import("../components/admin/Administrator.vue"),
      },
      //   公告
      {
         path:"notice",
         name:"notice",
         component:()=>import("../components/admin/Notice.vue"),
      },
      {
         path:"eightmoduledetail",
         name:"eightmoduledetail",
         component:()=>import("../components/admin/EightModuleDetail.vue"),
      },


   ]
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,

})

export default router;

