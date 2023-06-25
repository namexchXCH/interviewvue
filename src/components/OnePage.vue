<template>
  <div class="divone">
    <Row class="row1">
        <Col span="4" class="row1-col1"></Col>
        <Col span="16" class="row1-col2">
          <div class="center11">
            <v-md-editor :value="markdown" mode="preview" class="editor" ></v-md-editor>
          </div>
      
        </Col>
        <Col span="4" style="" class="row1-col3"></Col>
    </Row>
  </div>
  
</template>

<script>
export default {
  name: "OnePage",

  data() {
    return {
      markdown:""
    };
  },

  mounted() {
     this.getOnePageData();
  },
  

  methods: {
    getOnePageData(){
      this.$axios({
       method: "GET",
       url: "/interview/onepagedata",
       }).then((res) => {
          this.markdown = res.data.data.onePageText;
       }).catch((res) => {
                    
       });   
    }
  },
};
</script>

<style lang="scss" scoped>
.divone{
  width: 100%;
  height: 100%;
}
.row1{
    height: 100%;
    overflow: auto;
}
.row1-col2{
  width: 100%;
  height: 100%;
 
}
.center11{

}
.editor{
  margin-top: 1em;
}
.img{
  height: 12em;
  width: 12em;
  border-radius: 50%;
}
</style>