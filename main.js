setInterval(() => {
	const bufferingDots = document.querySelectorAll('.buffering-dot');
	bufferingDots.forEach((dot, index) => {
		dot.style.animationDelay = `${index * 0.2}s`;
	});
}, 2000);

setInterval(() => {
	const plane = document.querySelector('.plane');
	plane.style.top = `${Math.random() * 100}%`;
}, 500);
