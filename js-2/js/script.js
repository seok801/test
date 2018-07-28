let chooseBtn = document.getElementById('choose'),
	receiveBtn = document.getElementById('receive'),
	heading = document.getElementsByTagName('h2')[0],
	nameInput = document.getElementsByClassName('contactform_name')[0],
	phoneInput = document.querySelector('.contactform_phone'),
	mailInput = document.querySelectorAll('.contactform_mail')[0],
	modal = document.querySelector('.modal'),
	close = document.querySelector('.close'),
	text = document.getElementsByName('message')[0];

function hover() {
	heading.textContent = "Действительно все!";
}
function out() {
	heading.textContent = "Все включено";
}

heading.addEventListener("click", hover);
heading.addEventListener("dblclick", function(){ //Напиши все в одном событии addEventListener, Можешь, например, добавить вторую функцию как и первую
	heading.textContent = "Все включено";
});

receiveBtn.addEventListener('click', function(){
	modal.style.display = "block";
});

close.addEventListener('click', function(){
	modal.style.display = "none";
});

nameInput.addEventListener("input", function(){
	text.value = "Меня зовут " + nameInput.value + ". И я хочу спросить:";

	if (nameInput.value == "") {
		text.value = "";
	}
});