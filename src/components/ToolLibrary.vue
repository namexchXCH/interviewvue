<template>
    <div class="div1">
        <div class="divone">
            <Row type="flex" class="row1">
                <Col span="5" class="col1">
                   <div class="col11">
                    <el-container class="el-container">
                        <el-aside class="el-aside"  width="70%">
                            <el-menu  class="el-menu">
                                <el-menu-item  :index="index1+''" v-for="(item,index1) in toolNavigation" :key="index1" @click.native="getTool(item,index1)">
                                    <Row>
                                        <Col span="24" class="Row-Col1"><span class="span1"><svg-icon :icon-class="item.navigationIcon" class="myicon"></svg-icon><span class="span2">{{item.navigationNmae}}</span> </span><i class="el-icon-arrow-right"></i></Col>    

                                    </Row>
                                    
                               </el-menu-item>

                            </el-menu>
                        </el-aside>
                    </el-container>
                   </div>
                </Col>
               
                <Col span="19" ></Col>
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
                navigationId:"",
                navigationIcon:"gongju",
                navigationNmae:"实用工具",
                
            },
            {
                navigationId:"",
                navigationIcon:"jiaoyu",
                navigationNmae:"学习教育",
                
            },
            {
                navigationId:"",
                navigationIcon:"sucaiku",
                navigationNmae:"办公素材",
               
            },
            {
                navigationId:"",
                navigationIcon:"gongju_1",
                navigationNmae:"在线工具",
                
            },
            {
                navigationId:"",
                navigationIcon:"code",
                navigationNmae:"编程工具",
                
            },
            {
                navigationId:"",
                navigationIcon:"shequ",
                navigationNmae:"技术社区",
                
            },
            {
                navigationId:"",
                navigationIcon:"yinle",
                navigationNmae:"动听音乐",
               
            },
            {
                navigationId:"",
                navigationIcon:"zhibo",
                navigationNmae:"直播追剧",
               
            },
            {
                navigationId:"",
                navigationIcon:"yulezhandian",
                navigationNmae:"娱乐站点",
                
            },
            {
                navigationId:"",
                navigationIcon:"boke",
                navigationNmae:"博客论坛",
                
            },
            
            {
                navigationId:"",
                navigationIcon:"qiuzhi",
                navigationNmae:"求职导航",
                
            },
            {
                navigationId:"",
                navigationIcon:"daohang-",
                navigationNmae:"在线导航",
              
            },
            {
                navigationId:"",
                navigationIcon:"qita",
                navigationNmae:"其他",
            
            },
            {
                navigationId:"",
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
.span2{
    margin-left: 0.5em;
}
.el-container{
    height: 98%; 
    width: 100%;
   
    overflow: auto;

   
}
.myicon{
   width: 1.5em;
   height: 1.5em;
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