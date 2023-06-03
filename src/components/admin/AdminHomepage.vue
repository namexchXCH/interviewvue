<template>
    <div class="divone">
       <div class="divone1">
         <Row class="row1">

            <Col span="1" class="row1-col1"></Col>

                 <Col span="22" class="row1-col2">
                    <div style="width:100%">
                            <div class="Col-div2">
                                <Row class="card1">

                                    <Col span="5" class="col-Card">
                                    <div class="card">
                                        <div class="card-div1"> 
                                            <p class="p1"> 工具</p>
                                        </div>

                                        <div class="card-div2">
                                            <Row>
                                                <Col span="10">
                                                <div class="div-col111">
                                                    <img class="img" src="https://s1.ax1x.com/2023/06/02/pCS6Av4.png"/>
                                                </div>
                                                </Col>
                                                <Col span="14">
                                                    <div class="div-col222">
                                                        <div class="div-xinxi"> 类别数:<span class="span1">45</span></div>
                                                        <div class="div-xinxi"> 总个数:<span class="span1">3241545</span> </div>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </div>

                                        <div class="card-div3">

                                        </div>
                                    </div>
                                    </Col>

                                    <Col span="5" class="col-Card" >
                                        <div class="card">
                                            <div class="card-div1"> 
                                                <p class="p1"> 八股文</p>
                                            </div>
                                            <div class="card-div2">
                                                <Row>
                                                    <Col span="10">
                                                        <div class="div-col111">
                                                            <img class="img" src="https://s1.ax1x.com/2023/06/02/pCSczt0.png"/>
                                                        </div>
                                                    </Col>
                                                    <Col span="14">
                                                        <div class="div-col222">
                                                            <div class="div-xinxi"> 标签数:<span class="span1">545</span></div>
                                                            <div class="div-xinxi"> 八股数:<span class="span1">3241545</span> </div>
                                                        </div>
                                                    </Col>
                                            </Row>
                                            </div>
                                            <div class="card-div3">

                                            </div>
                                        </div>
                                    </Col>

                                    <Col span="5" class="col-Card">
                                        <div class="card">
                                        <div class="card-div1"> 
                                            <p class="p1"> 技能树</p>
                                        </div>

                                        <div class="card-div2">

                                            <Row>
                                                <Col span="10">
                                                <div class="div-col111">
                                                    <img class="img" src="https://s1.ax1x.com/2023/06/02/pCScrY6.png"/> 

                                                </div>
                                                </Col>
                                                <Col span="14">
                                                    <div class="div-col222">
                                                        <div class="div-xinxi">类别 :<span class="span1">45</span></div>
                                                        <div class="div-xinxi">总数:<span class="span1">3241545</span></div>
                                                    </div>
                                                </Col>
                                            </Row>

                                        </div>
                                        <div class="card-div3">
                                        
                                        </div>
                                    </div>
                                    </Col>

                                    <Col span="5" class="col-Card">
                                        <div class="card">
                                            <div class="card-div1"> 
                                                <p class="p1"> 学习</p>  
                                            </div>
                                            <div class="card-div2">
                                            <Row>
                                                <Col span="10">
                                                <div class="div-col111">
                                                    <img class="img" src="https://s1.ax1x.com/2023/06/02/pCScMes.png"/>
                                                </div>
                                                </Col>
                                                <Col span="14">
                                                    <div class="div-col222">
                                                        <div class="div-xinxi"> 分类:<span class="span1">324</span></div>
                                                        <div class="div-xinxi"> 合计:<span class="span1">3241545</span></div>
                                                    </div>
                                                </Col>
                                            </Row>
                                            </div>
                                            <div class="card-div3">
                                            
                                            </div>
                                        </div>
                                    </Col>

                                </Row>
                                        
                            </div>
                            <div class="col-div3">
                                <Row class="card2">
                                    <Col span="5">
                                    
                                        <div class="card2-div">
                                        <div style="width:45%;height:6em" class="hahah" @click="ToolManagement">
                                            <div>
                                                <img class="img1" src="https://s1.ax1x.com/2023/06/02/pCppc36.png"/>
                                                <div style="">
                                                工具
                                                </div>
                                            </div>
                                        
                                        </div>
                                        <div style="width:45%;height:6em" class="hahah" @click="EightManagement">
                                            <div>
                                                <img class="img1" src="https://s1.ax1x.com/2023/06/02/pCppVht.png"/>
                                                <div style="">
                                                八股
                                                </div>
                                            </div>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col span="5">
                                        <div class="card2-div">
                                            <div style="width:45%;height:6em" class="hahah" @click="SkillManagement">
                                                <div>
                                                <img class="img1" src="https://s1.ax1x.com/2023/06/02/pCpprNR.png"/>
                                                <div style="">
                                                技能
                                                </div>
                                            </div>
                                        </div>
                                        <div style="width:45%;height:6em" class="hahah" @click="LearnManagement">
                                            <div>
                                                <img class="img1" src="https://s1.ax1x.com/2023/06/02/pCppEtI.png"/>
                                                <div style="">
                                                学习
                                                </div>
                                            </div>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col span="5">
                                        <div class="card2-div">
                                            <div style="width:45%;height:6em" class="hahah" @click="ThisWebsite">
                                                <div>
                                                <img class="img1" src="https://s1.ax1x.com/2023/06/02/pCpp69x.png"/>
                                                <div style="">
                                                本站信息
                                                </div>
                                            </div>
                                        </div>
                                        <div style="width:45%;height:6em" class="hahah" @click="UserManagement">
                                            <div>
                                                <img class="img1" src="https://s1.ax1x.com/2023/06/02/pCppm1f.png"/>
                                                <div style="">
                                                用户
                                                </div>
                                            </div>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col span="5">
                                        <div class="card2-div">
                                            <div style="width:45%;height:6em" class="hahah" @click="Administrator">
                                                <div>
                                                <img class="img1" src="https://s1.ax1x.com/2023/06/02/pCpps41.png"/>
                                                <div style="">
                                                管理员
                                                </div>
                                            </div>
                                        </div>
                                        <div style="width:45%;height:6em" class="hahah" @click="goNotice">
                                            <div>
                                                <img class="img1" src="https://s1.ax1x.com/2023/06/02/pCp9K8x.png"/>
                                                <div style="">
                                                公告
                                                </div>
                                            </div>
                                            </div>
                                        </div>
                                    </Col>
                            </Row>
                            </div>
                    </div>
                </Col>
             
            <Col span="1" class="row1-col3"></Col>

         </Row> 
       </div>

       <div class="div23">
            <Row class="row-23" >
              <Col span="12" style=" background-color: rgb(30, 202, 73);">网站浏览量统计</Col>
              <Col span="12">注册用户量统计</Col>
            </Row>
         </div>

    </div>
</template>

<script>
export default {
    name: 'AdminHomepage',

    data() {
        return {
            
        };
    },

    mounted() {
        
    },

    methods: {
       
            //  工具管理
            ToolManagement(){
                this.$router.push("/interviewadmin/toolmanagement");
            },
            //  八股管理
            EightManagement(){
                this.$router.push("/interviewadmin/eightmanagement");
            },
            //   技能管理
            SkillManagement(){
                this.$router.push("/interviewadmin/skillmanagement");
            },
            //   学习管理
            LearnManagement(){
                this.$router.push("/interviewadmin/learnmanagement");
            },
            //   本站信息
            ThisWebsite(){
                this.$router.push("/interviewadmin/thiswebsite");
            },
             //   用户管理
            UserManagement(){
                this.$router.push("/interviewadmin/usermanagement");
            },
            //   管理员
            Administrator(){
                this.$router.push("/interviewadmin/administrator"); 
            },
            //   公告
            goNotice(){
                this.$router.push("/interviewadmin/notice"); 
            }
    },
};
</script>

<style lang="scss" scoped>
.divone{
    height: 100%;
    width: 100%;  
    border-radius: 5px;
    background-color:#F5F7F9;
   
}
.divone1{
    display: flex;
    height: 50%;
    width: 100%;  
    border-radius: 5px;
    align-items: center;
    

}
.div23{
    height: 30%;
    width: 100%;  
    border-radius: 5px;
}
.row-23{
    height: 100%;
}
.row1{
    height: 100%;
    width: 100%;  
}
.row1-col1{
    height: 100%;
    width: 100%; 

}
.row1-col2{
    display: flex;
    height: 100%;
    width: 100%; 
  
  

}
.row1-col3{
    height: 100%;
    width: 100%; 

}
.Col-div2{   
    width: 100%; 
  
}
.card1{
    display: flex;
    justify-content: space-around;
    margin-top: 3em;
}
.card2{
    display: flex;
    justify-content: space-around;
}
.card{
  
    width: 100%; 
    height: 11em;
    background-color:white;
    border-radius: 5px;
  
}
.card:hover{
    box-shadow: 0 2px 12px 0 rgba(7, 188, 197, 0.1);
}
.card-div1{
    width: 100%; 
    height: 2.5em;
    line-height: 2.5em;
    border-bottom:1px solid #e5e7eb;  
}
.p1{
    margin-left: 0.5em;
    color: black;
    font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;

}

.card-div2{
    width: 100%;
    height: 6.5em;
    border-bottom:1px solid #e5e7eb;


}
.card-div3{
    width: 100%;
    height: 2em;
}
.div-col111{
    display: flex;
    height: 6.5em;
    width: 100%; 

    justify-content: center;
    align-items: center;
}
.div-col222{
    
    height: 6.5em;
    width: 100%; 
    font-weight: bold;
    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
   
    

}
.img{
    width: 6em;
    height: 6em;
}
.img1{
    width: 3em;
    height: 3em;
}
.div-xinxi{
    margin-top: 1em;
    margin-left: 0.5em;

}
.span1{
margin-left: 00.5em;
}
.card2-div{
    display: flex;
    width:100%;
    height:100%;
    justify-content: space-between;
  
}
.card2{
    height: 8em;
}
.hahah{
    display: flex;
    margin-top: 2em;
    border-radius:5px ;
    background-color: #FFFFFF;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}
.hahah:hover{
   
    box-shadow: 0 2px 12px 0 rgba(7, 188, 197, 0.1);
    cursor: pointer;
   
}
</style>