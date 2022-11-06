<template>
   <div id="app">
    <Header v-bind:page="page"/>
    <Main  />
    <Footer />
  </div>
</template>

<script>
  import Header from "./components/HeaderComponent.vue";
  import Main from "./components/MainComponent.vue";
  import Footer from "./components/FooterComponent.vue";
  export default {

    name: 'app',
    data() {
      return{
        // sm_imgs: 1,
        page: 1
      }
      },



    components: {Header, Main, Footer}

  }

</script>

<style>

</style>
