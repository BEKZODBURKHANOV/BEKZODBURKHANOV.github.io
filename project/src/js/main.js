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
    
function ShowModal(c, sh ){
    $(c).click(function(){
        $(sh).show(200);
    })
}
ShowModal(".modalbutton",".modal")
ShowModal(".promo__widget__btn",".modal")

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
})


$(".mobile__menu__list_aboutUs").click(function(){
    $(".list__aboutUs").toggleClass("activeabout");
    
  });



new WOW().init();
