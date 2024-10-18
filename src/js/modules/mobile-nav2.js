function mobileNav2() {
	const navBtn = document.querySelector('.mobile-nav-btn2');
	const nav = document.querySelector('.mobile-nav2');
	const menuIcon = document.querySelector('.nav-icon2');

	
	navBtn.onclick = function () {
		nav.classList.toggle('mobile-nav--open');
		menuIcon.classList.toggle('nav-icon--active');
		// document.body.classList.toggle('no-scroll');
	};
}

export default mobileNav2;

// to do остановить прокрутку скрола 