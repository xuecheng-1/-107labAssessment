
//切图
function changImg(a){
	$('.img_list li').eq(a).fadeIn().siblings().fadeOut();
	$('.focusList a').eq(a).addClass('cur').siblings().removeClass('cur');
}
//自动播放
var step = 0;
changImg(step);
var timer = null;
function autoPlay(){
	timer = setInterval(function(){
		step++;
		if(step === 4){
			step = 0;
		}
		changImg(step);
	},2000);
}
autoPlay();
//左按钮
$('.sli_left').click(function(){
	clearInterval(timer);
	step--;
	if(step === -1){
		step = 3;
	}
	changImg(step);
	autoPlay();
	
});
$('.sli_right').click(function(){
	clearInterval(timer);
	step++;
	if (step === 4) {
		step = 0;
	}
	changImg(step);
	autoPlay();
	
});
//下面的点
$('.focusList a').click(function(){
	clearInterval(timer);
	step = $(this).index();
	changImg(step);
	autoPlay();
});
//鼠标搁到图上，图不动了
$('.img_list').mouseover(function(){
	clearInterval(timer);
}).mouseout(function(){
	autoPlay();
});
