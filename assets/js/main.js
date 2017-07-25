$(document).ready(function(){
	$(".dropdown-button").dropdown();
	$(".button-collapse").sideNav();
		$('.dropdown-button').dropdown({
        inDuration: 300,
        outDuration: 225,
        constrainWidth: false, // Does not change width of dropdown to that of the activator
        hover: true, // Activate on hover
        gutter: 0, // Spacing from edge
        belowOrigin: true, // Displays dropdown below the button
        alignment: 'left', // Displays dropdown with edge aligned to the left of button
        stopPropagation: false // Stops event propagation
    });

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