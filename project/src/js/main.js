$(window).scroll(function(){
    if($(this).scrollTop() > 500) {
        $('.pageup').fadeIn();
    } else{
        $('.pageup').fadeOut(400);
}})   
function SlowScroll (ele, el){
    $(ele).click(function(){
      $("html, body").animate({
          scrollTop: $(el).offset().top
      },800);        
    });
}
SlowScroll(".pageup",".main");
SlowScroll(".menulistone",".main");
SlowScroll( ".aboutus__section",".aboutus");
SlowScroll(".princourwrk__section",".princourwrk");
SlowScroll(".promo__section",".promo");
SlowScroll(".promo__certificate__section",".promo__certificate");
SlowScroll(".menulistsix","footer");
SlowScroll(".sertificate__section",".promo__certificate");
SlowScroll(".promo__section",".promo");
SlowScroll(".contact__section","footer");
$(window).scroll(function(){
    if($(this).scrollTop() > 150) {
       $(".main__header").css("background", "rgba(0, 0, 0, 0.9)");
    } else{
        $(".main__header").css("background", "rgba(0, 0, 0, 0.0)");
    }});
function ShowMenuList(el, list){
    $(el).mouseover(function(){
        $(list).show(200);
        return false;   
})};
    ShowMenuList('.visible__dropdown', '.visible__menu')
    ShowMenuList('.menulisttwo', ".visible__menu_about")
function HideMenuList (el, list){
    $(el).mouseleave(function(){
        $(list).hide(200);
        return false;
})};
    HideMenuList('.menulisttwo', '.visible__menu_about');
    HideMenuList('.visible__dropdown', '.visible__menu')    
function ShowModal(c, sh , t){
    $(c).click(function(){
        $(sh).show(t);
    })
};
ShowModal(".modalbutton",".modal", 200);
ShowModal(".promo__widget__btn",".modal", 200);
ShowModal(".certificate__three",".modal__info",100);
ShowModal(".certificate__two",".modal__info__two",100);
ShowModal(".certificate__one",".modal__info__one",100);
ShowModal(".certificate__six",".modal__info__six",100);
ShowModal(".certificate__seven",".modal__info__seven",100);
ShowModal(".certificate__eight",".modal__info__eight",100);
function HideModal (c, h){
    $(c).click(function(){
        $(h).hide();
        })
};
HideModal(".modal__item svg",".modal");
HideModal(".modal__info__close",".modal__info");
HideModal(".modal__info__close",".modal__info__two");
HideModal(".modal__info__close",".modal__info__one");
HideModal(".modal__info__close",".modal__info__six");
HideModal(".modal__info__close",".modal__info__seven");
HideModal(".modal__info__close",".modal__info__eight");
$(window).on('click', function(event){
    if(event.target.id == 'modal'){
        $('#modal').css({display: "none"});
    }
});
$(".hamburger").click(function(){
    $(".mobile__menu").addClass("active");
  });
  $('.mobile__menu__close').click(function(){
    $(".mobile__menu").removeClass("active");   
});
function toggleMenu (с , el){
    $(с).click(function(){
        $(el).toggleClass("activeabout");
    })
};
toggleMenu(".mobile__menu__list_aboutUs" , ".list__aboutUs");
toggleMenu(".mobile__menu__list_services" ,".list__services");
var swiper = new Swiper(".feedback__slider", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        350: {
            slidesPerView: 1,          
        },
        768: {
            slidesPerView: 1
        },
        992: {
            slidesPerView: 2,
            spaceBetween: 30
        },
        1200: {
            slidesPerView: 2,
            spaceBetween: 30
        },
        1600: {
            slidesPerView: 3,
            spaceBetween: 30
        },
    }
});
new WOW().init();
