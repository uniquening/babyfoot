$(function(){
	var navH = $("#kouhao").offset().top;
	$(window).scroll(function(){
		var scroH=$(this).scrollTop();
		if(scroH>=navH){
		$("#kouhao").css({"position":"fixed","top":"0","display":"block","width":"100%","z-index":"150000"});			
		}
        else if(scroH<navH){
		    $("#kouhao").css({"position":"static"});
           		
		}		
	});
	
});

