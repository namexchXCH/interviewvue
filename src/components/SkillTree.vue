<template>
    <div class="one">
        <Row class="ROW1">
            <Col span="3" style="background: '#fff'"  >
            </Col>
           <Col span="4" class="ROW1-span">
            
                <div class="cebian">
                    <Sider hide-trigger :style="{background: '#fff' }" class="Sider1">
                        <Menu active-name="1-0" theme="light" width="auto" :open-names="['1']">
                            <MenuItem @click.native="getAllMember(item)" v-for="(item,index) in skillList " :key="index" :name="'1-'+index">
                                <Icon type="ios-navigate" color="#8DC149"></Icon>
                                <span>{{ item.skillName }}</span>
                            </MenuItem>            
                        </Menu>
                    </Sider>
                    
                </div>
            
           </Col>

           <Col span="3" class="center" v-show="skillMenber.length>0">
              <div class="center1">
                <li  @click="isActive(item,index)" v-for="(item,index) in skillMenber " :key="index"  :class= "['myli',{ myli1: active == index } ]">
                    <Icon class="iconli" color="#32CA99" type="ios-leaf-outline" />{{item.memberName}}
                </li>
              </div>

           </Col>

           <Col span="12" class="kokoko" v-show="skillMenber.length>0">         
            <div class="center11">
               
                 <v-md-editor class="md" :value="markdown" mode="preview"></v-md-editor>
            </div>         
           </Col>

           <Col span="2" >
           </Col>
           <Col span="14" v-show="skillMenber.length<=0">
                  <div class="center11-div">
                    <img class="img22" src="https://s1.ax1x.com/2023/06/09/pCElQG4.png">
                 </div>
           </Col>
        </Row>

        
    </div>
</template>

<script>
export default {
    name: 'SkillTree',

    data() {
        return {
            markdown:"",
            active:-1,
            skillList:[],
            skillMenber:[],
            
        };
    },

    mounted() {
      this.getAllSkill();
        
        
    },

    methods: {
        isActive(item,index){
            this.active = index;
            console.log(item);
            this.$axios({
                method: "GET",
                url: "/interview/skillmemberanswer",
                params: {
                    memberId: item.memberId,
                }
           }).then((res) => {
            console.log(res);
                if(res.data.code == 200){
                   this.markdown = res.data.data.memberText;
                }else{
                    this.$Message.info(res.data.message);
                    this.markdown = "还没有内容"
                }
           }).catch((res) => {
            this.markdown = "还没有内容"
           });

        },

        getAllSkill(){
            this.$axios({
                method: "GET",
                url: "/interview/allskill",
           }).then((res) => {
                if(res.data.code == 200){
                   this.skillList = res.data.data;
                }else{
                    this.$Message.info(res.data.message);
                }
           }).catch((res) => {});
        },

        getAllMember(item){
            this.$axios({
                method: "GET",
                url: "/interview/allskillmember",
                params: {
                    skillId: item.skillId,
                },
           }).then((res) => {
            console.log(res);
                if(res.data.code == 200){              
                   this.skillMenber = res.data.data;
                  
                }else{
                    this.skillMenber = [];
                    this.$Message.info(res.data.message);
                    this.markdown="";
                    this.active = -1;
                }

           }).catch((res) => {

           });

        }
            
        
    },
};
</script>

<style lang="scss" scoped>

.one{
    width: 100%;
    height: 100%;

    overflow: auto;
}
.ROW1{
    height: 100%;
   

}
.cebian{
    height: 95%;
    width: 15em;
    box-shadow: 0 0 10px rgb(226, 237, 255);
    overflow: auto;
    

   
}
.ROW1-span{
    display: flex;
    justify-content: center;
    height: 100%;
    align-items: center;
    // background-color: aqua;

   
 
}
.Sider1{
    margin-top: 2em;
    height: 95%;
    overflow: auto;
    border-radius: 10px;

    
}
.Sider1::-webkit-scrollbar{
    width: 0.1em;
    
}
.center{
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
}

.center1{
  
    height: 95%;
    width: 100%;
    overflow: auto;   
    border-radius: 10px;

}
.center1::-webkit-scrollbar{
    width: 0.5em;
}
.kokoko{
    height: 100%;
    width: 50em;

  
}
.center11{
    margin-top: 1em;
    height: 95%;
    width: 100%;
    overflow: auto;
    border-radius: 10px;
   
  
}
.center11::-webkit-scrollbar{
    width: 0.5em;

}
.myli{
    cursor: pointer;
    width: 100%;
    height: 1.5em;
    margin-top: 0.3em;
    list-style-type:none;
    line-height: 1.5em;  
    border-radius: 4px;
   
}
.iconli{
    margin-left: 1em;
}
.myli:hover{
 background-color: rgb(210, 233, 255);
}
.myli:active{
 background-color: rgb(182, 220, 255);
}
.myli1{
 background-color: rgb(217, 236, 255);
}
.center11-div{
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
}
.img22{
    width: 20em;
    height: 20em;
}

</style>