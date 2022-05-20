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

$('.visible__dropdown').mouseover(function(){
    $(".visible__menu").show(100);
    return false;
})
$('.visible__dropdown').mouseleave(function(){
    $(".visible__menu").hide(200);
    return false;
})

$('.menulisttwo').mouseover(function(){
    $(".visible__menu_about").show(100);
    return false;
})
$('.menulisttwo').mouseleave(function(){
    $(".visible__menu_about").hide(200);
    return false;
})
$(".hamburger").click(function(){
    $(".mobile__menu").addClass("active");
  });
$('.mobile__menu__close').click(function(){
    $(".mobile__menu").removeClass("active");
    $(".list__aboutUs").remuveClass("activeabout");
})


$(".mobile__menu__list_aboutUs").click(function(){
    $(".list__aboutUs").toggleClass("activeabout");
    
  });

  $('.mobile__menu__close').click(function(){
    $(".list__aboutUs").removeClass("activeabout");
})
new WOW().init();