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
       $(".main__header").css("background", "rgba(0, 0, 0, 0.8)");
    } else{
        $(".main__header").css("background", "rgba(0, 0, 0, 0.0)");
    }}) 
 

$('.visible__dropdown').mouseover(function(){
    $(".visible__menu").show(200);
    return false;
})
$('.visible__dropdown').mouseleave(function(){
    $(".visible__menu").hide(800);
    return false;
})

$('.menulisttwo').mouseover(function(){
    $(".visible__menu_about").show(200);
    return false;
})
$('.menulisttwo').mouseleave(function(){
    $(".visible__menu_about").hide(800);
    return false;
})

new WOW().init();