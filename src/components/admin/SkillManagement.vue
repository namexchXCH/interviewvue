<template>
    <div class="divone">
        <Row class="row1">
            <Col span="1"></Col>
            <Col span="22" class="row1-col2">
               <div class="col-div1">
                     <div @click="skillDetail(item,index)" class="skillmember" v-for="(item,index) in SkillMembers" :key="index">
                        <div class="skillmember1">
                           <Icon class="Icon" type="ios-navigate" color="#8DC149" size="23"></Icon> <span class="spantext"> {{ item.skillName }}</span>
                        </div>
                     </div>
                                                      
               </div>
            </Col>
            <Col span="1"></Col>
        </Row>

        <Row class="row2">
        <Col span="1"></Col>
        <Col span="22" class="row2-col2">
            <div class="div-row2">  
                 <div class="" style="display:inline-block;height: 30px;">
                    <span class="spanicon"> <Icon type="ios-book" color="#007ACC" size="30"/></span><span class="text1">{{ nowSkill.skillName }}</span>
                </div>
                <div style="display:inline-block">
                    <el-tooltip :content="'模块是否开放 '" placement="top" v-show="nowSkill.skillName!='' ">
                        <el-switch :value="nowSkill.isActive==1" active-color="#13ce66" inactive-color="#ff4949" @click.native="isOpenSkill"  style=" margin-right: 1em;"> </el-switch>
                    </el-tooltip>
                    <Button type="success" style=" margin-right: 1em;" ghost  @click="editNowSkill" v-show="nowSkill.skillName!='' ">编辑该标签</Button>
                    <Button type="error" style=" margin-right: 1em;" :loading="deletloading" @click="deleteSkill" v-show="nowSkill.skillName!='' ">删除该模块</Button>
                    <Button type="success" style=" margin-right: 1em;"  @click="addSkillMember" v-show="nowSkill.skillName!='' ">为该模块增加题目</Button> 
                     <Button type="success" @click="addSkill">新增标签</Button>
                     
                </div>  
                 
            </div>
       
               
        </Col>
        <Col span="1"></Col>
       </Row>

       <Row class="row3">
        <Col span="1"></Col>
        <Col span="22" class="row3-col2">
            <Table border :columns="columns12" :data="data6" height="440" size="small">
                <template slot-scope="{ row }" slot="memberName">
                    <strong>{{ row.memberName }}</strong>
                </template>
                <template slot-scope="{ row,index }" slot="isOpen">
                    <el-switch :value="row.isOpen == 1"   active-color="#13ce66"  inactive-color="#ff4949" @click.native="isOpenSwitch(row, index)"  ></el-switch>
                </template>
                <template slot-scope="{row, index }" slot="action">
                    <Button type="success" size="small" style="margin-right: 5px" ghost @click="EditskillMTitle(row,index)">编辑题目</Button>
                    <Button type="success" size="small" style="margin-right: 5px" @click="showskillMeditor(row,index)">查看</Button>
                    <Button type="primary" size="small" style="margin-right: 5px" @click="EditskillM(row,index)">编辑</Button>
                    <Button type="error" size="small" @click="DeleteskillM(row,index)">删除</Button>
                </template>
           </Table>
            <div class="fenpage">
                <Page  :total="pageNum" @on-change="getPageNum"  />
            </div>
            <Spin size="large" fix  v-if="spinShow"> </Spin>
        </Col>
        <Col span="1"></Col>
       </Row>

            <Modal
                v-model="modal6"
                title="题目编辑">
                <Form :model="formItem" :label-width="80">
                        <FormItem label="题目">
                            <Input v-model="formItem.memberName" maxlength="16" show-word-limit placeholder="请输入题目..." ></Input>
                        </FormItem>
                </Form>   
                <div slot="footer">
                    <Row >
                    <Col span="8"></Col>
                    <Col span="8" class="col6">
                        <div class="col6-div">
                            <Button @click="ExitEditEditskillMTitle">取消</Button>   <Button @click="ConfirmskillMTitle" :loading="loading1" type="primary" >保存</Button>
                        </div>
                    </Col>
                    <Col span="8"></Col>
                    </Row>          
                </div>
            </Modal>

            <Modal class="modal" :styles="{top: '1px'}" footer-hide :title="showRow.memberName"   width="50vw" v-model="modal10">
               <div class="centerdiv">
                  <v-md-editor :value="markdown" mode="preview" class="editor" ></v-md-editor>
               </div>
          </Modal>

          <Modal v-model="modal11" fullscreen :title="showRow.memberName">
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

         <Modal v-model="modal12" title="为该模块添加题目">
            <Form :model="formItem12" :label-width="80">
                <FormItem label="题目">
                    <Input v-model="formItem12.memberName" maxlength="16" show-word-limit placeholder="请输入题目..." ></Input>
                </FormItem>
            </Form>   
            <div slot="footer">
                <Row >
                  <Col span="9"></Col>
                  <Col span="6" class="col6">
                    <div class="col6-div">
                        <Button @click="ExitEditing1">退出</Button>   <Button @click="ConfirmSave1" :loading="loading12" type="primary" >确定保存</Button>
                    </div>
                  </Col>
                  <Col span="9"></Col>
                </Row>
           
            </div>
         </Modal>


         <Modal v-model="modal13" title="新增标签">
            <Form :model="formItem13" :label-width="80">
                <FormItem label="标签名字">
                    <Input v-model="formItem13.skillName" maxlength="16" show-word-limit placeholder="请输入标签名字..." ></Input>
                </FormItem>
            </Form>   
            <div slot="footer">
                <Row >
                  <Col span="9"></Col>
                  <Col span="6" class="col6">
                    <div class="col6-div">
                        <Button @click="ExitEditing3">退出</Button>   <Button @click="ConfirmSave3" :loading="loading13" type="primary" >确定保存</Button>
                    </div>
                  </Col>
                  <Col span="9"></Col>
                </Row>
           
            </div>
         </Modal>

         <Modal v-model="modal14" title="编辑该标签">
            <Form :model="formItem14" :label-width="80">
                <FormItem label="标签名字">
                    <Input v-model="formItem14.skillName" maxlength="16" show-word-limit placeholder="请输入标签名字..." ></Input>
                </FormItem>
            </Form>   
            <div slot="footer">
                <Row >
                  <Col span="9"></Col>
                  <Col span="6" class="col6">
                    <div class="col6-div">
                        <Button @click="ExitEditing4">退出</Button>   <Button @click="ConfirmSave4" :loading="loading14" type="primary" >确定保存</Button>
                    </div>
                  </Col>
                  <Col span="9"></Col>
                </Row>
           
            </div>
         </Modal>

    </div>
</template>

<script>
export default {
    name: 'SkillManagement',

    data() {
        return {
            loading12:false,
            modal12:false,
            formItem12:{ 
                memberId:"",
                skillId:"",
                isOpen:"",
                memberName:""
            },
            formItem13:{ 
                skillId:"",
                skillName:"",
                isActive:"",
            }, 
            formItem14:{ 
                skillId:"",
                skillName:"",
                isActive:"",
            },   
            modal13:false,
            loading13:false, 
            modal11:false,
            markdownText:"",
            loading:false,
            showRow:{
                memberName:""
            },
            modal10:false,
            modal6:false,
            loading1:false,
            pageNum:1,
            SkillMembers:[],
            nowSkill:{
                skillName:''
            },
            nowSkillIndex:-1,
            columns12: [
                    {
                        title: '题目',
                        slot: 'memberName'
                    },
                    {
                        title: '模块ID',
                        key: 'skillId'
                    },
                    {
                        title: '题目ID',
                        key: 'memberId'
                    },
                    {
                        title: '关/开',
                        slot: 'isOpen',
                        width: 100,
                        align: 'center'
                    },
                    {
                        title: 'Action',
                        slot: 'action',
                        width: 300,
                        align: 'center'
                    }
                ],
            data6: [],
            formItem:{
                memberName:""
            },           
            nowSkillMemberIdex:"",
            spinShow:false,
            markdown:"还没有内容",
            leftToolbar: "h bold italic strikethrough quote | ul ol table hr | link image code | undo redo clear | save |  emoji", // 左侧工具栏
            rightToolbar: "preview toc sync-scroll fullscreen", // 右侧工具栏
            modal14:false,
            loading14:false,
            deletloading:false
        };
    },

    mounted() {
        this.getAllSkill();
    },

    methods: {
        getAllSkill(){
            this.$axios({
                method: "GET",
                url: "/interview/alltoskill",
           }).then((res) => {
                if(res.data.code == 200){
                   this.SkillMembers = res.data.data;
                  
                }else{
                    this.$Message.info(res.data.message);
                }
           }).catch((res) => {});
        },

        skillDetail(item,index){
            console.log(item,index);
            this.nowSkill = JSON.parse(JSON.stringify(item));
            this.nowSkillIndex = index;
            this.getAllPageNum(this.nowSkill);
            this.getPageNum(1);

        },

    
        getAllPageNum(nowSkillitem){
            this.$axios({
              method: "GET",
              url: "/interview/getskillmembernum",
              params:{
                skillId:nowSkillitem.skillId,
              }
            }).then((res) => {              
                if(res.data.code == 200){ 
                   this.pageNum = res.data.data;           
                }else{                  
                    this.$Message.error('获取页数失败');
                }  
                                    
              }).catch((res) => {     
                this.$Message.error('获取页数失败');
              });
        },

        getPageNum(status){           
            this.$axios({
              method: "GET",
              url: "/interview/getskillmemberpage",
              params:{
                skillId:this.nowSkill.skillId,
                pageNum:status,
              }
            }).then((res) => {              
                if(res.data.code == 200){ 
                   this.data6 = res.data.data;  
                     
                }else{                  
                    this.$Message.error('获取数据失败');
                }  
                                    
              }).catch((res) => {     
                this.$Message.error('获取数据失败');
              });
        },
        DeleteskillM(row,index){
            this.spinShow = true;
            this.$axios({
                method: "DELETE",
                url: "/interview/deleteskillmembertext",
                params: {
                    memberId: row.memberId,
                }
           }).then((res) => {
                if(res.data.code == 200){
                   this.$Message.success("删除成功");
                   this.data6.splice(index,1);
                }else{                   
                    this.$Message.error("删除失败");
                }
                this.spinShow = false;
           }).catch((res) => {
            this.$Message.error("删除失败");
            this.spinShow = false;
           });

        },
        EditskillM(row,index){  
            this.nowSkillMemberIdex = index;      
            this.modal11 = true;
            this.showRow = JSON.parse(JSON.stringify(row)); 
            this.$axios({
                method: "GET",
                url: "/interview/skillmemberanswer",
                params: {
                    memberId: row.memberId,
                }
           }).then((res) => {
                if(res.data.code == 200){
                   this.markdownText = res.data.data.memberText;
                }else{
                    this.markdownText = "还没有内容"
                    this.$Message.info(res.data.message);
                }
           }).catch((res) => {
            this.markdownText = "还没有内容"
           });

        },
        showskillMeditor(row,index){
            this.modal10 = true;
            this.showRow = row;
            this.$axios({
                method: "GET",
                url: "/interview/skillmemberanswer",
                params: {
                    memberId: row.memberId,
                }
           }).then((res) => {
                if(res.data.code == 200){
                   this.markdown = res.data.data.memberText;
                }else{
                    this.markdown = "还没有内容"
                    this.$Message.info(res.data.message);
                }
           }).catch((res) => {
            this.markdown = "还没有内容"
           });
            
        },
        EditskillMTitle(row,index){
           this.modal6 = true;
           this.formItem = JSON.parse(JSON.stringify(row));
           this.nowSkillMemberIdex = index;

        },
        isOpenSwitch(row, index){  
            this.spinShow = true;      
            this.$axios({
              method: "PUT",
              url: "/interview/changeskillmenberopen",
              data:{
                isOpen:(row.isOpen == 1? 0:1),
                memberId:row.memberId
              }
            }).then((res) => {              
                if(res.data.code == 200){ 
                  this.data6[index].isOpen = (row.isOpen == 1? 0:1);     
                  this.$Message.success('更改成功');
                }else{                  
                    this.$Message.error('更改失败');
                }  
                this.spinShow = false;           
              }).catch((res) => {     
                this.$Message.error('更改失败');
                this.spinShow = false;
              });
        },

        ConfirmskillMTitle(){
            this.loading1 = true;
            this.$axios({
              method: "PUT",
              url: "/interview/changeskillmenbertitle",
              data:this.formItem,
            }).then((res) => {              
                if(res.data.code == 200){ 
                  this.data6[this.nowSkillMemberIdex].memberName = this.formItem.memberName;     
                  this.$Message.success('更改成功');
                }else{                  
                    this.$Message.error('更改失败');
                }  
                this.loading1 = false;                 
              }).catch((res) => {     
                this.$Message.error('更改失败');
                this.loading1 = false;   
              });
        },
        ExitEditEditskillMTitle(){
            this.loading1 = false;
            this.modal6 = false;
        },
        ConfirmSave(){
            this.loading = true;
            this.$axios({
              method: "PUT",
              url: "/interview/exitmembertext",
              data: {
                memberId:this.showRow.memberId,
                memberText:this.markdownText,
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
            this.markdownText = "还没有内容"
            this.loading = false;       
            this.modal11 = false;
        },
        isOpenSkill(){
            this.$Modal.confirm({
                    title: '关闭确认',
                    content: '确认关闭该模块吗？',
                    onOk: () => {                  
                        this.$axios({
                        method: "PUT",
                        url: "/interview/changeskillisopem",
                        data:{
                         isActive:(this.nowSkill.isActive==1? 0:1),
                         skillId:this.nowSkill.skillId,
                        },
                        }).then((res) => {              
                            if(res.data.code == 200){ 
                            this.nowSkill.isActive = (this.nowSkill.isActive==1? 0:1);
                            this.nowSkill = JSON.parse(JSON.stringify(this.nowSkill))   
                               this.SkillMembers[this.nowSkillIndex]=JSON.parse(JSON.stringify(this.nowSkill));  
                               this.$Message.success('更改成功');                        
                            }else{                  
                                this.$Message.error('更改失败');
                            }  
                                        
                        }).catch((res) => {     
                            this.$Message.error('更改失败');                         
                        });
                    },
                    onCancel: () => {
                        this.$Message.info('Clicked cancel');
                    }
                });
        },
        addSkillMember(){
            this.modal12 = true;
        },
        addSkill(){
            this.modal13 = true;
        },
        deleteSkill(){
            this.deletloading = true;
            this.$Message.error('deleteSkill');
            this.$axios({
              method: "DELETE",
              url: "/interview/deleteskill",
              params:{
                skillId:this.nowSkill.skillId,
              }
               
            }).then((res) => {
                if(res.data.code == 200){ 
                    this.SkillMembers.splice(this.nowSkillIndex,1);
                    this.$Message.success('删除成功');
                }else{                  
                    this.$Message.error(res.data.message);
                }  
                this.deletloading = false;
              }).catch((res) => {
                this.deletloading = false;      
                this.$Message.error("删除失败");
              });

        },
        ConfirmSave1(){
            this.loading12 = true;
            this.formItem12.skillId = this.nowSkill.skillId;
            this.$axios({
              method: "POST",
              url: "/interview/addskillmember",
              data:this.formItem12
            }).then((res) => {              
                if(res.data.code == 200){ 
                    this.data6.unshift(res.data.data);
                    this.$Message.success('添加成功');                 
                }else{                  
                    this.$Message.error('添加失败');
                }  
                this.formItem12.memberName ="";
                this.formItem12.skillId = "";
                this.loading12 = false;                                      
              }).catch((res) => {     
                this.formItem12.memberName ="";
                this.formItem12.skillId = "";
                this.loading12 = false;
                this.$Message.error('添加失败');
              });

        },
        ExitEditing1(){
            this.loading12 = false;
            this.modal12 = false;
        },
        ConfirmSave3(){
            this.loading13 = true;
            this.$axios({
              method: "POST",
              url: "/interview/addskill",
              data:this.formItem13
            }).then((res) => {              
                if(res.data.code == 200){ 
                    this.SkillMembers.unshift(res.data.data);
                    this.$Message.success('添加成功');                 
                }else{                  
                    this.$Message.error('添加失败');
                }  
                this.formItem13.skillName="";
                this.loading13 = false;                            
              }).catch((res) => {     
                this.formItem13.skillName="";
                this.loading13 = false;      
                this.$Message.error('添加失败');
              });
        },

        ExitEditing3(){
            this.loading13 = false;
            this.modal13 = false;
        },
        editNowSkill(){
            this.formItem14 = JSON.parse(JSON.stringify(this.nowSkill));
            this.modal14 = true;        
        },
        ConfirmSave4(){
            this.loading14 = true;
            this.$axios({
              method: "PUT",
              url: "/interview/editskillname",
              data:this.formItem14
            }).then((res) => {              
                if(res.data.code == 200){ 
                    this.SkillMembers.unshift(JSON.parse(JSON.stringify(this.formItem14)));
                    this.$Message.success('更改成功');                 
                }else{                  
                    this.$Message.error('更改失败');
                }  
                this.loading14 = false;                            
              }).catch((res) => {     
                this.loading14 = false;      
                this.$Message.error('更改失败');
              });
        },
        ExitEditing4(){
            this.loading14 = false;
            this.modal14 = false;
        },

    },
};
</script>

<style lang="scss" scoped>
.divone{
    height: 100%;
    width: 100%;
    border-radius: 5px;
}
.row1{
    height: 16%;

}
.row1-col2{
    height: 100%;
    overflow: auto;
}
.row1-col2::-webkit-scrollbar{
    width: 0.5em;
   
}
.col-div1{ 
    width: 100%;
}
.skillmember{  
    width: 11em;
    height: 2.5em;   
    margin-top: 0.7em;
    margin-left: 1.5%;
    border-radius: 3px;
    display:inline-block;
    box-shadow: 0 0 10px rgb(217, 226, 241);
    cursor: pointer;
}
.skillmember1{
  width: 100%;
  height: 100%;
  border-radius: 3px;
  display: flex;
  align-items: center;
 
}
.skillmember:hover{
    box-shadow: 0 0 10px rgb(160, 196, 255);
}
.skillmember:active{
    box-shadow: 0 0 10px rgb(188, 214, 255);
}
.spantext{
    margin-left: 0.2em;
}
.Icon{
    margin-left: 0.2em;
}
.row2{
    height: 7%;
}
.row2-col2{
    height: 100%;
    width: 100%;
}
.div-row2{
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;

    justify-content: space-between;
    align-items: center;
}
.spanicon{

    height: 30px;
    margin-left: 0.7em;
    line-height: 30px;
    margin-left: 1em;

}
.text1{
    display: inline-block;
    margin-left: 0.3em;
    font: bold;
    width: 8em;
   

}
.button1{
    margin-left: 0.7em;
    
}
.row3{
    height: 77%;
}
.row3-col2{
    height: 100%;
}
.fenpage{
    display: flex;
    width: 100%;
    margin-top: 0.3em;
    justify-content: flex-end;
}

.col6-div{
    display: flex;
    width: 100%;
    justify-content: space-around;
 }

 .centerdiv{
    
    height:90vh;
    width: 100%;
    overflow: auto;
 }
 .editor{
    width: 100%;
 }

 .editor{
    width: 100%;
 }
 .modalediteight{
    width: 100%;
    height: 100%;
 }

 .col6-div{
    display: flex;
    width: 100%;
    justify-content: space-around;
   
 }
</style>