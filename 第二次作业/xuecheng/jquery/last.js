$(function() {
    var arr = ['../images/1.jpg','../images/2.jpg','../images/3.jpg','../images/4.jpg','../images/5.jpg','../images/6.jpg'];
    // 默认第一张
    $.each(arr, function(i, m) {
        var gg = document.createElement('img');
        $(gg).attr('src', m);
        $('.imgCon').append(gg);
    });
    $('.imgCon').css({
        left: 0
    })
    var derection = true;

    function time() {
        if (derection) { //向左

            $('.imgCon').stop().animate({
                left: -180
            }, function() {
                $('.imgCon').css({
                    left: 0
                });
                var i = arr.shift();
                arr.push(i);
                $('.imgCon').html('');
                $.each(arr, function(i, m) {
                    var img = document.createElement('img');
                    $(img).attr('src', m);
                    $('.imgCon').append(img);
                });
            })
        } else {

            $('.imgCon').css({
                left: -180
            });
            var i = arr.pop();
            arr.unshift(i);
            $('.imgCon').html('');
            $.each(arr, function(i, m) {
                var img = document.createElement('img');
                $(img).attr('src', m);
                $('.imgCon').append(img);
            });
            $('.imgCon').stop().animate({
                left: 0
            }, function() {

            })
        }

    }

    var timerrr = setInterval(time, 3000);
    $('.container').mouseover(function() {
        clearInterval(timerrr);
    });
    $('.container').mouseleave(function() {
        timerrr = setInterval(time, 3000);
        derection = true;
    });
    $('#next').click(function() {
        derection = true;
        time();
    });
    $('#prev').click(function() {
        derection = false;
        time();
    });
})
 
