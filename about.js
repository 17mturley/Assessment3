console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('Form Submitted');
}
const catImage = document.querySelector('img');

function giveCompliment(){
	alert("You're so good at being you");
}

catImage.addEventListener('mouseover', giveCompliment);

let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);