//JavaScript Functionality Part 1 Goes Here. Comment it all out once finished.
//var section = document.querySelector('section.hide');
//var button = document.querySelector('button');
//
//function slideToggle(){
//	section.classList.toggle('hide');
//};
//
//button.addEventListener('click', slideToggle);

//jQuery functionality will go here. Make sure to include the document.ready function.
$(document).ready(function(){
	$('button').click(function(){
		$('section').slideToggle();
	})
});