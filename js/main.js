document.addEventListener('DOMContentLoaded', () => {
	const imgLightBox = document.querySelectorAll('.materialboxed');
	M.Materialbox.init(imgLightBox, {
		inDuration: 400,
		outDuration: 400
	});
});
// scroll up
document.getElementById("boton").addEventListener("click",scrollUp)
function scrollUp(){

	var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
	if(currentScroll > 0){
		window.requestAnimationFrame(scrollUp)
		window.scrollTo(0,currentScroll - (currentScroll / 10));
	}
}
botonUp = document.getElementById("boton");

window.onscroll = function(){
	var scroll = document.documentElement.scrollTop;
	if(scroll > 350){
		botonUp.style.transform = "scale(1)";
	}else if(scroll < 350){
		botonUp.style.transform = "scale(0)";
	}
	
}
if(screen.width < 1030){
	document.write('<link rel="stylesheet" href="Responisve/1030/Index.css"></link>');
}
else if(screen.width < 1280){
	document.write('<link rel="stylesheet" href=""></link>');
}
else if(screen.width < 1380){
	document.write('<link rel="stylesheet" href="Responisve/1380/Index.css"></link>'); 
}
else if(screen.width < 1410){
	document.write('<link rel="stylesheet" href="Responisve/1400/Index.css"></link>'); 
}
else if(screen.width < 1450){
	document.write('<link rel="stylesheet" href="Responisve/1440/Index.css"></link>');
}
else if(screen.width < 1610){
	document.write('<link rel="stylesheet" href="Responisve/1600/Index.css"></link>');
}
else if(screen.width < 1690){
	document.write('<link rel="stylesheet" href="Responisve/1680/Index.css"></link>');
}
