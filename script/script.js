
$(".navi").click(function(e){
 			e.preventDefault();
 			var divid="#"+$(this).attr('id')+"Div";
 			
 			
 			$("html body").animate({
 				scrollTop: $(divid).offset().top-55
 							},1000);

 		})