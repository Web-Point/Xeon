function isEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
}

function isPhone(phone) {
    var regex = /^\d{11}$/;
    return regex.test(phone);
}

$(function () {
    var nameError = true,
        companyError = true,
        emailError = true,
        phoneError = true,
        msgError = true;

    $('.name').blur(function () {
        if ($(this).val().length < 3) {
            $(this).css('border', '1px solid #F00')
                .parent().find('p').fadeIn(200);
            nameError = true;
        } else {
            $(this).css('border', '1px solid #080')
                .parent().find('p').fadeOut(200);
            nameError = false;
        }
    });

    $('.company').blur(function () {
        if ($(this).val().length < 3) {
            $(this).css('border', '1px solid #F00')
                .parent().find('p').fadeIn(200);
            companyError = true;
        } else {
            $(this).css('border', '1px solid #080')
                .parent().find('p').fadeOut(200);
            companyError = false;
        }
    });

    $('.email').blur(function () {
        if (!isEmail($(this).val())) {
            $(this).css('border', '1px solid #F00')
                .parent().find('p').fadeIn(200);
            emailError = true;
        } else {
            $(this).css('border', '1px solid #080')
                .parent().find('p').fadeOut(200);
            emailError = false;
        }
    });

    $('.phone').blur(function () {
        if (!isPhone($(this).val())) {
            $(this).css('border', '1px solid #F00')
                .parent().find('p').fadeIn(200);
            phoneError = true;
        } else {
            $(this).css('border', '1px solid #080')
                .parent().find('p').fadeOut(200);
            phoneError = false;
        }
    });

    $('.message').blur(function () {
        if ($(this).val().length < 5) {
            $(this).css('border', '1px solid #F00')
                .parent().find('p').fadeIn(200);
            msgError = true;
        } else {
            $(this).css('border', '1px solid #080')
                .parent().find('p').fadeOut(200);
            msgError = false;
        }
    });

    $('.contact-form').submit(function (e) {
        $('.name, .company, .email, .phone, .message').blur();

        if (nameError || companyError || emailError || phoneError || msgError) {
            swal({
                title: "Inavalid inputs!",
                text: "Please fill inputs with the right value",
                icon: "error",
            });
        } else {
            swal({
                title: "Success!",
                text: "Thank you for contacting us",
                icon: "success",
            });
        }
        e.preventDefault();
    });
});