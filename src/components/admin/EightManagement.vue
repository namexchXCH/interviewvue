<template>
    <div class="divone">
        <Row class="row">
            <Col span="3" class="col1">
            
                    <Menu class="menu" :theme="theme2"  :open-names="['1']"  mode="vertical" width="auto">
                        <MenuItem :name="1+index+''" v-for="(item,index) in Eightalllabel" :key="index" class="itemMenuItem">
                            <Icon type="md-arrow-dropright" color="#007ACC"  />
                           {{ item.labelText}}
                        </MenuItem>   
                        <div style="width:100%;display: flex;justify-content: center;margin-top: 1em;">
                            <Button @click="modal10 = true" type="success" ghost  shape="circle" icon="md-add">新增标签</Button>
                        </div>
                       
                    </Menu>
                    
            </Col>
            <Col span="21">
                <Button type="success" ghost class="button" icon="md-add">新建模块</Button>
                <Row class="row11">
                  <Col span="24">
                    <div class="col21-div1">
                 
                        <div class="card">
                            <Row class="card-row">
                            <Col span="7" style="">
                            <div class="card-row-div" style="width:100%;height:100%;" >
                                <img class="img"  src="https://s1.ax1x.com/2023/06/01/p9zdDN4.png">
                            </div>
                            </Col>
                            <Col span="17">
                              <div class="div-text1" >Java 面试突破</div>
                              <div class="div-text2">
                                Java 面试高频知识点详解，带你查缺补漏，轻松突破 Java 面试Java 面试高频知识点详解，带你查缺补漏，轻松突破 Java 面试
                              </div>
                              <div class="card-button">
                                <Button type="success" ghost size="small" >编辑</Button><Button type="error" ghost size="small" >删除</Button>
                              </div>
                            </Col>
                            </Row>
                        </div>

                        <div class="card">
                            <Row class="card-row">
                            <Col span="7" style="">
                            <div class="card-row-div" style="width:100%;height:100%;" >
                                <img class="img"  src="https://s1.ax1x.com/2023/06/01/p9zdDN4.png">
                            </div>
                            </Col>
                            <Col span="17">
                              <div class="div-text1" >Java 面试突破</div>
                              <div class="div-text2">
                                Java 面试高频知识点详解，带你查缺补漏，轻松突破 Java 面试
                              </div>
                              <div class="card-button">
                                <Button type="success" ghost size="small" >编辑</Button><Button type="error" ghost size="small" >删除</Button>
                              </div>
                            </Col>
                            </Row>
                        </div>

                        <div class="card">
                            <Row class="card-row">
                            <Col span="7" style="">
                            <div class="card-row-div" style="width:100%;height:100%;" >
                                <img class="img"  src="https://s1.ax1x.com/2023/06/01/p9zdDN4.png">
                            </div>
                            </Col>
                            <Col span="17">
                              <div class="div-text1" >Java 面试突破</div>
                              <div class="div-text2">
                                Java 面试高频知识点详解，带你查缺补漏，轻松突破 Java 面试
                              </div>
                              <div class="card-button">
                                <Button type="success" ghost size="small" >编辑</Button><Button type="error" ghost size="small" >删除</Button>
                              </div>
                            </Col>
                            </Row>
                        </div>

                        <div class="card">
                            <Row class="card-row">
                            <Col span="7" style="">
                            <div class="card-row-div" style="width:100%;height:100%;" >
                                <img class="img"  src="https://s1.ax1x.com/2023/06/01/p9zdDN4.png">
                            </div>
                            </Col>
                            <Col span="17">
                              <div class="div-text1" >Java 面试突破</div>
                              <div class="div-text2">
                                Java 面试高频知识点详解，带你查缺补漏，轻松突破 Java 面试
                              </div>
                              <div class="card-button">
                                <Button type="success" ghost size="small" >编辑</Button><Button type="error" ghost size="small" >删除</Button>
                              </div>
                            </Col>
                            </Row>
                        </div>

                        <div class="card">
                            <Row class="card-row">
                            <Col span="7" style="">
                            <div class="card-row-div" style="width:100%;height:100%;" >
                                <img class="img"  src="https://s1.ax1x.com/2023/06/01/p9zdDN4.png">
                            </div>
                            </Col>
                            <Col span="17">
                              <div class="div-text1" >Java 面试突破</div>
                              <div class="div-text2">
                                Java 面试高频知识点详解，带你查缺补漏，轻松突破 Java 面试
                              </div>
                              <div class="card-button">
                                <Button type="success" ghost size="small" >编辑</Button><Button type="error" ghost size="small" >删除</Button>
                              </div>
                            </Col>
                            </Row>
                        </div>

                        <div class="card">
                            <Row class="card-row">
                            <Col span="7" style="">
                            <div class="card-row-div" style="width:100%;height:100%;" >
                                <img class="img"  src="https://s1.ax1x.com/2023/06/01/p9zdDN4.png">
                            </div>
                            </Col>
                            <Col span="17">
                              <div class="div-text1" >Java 面试突破</div>
                              <div class="div-text2">
                                Java 面试高频知识点详解，带你查缺补漏，轻松突破 Java 面试
                              </div>
                              <div class="card-button">
                                <Button type="success" ghost size="small" >编辑</Button><Button type="error" ghost size="small" >删除</Button>
                              </div>
                            </Col>
                            </Row>
                        </div>
                       
                       
               
 
              </div>
                  </Col>
             
                </Row>
 
            </Col>
        </Row>
           <Modal
                title="新增八股文标签"
                v-model="modal10"
                @on-ok="OK"
                class-name="vertical-center-modal">
                <p>Content of dialog</p>
                <p>Content of dialog</p>
                <p>Content of dialog</p>
            </Modal>
    </div>
</template>

<script>
export default {
    name: 'EightManagement',

    data() {
        return {
            theme2: 'light',
            Eightalllabel:[],
            modal10:false,
        };
    },

    mounted() {
        this.getAllEightLable();
    },

    methods: {
        getAllEightLable(){
            this.$axios({
                method: "GET",
                url: "/interview/eightalllabel",
            }).then((res) => {
                if(res.data.code==200){
                    this.Eightalllabel = res.data.data;
                }
          }).catch((res) => {
             console.log(res);
           });
        },
        OK(){
            this.$Message.success('新增成功');
        }
    },
};
</script>

<style lang="scss" scoped>
.divone{
    height: 100%;
    width: 100%;
    border-radius: 5px;
}
.itemMenuItem{
    color: #525252;
}
.row{
    height: 100%;
    width: 100%;
}
.menu{
    height: 100%;
    width: auto;
   
}
.col1{
    height: 100%;
    width: 100%;
    overflow: auto;
}
.col1::-webkit-scrollbar{
    width: 0.2em;
   
}
.col1::-webkit-scrollbar-thumb {
  /*滚动条里面小方块*/
  border-radius   : 10px;
  background-color: rgb(182, 232, 252);
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
.newadd{
    color: #2D8CF0;
    font-size: medium;
}
.button{
  margin-left: 1em;
  margin-top: 1%;
}
.col21-div1{
    margin-top: 1%;
    width: 100%;
    height:40em;  
    border-radius: 5px;
   

}
.row11{
    width: 100%;
    height:90%;
    overflow: auto;
}
.card{
    display: inline-block;
    width: 19em;
    height: 7em;
    margin-left: 1em;
    margin-top: 1em;
    cursor: pointer;
    border-radius: 5px;
    border: 1px solid #e4e1e2;
}

.card:hover{
    box-shadow: 0px 0px 10px rgb(230, 239, 255);
}
.card-row{
    width: 100%;
    height:100%; 
    border-radius: 5px;
}
.card-row-div{
    display: flex;
    justify-content: center;
    align-items: center;
}
.img{    
    width:95%;
    height:6.5em;
    border-radius: 3px;
    
}
.div-text1{
     margin-top: 0.1em;
     margin-left: 0.2em;
     color: #000000;
}
.div-text2{
    height: 3.8em;
    width: 98%;
    margin-left: 0.2em;
    font-size: 10px;     
    display: -webkit-box;
    overflow: hidden;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
  
    
}
.card-button{
display:flex;
justify-content: space-around;
margin-top: 0.5em;
}


</style>