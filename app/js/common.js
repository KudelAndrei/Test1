$(window).resize(function(){

});

$(window).ready(function(){

	$(".toggle-menu").click(function(){
		$(this).toggleClass("active");
		$(".menu").slideToggle().toggleClass("mobile");
	});



	$(".mark").click(function(){
		$(this).parents(".article-item").addClass("is-delete");
		$(this).siblings("mark-undo").toggle();
	});
	$(".mark-undo").click(function(){
		$(this).parents(".article-item").removeClass("is-delete");
	});

});