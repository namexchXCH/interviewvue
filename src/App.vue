<template>
  <div id="app">
   <!-- <HomePage></HomePage> -->
   <router-view></router-view>

  </div>
</template>

<script>

import HomePage from '@/components/HomePage'

export default {
  name: 'App',
  components: {
    HomePage,

  },
  methods:{
   
    
  }

  }


</script>

<style>
*{
  margin: 0;
  padding: 0;
}
</style>
