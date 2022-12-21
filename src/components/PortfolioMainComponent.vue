<template>
    <div>
        <div class="plate">    
            <div class="container">
                <div class="row">
                    
                    <img alt="Portfolio icon" class=" offset-sm-1 offset-0 " src="../assets/ico/portfolio.png">
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
                        v-bind:limit="12" />
                </div>
                    
                <WorkZoom 
                    @zoom="zoomer"
                    v-for="item in worksinfos"
                    v-bind:worksinfo="item"
                    v-bind:key="item.id"
                    :zooms="zoom"
                /> 
                <div v-bind:class="{backdrop: zoom}" ></div>
            </div>
        </div>
    </div>
</template>

<script>
import Work from "@/components/WorksComponent.vue"
import WorkZoom from "./WorksZoomComponent.vue"
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
    components: {Work, WorkZoom},
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
    width: 50%;
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
</style>