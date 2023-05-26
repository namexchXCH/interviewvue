<template>
    <div class="div1">
   
        <div class="top">
            <div class="top2" @click="backpage">
                <svg-icon icon-class="G_fanhui" class="icon"></svg-icon> 返回
            </div>         
        </div>


            <Row class="row1">
                <Col span="5" class="col41">
                    <li @click="topic(item,index)" v-for="(item,index) in allTopic " :key="index"  :class= "['row1-li',{ row1liSelected: topicSelected == index } ]" >
                        <span class="col41-span">{{ index+1 }}</span>
                        <span class="span1">{{item.topicText}}</span> 
                    </li>   
                </Col>
                
                <Col span="19" class="col42">
                    <div style="width:85em;">
                        <v-md-editor :value="markdown" mode="preview"></v-md-editor>
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
.col42{
    height: 100%;
    overflow: auto;
}
.row1-li{
    height: 2em;
    width: 90%;
    margin-left: 1em;
    list-style-type:none;
    line-height: 2em;
    border-radius: 5px;
    cursor: pointer;

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

</style>