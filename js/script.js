$('nav a[href]').on('click', function(e){
    e.preventDefault();
    var link = $(this).attr('href');
    $('body').animate({ scrollTop: $(link).offset().top }, 1000);
});

$('.more-button a[href]').on('click', function(e){
    e.preventDefault();
    var link = $(this).attr('href');
    $('body').animate({ scrollTop: $(link).offset().top }, 1000);
});


$(".step_1").hover(function(){
    $(".step_2").css("visibility","visible", "slow")});
$(".step_1").mouseleave(function(){
    $(".step_2").css("visibility","hidden", "slow")});