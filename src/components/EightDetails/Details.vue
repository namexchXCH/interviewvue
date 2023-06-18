<template>
    <div class="div1">
   
        <div class="top">
            <div class="top2" @click="backpage">
                <svg-icon icon-class="G_fanhui" class="icon"></svg-icon> 返回
            </div>         
        </div>


            <Row class="row1">
                <Col span="4"  v-show="allTopic.length>0">
                </Col>
                <Col span="4" class="col41" v-show="allTopic.length>0">
                    <li @click="topic(item,index)" v-for="(item,index) in allTopic " :key="index"  :class= "['row1-li',{ row1liSelected: topicSelected == index } ]" >
                        <span class="col41-span">{{ index+1 }}</span>
                        <span class="span1">{{item.topicText}}</span> 
                    </li>   
                </Col>
                
                <Col span="12" class="col42" v-show="allTopic.length>0">
                    <div style="width:100%;" v-show="topicSelected!=-1">
                        <v-md-editor :value="markdown" mode="preview"></v-md-editor>
                    </div>
                    <div class="col42-div" v-show="topicSelected==-1">
                       <img class="col42-div-img" src="https://s1.ax1x.com/2023/06/09/pCEluIU.png">
                    </div>
                </Col>
                <Col span="4"  v-show="allTopic.length>0">
                </Col>
                <Col class="col111" span="24" v-show="allTopic.length<=0">
                    <div class="col42-div11" >
                       <img class="col42-div-img1" src="https://s1.ax1x.com/2023/06/09/pCElMiF.png">
                    </div>
                </Col>
           </Row>


        <!-- {{ this.$route.query }} -->
   
</div>
</template>

<script>
export default {
    name: 'Details',

    data() {
        return {
            markdown:" ",
            topicSelected: -1,
            allTopic:[],
            
        };
    },

    mounted() {
        console.log(this.$route.query);
       this.getAllTopic(this.$route.query.memberId)
        
    },

    created(){
      
      
    },

    methods: {

        backpage(){
            this.$router.back();
        },

        topic(item,index){
            this.topicSelected = index;
            console.log(item.topicId);
            this.$axios({
                method: "GET",
                url: "/interview/getTopicanswer",
                params: {
                    topicId: item.topicId,
                },
           }).then((res) => {
            if(res.data.code == 200){
                this.markdown  =res.data.data.articleText;
         }else{
           this.$Message.info(res.data.message);
         }
               
           }).catch((res) => {});

        },

        getAllTopic(memberId){

            this.$axios({
                method: "GET",
                url: "/interview/getallMeightTopic",
                params: {
                    memberId: memberId,
                },
           }).then((res) => {
                if (res.data.code == 200) {
                    this.allTopic = res.data.data;
                    console.log(res.data);
                    if (this.allTopic.length < 1) {
                       this.$Message.info("小站正在加班努力中！");
                    }
                }
           }).catch((res) => {});
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
    width: 93%;
    width: 100%;
}
.top{ 
    height: 7%;
    width: 100%;
    
}

.top2{
    display: flex;
    height: 2.5em;
    width: 4.5em;
   
    align-items: center;
}

.top2:hover{
   cursor: pointer;
   color: rgb(20, 156, 111);
}

.icon{
    width: 1.5em;
    height: 1.5em;
    margin-left: 0.5em;
    color: #FF3F33;
}
.row1{
   
    height: 93%;
}
.col41{
    height: 100%;
    overflow: auto;
}
.col41::-webkit-scrollbar{
    width: 0.5em;
}
.col42{
    display: flex;
    height: 100%;
    overflow: auto;
    justify-content: center;
}
.col42::-webkit-scrollbar{
    width: 0.2em;
}
.row1-li{
    height: 2em;
    width: 90%;
    margin-left: 1em;
    list-style-type:none;
    line-height: 2em;
    border-radius: 5px;
    cursor: pointer;
    display: -webkit-box;
    overflow: hidden;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;

}
.row1-li:hover{
    background-color: rgb(227, 226, 230);
}

.row1liSelected{
   
    background-color: rgb(213, 205, 238);
}
.row1-li:active{
    background-color: rgb(217, 215, 223);
}

.col41-span{
    text-align: center;
    display: inline-block;
    width: 3em;
    height: 2em;
    line-height: 2em;
    color: rgb(0, 0, 0);
}
.col42-div{
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
}
.col42-div-img{
    width: 30em;
    height: 30em;
}
.col42-div-img1{
    width: 30em;
    height: 30em;
}

.col42-div11{
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
   
}

</style>