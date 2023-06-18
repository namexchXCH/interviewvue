<template>
    <div class="div1">
         <div class="div2">
            <div class="div3"  @click="backpage">
               <svg-icon icon-class="G_fanhui" class="icon"></svg-icon> 返回
            </div>
          
         </div>

          <div class="div4">
            <Row class="row">
                <Col span="1"></Col>
                <Col span="22">
                    <div class="titletopic">                      
                        <span> <Icon type="ios-book" color="#8DC143" />{{member.memberTitle}}</span> 
                        <Button @click="addNewTopic" class="button1" type="success"  shape="circle" icon="md-add">新增八股</Button>
                    </div>
                    <Table height="520" border :columns="columns12" :data="data6" class="table">
                        <template slot-scope="{ row }" slot="topicText">
                            <strong>{{ row.topicText }}</strong>
                        </template>
                        <template slot-scope="{row, index }" slot="isOpen">
                            <el-switch :value="row.isOpen == 1"   active-color="#13ce66"  inactive-color="#ff4949" @click.native="isOpenSwitch(row, index)" ></el-switch>
                            
                        </template>

                        <template slot-scope="{row,index }" slot="action">
                            <Button type="success" size="small" style="margin-right: 5px" ghost @click="EditEightTitle(row,index)">编辑题目</Button>
                            <Button type="success" size="small" style="margin-right: 5px" @click="showeditor(row,index)">查看</Button>
                            <Button type="primary" size="small" style="margin-right: 5px" @click="EditEight(row,index)">编辑</Button>
                            <Button type="error" size="small" @click="DeleteEightTopic(row,index)">删除</Button>
                        </template>
                   </Table>
                    <div class="mypage">
                        <Page :total="PageSize" @on-change="getPageNum" />
                    </div>
                    <Spin size="large" fix  v-if="spinShow"> </Spin>
                </Col>
                <Col span="1"></Col>
             </Row>
          </div>

          <Modal class="modal" :styles="{top: '1px'}" footer-hide :title="showRow.topicText"   width="50vw" v-model="modal10">
               <div class="centerdiv">
                  <v-md-editor :value="markdown" mode="preview" class="editor" ></v-md-editor>
               </div>
          </Modal>

          <Modal v-model="modal11" fullscreen :title="nowTopic.topicText">
            <div class="modalediteight">
                <v-md-editor v-model="markdownText" class="editor" :left-toolbar="leftToolbar" height="100%" >
                </v-md-editor>
            </div>
            <div slot="footer">
                <Row >
                  <Col span="9"></Col>
                  <Col span="6" class="col6">
                    <div class="col6-div">
                        <Button @click="ExitEditing">退出</Button>   <Button @click="ConfirmSave" :loading="loading" type="primary" >确定保存</Button>
                    </div>
                  </Col>
                  <Col span="9"></Col>
                </Row>
           
            </div>
         </Modal>

            <Modal
                v-model="modal6"
                title="题目编辑">
                <Form :model="formItem" :label-width="80">
                        <FormItem label="题目">
                            <Input v-model="formItem.topicText" maxlength="16" show-word-limit placeholder="请输入题目..." ></Input>
                        </FormItem>
                </Form>   
                <div slot="footer">
                <Row >
                  <Col span="8"></Col>
                  <Col span="8" class="col6">
                    <div class="col6-div">
                        <Button @click="ExitEditEditEightTitle">取消</Button>   <Button @click="ConfirmSaveEditEightTitle" :loading="loading1" type="primary" >保存</Button>
                    </div>
                  </Col>
                  <Col span="8"></Col>
                </Row>
           
            </div>
            </Modal>


            <Modal v-model="addTopic" title="新增八股文题目" >
                <Form :model="newTopic" :label-width="80">
                        <FormItem label="题目">
                            <Input v-model="newTopic.topicText" maxlength="16" show-word-limit placeholder="请输入题目..." ></Input>
                        </FormItem>
                </Form>  
                <div slot="footer">
                 <Row >
                    <Col span="8"></Col>
                    <Col span="8" class="col6">
                        <div class="col6-div">
                            <Button @click="ExitNewTopic">取消</Button>   <Button @click="ConfirmSaveNewTopic" :loading="loading2" type="primary" >保存</Button>
                        </div>
                    </Col>
                    <Col span="8"></Col>
                </Row>
                </div>
           </Modal>
    </div>
</template>

<script>
export default {
    name: 'EightModuleDetail',

    data() {
        return {
            loading: false,
            leftToolbar: "h bold italic strikethrough quote | ul ol table hr | link image code | undo redo clear | save |  emoji", // 左侧工具栏
            rightToolbar: "preview toc sync-scroll fullscreen", // 右侧工具栏
            PageSize:1,
            spinShow:false,
            value: true,
            member:{
            memberTitle: "",
               memberId:""
            },
            columns12: [
                    {
                        title: '题目',
                        slot: 'topicText'
                    },
                    {
                        title: '题目ID',
                        key: 'topicId'
                    },
                    {
                        title: '所属模块ID',
                        key: 'memberId'
                    },
                    {
                        title: '关/开',
                        slot: 'isOpen',
                        width: 100,
                        align: 'center'
                    },
                    {
                        title: '操作',
                        slot: 'action',
                        width: 300,
                        align: 'center'
                    }
                ],
            data6: [],
            modal10:false,
            markdown:"",
            modal11:false,
            markdownText:"",
            nowTopic:"",
            showRow:"",
            modal6:false,
            loading1:false,
            formItem:{
                topicText:"",
            },
            nowTopicIndex:-1,
            addTopic:false,
            newTopic:{
                topicText:"",
                memberId:"",
            },
            loading2:false,
            
           };
    },
   computed:{
   
            
   },
    mounted() {
      this.member = this.$route.query;
      this.getEightTopic(1);
      this.getPageSize();
    },

    methods: {
        backpage(){
            this.$router.push("/interviewadmin/eightmanagement");
        },
       
       isOpenSwitch(row, index){
        this.spinShow = true;      
        this.$axios({
              method: "PUT",
              url: "/interview/changetopicopen",
              params: {
                isOpen:(row.isOpen == 1? 0:1),
                topicId:row.topicId
             },
            }).then((res) => {              
                if(res.data.code == 200){ 
                   this.data6[index].isOpen = (row.isOpen == 1? 0:1)      
                   this.$Message.success("更改成功")            
                }else{                  
                    this.$Message.error('更改失败');
                }
                this.spinShow = false;                              
              }).catch((res) => {     
                this.spinShow = false;                
                this.$Message.error('更改失败');
              });
       },
       remove (index) {
     
        },
       DeleteEightTopic(row,index){
        this.$Modal.confirm({
                    title: '删除确认',
                    content: '<p>确定删除吗？</p>',
                    onOk: () => {
                        this.spinShow = true;                      
                        this.$axios({
                        method: "DELETE",
                        url: "/interview/deletetopic",
                        params: {
                            topicId: row.topicId,
                        },
                        }).then((res) => {
                            if(res.data.code == 200){
                                this.data6.splice(index,1);
                                this.$Message.success("删除成功");
                            }else{
                                this.$Message.error("删除失败");
                            }
                            this.spinShow = false;
                        }).catch((res) => {
                            this.spinShow = false;
                            this.$Message.error("删除失败");
                            
                        });   
                    },
                    onCancel: () => {
                        this.spinShow = false;       
                    }
                });
       
       
       },
        showeditor(row,index){
           this.showRow = row;
         this.$axios({
                method: "GET",
                url: "/interview/getTopicanswer",
                params: {
                    topicId: row.topicId,
                },
                }).then((res) => {
                    if(res.data.code == 200){
                        this.markdown = res.data.data.articleText;
                        this.modal10 = true;
                    }else{
                    this.markdown = "还没有内容";
                    this.modal10 = true;
                    }
                    
                }).catch((res) => {
                    this.$Message.error("查询失败");
                });
         },
         EditEight(row,index){
           this.nowTopic = row;
           this.modal11 = true;
           this.$axios({
                method: "GET",
                url: "/interview/getTopicanswer",
                params: {
                    topicId: row.topicId,
                },
                }).then((res) => {
                    if(res.data.code == 200){                     
                        this.markdownText = res.data.data.articleText;                      
                    }else{
                     this.markdownText = "还没有内容";
                   }
                    
                }).catch((res) => {
                    this.$Message.error("查询失败");
                });
         },
        getEightTopic(PageNum){
            this.spinShow = true;
            this.$axios({
              method: "GET",
              url: "/interview/geteighttopic",
              params: {
                PageNum:PageNum,
                memberId:this.member.memberId
              },
            }).then((res) => {
              
                if(res.data.code == 200){ 
                     this.data6 = res.data.data;
                  
                }else{                  
                    this.$Message.error('获取失败');
                }
                this.spinShow = false;                              
              }).catch((res) => {     
                this.spinShow = false;                
                this.$Message.error('获取失败');
              });
        },
         getPageNum( status){
         this.getEightTopic(status);
        },
        asyncOK () {
            this.loading = true;
            setTimeout(() => {
            // this.modal11 = false;
            this.loading = false;
            }, 2000);
        },
        getPageSize(){
            this.$axios({
              method: "GET",
              url: "/interview/getpagesize",
              params: {
                memberId:this.member.memberId
              },
            }).then((res) => {             
                if(res.data.code == 200){ 
                   this.PageSize = res.data.data;
                }else{
                    this.$Message.error('获取失败');
                }                                       
              }).catch((res) => {     
              
              });
        },

        ConfirmSave(){
            this.loading = true;
            this.$axios({
              method: "PUT",
              url: "/interview/exittopic",
              data: {
                topicId:this.nowTopic.topicId,
                articleText:this.markdownText,
              },
            }).then((res) => {              
                if(res.data.code == 200){ 
                    this.$Message.success('保存成功');                 
                }else{                  
                    this.$Message.error('保存失败');
                }  
                this.loading = false;                                       
              }).catch((res) => {     
                this.loading = false;  
                this.$Message.error('保存失败');
              });
        },
        ExitEditing(){
           this.modal11 = false;
        },
        EditEightTitle(row,index){
            this.formItem =  JSON.parse(JSON.stringify(row));
            this.modal6 = true;
            this.nowTopicIndex = index;
        },
       
        ConfirmSaveEditEightTitle(){
            this.loading1 = true;
            this.$axios({
              method: "PUT",
              url: "/interview/saveediteeighttitle",
              data: {
                topicId:this.formItem.topicId,
                topicText:this.formItem.topicText,
              },
            }).then((res) => {              
                if(res.data.code == 200){ 
                    this.$Message.success('更改成功');  
                    this.data6[this.nowTopicIndex].topicText = this.formItem.topicText;
                }else{                  
                    this.$Message.error('更改失败');
                }  
                this.loading1 = false;    
                this.modal6 = false;                                   
              }).catch((res) => {     
                this.loading1 = false;
                this.$Message.error('更改失败');
                this.modal6 = false; 
              });
        },
        ExitEditEditEightTitle(){
            this.modal6 = false; 
        },
        addNewTopic(){
            this.addTopic = true;
            this.newTopic.memberId = this.member.memberId;
            this.newTopic.topicText = "";
        },
        ConfirmSaveNewTopic(){
            this.loading2 = true;
            this.$axios({
              method: "POST",
              url: "/interview/savenewtopic",
              data: this.newTopic
            }).then((res) => {              
                if(res.data.code == 200){ 
                    this.$Message.success('增加成功');  
                    this.data6.unshift(res.data.data);
                }else{                  
                    this.$Message.error('增加失败');
                }  
                this.loading2 = false;    
                this.addTopic = false;
                                                
              }).catch((res) => {     
                this.loading2 = false;
                this.addTopic = false;
                this.$Message.error('增加失败');
               
              });

        },
        ExitNewTopic(){
            this.addTopic = false;
        }
    },
};
</script>

<style lang="scss" scoped>
.div1{
    height: 100%;
    width: 100%;
}
.div2{
  
    width: 100%;
    height: 1.5em;
    line-height: 1.5em;
   
   
}

.div3{
    display: flex;
    height: 1.5em;
    width: 5em;
    cursor: pointer;
}
.div3:hover{
    color: rgb(0, 50, 214);
}
.button1{
    margin-right: 1em;
}
.icon{
    width: 1.5em;
    height: 1.5em;
    margin-left: 0.5em; 
}
.div4{
    width: 100%;
    height: 98%;
  
}
.row{
    height: 100%;
    width: 100%;
}
.mypage{
    display: flex;
    width: 100%;
    height: 3em;
    margin-top: 0.5em;
    justify-content:flex-end;
    
}
.titletopic{
    display: flex;
    width: 100%;
    margin: 10px;
    color: black;
    font-size: large;
    justify-content: space-between;
}

 .centerdiv{
    
    height:90vh;
    width: 100%;
    overflow: auto;
 }
 .editor{
    width: 100%;
 }
 .modalediteight{
    width: 100%;
    height: 100%;
 }
 .col6{

 }
 .col6-div{
    display: flex;
    width: 100%;
    justify-content: space-around;
 }
</style>