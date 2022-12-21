<template>
    <div>
        <Header v-bind:page="page"/>
        <AboutMain />
        <Footer />
    </div>
</template>

<script>
    import Header from "@/components/HeaderComponent.vue";
    import AboutMain from "@/components/AboutMainComponent.vue"
    import Footer from "@/components/FooterComponent.vue";
    export default{
        data() {
       return{
         page: 5,
         
       }
     },
        components: {Header, AboutMain, Footer}
    }

</script>