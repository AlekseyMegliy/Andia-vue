<template>
                <div class="col-sm-12 col-md-3 benefits">
                    <div>
                        <img class="col-2 col-sm-1 col-md-4  col-lg-3" :src="require(`../assets/ico/${benefitInfo.imgSrc}.png`)">
                        <h4>{{benefitInfo.header}}</h4>
                        <p>{{benefitInfo.mainText}}</p>
                        <a href="#">Read more</a>
                    </div>
                </div>
                

</template>


<script>
    export default{
        props:['benefitInfo']
      
    
    }
</script>

<style>

</style>