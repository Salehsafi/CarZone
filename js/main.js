$(document).ready(function(){

    $(".nav-item").click(function(){ 
        $('.nav-item').find('.nav-link').removeClass('active')
        $(this).find('.nav-link').addClass('active')
    })

    $(".btn-login").click(function(){

        $(".log-in-form").addClass("show-login")
    });

    $(".log-in-close").click(function(){

        $(".log-in-form").removeClass("show-login")
    });

    $("input[type='email']").keyup(function(){
        var emailVal =  $(this).val();
        if(emailVal.length >= 5){
        $('.submit-now').attr('disabled', false)
        $(this).removeClass('error').addClass('success').removeClass('text-danger')
        $('.email-success').removeClass('text-danger').addClass('text-success')
        $('.email-label').addClass('shadow-success').removeClass('shadow-danger')
        }else{
        $('.submit-now').attr('disabled', true)
        $(this).addClass('error').removeClass('success').addClass('text-danger')
        $('.email-success').addClass('text-danger')
        $('.email-label').addClass('shadow-danger').removeClass('shadow-success')
        }
    })

    $('#yourMsg').keyup(function(){
        var msgLen = $(this).val().length;
        var dataLength = $(this).attr('data-length')
        $('.counter-start').html(msgLen)
        if(msgLen > dataLength ){
            $(this).addClass('error').removeClass('success').addClass('text-danger')
            $('.text-error').html("<span class='badge shadow-danger'>Data Is Invalid</span>");
            $('.counter').addClass('text-danger').removeClass('text-success')
            $('.msg-label').addClass('shadow-danger').removeClass('shadow-success')
        }else{
            $(this).removeClass('error').addClass('success').removeClass('text-danger')
            $('.msg-label').addClass('shadow-success').removeClass('shadow-danger')
            $('.text-error').html("")
            $('.counter').removeClass('text-danger').addClass('text-success')
        }
    })
    /* when u active a p it will be bold and the other p will lose this property */
    $("p").click(function(){ 
        $("p").removeClass('fw-bold')
        $(this).addClass('fw-bold')
    })
    /*end idea*/
 
    /*Start curasoel */
        $(".content .owl-carousel").owlCarousel({
                loop:true,
                margin:15,
                nav:true,
                autoplay:false,
                responsive:{
                    0:{
                        items:1
                    },
                    600:{
                        items:1
                    },
                    1000:{
                        items:3
                    }
                }});
    /*End curasoel */

    $('.link-tab').click(function(){
        $('.link-tab.active').removeClass('active');
        $(this).addClass('active');
        $('.link-tab.active::after').css('opacity','0');
       $('.tab-content').fadeOut();
        var classitem =     $(this).attr("data-name")
        $('.tab-'+classitem).fadeIn();
    })

    $(".owl-carousel").owlCarousel();

});