$(document).ready(function(){
  $("a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('body,html').animate({
      scrollTop: $(hash).offset().top
      }, 1200, function(){
      window.location.hash = hash;
     });
     } 
    });
});

var width = $(window).width(); 

window.onscroll = function(){
if ((width >= 900)){
    if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        $("#middle").css("background-size","150% auto");
    }else{
        $("#middle").css("background-size","100% auto");        
    }
}
};

setTimeout(function(){
    $("#loading").addClass("animated fadeOut");
    setTimeout(function(){
      $("#loading").removeClass("animated fadeOut");
      $("#loading").css("display","none");
    },800);
},1450);




//functions for project windows

function showabout(){
    $("#about_container").css("display","inherit");
    $("#about_container").addClass("animated slideInLeft");
    setTimeout(function(){
        $("#about_container").removeClass("animated slideInLeft");
    },800);
}
function closeabout(){
    $("#about_container").addClass("animated slideOutLeft");
    setTimeout(function(){
        $("#about_container").removeClass("animated slideOutLeft");
        $("#about_container").css("display","none");
    },800);
}
function showwork(){
    $("#work_container").css("display","inherit");
    $("#work_container").addClass("animated slideInRight");
    setTimeout(function(){
        $("#work_container").removeClass("animated slideInRight");
    },800);
}
function closework(){
    $("#work_container").addClass("animated slideOutRight");
    setTimeout(function(){
        $("#work_container").removeClass("animated slideOutRight");
        $("#work_container").css("display","none");
    },800);
}
function showwork2(){
    $("#work2_container").css("display","inherit");
    $("#work2_container").addClass("animated slideInLeft");
    setTimeout(function(){
        $("#work2_container").removeClass("animated slideInLeft");
    },800);
}
function closework2(){
    $("#work2_container").addClass("animated slideOutLeft");
    setTimeout(function(){
        $("#work2_container").removeClass("animated slideOutLeft");
        $("#work2_container").css("display","none");
    },800);
}
function showwork3(){
    $("#work3_container").css("display","inherit");
    $("#work3_container").addClass("animated slideInRight");
    setTimeout(function(){
        $("#work3_container").removeClass("animated slideInRight");
    },800);
}
function closework3(){
    $("#work3_container").addClass("animated slideOutRight");
    setTimeout(function(){
        $("#work3_container").removeClass("animated slideOutRight");
        $("#work3_container").css("display","none");
    },800);
}