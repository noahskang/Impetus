// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require_tree .

$(window).scroll(function(){
  $(".top").css("opacity", 1 - $(window).scrollTop() / 250);
  $('.hideme').each( function(i){
     var bottom_of_object = $(this).offset().top + $(this).outerHeight();
     var bottom_of_window = $(window).scrollTop() + $(window).height();

     if( bottom_of_window > bottom_of_object ){
         $(this).animate({'opacity':'1'},1500);

     }
   });
});
