<template>
   <div id="app">
    <!-- <Header v-bind:page="page" @open="onOpen" />
    <Main  v-bind:isOpen="isOpen" />
    <Footer /> -->
    <Home />
    <router-view></router-view>
  </div>
</template>
<script>

  import Home from "@/pages/HomePage.vue";
  // import Portfolio from "@/pages/PortfolioPage.vue";
  export default {
  name: 'app',
  components: {Home}}
  //  import Header from "@/components/HeaderComponent.vue";
  //  import Main from "@/components/MainComponent.vue";
  //  import Footer from "@/components/FooterComponent.vue";
  //  export default {
 
  //    name: 'app',
  //    data() {
  //      return{
  //        page: 1,
  //        isOpen: false
  //      }
  //    },
  //    components: {Header, Main, Footer},
     
  //    methods:{
  //      onOpen(data){
  //        this.isOpen = data.open;
         
  //      }
  //    }
  //  }
 
</script>

<style>

</style>
