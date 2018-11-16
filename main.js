//JavaScript Functionalit Part 1 Goes Here. Comment it all out once finsihed.
var section = document.querySelector('section.hide');
var button = document.querySelector('button');

function slideToggle(){
	section.classList.toggle('hide');
};

button.addEventListener('click', slideToggle);

//jQuery functionality will go here. Make sure to iclude the document.ready function.
