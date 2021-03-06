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
});

$('#btn-log-in').on("click",function(){
    $("#log-in").show();
    $("#sign-up").hide();
});

// Authentication ====================================================================================
$("#btn").click(function(){ // para crear una cuenta con firebase.
    console.log("hola");
    var email = $("#email-sign").val();
    var password = $("#password").val();

    if(email != "" && password != ""){
        var result = firebase.auth().createUserWithEmailAndPassword (email,password);// es parte de firebase, que rescata el valor del email y password.
        result.catch(e => alert(e.message))//ocurre cuando hay un error.
    }    
});

firebase.auth().onAuthStateChanged(function(user){ // es para verificar si esta bien la función on click
    if(user){
        console.log(user);
    }else{
        console.log("no se ha iniciado sección");
    }
});
// Log in ================================================================================================
$("#log-in-btn").click(function() {
    var email = $("#email-address").val();
    var pw = $("#user-password").val();
    if (email != "" && pw != "") {
      var promise = firebase.auth().signInWithEmailAndPassword(email,pw);
      promise.catch(e => alert(e.message))
    }    
});

// redirecionar al html de mi perfil ========================================================================

firebase.auth().onAuthStateChanged(function(user) { //si la sesión está inicida se redirecciona al perfil

    if (user) {
        var html = "miperfil.html";
        $(location).attr("href",html);
        
    } 
  });
// Cerrar sesión ========================================================================

/*$("#logout").click(function(){
    firebase.auth().signOut();
});*/
})

// Post de usuario  ========================================================================

var idtexto = 0; 
$("#btn-send").click(function(){
    var post = $("#postInput").val();

    $("#texto").append("<section" + idtexto + ">" +
    "<div id='icon-box' col s12 x12>"+
    "<i id='icon-perfil' class='fas fa-user fa-6x orange-text'></i>"+
    "<p class='name'>Carmencita Hernandez</p>"+ 
    "</div>"+
    "<div col s6 xl6>" + 
    "<p class='post'>" + post + "</p>" + 
    "</div>"+
    "</section>");
});

$("#btn-photo").click(function(){
    $("#texto").append("<div id='icon-box' col s2 x2>"+
    "<i id='icon-perfil' class='fas fa-user fa-6x orange-text'></i>"+
    "</div>"+
    "<div col s10 x10>"+
    "<p class='name'>Carmencita Hernandez</p>" + "</div>"+
    "<img class='responsive-img img-game' src='assets/images/game.png' alt=''>");

});    