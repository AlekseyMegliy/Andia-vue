<template>
    <div>
        <Header v-bind:page="page"/>
        <ContactMain />
        <Footer />
    </div>
</template>

<script>
    import Header from "@/components/HeaderComponent.vue";
    import ContactMain from "@/components/ContactMainComponent.vue"
    import Footer from "@/components/FooterComponent.vue";
    export default{
        data() {
       return{
         page: 6,
         
       }
     },
        components: {Header, ContactMain, Footer}
    }

</script>