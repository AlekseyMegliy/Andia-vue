<template>
    <div class="col-sm-12 col-md-3 teammate">
        <div class="inTeam">
            <img :alt="teamInfo.header" class="col-12" :src="require(`@/assets/img/team/team${teamInfo.id}.jpg`)">
            <h4>{{teamInfo.header}}</h4>
            <p>{{ teamInfo.mainText }} </p>
            <div class="row">
                <span >
                    <a class="col-2" alt="Em" href="#"><img src="@/assets/img/social-icons/email.png"></a>
                    <a class="col-2" alt="Fb" href="#"><img src="@/assets/img/social-icons/facebook.png"></a>
                    <a class="col-2" alt="Sk" href="#"><img src="@/assets/img/social-icons/skype.png"></a>
                    <a class="col-2" alt="Tw" href="#"><img src="@/assets/img/social-icons/twitter.png"></a>
                </span>
            </div>
        </div>
    </div>
</template>
<script>
    export default{
        props:['teamInfo']
    }
</script>
<style>

</style>