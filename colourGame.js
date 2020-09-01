var display = document.querySelector("#message");
var numSqr = 6;
var colors = generateRandomColors(6);
var sqrs = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.querySelector("#colorDisplay");
var resetButton = document.querySelector("#reset");
var h1 = document.querySelector("h1");
var easy = document.querySelector("#easy");
var hard = document.querySelector("#hard");

easy.addEventListener("click", function(){
	colors = generateRandomColors(3);
	easy.classList.add("selected");
	hard.classList.remove("selected");
	for (var i=0; i<sqrs.length; i++)
	{
		if (colors[i])
		{
			sqrs[i].style.background = colors[i];
		}
		else
		{
			sqrs[i].style.display = "none";
		}
	}
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	numSqr = 3;
});

hard.addEventListener("click", function(){
	colors = generateRandomColors(6);
	easy.classList.remove("selected");
	hard.classList.add("selected");
	for (var i=0; i<sqrs.length; i++)
	{
		sqrs[i].style.background = colors[i];
		sqrs[i].style.display = "block";
	}
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	numSqr = 6;
});

resetButton.addEventListener("click", function()
{
	colors = generateRandomColors(numSqr);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for (var i=0; i<sqrs.length; i++)
	{
		sqrs[i].style.background = colors[i];
		if(numSqr > 3)
		{
			sqrs[i].style.display = "block";	
		}
	}
	display.textContent = "";
	resetButton.textContent = "New colors";
	h1.style.backgroundColor = "#13274F";
});

colorDisplay.textContent = pickedColor;
for (var i=0; i<sqrs.length; i++)
{
	sqrs[i].style.background = colors[i];
	sqrs[i].addEventListener("click", function()
	{
		var selectedColor = this.style.background;
		if (selectedColor === pickedColor)
		{
			for (var i=0; i<sqrs.length; i++)
			{
				sqrs[i].style.background = pickedColor;
			}
			display.textContent = "Correct!!!";
			h1.style.backgroundColor = pickedColor;
			resetButton.textContent = "Play Again??";
		}
		else
		{
			this.style.backgroundColor = "black";
			display.textContent = "Try Again!!!";
		}
	});
}

function pickColor(){
	var num = Math.floor(Math.random() * colors.length);
	return colors[num];
}

function generateRandomColors(x)
{
	var arr = [];
	for(var i=0; i<x; i++)
	{
		var r = Math.floor(Math.random() * 256);
		var g = Math.floor(Math.random() * 256);
		var b = Math.floor(Math.random() * 256);
		var col = "rgb(" + r + ", " + g + ", "+ b + ")";
		arr.push(col);
	}
	return arr;
}