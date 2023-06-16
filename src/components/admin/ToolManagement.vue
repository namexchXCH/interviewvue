<template>
    <div class="divone">
       
        <Row class="row1">
                <Col span="1"></Col>
                <Col span="22">
                   <div class="col-div1">
                        <div class="div1" v-for="(item, index) in ToolCategory" :key="index">
                            <div class="div2" @click="getalltool(item)">
                               <img :src="item.toolNavigationIcon" class="myicon"/><span class="span1">{{ item.toolNavigationNmae}}</span>
                            </div>
                        </div>
                   </div>
                </Col>
                <Col span="1"></Col>
        </Row>
        
        <Row class="row2">
          <Col span="1"></Col>
          <Col span="22">
            <div class="row2-col-div1" >
                <div v-show="tool!=''" class="col-div12">
                  <img :src="tool.toolNavigationIcon" class="myicon"/><span class="span13">{{ tool.toolNavigationNmae }}</span>
                </div>  
                <Button v-show="tool!=''" @click="AddTool(tool)" size="small" type="primary">增加工具</Button>
            </div>
           
            <Table height="500" border :columns="columns12" :data="data6" class="Table">
                <template slot-scope="{ row }" slot="resourceName">
                    <div class="table-div">
                       
                        <img class="myicon1" :src="row.resourceIcon" /><strong class="strong">{{ row.resourceName }}</strong>
                    </div>                  
               </template>

               <template slot-scope="{ row,index }" slot="isActive">
                <el-switch @click.native="handleBeforeChange(row,index)" :value="row.isActive==1" active-color="#13ce66" inactive-color="#ff4949"> </el-switch>
              </template>
               <template slot-scope="{ row, index }" slot="action">
                  <Button type="primary" size="small" style="margin-right: 5px" @click="show(index,row)">编辑</Button>
                  <Button type="error" size="small" @click="remove(index,row)">删除</Button>
              </template>
          </Table>
         </Col>
          <Col span="1"></Col>
        </Row>
        <Modal v-model="modal1" title="编辑工具信息" @on-ok="ok()" @on-cancel="cancel">
            <Form :model="formLeft" label-position="left" :label-width="100">  

                <FormItem label="名称">
                    <Input v-model="formLeft.resourceName"></Input>
                </FormItem>

                <FormItem label="介绍">
                    <Input v-model="formLeft.introduce"></Input>
                </FormItem>

                <FormItem label="资源地址">
                    <Input v-model="formLeft.resourceUrl"></Input>
                </FormItem>

                <FormItem label="图标地址">
                    <Input v-model="formLeft.resourceIcon"></Input>
                </FormItem>

            </Form>
       </Modal>

       <Modal v-model="modal2" title="增加工具" @on-ok="ok1" @on-cancel="cancel1">
        <Form :model="formLeft1" label-position="left" :label-width="100">  

            <FormItem label="名称">
                <Input v-model="formLeft1.resourceName"></Input>
            </FormItem>

            <FormItem label="介绍">
                <Input v-model="formLeft1.introduce"></Input>
            </FormItem>

            <FormItem label="资源地址">
                <Input v-model="formLeft1.resourceUrl"></Input>
            </FormItem>

            <FormItem label="图标地址">
                <Input v-model="formLeft1.resourceIcon"></Input>
            </FormItem>

       </Form>
       </Modal>

      
    </div>
</template>

<script>
export default {
    name: 'ToolManagement',

    data() {
        return {
            nowIndex:-1,
            value: true,
            modal2:false,
            modal1: false,
            ToolCategory:[],
            RaddTool:{},
            tool:"",
            formLeft1: {
                introduce: "",
                resourceIcon: "",
                resourceId: "",
                resourceName: "",
                resourceUrl: "",
                toolNavigationId: "",
                isActive:1
            },
            formLeft2: {
                introduce: "",
                resourceIcon: "",
                resourceId: "",
                resourceName: "",
                resourceUrl: "",
                toolNavigationId: "",
                isActive:1
            },
            formLeft: {},
            columns12: [
                    {
                        title: '名字',
                        slot: 'resourceName',
                        width: 160,
                    },
                    {
                        title: '介绍',
                        key: 'introduce',
                        
                    },
                    {
                        title: '资源地址',
                        key: 'resourceUrl',
                       
                    },
                    {
                        title: '开/关',
                        slot: 'isActive',
                        width: 100,
                        align: 'center'
                    },
             
                    {
                        title: 'Action',
                        slot: 'action',
                        width: 150,
                        align: 'center'
                    }
                ],

                data6: [ ]
        };
    },

    mounted() {
        this.getAllToolCategory();
    },

    methods: {
        // change (status) {
        //  this.$Message.info('开关状态：' + status);
        // },

        getAllToolCategory(){
            this.$axios({
                method: "GET",
                url: "/interview/alltoolcategory",
            }).then((res) => {
                 this.ToolCategory = res.data.data;
             }).catch((res) => {});

        },

        getalltool(item){
            this.tool = item;
            this.$axios({
                method: "GET",
                url: "/interview/tools",
                params:{
                    toolNavigationId:item.toolNavigationId
                }
            }).then((res) => {
                 this.data6 = res.data.data;

                
             }).catch((res) => {});
        },

        show (index,row) {
            this.formLeft = row; 
            this.modal1 = true;
            this.nowIndex = index;
         },
        remove (index,row) {
            let that = this;
                return new Promise((resolve) => {
                    this.$Modal.confirm({
                        title: '删除确认',
                        content: '您确认要删除吗？',
                        onOk: () => {
                            resolve();
                            that.deleteTool(index,row);
                        }
                    });
                });
         
        },

        deleteTool(index,row){
            console.log("删除了工具");
            this.$axios({
                method: "GET",
                url: "/interview/deletetool",
                params:{
                    resourceId:row.resourceId, 
                }
            }).then((res) => {
                 if(res.data.code == 200){
                    this.$Message.success('删除成功');
                    if(index>-1){
                       this.data6.splice(index,1);
                    }
                 }
                    
             }).catch((res) => {});
        },

        AddTool(tool){
            this.modal2 = true;
            this.formLeft1.toolNavigationId = tool.toolNavigationId;
        },

        ok(){

            this.$axios({
                method: "POST",
                url: "/interview/edittool",
                data:this.formLeft,
            }).then((res) => {
                 if(res.data.code == 200){ 
                    if(this.nowIndex>-1){
                    this.data6[this.nowIndex] =  this.formLeft;
                    this.formLeft = {};
                    this.nowIndex = -1;
                    this.$Message.success('编辑成功');
                  }
                }            
                 
             }).catch((res) => {});
           
        },

        cancel () {
            this.formLeft = {};
            this.nowIndex = -1;
        },

       handleBeforeChange (row,index) {
           let that = this;
                return new Promise((resolve) => {
                    this.$Modal.confirm({
                        title: '切换确认',
                        content: '您确认要切换状态吗？',
                        onOk: () => {
                            that.switch11(row,index);
                            resolve();
                        }
                    });
                });
            },

       switch11(row,index){       
        this.$axios({
                method: "GET",
                url: "/interview/changeactive",
                params:{
                    resourceId:row.resourceId,
                    isActive:row.isActive == 1? 0:1,
                }
            }).then((res) => {
   
                 if(res.data.code == 200){
                    this.data6[index].isActive = row.isActive == 1? 0:1;
                    this.$Message.success('更改成功');
                 }
                    
             }).catch((res) => {});
       },

       cancel1(){
        this.formLeft1.resourceIcon="";
        this.formLeft1.introduce="";
        this.formLeft1.resourceName="";
         this.formLeft1.resourceUrl="";
       },

       ok1(){
        this.$axios({
                method: "POST",
                url: "/interview/addtool",
                data:this.formLeft1,
            }).then((res) => {            
                 if(res.data.code == 200){ 
                    this.data6.unshift(res.data.data);
                    this.formLeft1 = this.formLeft2;
                    this.$Message.success('添加成功');
                }   
                
             }).catch((res) => {});
             this.formLeft1.resourceIcon="";
             this.formLeft1.introduce="";
             this.formLeft1.resourceName="";
             this.formLeft1.resourceUrl="";
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
.row1{
    height: 17%;
    width: 100%;

}
.col-div1{
    height: 100%;
    width: 100%;
}
.div1{
    display: inline-block;
    width: 9em;
    height: 2.5em;
    border-radius: 3px;
    margin-top: 0.7em;
    margin-left: 1em;
    align-items: center;
    box-shadow: 0 0 10px rgb(217, 226, 241);
    cursor: pointer;
}
.div1:hover{
    box-shadow: 0 0 10px rgb(160, 196, 255);
}
.div1:active{
    box-shadow: 0 0 10px rgb(188, 214, 255);
}
.div2{
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
}
.myicon{
    width: 2em;
    height: 2em;
    margin-left: 0.5em;
}
.strong{
    margin-left: 0.5em;
}
.myicon1{
    width: 2em;
    height: 2em;
}
.span1{
    margin-left: 0.5em;
}
.span13{
    margin-left: 0.5em;
    color: #2D8CF0;
    cursor: pointer;
    
}
.span13:hover{
    color: #d41010;
   
}
.row2{
    width: 100%;
    height: 83%;
}

.table-div{
    display: flex;
    height: 100%;
    width: 100%;
    align-items: center;
}
.Table{
    margin-top: 0.5em;
}
.row2-col-div1{
    display: flex;
    
    justify-content: space-between;
    align-items: center;
}
.col-div12{
    display: flex;
    height: 100%;
    width: 100%;
    align-items: center;
   
   
}

</style>