<template>
    <transition  name="zoom">
        <div class="col-8 zoom"  v-if="(zooms==worksinfo.id)">
            <img  class="col-12" :src="require(`../assets/img/portfolio/work${worksinfo.id}.jpg`)">
            <span class=" col-1 remove-zoom" v-on:click="this.$emit('zoom', {zoom:  0})">
                <svg>
                    <rect x="10" y="6" width="17" height="3"/>
                    <rect x="10" y="6" width="17" height="3"/>
                </svg>
            </span>
        </div>        
    </transition>
</template>

<script>
 export default{
    props:['worksinfo', 'zooms'],
    data() {
            return {
                zoom:0,
                
            }
        },
 }
</script>

<style>
.zoom{
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
.remove-zoom svg{
    padding: 0;
    margin: 0;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    box-shadow: black 0px 0px 1px 0px;
    fill: #454545;
    cursor: pointer;
}
.remove-zoom svg:hover{
    fill: #00000086;
}
.remove-zoom rect:first-of-type{
    transform: rotate(45deg) translate(-20%,-36%);
    
}
.remove-zoom rect:last-of-type{
    transform:translate(140%, 14%) rotate(135deg) ;
}

.zoom-enter-active, .zoom-leave-active {

transition: width ease-in-out 0.7s;

}
.zoom-enter-from, .zoom-leave-to  {
width: 20%;

}
</style>