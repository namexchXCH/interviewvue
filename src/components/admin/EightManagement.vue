<template>
    <div class="divone">
        <Row class="row">
            <Col span="3" class="col1">
            
                    <Menu class="menu" :theme="theme2"  :open-names="['1']"  mode="vertical" width="auto">
                        <MenuItem @click.native="getEightallMember(item,index)" :name="1+index+''" v-for="(item,index) in Eightalllabel" :key="index" class="itemMenuItem">
                            <Icon type="md-arrow-dropright" color="#007ACC"  />
                             {{ item.labelText}}
                        </MenuItem>   
                        <div style="width:100%;display: flex;justify-content: center;margin-top: 1em;">
                            <Button @click="modal10 = true" type="success" ghost  shape="circle" icon="md-add">新增标签</Button>
                        </div>
                       
                    </Menu>
                    
            </Col>
            <Col span="21">
                <div class="col21-div21" >

                    <div class="col21-div222" v-show="nowIndex!=-1">
                        <Button @click="changeLabel" type="success" ghost class="button" icon="md-create">编辑该标签</Button>
                        <Button @click="addNewModule" type="success" ghost class="button" icon="md-add">新建模块</Button>
                        <Tooltip content="模块(关/开)" placement="right">
                            <el-switch class="iswitch" @click.native="handleBeforeChange()" :value="nowModule.isActive==1" 
                                active-color="#13ce66" inactive-color="#CCCCCC">
                            </el-switch>
                        </Tooltip>
                    
                    </div>
                    
                    
                    <Row class="row11" >
                        <Col span="24" >
                            <div class="col21-div1" v-show="labelMember.length>0">
                        
                                <div class="card"  v-for="(item,index) in labelMember" :key="index">
                                    <Row class="card-row">
                                    <Col span="7" style="cursor: pointer;">
                                     <Tooltip content="点击进入该模块" placement="right">
                                        <div class="card-row-div" style="width:100%;height:100%;" @click="goEightModuleDetail(item)">
                                            <img  class="img"  :src="item.coverUrl">
                                        </div>
                                     </Tooltip>
                                    </Col>
                                    <Col span="17">
                                    
                                        <Tooltip  max-width="200" :content="item.introduce" placement="bottom">
                                            <div class="div-text1" >{{item.memberTitle }}</div>
                                            <div class="div-text2">
                                                {{ item.introduce }}
                                            </div>
                                        </Tooltip>
                                   
                                    <div class="card-button">
                                        <Button @click="Edit(item,index)" type="success" ghost size="small" >编辑</Button>
                                        <Button @click="Delete(item,index)" type="error" ghost size="small" >删除</Button>  
                                        <Tooltip content="是否开放" placement="top">
                                            <i-switch v-model="item.isActive" @click.native="handleBeforeChange1(item,index)"  size="small" />                                          
                                        </Tooltip>
                                        <Tooltip content="会员(关/开)" placement="top">
                                            <i-switch v-model="item.isMemberRequired" @click.native="handleBeforeChange2(item,index)" size="small" />
                                        </Tooltip>
                                       
                                       
                                    </div>
                                    </Col>
                                    </Row>
                                </div> 
                            </div>
                              <div class="col21-div21" v-show="labelMember<=0">
                                   <div class="center-one">
                                      <img class="imgone" src="https://s1.ax1x.com/2023/06/09/pCElQG4.png" >
                                   </div>
                                   
                                </div>
                        </Col>
                
                    </Row>
             </div>
             <Spin size="large" fix  v-if="spinShow"> </Spin>
            </Col>
        </Row>
           <Modal
                title="新增标签"
                v-model="modal10"
                @on-ok="addnewLable"
                class-name="vertical-center-modal">
                <Input v-model="value16" maxlength="6" show-word-limit placeholder="请输入标签名" style="width: 30em" />
            </Modal>
            <Modal
                title="编辑标签"
                v-model="chLabel"
                @on-ok="EditLabel"
                class-name="vertical-center-modal">
                <Input v-model="value16" maxlength="6" show-word-limit placeholder="请输入标签名" style="width: 30em" />
            </Modal>

            <Modal
                title="新增模块"
                v-model="addnewmodule"
                @on-ok="addNewEightModule"
                class-name="vertical-center-modal">
                <Form :model="formItem1" label-position="left" :label-width="100">
                    <FormItem label="标题">
                        <Input v-model="formItem1.memberTitle" maxlength="12" show-word-limit></Input>
                    </FormItem>
                    <FormItem label="图片地址">
                        <Input v-model="formItem1.coverUrl" maxlength="100" show-word-limit ></Input>
                    </FormItem>
                    <FormItem label="图片预览">
                        <img :src="formItem1.coverUrl" class="coverimg" >
                    </FormItem>
                   
                    <FormItem label="介绍">
                        <Input v-model="formItem1.introduce" maxlength="60" show-word-limit type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="请输入介绍..."></Input>
                    </FormItem>
                </Form>
            </Modal>

            <Modal
                title="编辑模块"
                v-model="editmodule"
                @on-ok="EditEightModule()"
                class-name="vertical-center-modal">
                <Form :model="formItem" label-position="left" :label-width="100">
                    <FormItem label="标题">
                        <Input v-model="formItem.memberTitle" maxlength="12" show-word-limit></Input>
                    </FormItem>
                    <FormItem label="图片地址">
                        <Input v-model="formItem.coverUrl" maxlength="100" show-word-limit ></Input>
                    </FormItem>
                    <FormItem label="图片预览">
                        <img :src="formItem.coverUrl" class="coverimg" >
                    </FormItem>
                   
                    <FormItem label="介绍">
                        <Input v-model="formItem.introduce" maxlength="60" show-word-limit type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="请输入介绍..."></Input>
                    </FormItem>
                </Form>
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
            labelMember:[],
            nowModule:{},
            nowIndex:-1,
            markMember:[],
            spinShow :false,
            chLabel:false,
            addnewmodule:false,
            editmodule:false,
            value16:"",
            formItem: {},
            formItem1: { 
                labelId:"",            
                memberTitle:"",
                coverUrl:"",
                introduce:""
            },
            MemberIndex:-1,


        };
    },

    mounted() {
        this.getAllEightLable();
      
    },

    methods: {
        loading () {
             const msg = this.$Message.loading({
              content: 'Loading...',
              duration: 0
            });
              
         },
        getAllEightLable(){
            this.$axios({
                method: "GET",
                url: "/interview/eightlabel",
            }).then((res) => {
                if(res.data.code==200){
                    this.Eightalllabel = res.data.data;
                }
          }).catch((res) => {
          
           });
        },

        handleBeforeChange2 (item,index) {
            this.labelMember[index].isMemberRequired = (item.isMemberRequired==false? true:false);  
           
            this.$Modal.confirm({
                        title: '切换确认',
                        content: '您确认要切换开关状态吗？',
                        onOk: () => { 
                           
                            item = this.labelMember[index];
                            this.spinShow=true;   
                            let num = item.isMemberRequired == false? 1:0;
                            this.$axios({
                            method: "PUT",
                            url: "/interview/changememberrequired",
                            data: {
                                isMemberRequired:num,
                                memberId:item.memberId,
                            },
                            }).then((res) => {
                                if(res.data.code == 200){ 
                                    this.labelMember[index].isMemberRequired = item.isMemberRequired == false? true:false;
                                    this.$Message.success('修改成功');
                                }else{
                                    this.$Message.error('修改失败');
                                }
                                 this.spinShow = false;
                            }).catch((res) => {
                                this.$Message.error('修改失败');
                                 this.spinShow = false;
                            });
                           
                        }
                    });
                   
            },
           
            handleBeforeChange1(item,index){
                this.labelMember[index].isActive = (item.isActive==false? true:false);  
                this.$Modal.confirm({
                        title: '切换确认',
                        content: '您确认要切换开关状态吗？',
                        onOk: () => { 
                            
                            item = this.labelMember[index];
                            this.spinShow=true;   
                            let num = item.isActive == false? 1:0;
                            this.$axios({
                            method: "PUT",
                            url: "/interview/changememberactive",
                            data: {
                                isActive:num,
                                memberId:item.memberId,
                            },
                            }).then((res) => {
                                if(res.data.code == 200){ 
                                    this.labelMember[index].isActive = item.isActive == false? true:false;
                                    this.$Message.success('修改成功');
                                }else{
                                   this.$Message.error('修改失败');
                                 }
                                 this.spinShow = false;
                            }).catch((res) => {
                                this.$Message.error('修改失败');
                                 this.spinShow = false;
                            });
                           
                        }
                    });
            },
          
        handleBeforeChange () {
               let that = this;
                return new Promise((resolve) => {
                    this.$Modal.confirm({
                        title: '切换确认',
                        content: '您确认要切换开关状态吗？',
                        onOk: () => {
                            that.changeModule();
                            resolve();
                        }
                    });
                });
            },

        
         changeModule(){
            this.spinShow=true;
            let num = this.nowModule.isActive==0? 1:0
            this.$axios({
              method: "PUT",
              url: "/interview/changemoduleactive",
              data: {
                isActive:num,
                labelId:this.nowModule.labelId,
              },
            }).then((res) => {
                if(res.data.code == 200){ 
                    this.nowModule.isActive = num;
                    this.Eightalllabel[this.nowIndex].isActive = num;
                    this.$Message.success('修改成功');
                }else{
                    this.$Message.error('修改失败');
                }
                this.spinShow=false;
              }).catch((res) => {
                this.spinShow=false;
                this.$Message.error('修改失败');
              });
             
        },

        changeLabel(){          
            this.chLabel=true
            this.value16 = this.nowModule.labelText;
        },
        EditLabel(){
            this.loading();
            // this.$Message.success('新增成DS功');
            this.$axios({
              method: "PUT",
              url: "/interview/editLabel",
              data: {
                labelText:this.value16,
                labelId:this.nowModule.labelId,
              },
            }).then((res) => {
                this.$Message.destroy();  
                if(res.data.code == 200){ 
                    this.Eightalllabel[this.nowIndex].labelText = this.value16;
                    this.nowModule.labelText = this.value16;
                
                    this.$Message.success('修改成功');

                }else{
                  
                    this.$Message.error('修改失败');
                }
                this.value16 = "";               
               
              }).catch((res) => {
                this.$Message.destroy();  
                this.value16 = "";             
                this.$Message.error('修改失败');
              });
        },
        OK(){
            this.$Message.success('新增成功');
        },

        addnewLable(){
            this.loading();
           
            this.$axios({
              method: "POST",
              url: "/interview/addnewlable",
              data: {
                labelText:this.value16,
              },
            }).then((res) => {   
                this.$Message.destroy(); 
                if(res.data.code == 200){              
                    this.Eightalllabel.unshift(res.data.data);
                    
                    this.$Message.success('增加成功');  
                }else{
                    this.$Message.error('增加失败');
                }
                this.value16 = "";     
              }).catch((res) => { 
                this.$Message.destroy();              
                this.$Message.error('增加失败');
                this.value16 = ""; 
              });
        },

        goEightModuleDetail(item){
            this.$router.push("/interviewadmin/eightmoduledetail");
            this.$router.push({
            path:"/interviewadmin/eightmoduledetail",
            query:{
            memberTitle: item.memberTitle,
            memberId:item.memberId,
           }
           
        });  
        },

        Edit(item,index){
            this.editmodule = true;
            this.formItem = JSON.parse(JSON.stringify(item));
            this.formItem.isMemberRequired = (this.formItem.isMemberRequired == true? 1:0);
            this.formItem.isActive = (this.formItem.isActive == true? 1:0);
            this.MemberIndex = index;
           
        },
        EditEightModule(){
            this.spinShow = true;
            this.$axios({
              method: "PUT",
              url: "/interview/editeightmodule",
              data: this.formItem,
            }).then((res) => {
                if(res.data.code == 200){ 
                    this.formItem.isMemberRequired = (this.formItem.isMemberRequired == 1? true:false);
                    this.formItem.isActive = (this.formItem.isActive == 1? true:false);
                    this.labelMember[this.MemberIndex] = JSON.parse(JSON.stringify( this.formItem));
                    this.spinShow = false;  
                    this.$Message.success('修改成功');

                }else{
                    this.spinShow = false;  
                    this.$Message.error('修改失败');
                }       
               
              }).catch((res) => {
                this.spinShow = false;                
                this.$Message.error('修改失败');
              });
        },

        Delete(item,index){
            // this.$Message.success('Delete');
            this.$Modal.confirm({
                        title: '删除确认',
                        content: '您确认删除该模块吗？',
                        onOk: () => { 
                            this.spinShow = true; 
                            this.$axios({
                            method: "DELETE",
                            url: "/interview/deleteeightmodule",
                            params:{
                                memberId: item.memberId
                            } 
                            }).then((res) => {   
                                this.$Message.destroy(); 
                                if(res.data.code == 200){   
                                    this.labelMember.splice(index,1);
                                    this.$Message.success('删除成功');  
                                }else{ 
                                    this.$Message.warning(res.data.message);
                                }
                                this.spinShow = false; 
                           
                            }).catch((res) => { 
                                this.spinShow = false; 
                                this.$Message.error('删除失败');
                            });                    
                               resolve();
                        }
                    });
        },

        addNewModule(){         
            this.addnewmodule = true;
        },
        addNewEightModule(){
          
            this.loading();
           this.formItem1.labelId = this.nowModule.labelId;
            this.$axios({
              method: "POST",
              url: "/interview/addneweightmodule",
              data: this.formItem1
            }).then((res) => {   
                this.$Message.destroy(); 
                if(res.data.code == 200){   
                    let temp = JSON.parse(JSON.stringify(res.data.data));
              
                    temp.isMemberRequired = (temp.isMemberRequired == 0? false:true);
                    temp.isActive = (temp.isActive == 0? false:true);          
                    this.labelMember.unshift(temp); 
                    this.$Message.success('增加成功');  
                }else{ 
                    this.$Message.error('增加失败');
                }
                this.formItem1.introduce = "";
                this.formItem1.coverUrl = "";
                this.formItem1.memberTitle = "";
                this.formItem1.labelId = "";
              }).catch((res) => { 

                this.formItem1.introduce = "";
                this.formItem1.coverUrl = "";
                this.formItem1.memberTitle = "";
                this.formItem1.labelId = "";

                this.$Message.destroy();              
                this.$Message.error('增加失败');
              });
        },
      
        getEightallMember(item,index){
            this.spinShow = true;
            this.nowIndex = index;
            this.nowModule = JSON.parse(JSON.stringify(item));
            this.$axios({
              method: "GET",
              url: "/interview/eightallmember",
              params: {
                labelId:item.labelId,
              },
            }).then((res) => {
                
                if (res.data.code == 200) {
                    if (res.data.data.length<=0) {
                        this.$Message.info('还没有类容');
                    }
                  this.labelMember = res.data.data;
                  for(let i=0; i<this.labelMember.length; i++){
                    this.labelMember[i].isActive = (this.labelMember[i].isActive==0? false:true);
                    this.labelMember[i].isMemberRequired = (this.labelMember[i].isMemberRequired ==0? false:true);
                  }
                }
                this.spinShow=false;
              }).catch((res) => {
                this.$Message.error('请稍后再试');
                this.labelMember=[];
                this.spinShow=false;
              });
           
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
    width: 100;
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
.col21-div21{
    width: 100%;
    height: 100%;
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
.col21-div222{
    display: flex;
    width: 100%;
    height: 3em;
    align-items: center;
}
.button{
  margin-left: 1em;
  
}
.iswitch{
    margin-left: 1em;
   
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
.coverimg{
    width: 5.6em;
    height:6.7em;
    border-radius: 3px;
    margin-left: 45%;
}
.div-text1{
     margin-top: 0.1em;
     margin-left: 0.2em;
     color: #000000;
     cursor: pointer;
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
    cursor: pointer;
  
    
}
.card-button{
display:flex;
justify-content: space-around;
margin-top: 0.5em;
align-items: center;
}
.center-one{
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
}
.imgone{
    width:20em;
    height: 20em;
}

// poihoihhoihohoik
.demo-spin-icon-load{
        animation: ani-demo-spin 1s linear infinite;
    }
    @keyframes ani-demo-spin {
        from { transform: rotate(0deg);}
        50%  { transform: rotate(180deg);}
        to   { transform: rotate(360deg);}
    }
    .demo-spin-col{
        height: 100px;
        position: relative;
        border: 1px solid #eee;
    }

</style>