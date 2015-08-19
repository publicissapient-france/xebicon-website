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
