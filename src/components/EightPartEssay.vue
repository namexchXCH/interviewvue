<template>
  <div class="pageone">
    <div class="one1">
      <Row class="row1">
        <Col span="5"></Col>
        <transition name="el-fade-in-linear">
          <Col span="14" class="col2">
          <div class="baioqianp">
            <p
              v-for="(item, index) in EightTextLabel"
              :key="index"
              @click="acticeLable(index, item)"
           
              :class="['pp1', { pp1active: labelNumber == index }]"
              
            >
              {{ item.labelText }}
            </p>
          </div>
        </Col>
      </transition>
      

        <Col span="5"></Col>
      </Row>
    </div>
    <div class="center123" style="margin-top: 2em">
      <Row class="row123">
        <Col span="2"></Col>
        <transition name="el-fade-in-linear">
          <Col span="20" class="row-col123">
          <div v-show="this.isShowImage < 1">
            <div class="showjiaban">
              <svg-icon icon-class="zhanwushuju" class="icon"></svg-icon>
            </div>
          </div>
          <div v-show="this.cardList.length >= 1">
            <p
              v-for="(item, index) in cardList"
              :key="index"
              @click="menberCar(index, item)"
              class="opop" >
              <Card
               
                :dis-hover="true"
                :padding="0"
              >
                <div class="car-car" >
                  <Row>
                    <Col span="7" style="">
                      <div
                        style="height: 90px; display: flex; align-items: center; "
                      >
                        <img
                         class="img"
                          :src="item.coverUrl"
                        />
                      </div>
                    </Col>

                    <Col span="17">
                      <Tooltip  max-width="200" :content="item.introduce" placement="bottom">
                        <p style="margin-top: 2px; color: #000000">
                          {{ item.memberTitle }}
                        </p>
                        <p class="cardtext"
                        
                        >
                          {{ item.introduce }}
                        </p>
               
                    
                      <div style=" width: 185px; height: 19px; display: flex; align-items: center;margin-top: 3px;">
                        <span v-show="item.isMemberRequired==1" style="color: #fb8334">会员专享</span><span style="margin-left: 5px; height: 19px" >
                          <img style="height: 19px" src="../../public/mag/眼睛.png" /></span>
                          <span style="font-size: 10px">
                          {{item.readerNumber }}
                          </span>
                      </div>
                    </Tooltip>
                    </Col>
                  </Row>
                </div>
              </Card>
            </p>
          </div>
        </Col>
       </transition>
      
        <Col span="2"></Col>
      </Row>
    </div>
  </div>
</template>

<script>
export default {
  name: "EightPartEssay",

  data() {
    return {
      EightTextLabel: [],
      labelNumber: 0,
      cardList: [],
      isShowImage: 2,
     
    };
  },

  mounted() {},

  created() {
    this.$axios({
      method: "GET",
      url: "/interview/eightalllabel",
    })
      .then((res) => {
        console.log(res);
        if (res.data.code == 200) {
          this.EightTextLabel = res.data.data;
          console.log(this.EightTextLabel.length);
          if (this.EightTextLabel.length > 0) {
            this.$axios({
              method: "GET",
              url: "/interview/eightalllabelmember",
              params: {
                labelId: this.EightTextLabel[0].labelId,
              },
            }).then((res) => {
                if (res.data.code == 200) {
                  this.cardList = res.data.data;
                }
              }).catch((res) => {});
          }
        }
      })
      .catch((res) => {
        console.log(res);
      });
  },

  methods: {
    acticeLable(index, item) {
      this.isShowImage = 2;
      this.labelNumber = index;
      this.$axios({
        method: "GET",
        url: "/interview/eightalllabelmember",
        params: {
          labelId: item.labelId,
        },
      }).then((res) => {
          if (res.data.code == 200) {
            this.cardList = res.data.data;
            if (this.cardList.length < 1) {
              this.$Message.info("小站正在加班努力中！");
              this.isShowImage = 0;
            }
          }
        }).catch((res) => {});
    },

    menberCar(index, item) {
      console.log( this.$mainStore.isLogin!=true);
      console.log(item);    

      if(this.$mainStore.isLogin!=true){

        this.$Message.info("请先登录！");

      }else{
         this.$router.push({
           path:"/home/details",
           query:{
            isActive: 1,
            memberId:item.memberId,
           }
           
        });       
      }
       
    },
      
  },
};
</script>

<style lang="scss" scoped>
.pageone{
  height: 100%;
  width: 100%;
}
.baioqianp {
  margin-top: 2em;

  box-shadow: 0 0 10px rgb(234, 242, 255);

  border-radius: 8px;
}

.pp1 {
  display: inline-block;
  width: 6em;
  margin-top: 0.5em;
  margin-left: 1em;
  border-radius: 8px;
  line-height: 2em;
  text-align: center;

}

.pp1:hover {
 
  background-color: #bbcfff;
  cursor: pointer;
  box-shadow: 0 0 10px rgb(214, 230, 255);
  
}

.pp1:active {
  background-color: #a5bbe5;
}

.showjiaban {
  display: flex;
  width: 100%;
 
  justify-content: center;
  align-items: center;

}
.icon {
  height: 30em;
  width: 30em;
}
.opop{
  // background-color: red;
  display: inline-block;
  margin-left: 1em;
  cursor: pointer;
  margin-top: 1em;
  
}
.opop:hover {
  box-shadow: 0 0 10px rgb(217, 226, 241);

}

.pp1active {
  background-color: #bbcfff !important;
}

.car-car{
  width: 270px; 
  height: 90px;
 
}

.sdgfsdgf{
  background-color: red;
  height: 100px;
  width: 100px;
  transition: all 5s ;
}
.sdgfsdgf:hover{
  background-color: red;
  height: 200px;
  width: 200px;
}
.img{
 width: 70px;
  height: 86px;
 border-radius: 4px;
 margin-left: 2px;                                           
}
.cardtext{
 
  margin-top: 2px;
  width: 185px;
  height: 42px;
  word-break: break-all;
  line-height: 1.2;
  font-size: 10px;
   display: -webkit-box;
    overflow: hidden;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;

                        
}
.center123{
  height: 80%;
  width: 100%;
}
.row123{
 height: 100%;
 overflow: auto;

}
.row-col123{
  height: 100%;

}
</style>