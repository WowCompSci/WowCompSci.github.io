document.querySelector('#menu').one.addEventListener("click",showFactA);
document.querySelector('#menu').two.addEventListener("click",showFactB);
document.querySelector('#menu').three.addEventListener("click",showFactC);
document.querySelector('#menu').four.addEventListener("click",showFactD);
document.querySelector('#menu').five.addEventListener("click",showFactE);

document.querySelector('#theme').coffee.addEventListener("click",toTheme1);
document.querySelector('#theme').dark.addEventListener("click",toTheme2);
document.querySelector('#theme').party.addEventListener("click",toTheme3);

function showFactA(){
	document.querySelector('section').innerHTML = "<br>In the UK, The Queen legally owns all unmarked swans.<br><br><br><img src='images/queen.jpg' alt='The queen looking happy in yellow.'>";
}

function showFactB(){
	document.querySelector('section').innerHTML = "<br>Snails can regenerate their eyes.<br><br><br><img src='images/snail.jpg' alt='A snail on a plant.'>";
}

function showFactC(){
	document.querySelector('section').innerHTML = "<br>Some golf balls are filled with honey.<br><br><br><img src='images/golfball.jpg' alt='A golf ball on a golf course.'>";
}

function showFactD(){
	document.querySelector('section').innerHTML = "<br>Astronauts can grow up to two inches taller while they’re in space.<br><br><br><img src='images/astronaut.jpg' alt='An astronaut in space.'>";
}

function showFactE(){
	document.querySelector('section').innerHTML = "<br>Strawberries are not berries, but bananas actually are!<br><br><br><img src='images/bananas.jpg' alt='Bananas with one banana sliced into pieces.'>";
}

function toTheme1(){
	document.querySelector('body').style.backgroundImage = "none";
	document.querySelector('body').style.backgroundColor = "#F3EBE2";
	document.querySelector('section').style.backgroundColor = "#DDB892";
	document.querySelector('section').style.color = "#462E20";
	document.querySelector('section').style.boxShadow = "none";
	document.querySelector('section').style.borderColor = "#9C6644";
	var inputs = document.getElementsByTagName ('input');
	for (var i = 0; i < inputs.length; i++){
		inputs[i].style.backgroundColor = "#DDB892";
		inputs[i].style.color = "#462E20";
		inputs[i].style.boxShadow = "none";
		inputs[i].style.borderColor = "#9C6644";
	}
}

function toTheme2(){
	document.querySelector('body').style.backgroundImage = "none";
	document.querySelector('body').style.backgroundColor = "#1F2933";
	document.querySelector('section').style.backgroundColor = "#52606D";
	document.querySelector('section').style.boxShadow = "0px 0px 5px 2px black";
	document.querySelector('section').style.borderColor = "#52606D";
	document.querySelector('section').style.color = "#E4E7EB";
	var inputs = document.getElementsByTagName ('input');
	for (var i = 0; i < inputs.length; i++){
		inputs[i].style.backgroundColor = "#616E7C";
		inputs[i].style.color = "#E4E7EB";
		inputs[i].style.boxShadow = "0px 0px 5px 2px black";
		inputs[i].style.borderColor = "#616E7C";
	}
}

function toTheme3(){
	document.querySelector('body').style.backgroundImage = "url('images/partybackground.gif')";
	document.querySelector('section').style.backgroundColor = "#E0D7FF";
	document.querySelector('section').style.boxShadow = "none";
	document.querySelector('section').style.borderColor = "black";
	document.querySelector('section').style.color = "black";
	var inputs = document.getElementsByTagName ('input');
	for (var i = 0; i < inputs.length; i++){
		inputs[i].style.color = "black";
		inputs[i].style.boxShadow = "none";
		inputs[i].style.borderColor = "black";
	}
	inputs["0"].style.backgroundColor = "#FF9AA2";
	inputs["1"].style.backgroundColor = "#FFDAC1";
	inputs["2"].style.backgroundColor = "#B5EAD7";
	inputs["3"].style.backgroundColor = "#FFB7B2";
	inputs["4"].style.backgroundColor = "#E2F0CB";
	inputs["5"].style.backgroundColor = "#B5EAD7";
	inputs["6"].style.backgroundColor = "#FFB7B2";
	inputs["7"].style.backgroundColor = "#E2F0CB";
}