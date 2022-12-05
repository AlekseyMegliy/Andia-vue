<template>
    <div>
        <Header v-bind:page="page"/>
        <PotrfolioMain />
        <Footer />
    </div>
</template>

<script>
    import Header from "@/components/HeaderComponent.vue";
    import PotrfolioMain from "@/components/PortfolioMainComponent.vue"
    import Footer from "@/components/FooterComponent.vue";
    export default{
        data() {
       return{
         page: 2,
         
       }
     },
        components: {Header, PotrfolioMain, Footer}
    }

</script>