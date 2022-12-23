<template>
    <div>
        <div class="plate">    
            <div class="container">
                <div class="row">
                    
                    <img  alt="About Us" class=" offset-sm-1 offset-0 " src="@/assets/ico/about.png">
                    <p class=" offset-0" >About Us / </p> 
                    <p class=" plate-italic offset-sm-1 offset-lg-0 ">Below you can find more information about our company</p>
                </div>

            </div>
        </div>
        <div class="container aboutus">
        
        <h1 class="offset-sm-1">ABOUT ANDIA</h1>
        <p class="offset-sm-1 col-sm-10">Lorem ipsum dolor sit amet, consectetur adipisicing elit, 
            sed do eiusmod tempor incididunt ut labore et. Ut wisi 
            enim ad minim veniam, quis nostrud exerci tation ullamcorper 
            suscipit lobortis nisl <strong>ut aliquip</strong> ex ea commodo consequat. 
            Lorem ipsum <span class="important-text">dolor</span> sit amet, consectetur adipisicing elit, sed 
            do eiusmod tempor incididunt ut labore et. Ut wisi enim ad 
            minim <strong>veniam</strong>, quis nostrud exerci tation ullamcorper suscipit 
            lobortis nisl ut aliquip ex ea commodo consequat. Lorem ipsum 
            dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.
        </p>
        
        <h1 class="offset-sm-1">OUR MISSION</h1>
        <p class="offset-sm-1 col-sm-10">Lorem ipsum dolor sit amet, consectetur adipisicing elit, 
            sed do eiusmod tempor incididunt ut labore et. Ut wisi 
            enim ad minim veniam, quis nostrud exerci tation ullamcorper 
            suscipit lobortis <strong>nisl ut aliquip</strong> ex ea commodo consequat. 
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed 
            do eiusmod tempor incididunt ut labore et. Ut wisi enim ad 
            minim veniam, <span class="important-text">quis nostrud</span> exerci tation ullamcorper suscipit 
            lobortis nisl ut aliquip ex ea commodo consequat. Lorem ipsum 
            dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.
        </p>
        
        <h1 class="offset-sm-1">WHY CHOOSE US</h1>
        <p class="offset-sm-1 col-sm-10">Lorem ipsum dolor sit amet, consectetur adipisicing elit, 
            sed do eiusmod tempor incididunt ut labore et. Ut wisi 
            enim ad minim veniam, <strong>quis nostrud</strong> exerci tation ullamcorper 
            suscipit lobortis nisl ut aliquip ex ea commodo consequat. 
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed 
            do eiusmod <strong>tempor</strong> incididunt ut labore et. Ut wisi enim ad 
            minim veniam, quis nostrud exerci tation ullamcorper suscipit 
            lobortis nisl ut aliquip ex ea <span class="important-text">commodo</span> consequat. Lorem ipsum 
            dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.
        </p>

    </div>

    <div class="container team">
        <div class="h1 ">
            <div>
                <h1>Meet Our Team</h1>
            </div>
        </div>
        <div class="row">
            
            <div class="row col-sm-12  offset-sm-0 offset-md-1  col-md-10">

                <Team v-for="item in teamInfo"
                    v-bind:teamInfo="item"
                    v-bind:key="item.id"
                />
            </div>
            
            
        </div>
    </div>
    <div class="container block-testimonials">
        <div class="h1">
            <h1>Testimonials</h1>
        </div>
        <div class="row">
            <span class="col-1"></span>
            <div class="testimonial testimonial-one col-9" v-if="testim==1">

                <img alt="Testimonial 1" class="col-2 col-md-1" src="../assets/img/testimonials/1.jpg">

                <span class="col-sm-8 col-md-9 col-lg-10">
                    <p class="response">"Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae possimus tempora ab obcaecati fuga atque esse! Similique illum, tempora, hic cumque vitae debitis delectus, molestiae cupiditate praesentium illo ea eligendi."</p>
                    <p class="mail">sit_ame_consectetur.com</p>
                </span>

            </div>

            <div class="testimonial testimonial-two  col-9" v-if="testim==2">

                <img alt="Testimonial 2" class="col-2 col-md-1" src="../assets/img/testimonials/1.jpg">

                <span class="col-sm-8 col-md-9 col-lg-10">
                    <p class="response">"Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, in rem? Molestias perferendis veritatis, eos perspiciatis, natus esse nihil molestiae a ipsam quo odit facere quis praesentium, porro iste doloribus?"</p>
                    <p class="mail">perferendis_veritati.ua</p>
                </span>

            </div>

            <div class="testimonial testimonial-three col-9" v-if="testim==3">

                <img alt="Testimonial 3" class="col-2 col-md-1" src="../assets/img/testimonials/3.png">

                <span class="col-sm-8 col-md-9 col-lg-10">
                    <p class="response">"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis expedita neque modi voluptatem. Molestiae, ex quod voluptates aliquam et, distinctio dignissimos, omnis qui repudiandae quaerat quos repellat sunt!"</p>
                    <p class="mail">expedita_neque_modi.uk</p>
                </span>

            </div>

            <div class="testimonial testimonial-four col-9" v-if="testim==4">

                <img alt="Testimonial 4" class="col-2 col-md-1" src="../assets/img/testimonials/3.png">

                <span class="col-sm-8 col-md-9 col-lg-10">
                    <p class="response">"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem commodi cumque eos non quas sunt culpa nostrum, obcaecati, recusandae dolorum ipsam accusamus nisi alias quo laborum nam fugit aspernatur est."</p>
                    <p class="mail">quas_sunt_culpa.com</p>
                </span>

            </div>
        </div>
        <div class="testimonial-buttons row">
            <div class="testimonial-buttons col-3">
                <input class="col-1 buttons " v-on:click="testim=1" v-bind:class="{buttonsthis: testim==1}" type="button" id="testimonials">
                <input class="col-1 buttons" v-on:click="testim=2" v-bind:class="{buttonsthis: testim==2}" type="button" id="testimonials">
                <input class="col-1 buttons" v-on:click="testim=3" v-bind:class="{buttonsthis: testim==3}" type="button" id="testimonials">
                <input class="col-1 buttons" v-on:click="testim=4" v-bind:class="{buttonsthis: testim==4}" type="button" id="testimonials">
            </div>
            <span class="col-2"></span>
        </div>
    </div>
    </div>
</template>

<script>
    import jsonData from '../../jsoninform.json' 
    import Team from './TeamComponent.vue'
    export default{
        data() {
            return {
                teamInfo: jsonData.teammetes,
                testim: 1
            }
        },
        components: {Team}
    }
</script>

<style>
.aboutus{
    padding: 15px 0;
}
.aboutus h1{
    padding: 20px 15px 5px 15px;
    font-size: 18px;
    color:#555555;
    text-transform: uppercase;
}
.aboutus p{
    padding: 0 15px 0px 15px;
    font-size: 0.9em;
    font-weight: 400;
    opacity: 0.6;
    line-height: 1.8em;
}


.team .h1{
    margin: 50px 0 30px 0;
    border-top: rgba(0, 0, 0, 0.144) 2px dotted;
    text-align: center;
    
}
.team .h1 div{
    margin-top: -32px;
}
.team h1{
    font-family: 'Lobster', cursive;
    padding: 0 20px;
    font-size: 30px;
    font-weight:bold;
    color: rgba(0, 0, 0, 0.704);
    background-color: white;
    display: inline-block;
    
}
.teammate{
    text-align: center;
}
.teammate .inTeam:hover{
    opacity: 0.7;
    box-shadow:#454545 inset 0 0 15px -5px;
}
.teammate .inTeam{
    background-color: rgba(0, 0, 0, 0.049);
    padding-bottom: 15px;
    border-bottom: #9d426b solid 3px;
    box-shadow: inset black 0px 0px 20px -20px;
    transition: box-shadow 0.2s linear, opacity 0.2s linear  ;
}

.teammate h4{
    text-transform: uppercase;
    font-size: 1em;
    letter-spacing:-1px;
    opacity: 0.8;
    padding-top: 15px;
    
}
.teammate p{
    font-size: 0.9em;
    opacity: 0.9;
    font-style: italic;
    text-overflow: ellipsis;
    padding: 0 5px 0 5px;
}
.teammate .row{
    justify-content: center;
}
.teammate a{
    text-decoration: none;
    color: #9d426b;
    margin: 0 5px;
    font-size: 0.9em;
}
.teammate span{
   
    overflow: hidden;
}
.teammate span img{
    margin-top: -30px;
    transition: margin 0.3s linear;
}
.teammate span img:hover{
    margin-bottom: -67px;
}
</style>