var time  = 1500;
$('.counter').counterUp({
    time: time
});


$('.counter-bis').counterUp({
    time: time
});

$(function(){
    $('.fadelinks > :gt(0)').hide();
    setInterval(function(){$('.fadelinks > :first-child').fadeOut().next().fadeIn().end().appendTo('.fadelinks');}, 5000);
});

window.concours = function(e) {
    e.preventDefault();

    var nomEl = document.querySelectorAll('#nom')[1];
    var nom = nomEl.value;
    var prenomEl = document.querySelectorAll('#prenom')[1];
    var prenom = prenomEl.value;
    var emailEl = document.querySelectorAll('#email')[1];
    var email = emailEl.value;
    var jobEl = document.querySelectorAll('#job')[1];
    var job = jobEl.value;
    var companyEl = document.querySelectorAll('#societe')[1];
    var company = companyEl.value;
    var error = 'solid 2px red';
    var normal = 'solid 2px purple';

    if (email.length > 0 && company.length > 0) {
        if (!validateEmail(email)) {
            emailEl.style.border = normal;
            emailEl.style.border = error;
            return;
        }
        $.ajax({
            type: "POST",
            url: "http://form.xebia.fr/xc15-form.php",
            data: {
                nom: document.querySelectorAll('#nom')[1].value,
                prenom: document.querySelectorAll('#prenom')[1].value,
                email: document.querySelectorAll('#email')[1].value,
                job: document.querySelectorAll('#job')[1].value,
                societe: document.querySelectorAll('#societe')[1].value,
            }
        });




    } else {
        nom.length > 0 ? nomEl.style.border = normal : nomEl.style.border = error;
        prenom.length > 0 ? prenomEl.style.border = normal : prenomEl.style.border = error;
        email.length > 0 ? emailEl.style.border = normal : emailEl.style.border = error;
        job.length > 0 ? jobEl.style.border = normal : jobEl.style.border = error;
        company.length > 0 ? companyEl.style.border = normal : companyEl.style.border = error;
    }

    $('.featherlight').css('display', 'none');


    $('#congrats').css('display', 'block');
    setTimeout(function(){ $('#congrats').css('display', 'none'); }, 5000);



};







function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};


