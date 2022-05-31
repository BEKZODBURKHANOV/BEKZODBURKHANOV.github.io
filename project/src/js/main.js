$(window).scroll(function(){
    if($(this).scrollTop() > 500) {
        $('.pageup').fadeIn();
    } else{
        $('.pageup').fadeOut(400);
}})
    
function SlowScrollTop (ele, el){
    $(ele).click(function(){
      $("html, body").animate({
          scrollTop: $(el).offset().top
      },800);
        
    });
}
SlowScrollTop(".pageup",".main")
SlowScrollTop(".menulistone",".main")
SlowScrollTop( ".aboutus__section",".aboutus")
SlowScrollTop(".princourwrk__section",".princourwrk")
SlowScrollTop(".promo__section",".promo")
SlowScrollTop(".promo__certificate__section",".promo__certificate")
SlowScrollTop(".menulistsix","footer")

$(window).scroll(function(){
    if($(this).scrollTop() > 150) {
       $(".main__header").css("background", "rgba(0, 0, 0, 0.9)");
    } else{
        $(".main__header").css("background", "rgba(0, 0, 0, 0.0)");
    }}) 


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
}
ShowModal(".modalbutton",".modal", 200)
ShowModal(".promo__widget__btn",".modal", 200)
ShowModal(".certificate__three",".modal__info",100)
ShowModal(".certificate__two",".modal__info__two",100)

function HideModal (c, h){
    $(c).click(function(){
        $(h).hide();
        })
}
HideModal(".modal__item svg",".modal");
HideModal(".modal__info__close",".modal__info")


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
   
})

function toggleMenu (с , el){
    $(с).click(function(){
        $(el).toggleClass("activeabout");
    })
}
toggleMenu(".mobile__menu__list_aboutUs" , ".list__aboutUs")
toggleMenu(".mobile__menu__list_services" ,".list__services")

var swiper = new Swiper(".feedback__slider", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
});

new WOW().init();
