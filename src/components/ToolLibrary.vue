<template>
    <div class="div1">
        <div class="divone">
            <Row type="flex" class="row1">
                <Col span="5" class="col1">
                   <div class="col11">
                    <el-container class="el-container">
                        <el-aside class="el-aside"  width="70%">
                            <el-menu  class="el-menu">
                                <el-menu-item :index="index1" v-for="(item,index1) in 15" :key="index1">
                                    <Row>
                                        <Col span="24" class="Row-Col1"><span><i class="el-icon-message"></i>导航三</span><i class="el-icon-arrow-right"></i></Col>    
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
            
        };
    },

    mounted() {
        
    },

    methods: {
        
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
.el-container{
    height: 98%; 
    width: 100%;
   
    overflow: auto;

   
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