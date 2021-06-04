                var num1 = 0;
                var arrUrl = ['images/1.jpg','images/2.jpg'];
                var arrInfo = ['我校荣获“河南省民族团结进步创建示范单位”称号','省委常委、统战部部长孙守刚出席“2019河南省两...'];
                var img = document.getElementById('jsbanner');
                var li1 = document.getElementById('jsbannerList').children;
                var info = document.getElementById('jsword');
                var timerr = null;
                    img.onmouseover = function(ev){
                     clearInterval(timerr);
                }
                img.onmouseout = autoplay();
        
                        //点击数字 换大图片
                        for (var i = 0; i < li1.length; i++){
                            li1[i].index = i;
                            li1[i].onclick = function (ev) {
                                num1 = this.index;
                                changeImg();
                            }
                        }
        
                        //图片切换
                        function changeImg() {
                            for (var i = 0; i < li1.length; i++) {
                                //判断当前li是否包含active类
                                if(li1[i].classList.contains('active')){
                                    li1[i].classList.remove('active');
                                }
                            }
                            //修改数字
                            li1[num1].classList.add('active');
                            //修改大图
                    var currentImg = arrUrl[num1];
                    img.style.background = "url("+currentImg+") no-repeat top";
                    //修改轮播标题
                    info.innerText = arrInfo[num1];
                }
                //定时器
                function autoplay() {
                    timerr = setInterval(function () {
                        num1++;
                        num1 %= arrUrl.length;
                        changeImg();
                    },2500);
                }