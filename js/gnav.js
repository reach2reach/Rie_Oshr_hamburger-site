$(function() {
    $(".is-menu").on("click",function(){ //clickの度にis-openが加わったり外れたり
    $('.is-menu,.p-sidebar,.p-global-nav__menu, #fadeLayer,html').toggleClass('is-open');
    });

    //window横幅がpcサイズになったらis-open外す//
    $(window).on("resize", function() {
        var w = $(window).width();
        if(w >=1025) {
            $('.is-menu,.p-sidebar,.p-global-nav__menu, #fadeLayer,html').removeClass("is-open");
        }
        });
   });