function revealAboutUs()
{
	document.getElementById("AboutUs").style.display = 'block';
	document.getElementById("newsfeed").style.display = 'none';
	document.getElementById("contact").style.display = 'none';
}

function revealContactUs()
{
	document.getElementById("AboutUs").style.display = 'none';
	document.getElementById("newsfeed").style.display = 'none';
	document.getElementById("contact").style.display = 'block';
}

function revealHome() 
{
	document.getElementById("AboutUs").style.display = 'none';
	document.getElementById("newsfeed").style.display = 'block';
	document.getElementById("contact").style.display = 'none';
}
