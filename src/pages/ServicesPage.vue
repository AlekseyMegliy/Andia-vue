<template>
    <div>
        <Header v-bind:page="page"/>
        <ServicesMain />
        <Footer />
    </div>
</template>

<script>
    import Header from "@/components/HeaderComponent.vue";
    import ServicesMain from "@/components/ServicesMainComponent.vue"
    import Footer from "@/components/FooterComponent.vue";
    export default{
        data() {
       return{
         page: 3,
         
       }
     },
        components: {Header, ServicesMain, Footer}
    }

</script>