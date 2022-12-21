<template>
                <div class="col-sm-12 col-md-3 benefits">
                    <div>
                        <img :alt="benefitInfo.header" class="col-2 col-sm-1 col-md-4  col-lg-3" :src="require(`@/assets/ico/${benefitInfo.imgSrc}.png`)">
                        <h4>{{benefitInfo.header}}</h4>
                        <p>{{benefitInfo.mainText}}</p>
                        <a v-if="benHref" href="#">Read more</a>
                    </div>
                </div>
                

</template>


<script>
    export default{
        props:['benefitInfo', 'benHref']
        
    
    }
</script>

<style>

</style>