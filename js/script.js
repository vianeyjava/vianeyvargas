$(document).ready(function() {

    $('#menu').click(function() {
        $(this).toggleClass('fa-times');
        $('header').toggleClass('toggle');
    });

    $(window).on('scroll load', function() {

        $('#menu').removeClass('fa-times');
        $('header').removeClass('toggle');

        if ($(window).scrollTop() > 0) {
            $('.top').show();
        } else {
            $('.top').hide();
        }

    });

    // smooth scrolling 

    $('a[href*="#"]').on('click', function(e) {

        e.preventDefault();

        $('html, body').animate({

                scrollTop: $($(this).attr('href')).offset().top,

            },
            500,
            'linear'
        );

    });

    var btn = document.getElementById("btnSendEmail");
    btn.addEventListener('click', function(event) {
        event.preventDefault()
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var phone = document.getElementById("phone").value;
        var subject = document.getElementById("subject").value;
        var message = document.getElementById("message").value;
        var body = "Name: " + name + "<br/> Email: " + email + "<br/> Phone: " + phone + "<br/> Subject: " + subject + "<br/> Message; " + message;
        console.log('hi');
        Email.send({
            Host: "smtp.gmail.com",
            Username: "reciboempresas@gmail.com",
            Password: "ysybnrmgmpggmvqp",
            To: 'reciboempresas@gmail.com',
            From: email,
            Subject: subject,
            Body: body
        }).then(
            message => alert("The email has been sent successfully. Vianey Vargas will contact you shortly.")
        );
    });

});


/*function sendEmail() {
    Email.send({
        Host: "smtp.mailtrap.io",
        Username: "aca63079f72bee",
        Password: "07d3a1f6a4d806",
        To: 'reciboempresas@gmail.com',
        From: document.getElementById("email").value,
        Subject: "New contact from your CV.",
        Body: "Name: " + document.getElementById("name").value +
            "<br> Email :" + document.getElementById("email").value +
            "<br> Phone: " + document.getElementById("phone").value +
            "<br>: Message: " + document.getElementById("message").value
    }).then(
        message => alert("Message Send Successfull")
    );
}*/