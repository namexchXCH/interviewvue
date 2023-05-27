<template>
    <div class="div1">
        <div class="divone">
            <Row type="flex" class="row1">
                <Col span="3" class="col1">
                   <div class="col11">
                    <el-container class="el-container">
                        <el-aside class="el-aside"  width="100%">
                            <el-menu  class="el-menu">
                                <el-menu-item  :index="index1+''" v-for="(item,index1) in toolNavigation" :key="index1" @click.native="getTool(item,index1)">
                                   <a :href="'#'+item.navigationId" class="a1">
                                        <Row>
                                            <Col span="24" class="Row-Col1"><span class="span1"><svg-icon :icon-class="item.navigationIcon" class="myicon"></svg-icon><span class="span2">{{item.navigationNmae}}</span> </span><i class="el-icon-arrow-right"></i></Col>    

                                        </Row>
                                  </a>
                                    
                               </el-menu-item>

                            </el-menu>
                        </el-aside>
                    </el-container>
                   </div>
                </Col>
               
                <Col span="21" class="col2" >
                   <div  :id="item.navigationId" class="divcol2" v-for="(item,index) in toolNavigation" :key="index">
                        <span class="span12">
                        <svg-icon :icon-class="item.navigationIcon" class="myicon"></svg-icon><span class="span2">{{item.navigationNmae}}</span>
                        </span>
                        <div class="col2-div">

                            <li class="col2-div-li" v-for="(item,index) in 15" :key="index" >
                                <div class="col2-div2">
                                    <el-tooltip class="myitem"  effect="light" content="除了这些基本设置外，还有一些属性可以让使用者更好的定制自己的效果：提示文字" placement="top-end">
                                        <div class="col2-div2">
                                            <img src="https://www.bilibili.com/favicon.ico?v=1" class="myimag"/> <span class="item1">一个木函工具箱</span> 
                                        </div>
                                    </el-tooltip>
                                    <el-tooltip class="myitem" effect="light" content="传送门" placement="top-end">
                                    <svg-icon icon-class="youjiantou" class="myicon2"></svg-icon>
                                </el-tooltip>
                                </div>
                            </li>
                        
                            
                            
                        </div>
                    
                  </div>
                  
                </Col>
            </Row>
        </div>
        
    </div>
</template>

<script>
import ViewEditer from './ViewEditer.vue';
export default {
  components: { ViewEditer },
    name: 'ToolLibrary',

    data() {
        return {
        toolNavigation:[
           {
                navigationId:"aitools",
                navigationIcon:"ai",
                navigationNmae:"AI工具",
  
            },
            {
                navigationId:"utilitiestools",
                navigationIcon:"gongju",
                navigationNmae:"实用工具",
                
            },
            {
                navigationId:"learningeducation",
                navigationIcon:"jiaoyu",
                navigationNmae:"学习教育",
                
            },
            {
                navigationId:"officematerials",
                navigationIcon:"sucaiku",
                navigationNmae:"办公素材",
               
            },
            {
                navigationId:"onlinetools",
                navigationIcon:"gongju_1",
                navigationNmae:"在线工具",
                
            },
            {
                navigationId:"Programtools",
                navigationIcon:"code",
                navigationNmae:"编程工具",
                
            },
            {
                navigationId:"technicalcommunity",
                navigationIcon:"shequ",
                navigationNmae:"技术社区",
                
            },
            {
                navigationId:"beautifulmusic",
                navigationIcon:"yinle",
                navigationNmae:"动听音乐",
               
            },
            {
                navigationId:"livedramachasing",
                navigationIcon:"zhibo",
                navigationNmae:"直播追剧",
               
            },
            {
                navigationId:"entertainmentsites",
                navigationIcon:"yulezhandian",
                navigationNmae:"娱乐站点",
                
            },
            {
                navigationId:"blogforum",
                navigationIcon:"boke",
                navigationNmae:"博客论坛",
                
            },
            
            {
                navigationId:"jobsearchnavigation",
                navigationIcon:"qiuzhi",
                navigationNmae:"求职导航",
                
            },
            {
                navigationId:"onlinenavigation",
                navigationIcon:"daohang-",
                navigationNmae:"在线导航",
              
            },
            {
                navigationId:"other",
                navigationIcon:"qita",
                navigationNmae:"其他",
            
            },
            {
                navigationId:"aboutthiswebsite",
                navigationIcon:"guanyu",
                navigationNmae:"关于本站",
                
            },
        ]

            
        };
    },

    mounted() {
        
    },

    methods: {
        getTool(item,index1){
            console.log(item);
        }
    },
};
</script>

<style lang="scss" scoped>
.a1{
    color: inherit;
    text-decoration: none;
}
.div1{
    height: 100%;
    width: 100%;
}
.divone{
    height: 100%;
    width: 100%;
}
.row1{
    height: 100%;
    width: 100%;
}
.col1{
    height: 100%;
  
}
.col11{
    height: 100%;
    width: 100%;
   
     display: flex;
     justify-items: center;
     align-items: center;

}
.span1{
    display: flex;
    justify-content: center;
    align-items: center;
}
.span12{
    display: flex;
    align-items: center;
    margin-top: 1.5em;
    // background-color: aqua;
    margin-left: 1em;
  
    font-weight: bold;

}
.span2{
    margin-left: 0.5em;
}
.el-container{
    height: 98%; 
    width: 100%;  
    overflow: auto;
}

.col2{
    height: 100%;
    overflow: auto;
    scroll-behavior: smooth;
}

.col2-div{
    height: auto;   
}
.col2-div2{
    display: flex;
    height: 3em;
    // background-color: aqua;
    align-items: center;
    justify-content: space-between;
}
.item1{
    margin-left: 1em;
}
.col2-div-li{
    display: inline-block;
    
    margin-left: 1.5em;
    margin-top: 1.5em;
    width: 14em;
    height: 3em;
    align-items: center;
    box-shadow:0.5px 0px 0.5px 1px rgb(214, 229, 255);
    border-radius: 5px;
    line-height: 3em;
    cursor: pointer;    
}

.col2-div-li:hover{
    box-shadow: 3px 2px 5px rgb(200, 220, 255);
    color: rgb(68, 206, 206);
}

.divcol2{
    width: 100%;
    height: auto;
    border-radius: 10px;
}

.myicon{
   width: 1.5em;
   height: 1.5em;
  
}
.myicon1{
    width: 1.5em;
    height: 1.5em;
   margin-left: 0.5em;
}
.myimag{
    width: 1.5em;
    height: 1.5em;
   margin-left: 0.5em;
   background-size:cover;
//    background-color: aquamarine;
}
.myicon2{
    width: 1em;
    height: 1em;
    margin-right: 0.5em;  
    border-radius: 50%;
}
.myicon2:hover{
    box-shadow:2px 2px 8px 6px rgb(208, 225, 253);
    background-color: #f4faff;
}

.el-aside::-webkit-scrollbar {
  /*滚动条整体样式*/
  width : 10px;  /*高宽分别对应横竖滚动条的尺寸*/
  height: 1px;
  }

  .el-aside::-webkit-scrollbar-thumb {
  /*滚动条里面小方块*/
  border-radius   : 10px;
  background-color: rgb(162, 229, 255);
  background-image: -webkit-linear-gradient(
      45deg,
      rgba(255, 255, 255, 0.2) 25%,
      transparent 25%,
      transparent 50%,
      rgba(255, 255, 255, 0.2) 50%,
      rgba(255, 255, 255, 0.2) 75%,
      transparent 75%,
      transparent
  );

  }
  .el-aside::-webkit-scrollbar-track {
  /*滚动条里面轨道*/
  box-shadow   : inset 0 0 5px rgba(0, 0, 0, 0.2);
  background-image:linear-gradient(120deg,#f9f2ff 0%, #dbedff 100%);
  border-radius: 10px;
  }

 .el-aside{
    height: 100%;
    overflow: auto;
    box-shadow: 5px -5px 40px rgb(223, 234, 255);
    border-radius: 5px;
    
}
.Row-Col1{   
    display: flex;
    width: 100%;
    height: 100%;   
    justify-content: space-between;
    align-items: center;
}



</style>