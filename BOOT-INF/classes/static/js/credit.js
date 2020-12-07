
$(function () {
    $('.resultlist').click(function () {
        $(this).addClass('active').siblings().removeClass('active')
    })
    $('.edit').click(function () {
        $(this).parent().children('span').children('input').removeAttr('disabled')
    })
    $('#tongyi').click(function () {
        if($('#tongyi').is(':checked')) {
            // do something
            $('.inbtn').show()
        }else{
            $('.inbtn').hide()
        }
    })

    $('.menu p' ).click(function () {
        $(this).next('ul').slideToggle()
    })

})