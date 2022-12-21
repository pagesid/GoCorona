
// Burger
document.addEventListener("click", (function (e) {
	e.target.closest(".icon-menu") && document.documentElement.classList.toggle("menu-open")
})),
	$(".header__menu .menu__item").on("click", (function (e) {
		e.preventDefault(),
			$("html").removeClass("menu-open")
	})),




	// Scroll
	$("[data-scroll]").on("click", (function (e) {
		e.preventDefault();
		let t = $(this).data("scroll"),
			n = $(t).offset().top;
		$("html, body").animate({
			scrollTop: n
		}, 900)
	}))