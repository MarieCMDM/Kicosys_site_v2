$(document).ready(function(){

/*************************Form contatti*************************/
    $("#submit").click(function(){
        $("#forms").css("text-align", "center");
        $("#forms").css("display", "block");
        $("#forms").html("Grazie per averci contattato! <br/> Visioneremo la tua richiesta quanto prima!");
    });
/******************Cambio colore bordo mains*****************/
    $("main").on({
        mouseover: function(){
            $(this).css("border-color", "cyan");
        },
        mouseleave: function(){
            $(this).css("border-color", "orangered");
        }    
    });   
});