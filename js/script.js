var time  = 1500;
$('.counter').counterUp({
    time: time
});


$('.counter-bis').counterUp({
    time: time
});

$('#valider').click(function() {
    $('#congrats').toggle('slow', function() {
        // Animation complete.
    });
});