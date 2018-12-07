wow = new WOW({
    boxClass: 'wow', // default
    animateClass: 'animated', // default
    offset: 0, // default
    mobile: true, // default
    live: true // default
})
wow.init();

function revealAboutUs()
{
	document.getElementById("AboutUs").style.display = 'block';
	document.getElementById("newsfeed").style.display = 'none';
	$('AboutUs').addClass('animated fadeInUp slower');
}

function revealHome() {
	document.getElementById("AboutUs").style.display = 'none';
	document.getElementById("newsfeed").style.display = 'block';
	// body...
}