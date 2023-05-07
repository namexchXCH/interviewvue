<template>
  <div class="pageone">
    <div class="one1">
      <Row class="row1">
        <Col span="5"></Col>
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
        <Col span="5"></Col>
      </Row>
    </div>
    <div style="margin-top: 2em">
      <Row>
        <Col span="3"></Col>
        <Col span="18">
          <div>
            <p
              v-for="(item, index) in cardList"
              :key="index"
              @click="menberCar(index,item)"
              class="opop"
              style="
                display: inline-block;
                margin-left: 1em;
                cursor: pointer;
                margin-top: 1em;
              "
            >
              <Card
                style="width: 270px; height: 90px"
                :dis-hover="true"
                :padding="0"
              >
                <div style="width: 270px; height: 90px;"  >
                  <Row>

                    <Col span="7" style=" " >
                        <div style="height: 90px;display: flex;align-items: center;">
                             <img style="width: 70px;height: 86px;border-radius: 4px;margin-left: 2px;" :src="item.coverUrl"/>
                        </div>
                       
                    </Col>

                    <Col span="17">
                        <p style="margin-top: 2px;color: #000000;">{{ item.memberTitle }}</p>
                        <p style="margin-top: 2px;width: 185px;height: 45px;word-break: break-all;line-height: 1.2;font-size: 10px;">{{ item.introduce }}</p>
                        <div style="width: 185px;height: 19px; display: flex;align-items: center;">
                          <span style="color: #FB8334;">会员专享</span><span style="margin-left: 25px;height: 19px;"><img style="height: 19px;" src="../../public/mag/眼睛.png"></span><span style="font-size: 10px;">{{ item.readerNumber }}</span>
                       </div>                     
                    </Col>

                  </Row>
                </div>
              </Card>
            </p>
          </div>
        </Col>
        <Col span="3"></Col>
      </Row>
    </div>
  </div>
</template>

<script>
export default {
  name: "EightPartEssay",

  data() {
    return {
      EightTextLabel: [
        {
          labelId: "",
          labelText: "后端",
          isActive: "1",
        },
        {
          labelId: "",
          labelText: "前端",
          isActive: "1",
        },
        {
          labelId: "",
          labelText: "大数据",
          isActive: "1",
        },
        {
          labelId: "",
          labelText: "学科基础",
          isActive: "1",
        },
        {
          labelId: "",
          labelText: "前端",
          isActive: "1",
        },
        {
          labelId: "",
          labelText: "大数据",
          isActive: "1",
        },
        {
          labelId: "",
          labelText: "学科基础",
          isActive: "1",
        },
        {
          labelId: "",
          labelText: "前端",
          isActive: "1",
        },
        {
          labelId: "",
          labelText: "大数据",
          isActive: "1",
        },
        {
          labelId: "",
          labelText: "学科基础",
          isActive: "1",
        },
        {
          labelId: "",
          labelText: "前端",
          isActive: "1",
        },
        {
          labelId: "",
          labelText: "大数据",
          isActive: "1",
        },
        {
          labelId: "标签Id",
          labelText: "学科基础",
          isActive: "1",//标签是否开放
        },
      ],
      labelNumber: 0,

      cardList:[
        {
            labelId:"标签Id",
            memberId:"标签下每个成员id",
            memberTitle:"Java 面试突破",
            introduce:"Java 面试高频知识点详解，带你查缺补漏，轻松突破 Java 面试",
            coverUrl:require("../assets/暑期实习岗位攻略.png"),
            readerNumber:6562, 
            isMemberRequired:"是否需要会员",
            isActive: "1",//内容是否开放
        },
        {
            labelId:"标签Id",
            memberId:"标签下每个成员id",
            memberTitle:"深入浅出设计模式",
            introduce:"详解 23 种设计模式，结合具体代码实战，助你彻底理解设计模式",
            coverUrl:require("../assets/前端通关手册CSS.png"),
            readerNumber:6562, 
            isMemberRequired:"是否需要会员",
            isActive: "1",//内容是否开放
        },
        {
            labelId:"标签Id",
            memberId:"标签下每个成员id",
            memberTitle:"数据库面试速通",
            introduce:"围绕大厂真实面试题，深度剖析数据库核心考点，助你速通面试。",
            coverUrl:require("../assets/深入浅出设计模式.jpg"),
            readerNumber:6562, 
            isMemberRequired:"是否需要会员",
            isActive: "1",//内容是否开放
        },
        {
            labelId:"标签Id",
            memberId:"标签下每个成员id",
            memberTitle:"大厂真题演练 - 后端岗",
            introduce:"收集整理的各大厂后端岗位面试中的计算机基础考核类真题（八股文类）。",
            coverUrl:require("../assets/算法岗_LB_封面.png"),
            readerNumber:6562, 
            isMemberRequired:"是否需要会员",
            isActive: "1",//内容是否开放
        },
        {
            labelId:"标签Id",
            memberId:"标签下每个成员id",
            memberTitle:"七天八股速记：算法岗",
            introduce:"针对算法岗位面试中的高频面试题，提供考前七天速记版本，冲刺算法岗位面试。",
            coverUrl:require("../assets/编程语言应知应会.png"),
            readerNumber:6562, 
            isMemberRequired:"是否需要会员",
            isActive: "1",//内容是否开放
        },
        {
            labelId:"标签Id",
            memberId:"标签下每个成员id",
            memberTitle:"算法面试小抄",
            introduce:"汇集高频算法面试知识点及代码模板，协助你高效准备算法面试",
            coverUrl:require("../assets/飞书20230223-153454.png"),
            readerNumber:6562, 
            isMemberRequired:"是否需要会员",
            isActive: "1",//内容是否开放
        },{
            labelId:"标签Id",
            memberId:"标签下每个成员id",
            memberTitle:"数据库面试速通",
            introduce:"围绕大厂真实面试题，深度剖析数据库核心考点，助你速通面试。",
            coverUrl:require("../assets/深入浅出设计模式.jpg"),
            readerNumber:6562, 
            isMemberRequired:"是否需要会员",
            isActive: "1",//内容是否开放
        },
        {
            labelId:"标签Id",
            memberId:"标签下每个成员id",
            memberTitle:"大厂真题演练 - 后端岗",
            introduce:"收集整理的各大厂后端岗位面试中的计算机基础考核类真题（八股文类）。",
            coverUrl:require("../assets/算法岗_LB_封面.png"),
            readerNumber:6562, 
            isMemberRequired:"是否需要会员",
            isActive: "1",//内容是否开放
        },
        {
            labelId:"标签Id",
            memberId:"标签下每个成员id",
            memberTitle:"七天八股速记：算法岗",
            introduce:"针对算法岗位面试中的高频面试题，提供考前七天速记版本，冲刺算法岗位面试。",
            coverUrl:require("../assets/编程语言应知应会.png"),
            readerNumber:6562, 
            isMemberRequired:"是否需要会员",
            isActive: "1",//内容是否开放
        },
        {
            labelId:"标签Id",
            memberId:"标签下每个成员id",
            memberTitle:"算法面试小抄",
            introduce:"汇集高频算法面试知识点及代码模板，协助你高效准备算法面试",
            coverUrl:require("../assets/飞书20230223-153454.png"),
            readerNumber:6562, 
            isMemberRequired:"是否需要会员",
            isActive: "1",//内容是否开放
        },{
            labelId:"标签Id",
            memberId:"标签下每个成员id",
            memberTitle:"Java 面试突破",
            introduce:"Java 面试高频知识点详解，带你查缺补漏，轻松突破 Java 面试",
            coverUrl:require("../assets/暑期实习岗位攻略.png"),
            readerNumber:6562, 
            isMemberRequired:"是否需要会员",
            isActive: "1",//内容是否开放
        },
        {
            labelId:"标签Id",
            memberId:"标签下每个成员id",
            memberTitle:"深入浅出设计模式",
            introduce:"详解 23 种设计模式，结合具体代码实战，助你彻底理解设计模式",
            coverUrl:require("../assets/前端通关手册CSS.png"),
            readerNumber:6562, 
            isMemberRequired:"是否需要会员",
            isActive: "1",//内容是否开放
        },
        {
            labelId:"标签Id",
            memberId:"标签下每个成员id",
            memberTitle:"数据库面试速通",
            introduce:"围绕大厂真实面试题，深度剖析数据库核心考点，助你速通面试。",
            coverUrl:require("../assets/深入浅出设计模式.jpg"),
            readerNumber:6562, 
            isMemberRequired:"是否需要会员",
            isActive: "1",//内容是否开放
        },
        {
            labelId:"标签Id",
            memberId:"标签下每个成员id",
            memberTitle:"大厂真题演练 - 后端岗",
            introduce:"收集整理的各大厂后端岗位面试中的计算机基础考核类真题（八股文类）。",
            coverUrl:require("../assets/算法岗_LB_封面.png"),
            readerNumber:6562, 
            isMemberRequired:"是否需要会员",
            isActive: "1",//内容是否开放
        }
      ],
    };
  },

  mounted() {},

  methods: {
    acticeLable(index, item) {
      this.labelNumber = index;
      console.log(item);
    },
    menberCar(index, item) {
      console.log(item);

    },
  },
};
</script>

<style lang="scss" scoped>
.baioqianp {
  margin-top: 2em;
  // height: 5em;
  box-shadow: 0 0 20px rgb(217, 226, 241);
  // background-image:linear-gradient(45deg,#87a3e2 0%, #cff8e1 100%);
  border-radius: 8px;
  // background-color: #c7cfe4;
}
.pp1 {
  display: inline-block;
  width: 6em;
  // height: 2em;
  // background-color: rgb(120, 173, 173);
  margin-top: 0.5em;
  margin-left: 1em;
  border-radius: 20px;
  line-height: 2em;
  text-align: center;
  // color: #000000;
}

.pp1:hover {
  // background-image:linear-gradient(0deg,#ffffff 0%, #c4ecff 100%);
  background-color: #bbcfff;
  cursor: pointer;
}

.pp1:active {
  background-color: #a5bbe5;
}
.opop:hover {
  box-shadow: 0 0 10px rgb(217, 226, 241);
  // border-radius:20px;
}

.pp1active {
  background-color: #bbcfff !important;
}
</style><!--  -->