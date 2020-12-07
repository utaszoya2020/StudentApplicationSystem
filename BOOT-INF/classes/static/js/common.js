function getDays(date1 , date2){
    var date1Str = date1.split("-");//divide date string into arraies, elements are year, month, day
    //create Date based on year. month. day
    var date1Obj = new Date(date1Str[0],(date1Str[1]-1),date1Str[2]);
    var date2Str = date2.split("-");
    var date2Obj = new Date(date2Str[0],(date2Str[1]-1),date2Str[2]);
    var t1 = date1Obj.getTime();
    var t2 = date2Obj.getTime();
    var dateTime = 1000*60*60*24; //ms of a day
    var minusDays = Math.floor(((t2-t1)/dateTime));//days differences between two dates
    var days = Math.abs(minusDays);//absolute value
    var weeks=days/7
    return weeks;
}
//words limitation for reasons
        	function count_words(){
        		var regex = /\s+/gi;
        		str1= document.getElementById("comments").value;
        		if(str1.trim().replace(regex, ' ').split(' ').length<20){
            		alert("Please explain your reasoning in at least 20 words");
            		return false;
        		}else{
        			return true;
        		}
        	} 

// Popup
function callstaff() {
    alert("Please send us an email: studentsupport@aibtglobal.edu.au");
}

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

    // with plugin options
    $("#input-files").fileinput({
        theme: "fas",
        browseClass: "btn btn-primary btn-block",
        showCaption: false,
        showRemove: false,
        showUpload: false,
        allowedFileExtensions: ["jpg", "jpeg", "gif", "png", "pdf"],
        maxFileCount: 10,
        maxFileSize: 51200,
        previewFileType: "any"
    });

    $('#addressEdit').click(function(){
        if($('#addressText').prop('disabled'))
        {
            $('#addressText').prop('disabled', false)
        }
        else{
            $('#addressText').prop('disabled', true)
        }
    });

    $('#phoneEdit').click(function(){
        if($('#phoneText').prop('disabled'))
        {
            $('#phoneText').prop('disabled', false)
        }
        else{
            $('#phoneText').prop('disabled', true)
        }
    });

    $('#emailEdit').click(function(){
        if($('#emailText').prop('disabled'))
        {
            $('#emailText').prop('disabled', false)
        }
        else{
            $('#emailText').prop('disabled', true)
        }
    });

    window.addEventListener('load', function () {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.getElementsByClassName('needs-validation')

        // Loop over them and prevent submission
        Array.prototype.filter.call(forms, function (form) {
            form.addEventListener('submit', function (event) {
                if (form.checkValidity() === false) {
                    event.preventDefault()
                    event.stopPropagation()
                }
                form.classList.add('was-validated')
            }, false)
        })
    }, false)
})