
$(function(){
    $('.fadelinks > :gt(0)').hide();
    setInterval(function(){$('.fadelinks > :first-child').fadeOut().next().fadeIn().end().appendTo('.fadelinks');}, 5000);
});

window.xebicon16 = function(e) {
    e.preventDefault();


    var emailEl = document.querySelectorAll('#email')[1];
    var email = emailEl.value;

    var error = 'solid 2px red';
    var normal = 'solid 2px purple';

    if (email.length > 0) {
        if (!validateEmail(email)) {
            emailEl.style.border = normal;
            emailEl.style.border = error;
            return;
        }
        $.ajax({
            type: "POST",
            url: "http://form.xebia.fr/notification-form/notification-form.php",
            data: {
                email: document.querySelectorAll('#email')[1].value
            }
        });




    } else {
        email.length > 0 ? emailEl.style.border = normal : emailEl.style.border = error;

    }

    $('.featherlight').css('display', 'none');


    $('#congrats').css('display', 'block');
    setTimeout(function(){ $('#congrats').css('display', 'none'); }, 5000);



};







function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};


