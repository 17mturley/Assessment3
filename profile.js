const favColor = document.querySelector('#color');
const favPlace = document.querySelector('#place');
const favRitual = document.querySelector('#ritual');

function colorButton(){
    alert("ORANGE!!")
}

favColor.addEventListener('click', colorButton);

function placeButton(){
    alert("Lake side with my friends.")
}

favPlace.addEventListener('click', placeButton)

function ritualButton(){
    alert("Opening the blinds each morning for my plants to get sunlight.")
}

favRitual.addEventListener('click', ritualButton)