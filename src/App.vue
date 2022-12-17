<template>
   <div id="app">
    <!-- <Header v-bind:page="page" @open="onOpen" />
    <Main  v-bind:isOpen="isOpen" />
    <Footer /> -->
    <!-- <Home /> -->
    <div id="app">
  {{ info}}
</div>
    <RouterView></RouterView>
  </div>
</template>
<script>
  // import axios from 'axios'
  
// import { info } from 'json';

 import jsonData from '../jsoninform.json' 
//  let parsejson = JSON.stringify(jsonData)
//  alert(parsejson)
 export default {
    data() {
      return {
        info:jsonData
        
      }
    },
    mounted(){
      // axios.get('https://api.coindesk.com/v1/bpi/currentprice.json').then(response => (this.info = JSON.parse(response))); 
    }
  }
 
</script>

<style>

</style>
