
//切图
function changImg(a){
	$('.img_list li').eq(a).fadeIn().siblings().fadeOut();
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

$('.img_list').mouseover(function(){
	clearInterval(timer);
}).mouseout(function(){
	autoPlay();
});
