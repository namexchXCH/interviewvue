<template>
  <div>
     <button @click="nuihu" style=" background-color: red; width: 100px;height: 20px;"></button>
  <div>
    <v-md-editor v-model="text"></v-md-editor>
  </div>
    
    <div>
        <v-md-editor :value="markdown" mode="preview"></v-md-editor>
    </div>
    
  </div>
</template>

<script>
export default {
  name: "ViewEditer",

  data() {
    return {
      text: "",
      markdown: " ",
    };
  },

  mounted() {
    console.log(this);
    this.markdown = "  "
  },

  methods: {
    nuihu() {
       this.markdown = this.text;

      console.log(this.text);
    },
  },
};
</script>

<style lang="scss" scoped>
.kjbkj{
    background-color: red;
}
</style>