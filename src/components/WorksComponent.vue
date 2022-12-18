<template>
    <transition  name="filter">
    <div class="col-sm-12 col-md-3 latest" v-if=worksinfo.type>
        <div>
            <p>{{worksinfo.type}}</p>
            <img v-on:click=" this.$emit('zoom', {zoom:  worksinfo.id})" class="col-12" :src="require(`../assets/img/portfolio/work${worksinfo.id}.jpg`)">
            <h4>{{worksinfo.header}}</h4>
            <p>{{worksinfo.mainText}} </p>
            <a v-if="benHref" v-on:click=" this.$emit('zoom', {zoom:  worksinfo.id})"><img class="col-10" src="../assets/ico/zoom2.png"></a>
            <router-link  v-if="benHref"  to="/portfolio"><img class="col-10" src="../assets/ico/link2.png"></router-link>
        </div>
    </div>
    </transition>
</template>

<script>
    export default{
        props:['worksinfo', 'benHref', 'web', 'logo', 'print'],
        data() {
            return {
                zoom:0,
                
            }
        },
    }
</script>

<style>
.latest{
    text-align: center;
    margin-bottom:15px ;
}
.latest div{
    background-color: rgba(0, 0, 0, 0.049);
    padding-bottom: 15px;
    border-bottom: #9d426b solid 3px;
    box-shadow: inset black 0px 0px 20px -20px;
    transition: box-shadow 0.3s linear ;
}

.latest h4{
    text-transform: uppercase;
    font-size: 1em;
    letter-spacing:-1px;
    opacity: 0.8;
    padding-top: 15px;

}
.latest p{
    font-size: 0.9em;
    opacity: 0.9;
    font-style: italic;
    text-overflow: ellipsis;
    padding: 0 5px 0 5px;
}
.latest img{
    cursor: pointer;
}
.latest a{
    text-decoration: none;
    background-color:#9d426b;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    padding: 5px;
    display: inline-block;
    text-align: center;
    vertical-align: middle;
    margin: 0 3px;
    cursor: pointer;
    transition:background-color linear 0.2s ;
}
.latest a:hover{
    background-color:rgba(0, 0, 0, 0.632);
}
.latest a img{
    filter: invert(100%);
  -webkit-filter:invert(100%);
}
.latest div:hover{
    opacity: 0.7;
    box-shadow: inset black 0px 0px 25px -15px;
}
</style>