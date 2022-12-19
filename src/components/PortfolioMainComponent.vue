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
                        <p v-on:click="filter('all')" v-bind:class="{portfolioButtonThis: web&&logo&&print}" >All / </p>
                        <p v-on:click="filter('web')" v-bind:class="{portfolioButtonThis: web&&!logo}">WEB DESIGN / </p>
                        <p v-on:click="filter('logo')" v-bind:class="{portfolioButtonThis: logo&&!print}">LOGO DESIGN / </p>
                        <p v-on:click="filter('print')" v-bind:class="{portfolioButtonThis: print&&!web}">PRINT DESIGN </p>
                    </span>
                </div>
                
                    
                    <div class="row offset-sm-0 offset-md-1 col-sm-12 col-md-10">
                        
                            <Work @zoom="zoomer"
                                v-for="item in worksinfos"
                                v-bind:worksinfo="item"
                                v-bind:key="item.id"
                                v-bind:benHref="benHref"
                                :web ="web"
                                :logo="logo"
                                :print="print"  />
                        
                        
                        
                    </div>

                    <transition  name="filter-zoom">
                    <div class="col-8 filter-zoom"  v-if="(zoom==1)">
                        <img  class="col-12" src="../assets/img/portfolio/work1.jpg">
                        <span class=" col-1 filter-remove-zoom" v-on:click="zoom=0">
                            <svg>
                                <rect x="10" y="6" width="17" height="3"/>
                                <rect x="10" y="6" width="17" height="3"/>
                            </svg>
                        </span>
                    </div>        
                    
                </transition>

                <transition  name="filter-zoom">
                    <div class="col-8 filter-zoom" v-if="(zoom==2)">
                        <img  class="col-12" src="../assets/img/portfolio/work2.jpg">
                        <span class=" col-1 filter-remove-zoom" v-on:click="zoom=0">
                            <svg>
                                <rect x="10" y="6" width="17" height="3"/>
                                <rect x="10" y="6" width="17" height="3"/>
                            </svg>
                        </span>
                    </div>  
                </transition>

                <transition  name="filter-zoom">
                    <div class="col-8 filter-zoom"  v-if="(zoom==3)">
                        <img  class="col-12" src="../assets/img/portfolio/work3.jpg">
                        <span class=" col-1 filter-remove-zoom" v-on:click="zoom=0">
                            <svg>
                                <rect x="10" y="6" width="17" height="3"/>
                                <rect x="10" y="6" width="17" height="3"/>
                            </svg>
                        </span>
                    </div>  
                </transition>

                <transition  name="filter-zoom">
                    <div class="col-8 filter-zoom" v-if="(zoom==4)">
                        <img  class="col-12" src="../assets/img/portfolio/work4.jpg">
                        <span class=" col-1 filter-remove-zoom" v-on:click="zoom=0">
                            <svg>
                                <rect x="10" y="6" width="17" height="3"/>
                                <rect x="10" y="6" width="17" height="3"/>
                            </svg>
                        </span>
                    </div>  
                </transition>
                <transition  name="filter-zoom">
                    <div class="col-8 filter-zoom" v-if="(zoom==5)">
                        <img  class="col-12" src="../assets/img/portfolio/work5.jpg">
                        <span class=" col-1 filter-remove-zoom" v-on:click="zoom=0">
                            <svg>
                                <rect x="10" y="6" width="17" height="3"/>
                                <rect x="10" y="6" width="17" height="3"/>
                            </svg>
                        </span>
                    </div>  
                </transition>
                <transition  name="filter-zoom">
                    <div class="col-8 filter-zoom" v-if="(zoom==6)">
                        <img  class="col-12" src="../assets/img/portfolio/work6.jpg">
                        <span class=" col-1 filter-remove-zoom" v-on:click="zoom=0">
                            <svg>
                                <rect x="10" y="6" width="17" height="3"/>
                                <rect x="10" y="6" width="17" height="3"/>
                            </svg>
                        </span>
                    </div>  
                </transition>
                <transition  name="filter-zoom">
                    <div class="col-8 filter-zoom" v-if="(zoom==7)">
                        <img  class="col-12" src="../assets/img/portfolio/work7.jpg">
                        <span class=" col-1 filter-remove-zoom" v-on:click="zoom=0">
                            <svg>
                                <rect x="10" y="6" width="17" height="3"/>
                                <rect x="10" y="6" width="17" height="3"/>
                            </svg>
                        </span>
                    </div>  
                </transition>
                <transition  name="filter-zoom">
                    <div class="col-8 filter-zoom" v-if="(zoom==8)">
                        <img  class="col-12" src="../assets/img/portfolio/work8.jpg">
                        <span class=" col-1 filter-remove-zoom" v-on:click="zoom=0">
                            <svg>
                                <rect x="10" y="6" width="17" height="3"/>
                                <rect x="10" y="6" width="17" height="3"/>
                            </svg>
                        </span>
                    </div>  
                </transition>
                <transition  name="filter-zoom">
                    <div class="col-8 filter-zoom" v-if="(zoom==9)">
                        <img  class="col-12" src="../assets/img/portfolio/work9.jpg">
                        <span class=" col-1 filter-remove-zoom" v-on:click="zoom=0">
                            <svg>
                                <rect x="10" y="6" width="17" height="3"/>
                                <rect x="10" y="6" width="17" height="3"/>
                            </svg>
                        </span>
                    </div>  
                </transition>
                <transition  name="filter-zoom">
                    <div class="col-8 filter-zoom" v-if="(zoom==10)">
                        <img  class="col-12" src="../assets/img/portfolio/work10.jpg">
                        <span class=" col-1 filter-remove-zoom" v-on:click="zoom=0">
                            <svg>
                                <rect x="10" y="6" width="17" height="3"/>
                                <rect x="10" y="6" width="17" height="3"/>
                            </svg>
                        </span>
                    </div>  
                </transition>
                <transition  name="filter-zoom">
                    <div class="col-8 filter-zoom" v-if="(zoom==11)">
                        <img  class="col-12" src="../assets/img/portfolio/work11.jpg">
                        <span class=" col-1 filter-remove-zoom" v-on:click="zoom=0">
                            <svg>
                                <rect x="10" y="6" width="17" height="3"/>
                                <rect x="10" y="6" width="17" height="3"/>
                            </svg>
                        </span>
                    </div>  
                </transition>
                <transition  name="filter-zoom">
                    <div class="col-8 filter-zoom" v-if="(zoom==12)">
                        <img  class="col-12" src="../assets/img/portfolio/work12.jpg">
                        <span class=" col-1 filter-remove-zoom" v-on:click="zoom=0">
                            <svg>
                                <rect x="10" y="6" width="17" height="3"/>
                                <rect x="10" y="6" width="17" height="3"/>
                            </svg>
                        </span>
                    </div>  
                </transition>
                <div v-bind:class="{backdrop: zoom}" ></div>
            </div>
        </div>
    </div>
</template>

<script>
import Work from "@/components/WorksComponent.vue"
import jsonData from '../../jsoninform.json' 
export default{
    
   data (){ 
        return{ 
            zoom: 0,
            web: true,
            logo: true,
            print: true,
            benHref: false, 
            worksinfos: jsonData.worksinfo
            
        }
    },
    methods: {
        zoomer(data){
            this.zoom = data.zoom
        },
        filter(value){
            function select(types){
                if(value === 'all'){
                    return types.type;
                } else{
                return types.type === value}
            }
            this.worksinfos= Object.values(jsonData.worksinfo).filter(select)
            if(value==='web'){
                this.web=true;
                this.logo = false;
                this.print = false;
            }else if(value==='logo'){
                this.web=false;
                this.logo = true;
                this.print = false;
            }else if(value==='print'){
                this.web=false;
                this.logo = false;
                this.print = true;
            } else{
                this.web=true;
                this.logo = true;
                this.print = true;
            }
        }
    },
    components: {Work},
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
    transition: box-shadow 0.3s linear, opacity 0.3s linear ;
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
.portf-work img{
   cursor: pointer; 
}

.portf-work div:hover{
    opacity: 0.7;
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

.portfolio .filter-zoom{
    position: fixed;
    padding: 10px;
    background-color: white;
    border-radius: 10px;
    box-shadow: black 0px 0px 5px 0px;
    z-index: 5;
    text-align: end;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    
}


.portfolio .filter-remove-zoom svg{
    padding: 0;
    margin: 0;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    box-shadow: black 0px 0px 1px 0px;
    fill: #454545;
    cursor: pointer;
}
.portfolio .filter-remove-zoom svg:hover{
    fill: #00000086;
}
.portfolio .filter-remove-zoom rect:first-of-type{
    transform: rotate(45deg) translate(-20%,-36%);
    
}
.portfolio .filter-remove-zoom rect:last-of-type{
    transform:translate(140%, 14%) rotate(135deg) ;
}

.filter-zoom-enter-active, .filter-zoom-leave-active {

transition: width ease-in-out 0.7s;

}
.filter-zoom-enter-from, .filter-zoom-leave-to  {
width: 20%;

}
</style>