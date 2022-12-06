<template>
    <div>
        <div class="plate">    
            <div class="container">
                <div class="row">
                    
                    <img class=" offset-sm-1 offset-0 " src="../assets/ico/portfolio.png">
                    <p class=" offset-0" >Portfolio / </p> 
                    <p class=" plate-italic offset-sm-1 offset-lg-0 ">Here is the work we've done so far</p>
                </div>

            </div>
        </div>
        <div class="portfolio"> 
            <div class="container">
                <div class="row">
                    <span class="offset-sm-1 offset-0 col-10 portfolio-filter">
                        <p v-on:click="(web=true, logo=true, print=true)" v-bind:class="{portfolioButtonThis: web&&logo}" >All / </p>
                        <p v-on:click="(web=true, logo=false, print=false)" v-bind:class="{portfolioButtonThis: web&&!logo}">WEB DESIGN / </p>
                        <p v-on:click="(web=false, logo=true, print=false)" v-bind:class="{portfolioButtonThis: logo&&!print}">LOGO DESIGN / </p>
                        <p v-on:click="(web=false, logo=false, print=true)" v-bind:class="{portfolioButtonThis: print&&!web}">PRINT DESIGN </p>
                    </span>
                </div>
                
                    
                    <div class="row offset-sm-0 offset-md-1 col-sm-12 col-md-10">
                        <transition  name="filter">
                            <div class="col-sm-12 col-md-3 portf-work" v-if="web">
                                <div>
                                    <img class="col-12" src="../assets/img/portfolio/work1.jpg">
                                    <h4>Lorem WEBSITE</h4>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, eius eum. </p>
                                
                                </div>
                            </div>
                        </transition>
                        <transition  name="filter">
                            <div class="col-sm-12 col-md-3 portf-work"  v-if="logo">
                                <div>
                                    <img class="col-12" src="../assets/img/portfolio/work2.jpg">
                                    <h4>ipsum LOGO</h4>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, eius eum. </p>
                                
                                </div>  
                            </div>
                        </transition>
                        <transition  name="filter">
                            <div class="col-sm-12 col-md-3 portf-work" v-if="print">
                                <div>
                                    <img class="col-12" src="../assets/img/portfolio/work3.jpg">
                                    <h4>dolor PRINT</h4>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, eius eum. </p>
                                
                                </div>
                            </div>
                        </transition>
                        <transition  name="filter">
                            <div class="col-sm-12 col-md-3 portf-work" v-if="web">
                                <div>
                                    <img class="col-12" src="../assets/img/portfolio/work4.jpg">
                                    <h4>sit WEBSITE</h4>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, eius eum.</p>
                                
                                </div>
                            </div>
                        </transition>
                        <transition  name="filter">
                            <div class="col-sm-12 col-md-3 portf-work" v-if="logo">
                                <div>
                                    <img class="col-12" src="../assets/img/portfolio/work5.jpg">
                                    <h4>amet logo</h4>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, eius eum. </p>
                                
                                </div>
                            </div>
                        </transition>
                        <transition  name="filter">
                            <div class="col-sm-12 col-md-3 portf-work" v-if="print">
                                <div>
                                    <img class="col-12" src="../assets/img/portfolio/work6.jpg">
                                    <h4>consectetur print</h4>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, eius eum. </p>
                                
                                </div>  
                            </div>
                        </transition>
                        <transition  name="filter">
                            <div class="col-sm-12 col-md-3 portf-work" v-if="web">
                                <div>
                                    <img class="col-12" src="../assets/img/portfolio/work7.jpg">
                                    <h4>adipisicing WEBSITE</h4>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, eius eum. </p>
                                
                                </div>
                            </div>
                        </transition>
                        <transition  name="filter">
                            <div class="col-sm-12 col-md-3 portf-work" v-if="logo">
                                <div>
                                    <img class="col-12" src="../assets/img/portfolio/work8.jpg">
                                    <h4>elit logo</h4>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, eius eum.</p>
                                
                                </div>
                            </div>
                        </transition>
                        <transition  name="filter">
                            <div class="col-sm-12 col-md-3 portf-work" v-if="web">
                                <div>
                                    <img class="col-12" src="../assets/img/portfolio/work9.jpg">
                                    <h4>Perspiciatis WEBSITE</h4>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, eius eum. </p>
                                
                                </div>
                            </div>
                        </transition>
                        <transition  name="filter">
                            <div class="col-sm-12 col-md-3 portf-work" v-if="logo">
                                <div>
                                    <img class="col-12" src="../assets/img/portfolio/work10.jpg">
                                    <h4>eius logo</h4>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, eius eum. </p>
                                
                                </div>  
                            </div>
                        </transition>
                        <transition  name="filter">
                            <div class="col-sm-12 col-md-3 portf-work" v-if="print">
                                <div>
                                    <img class="col-12" src="../assets/img/portfolio/work11.jpg">
                                    <h4>eum print</h4>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, eius eum. </p>
                                
                                </div>
                            </div>
                        </transition>
                        <transition  name="filter">
                            <div class="col-sm-12 col-md-3 portf-work" v-if="web">
                                <div>
                                    <img class="col-12" src="../assets/img/portfolio/work12.jpg">
                                    <h4>Lorem WEBSITE</h4>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, eius eum.</p>
                                
                                </div>
                            </div>
                        </transition>
                    </div>
            </div>
        </div>
    </div>
</template>

<script>
export default{
    
   data (){ 
        return{ 
            
            web: true,
            logo: true,
            print: true

        }
    }
}
</script>

<style>
.plate{
    background-color: rgb(240, 240, 240);
    box-shadow: inset rgb(177, 177, 177) 0px 0px 7px 0px;
    margin-right: 0;
    margin-left: 0;
    padding: 25px 0;
}

.plate img{
    display: inline;
    width: 75px;
    opacity: 0.2;
}
.plate p{
    width: 8%;
    padding: 0;
    font-size: 25px;
    font-weight:bold;
    color: rgba(0, 0, 0, 0.6);
    margin-top:auto;
    margin-bottom:auto;
    font-family: 'Lobster', cursive;
    overflow: hidden;

}
.plate .plate-italic{
    font-style: italic;
    padding: 0;
    width: 30%;
    font-weight:normal;
    font-size: 17px;
    margin-top:auto;
    margin-bottom:auto;
    color: rgba(0, 0, 0, 0.4);
    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif
}
@media all and (max-width:1400px ){
    .plate p{
        width: 9%;
    }
}
@media all and (max-width:1200px ){
    .plate p{
        width: 11%;
    }
}
@media all and (max-width:991px ){
    .plate p{
        width: 20%;
    }
    .plate .plate-italic{
        width: 80%;
    }
}
@media all and (max-width:490px ){
    .plate p{
        width: 50%;
    }
    .plate .plate-italic{
        width: 100%;
    }
}

.portfolio .portfolio-filter{
    padding: 50px 20px;
}
.portfolio .portfolio-filter p{
    color: rgba(0, 0, 0, 0.6);
    display: inline;
    text-transform: uppercase;
    font-weight:bold;
    letter-spacing:-1px;
    transition: color 0.3s linear;
    cursor: pointer;
 
}
.portfolio .portfolio-filter .portfolioButtonThis{
    color: #9d426b;
}
.portfolio .portfolio-filter p:hover{
    color: #9d426b;
}

.portf-work{
    text-align: center;
}
.portf-work div{
    background-color: rgba(0, 0, 0, 0.049);
    padding-bottom: 15px;
    border-bottom: #9d426b solid 3px;
    box-shadow: inset black 0px 0px 20px -20px;
    transition: box-shadow 0.3s linear ;
    margin-bottom: 15px;
}

.portf-work h4{
    text-transform: uppercase;
    font-size: 1em;
    letter-spacing:-1px;
    opacity: 0.8;
    padding-top: 15px;
    
}
.portf-work p{
    font-size: 0.8em;
    opacity: 0.9;
    font-style: italic;
    text-overflow: ellipsis;
    padding: 0 5px;
}

.portf-work div:hover{
    box-shadow: inset black 0px 0px 25px -15px;
}
@media all and (max-width:1200px ){
    .portf-work h4{
        font-size: 1em;
    }
}
@media all and (max-width:991px ){
    .portf-work h4{
        font-size: 0.8em;
    }
  
}
@media all and (max-width:767px ){
    .portf-work p{
        padding: 0 15px 
    }
    .portf-work{
        margin: 0;
    }
    .portf-work h4{
        font-size: 1em;
   }
   
}

.filter-enter-active, .filter-leave-active {
height: 100px;
transition: width linear 0.5s,
opacity  linear 0.5s;

}
.filter-enter-from, .filter-leave-to  {
width: 1%;
opacity: 0;
}

</style>