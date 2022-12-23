<template>
<div class="plate plate-contact">    
        <div class="container">
            <div class="row">
                
                <img class=" offset-sm-1 offset-0 " src="@/assets/ico/contact.png">
                <p class=" offset-0">Contact Us / </p> 
                <p class=" plate-italic offset-sm-1 offset-lg-0 ">Here is how you can contact us</p>
            </div>

        </div>
    </div>
    <div class="container">
        <div class="row block-contact">
            <div class="row offset-md-1 col-12 col-md-6 form">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor 
                    incididunt ut labore et. Ut wisi enim ad minim veniam, quis nostrud exerci tation 
                    ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
                </p>
                <form action="">
                    <label for="name">Name</label>
                    <input class="col-12" placeholder="Enter your name..." id="name" type="text" name="name">
                    <label for="email">Email</label>
                    <input class="col-12" placeholder="Enter your email..." id="email" type="email" name="email">
                    <label for="subject">Subject</label>
                    <input class="col-12" placeholder="Your subject..." id="subject" type="text" name="subject" autocomplete="off">
                    <label for="message">Message</label>
                    <textarea class="col-12" rows="7" id="message" placeholder="Your message..."></textarea>
                    <input type="submit" value="Send">
                </form>
            </div>
            <div class="row col-12 col-md-4 map">
                <h2>
                    WE ARE HERE
                </h2>
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d902.614389840393!2d36.21585463706387!3d50.0260360154723!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb51c74bb5b85b0ad!2sKarazin%20Student%20Hall!5e1!3m2!1sru!2sua!4v1671801238229!5m2!1sru!2sua" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                <h2>
                    ADDRESS
                </h2>
                <p>
                    Lorem city, Ipsum street, 123, the best obshaga ever
                    <br>
                    Phone: 123456789012
                </p>
            </div>
        </div>
    </div>
</template>

<script>

</script>

<style>
.block-contact{
    margin-top: 50px;
}
.block-contact p{
    padding: 0 15px 0px 15px;
    font-size: 0.9em;
    font-weight: 400;
    opacity: 0.6;
    line-height: 1.8em;
}

.map h2{
    padding-left: 20px ;
    font-size: 18px;
    color:#5f5f5f;
    text-transform: uppercase;
}
.map p{
    padding-left: 20px;
}
form label{
    padding:  5px 0px 2px;
    font-size: 0.9em;
    font-weight: 400;
    opacity: 0.8;
    line-height: 1em;
    padding: 20px 0 5px ;
}
form input, form textarea{
    font-style: italic;
    
    font-size: 0.9em;
    font-weight: 400;
    opacity: 0.5;
    line-height: 1.4em;
}
input[type=submit]{
    margin-top:20px ;
    opacity: 1;
    text-decoration: none;
    font-style: normal;
    color: white;
    font-size: 1em;
    text-align: center;
    padding: 5px 50px;
    background-color: #ab2b65;
    transition: background-color linear 0.2s;
    border: none;
}
input[type=submit]:hover{
    background-color: #9e2f61;
}
input[type=submit]:active{
    background-color: #752348;
}

@media all and (max-width:767px ){
    .map h2{
    margin-top: 15px;}

}

</style>