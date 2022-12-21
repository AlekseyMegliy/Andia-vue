<template>
    <div>
        <div class="plate">    
            <div class="container">
                <div class="row">
                    
                    <img alt="Services icon" class=" offset-sm-1 offset-0 " src="@/assets/ico/services.png">
                    <p class=" offset-0" >Services / </p> 
                    <p class=" plate-italic offset-sm-1 offset-lg-0 ">Here are the services we offer</p>
                </div>

            </div>
        </div>
    <div class="container services">
        <div class="row top-description">
            <div class="col-sm-12 col-md-10 offset-sm-0 offset-md-1 ">
                <h2>LOREM IPSUM DOLOR SIT AMET</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor 
                    incididunt ut labore et. Ut wisi enim ad minim veniam, quis nostrud exerci tation 
                    ullamcorper <span class="important-text">suscipit lobortis</span> nisl ut aliquip ex ea commodo consequat. 
                    Lorem ipsum <strong> dolor sit amet</strong>, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et. 
                    Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut 
                    aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do 
                    <strong>eiusmod tempor</strong> incididunt.</p>
            </div>
        </div>
        <div class="row middle-benefits">
            
            <div class="row col-sm-12 offset-sm-0 offset-md-1 col-md-10">

                <Benefit
                v-for="item in benefitInfos"
                v-bind:benefitInfo="item"
                v-bind:key="item.id"
                v-bind:benHref="benHref"
                ></Benefit>
            </div>
    
        </div>

        <div class="row bottom-description">
            <div class="col-sm-12 col-md-5 offset-sm-0 offset-md-1">
                <h2>Lorem ipsum</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                    Libero amet vero ducimus nemo placeat. Amet ipsam officia reprehenderit consequuntur. 
                    Id saepe, tenetur quia minus ipsam recusandae qui quis facilis? Voluptas.
                    Lorem <strong>ipsum dolor</strong> sit amet consectetur adipisicing elit. Quasi maiores nihil 
                    dolorem, repellendus dolores voluptates <strong>illum quisquam</strong>, expedita illo omnis 
                    vero, fugit a dicta deleniti voluptatum excepturi quia similique quam.
                </p>
            </div>
            <div class="col-sm-12 col-md-5">
                <h2>Lorem ipsum</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                    Libero <strong>amet vero </strong>ducimus nemo placeat. Amet ipsam officia reprehenderit consequuntur. 
                    Id saepe, tenetur quia minus ipsam recusandae qui quis facilis? Voluptas.
                    Lorem ipsum dolor, sit amet <strong>consectetur adipisicing </strong>elit. Eos quidem, minus 
                    veritatis doloribus iusto qui voluptatibus sunt quibusdam distinctio impedit 
                    fuga quaerat nisi, beatae minima saepe a incidunt quis optio.
                </p>
            </div>
        </div>
        <div class="row ">
            <div class=" ad row col-sm-12 col-md-10 offset-sm-0 offset-md-1">
                <div class="ad-text col-sm-12 col-lg-10">Lorem ipsum dolor sit amet, <span class="important-text"> consectetur adipisicing</span> elit, 
                    sed do eiusmod tempor incididunt ut labore et ut wisi enim. 
                </div>
                <div class="ad-button col-12 col-lg-2">
                    <a href="#">Try It Now!</a>
                </div>
            </div>
        </div>
    </div>
    </div>
</template>

<script>
import Benefit from "@/components/BenefitComponent.vue";
import jsonData from '../../jsoninform.json' 
export default{
    props: ['isOpen'],
   data (){ 
        return{ 
        sm_imgs:1,
        testim:1, 
        zoom:0,
        benHref: false, 
        benefitInfos:jsonData.benefitInfos,
        // benefitInfos: [
        //     {id:1, imgSrc: 'eye', header: 'BEAUTIFUL WEBSITES', mainText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, eius eum. Praesentium quae cum, non incidunt voluptas et...'},
        //     {id:2, imgSrc: 'layout', header: 'RESPONSIVE LAYOUT', mainText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, eius eum. Praesentium quae cum, non incidunt voluptas et...'},
        //     {id:3, imgSrc: 'awesome', header: 'AWESOME LOGOS', mainText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, eius eum. Praesentium quae cum, non incidunt voluptas et...'},
        //     {id:4, imgSrc: 'print', header: 'HIGH RES PRINTS', mainText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, eius eum. Praesentium quae cum, non incidunt voluptas et...'}
        // ]
        }
    },
    components: {Benefit}
}
</script>

<style>
.important-text{
    color:#9d426b;
}
.services p{
    padding: 0 15px 15px 15px;
    font-size: 0.9em;
    font-weight: 400;
    opacity: 0.6;
    line-height: 1.8em;
    
}
.services h2{
    padding: 50px 15px 5px 15px;
    font-size: 18px;
    color:#555555;
    text-transform: uppercase;
}
.services .ad{
    display: flex;
    align-items: center;
    background-color: #0000000a;
    transition: box-shadow linear 0.2s;
    padding: 10px;
}
.services .ad:hover{
    box-shadow:#454545 inset 0 0 15px -10px;
}
.services .ad-text{
    font-style: italic;
    font-size: 1.1em;
    color: #6e6e6e;
    padding: 10px;
}
.services .ad-button{
    text-align: end;
    margin: 10px 0;
    
}
.services .ad-button a{
    text-decoration: none;
    font-style: italic;
    color: white;
    font-size: 1.1em;
    text-align: center;
    padding: 5px 10px;
    background-color: #852952;
    transition: background-color linear 0.2s;
   
}
.services .ad-button a:hover{
    background-color: #9e2f61;
}
.services .ad-button a:active{
    background-color: #752348;
}
.benefits p{
    line-height: normal;
    font-size: 0.9em;
    opacity: 0.9;
    padding: 0 10px;
}

</style>