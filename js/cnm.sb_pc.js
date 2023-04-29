window.onload=function()
{
	
	// 文字输入特效
	let divTyping = document.getElementById('etext')
	let i = 0,
		timer = 0,
		str = '欢迎来到LeopardRich Blog'
	function typing()
	{
		if (i <= str.length)
		{
			divTyping.innerHTML = str.slice(0, i++) + '_'
			timer = setTimeout(typing, 120)
		}else
		 {
			divTyping.innerHTML = str
			clearTimeout(timer)
			$("#ebga").animate({width:'100%',height:'100%'},800);
			setTimeout(function(){$("#content").animate({height:'80%'},800)},300);
		}
	}
	typing();
	
	setTimeout(function(){$("#xuna").show();},5000);
	
	//单击选择框-宽度变化
	$("#cleft_li01").click(function(){
		$("#cleft_li01").css({"background-color":"#ececec"});
		$("#cleft_li02").css({"background-color":"#f9f9f9"});
		$("#cleft_li03").css({"background-color":"#f9f9f9"});
		$("#cleft_li04").css({"background-color":"#f9f9f9"});
		$("#nav01").animate({"left":"0%"},800);
		$("#nav02").animate({"left":"0%"},800);
		$("#nav03").animate({"left":"0%"},800);
		$("#nav04").animate({"left":"0%"},800);
		
	})
	$("#cleft_li02").click(function(){
		$("#cleft_li01").css({"background-color":"#f9f9f9"});
		$("#cleft_li02").css({"background-color":"#ececec"});
		$("#cleft_li03").css({"background-color":"#f9f9f9"});
		$("#cleft_li04").css({"background-color":"#f9f9f9"});
		$("#nav01").animate({"left":"-100%"},800);
		$("#nav02").animate({"left":"0%"},800);
		$("#nav03").animate({"left":"0%"},800);
		$("#nav04").animate({"left":"0%"},800);
	})

	$("#cleft_li03").click(function(){
		$("#cleft_li01").css({"background-color":"#f9f9f9"});
		$("#cleft_li02").css({"background-color":"#f9f9f9"});
		$("#cleft_li03").css({"background-color":"#ececec"});
		$("#cleft_li04").css({"background-color":"#f9f9f9"});
		$("#nav01").animate({"left":"-100%"},800);
		$("#nav02").animate({"left":"-100%"},800);
		$("#nav03").animate({"left":"0%"},800);
		$("#nav04").animate({"left":"0%"},800);
	})

	$("#cleft_li04").click(function(){
		$("#cleft_li01").css({"background-color":"#f9f9f9"});
		$("#cleft_li02").css({"background-color":"#f9f9f9"});
		$("#cleft_li03").css({"background-color":"#f9f9f9"});
		$("#cleft_li04").css({"background-color":"#ececec"});
		$("#nav01").animate({"left":"-100%"},800);
		$("#nav02").animate({"left":"-100%"},800);
		$("#nav03").animate({"left":"-100%"},800);
		$("#nav04").animate({"left":"0%"},800);
	})


    // 点击探索之后
	$(".nav01_but01").click(function(){
		$("#cleft_li01").css({"background-color":"#f9f9f9"});
		$("#cleft_li02").css({"background-color":"#ececec"});
		$("#cleft_li03").css({"background-color":"#f9f9f9"});
		$("#cleft_li04").css({"background-color":"#f9f9f9"});
		$("#cleft_li05").css({"background-color":"#f9f9f9"});
		$("#nav01").animate({"left":"-100%"},800);
		$("#nav02").animate({"left":"0%"},800);
		$("#nav03").animate({"left":"0%"},800);
		$("#nav04").animate({"left":"0%"},800);
		$("#nav05").animate({"left":"0%"},800);
	})

	
}