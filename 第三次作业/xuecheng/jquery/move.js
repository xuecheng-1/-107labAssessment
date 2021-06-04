        var isinter;
        var millisec = 25;//定时器间隔执行时间/毫秒
        var xflo = 0; //漂浮层x坐标
        var yflo = 0; //漂浮层y坐标
        var yistop = false;
        var xisleft = true;
        function floatadfun(){
            kwidth = $(window).width();//可视区域宽度
            kheight = $(window).height();//可视区域高度
 
            divwidth = $('#move').width();//div漂浮层宽度
            divheight = $('#move').height();//div漂浮层高度
 
            hstop = jQuery(window).scrollTop();//滚动条距离顶部的高度
            wsleft = jQuery(window).scrollLeft();//滚动条距离最左边的距离
 
            offwidth = (kwidth-divwidth);//div偏移的宽度
            offheight = (kheight-divheight);//div偏移的高度
 
            if (!yistop) {
                yflo++;
                if (yflo >= offheight) {
                    yistop = true;
                }
            } else {
                yflo--;
                if (yflo <= 0) {
                    yistop = false;
                }
            }
 
            if (xisleft) {
                xflo++;
                if (xflo >= offwidth) {
                    xisleft = false;
                }
            } else {
                xflo--;
                if (xflo <= 0) {
                    xisleft = true;
                }
            }
 
            $('#move').css({'top':yflo+hstop,'left':xflo+wsleft}); /* 如果使用固定定位，请把加上滚动条的距离去掉即可 */
        }
 
        $(function () {
            isinter = setInterval("floatadfun()",millisec);
            $('#move').mouseover(function () {
                clearInterval(isinter);
            }).mouseout(function () {
                isinter = setInterval("floatadfun()",millisec);
            });
        });
