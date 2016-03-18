
var divid="";
var off=0;
$(".navi").click(function(e){
 			e.preventDefault();
 			 divid="#"+$(this).attr('id')+"Div";
 			off=$(divid).offset().top+200
 			
 			$("html body").animate({
 				scrollTop: off
 							},1000);

 		})

		
$('window').scroll(function(){
	var ypos,image,image2;
			//ypos=window.pageYOffset;
			image=document.getElementById('par');
			//image2=document.getElementById('experDiv');
			image.style.top=off*0.6+"px";
});

