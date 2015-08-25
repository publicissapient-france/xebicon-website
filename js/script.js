$(".step_1").hover(function(){
    $(this).find(".step_2").css("visibility","visible", "slow")});
$(".step_1").mouseleave(function(){
    $(this).find(".step_2").css("visibility","hidden", "slow")});


$('.counter').counterUp({
    delay: 7,
    time: 2500
});


$('.counter-bis').counterUp({
    delay: 5,
    time: 500
});