
$(".navi").click(function(e){
 			e.preventDefault();
 			var divid="#"+$(this).attr('id')+"Div";
 			
 			
 			$("html body").animate({
 				scrollTop: $(divid).offset().top-55
 							},1000);

 		})

function parallax(){
	var ell=document.getElementById('uni');
	ell.style.top=-(window.pageYOffset*0.6)+'px';
}
window.addEventListener('scroll',parallax,false);
