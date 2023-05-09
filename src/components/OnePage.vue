<template>
  <div>
    <Row class="row1">
        <Col span="24">col-12</Col>
       
    </Row>
    <Row class="row2">
        <Col span="3" class="row2-col1">col-12</Col>
        <Col span="3" class="row2-col2">col-12</Col>
        <Col span="15" class="row2-col3">col-12</Col>
        <Col span="3" class="row2-col4">col-12</Col>
    </Row>
  </div>
  
</template>

<script>
export default {
  name: "OnePage",

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped>

.row1{
    height: 11em;
    background-color: aqua;
    
}
.row2{
    height: 36em;
    background-color: rgb(55, 145, 145);
    
}

.row2-col1{
    background-color: rgb(23, 66, 66);
}

.row2-col2{
    background-color: rgb(185, 149, 166);
}
.row2-col3{
    background-color: bisque;
}
.row2-col4{
    background-color: rgb(23, 66, 66);
}
</style>