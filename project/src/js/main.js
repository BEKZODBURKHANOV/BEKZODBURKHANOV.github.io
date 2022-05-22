$(window).scroll(function(){
    if($(this).scrollTop() > 500) {
        $('.pageup').fadeIn();
    } else{
        $('.pageup').fadeOut(400);
}})
    $(".pageup").click(function(){
    $("html, body").animate({
        scrollTop:  0
        },800);
        return false;
});

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

function HideModal (c, h){
    $(c).click(function(){
        $(h).hide();
        })
}
HideModal(".modal__item svg",".modal");


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
    // $(".list__aboutUs").css('display','none')
})

function toggleMenu (с , el){
    $(с).click(function(){
        $(el).toggleClass("activeabout");
        // $(this).next().toggleClass("activeabout");
    })
}
toggleMenu(".mobile__menu__list_aboutUs" , ".list__aboutUs")
toggleMenu(".mobile__menu__list_services" ,".list__services")

$('.slider__wrapper').slick({
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    prevArrow: '<button type="button" class="slick-prev"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" width="35.000000pt" height="35.000000pt"><path d="M224 480c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25l192-192c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L77.25 256l169.4 169.4c12.5 12.5 12.5 32.75 0 45.25C240.4 476.9 232.2 480 224 480z"/></svg></button>',
    nextArrow:'<button type="button" class="slick-next"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" width="35.000000pt" height="35.000000pt"><path d="M96 480c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L242.8 256L73.38 86.63c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l192 192c12.5 12.5 12.5 32.75 0 45.25l-192 192C112.4 476.9 104.2 480 96 480z"/></svg></button>'
  });

new WOW().init();
