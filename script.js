// Created by Mark Spivak, Nidhi Parekh, Jingmin Jin, and Jawann Cort

var altorfer = 'Kenneth%20J.%20Altorfer%20Academic%20hoboken';
var burchard = 'burchard%20memorial%20stevens%20hoboken';
var babbio = 'babbio%20center%20hoboken';
var carnegie = 'carnegie%20lab%20hoboken';
var cph = 'castle%20point%20hall%20hoboken';
var davis = 'davis%20hall%20hoboken';
var eas = 'edwin%20a%20stevens%20hoboken';
var gate = 'gateway%20academic%20center%20hoboken';
var howe = 'howe%20building%20stevens%20hoboken';
var humps = 'humphreys%20hall%20hoboken';
var jonas = 'jonas%20hall%20hoboken';
var mclean = 'mclean%20hoboken';
var mpk = 'morton%20pierce%20hoboken';
var north = 'north%20building%20stevens%20hoboken';
var palmer = 'palmer%20hall%20hoboken';
var schaefer = 'schaefer%20athletic%20center%hoboken';
var bennys = 'bennys%20tudinos%20hoboken';
var seveneleven = '7%20Eleven%20hoboken';
var cvs = 'CVS%20Pharmacy%20hoboken';
var starbucks = 'starbucks%20hoboken';
var chipotle = 'chipotle%20hoboken';
var insomnia = 'insomnia%20cookies%20hoboken';
var pitapit = 'pita%20pit%20hoboken';
var shoprite = 'shoprite%20hoboken';
var kungfutea = 'Kung%20Fu%20hoboken';
var walgreens = 'Walgreens%20hoboken';
var karmakafe = 'Karma%20Kafe%20hoboken';
var simplychai = 'Simply%20Chai%20hoboken';

function showDirections(loc) {
	document.getElementById('gmap_canvas').src =
		'https://maps.google.com/maps?q=' + loc + '&t=&z=13&ie=UTF8&iwloc=&output=embed';
}

function submitForm() {
	event.preventDefault();
	const name = document.getElementById('name').value;
	const rate = document.querySelector('input[name="rating"]:checked').value;
	const comment = document.getElementById('comments').value;
	document.getElementById('h3').style.display = 'none';
	document.getElementById('innerForm').style.display = 'none';
	let thankDiv = document.createElement('div');
	let thankH4 = document.createElement('h4');
	thankH4.appendChild(document.createTextNode('Thanks for submitting your feedback!'));
	let thankP = document.createElement('p');
	thankP.appendChild(document.createTextNode("Here's what you submitted:"));
	let br = document.createElement('br');
	thankP.appendChild(br);
	thankP.appendChild(document.createTextNode('Name:'));
	thankP.appendChild(document.createTextNode(name));
	thankP.appendChild(br);
	thankP.appendChild(document.createTextNode('Rating:'));
	thankP.appendChild(document.createTextNode(rate + '/5'));
	thankP.appendChild(br);
	thankP.appendChild(document.createTextNode('Comments:'));
	thankP.appendChild(document.createTextNode(comment));
	thankDiv.appendChild(thankH4);
	thankDiv.appendChild(thankP);
	document.getElementById('form').appendChild(thankDiv);
}

window.onload = () => {
	document.getElementById('form').addEventListener('mouseover', function() {
		document.getElementById('form').style.color = '#f98e2b';
	});
	document.getElementById('form').addEventListener('mouseout', function() {
		document.getElementById('form').style.color = 'black';
	});
};
