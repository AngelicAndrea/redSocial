// función para el splash ====================================================================================
$(document).ready(function(){
    $(function(){
        setTimeout(function(){
           $('#splash').fadeOut(500);
        }, 2000);
     });
// función click sign up / log in ====================================================================================

$("#btn-sing-up").on("click",function(){ //hacer click en el boton de sign up se ejecuta las siguientes instrucciones
    $("#log-in").hide();
    $("#sign-up").show();//mostrar lo que desaparece en css
})

$('#btn-log-in').on("click",function(){
    $("#log-in").show();
    $("#sign-up").hide();
})

// Authentication ====================================================================================
$("#btn").click(function(){ // para crear una cuenta con firebase.
    console.log("hola");
    var email = $("#email-sign").val();
    var password = $("#password").val();

    if(email != "" && password != ""){
        var result = firebase.auth().createUserWithEmailAndPassword (email,password);// es parte de firebase, que rescata el valor del email y password.
        result.catch(e => alert(e.message))//ocurre cuando hay un error.
    }    
})

firebase.auth().onAuthStateChanged(function(user){ // es para verificar si esta bien la función on click
    if(user){
        console.log(user);
    }else{
        console.log("no se ha iniciado sección");
    }
})
})