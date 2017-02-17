
$(window).on('load resize', windowSize);

	function windowSize(){
		if ($(window).width() <= '1150'){
				$('.menu').addClass("mobile");
		} else {
				$('.menu').removeClass("mobile");
		}
	}

$(window).ready(function(){

	$(".toggle-menu").click(function(){
		$(this).toggleClass("active");
		$(".menu.mobile").slideToggle();
	});
	$(".menu li").click(function(){
		$('.menu.mobile').slideToggle();
		$(".toggle-menu").toggleClass("active");
	});



	$(".mark").click(function(){
		$(this).parents(".article-item").addClass("is-delete");
		$(this).siblings("mark-undo").toggle();
	});
	$(".mark-undo").click(function(){
		$(this).parents(".article-item").removeClass("is-delete");
	});

});