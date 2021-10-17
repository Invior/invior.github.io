$(document).ready(function(){

	var modal = function(){
		$('#exampleModal').removeAttr('aria-hidden');
		$('#exampleModal').attr("aria-modal", "true");
		$('#exampleModal').attr('role', 'dialog');
   		$('#exampleModal').addClass('show');
   		$('#exampleModal').css('display', "block");
	};

	setTimeout(modal, 30000);

	$('.btn').click(function(){
		$('#exampleModal').removeAttr('aria-modal');
		$('#exampleModal').attr('aria-hidden', 'true');
		$('#exampleModal').removeAttr('role');
		$('#exampleModal').removeClass('show');
		$('#exampleModal').css('display', 'none');
	});

	$('.btn-close').click(function(){
		$('#exampleModal').removeAttr('aria-modal');
		$('#exampleModal').attr('aria-hidden', 'true');
		$('#exampleModal').removeAttr('role');
		$('#exampleModal').removeClass('show');
		$('#exampleModal').css('display', 'none');
	});

});