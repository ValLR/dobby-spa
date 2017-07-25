$(document).ready(function(){
	$(".dropdown-button").dropdown();
	$(".button-collapse").sideNav();
	$("#c1").on("click", function(e){
		if((($("#carrousel").attr("class"))=="slide2")){
			$("#carrousel").removeClass("slide2").addClass("slide");
		}
		else if(($("#carrousel").attr("class"))=="slide3"){
			$("#carrousel").removeClass("slide3").addClass("slide");
		}
		else{
			alert("mas na")
		}
	});
	$("#c2").on("click", function(e){
		if(($("#carrousel").attr("class"))=="slide"){
			$("#carrousel").removeClass("slide").addClass("slide2");
		}
		else if(($("#carrousel").attr("class"))=="slide3"){
			$("#carrousel").removeClass("slide3").addClass("slide2");
		}
		else{
			alert("nanana")
		}
	});
	$("#c3").on("click", function(e){
		if(($("#carrousel").attr("class"))=="slide"){
			$("#carrousel").removeClass("slide").addClass("slide3");
			e.preventDefault();
		}
		else if(($("#carrousel").attr("class"))=="slide2"){
			$("#carrousel").removeClass("slide2").addClass("slide3");
			e.preventDefault();
		}
	});
})