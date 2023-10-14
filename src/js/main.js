const year = new Date().getFullYear();
const date = `&copy; Copyright ${year} Lgiń | Baza obozowa Hufca ZHP Powiatu Trzebnickiego w Lginiu. `;
const burgerBtn = document.querySelector(".burger");
const barsIco = document.querySelector(".fa-bars");
const xIco = document.querySelector(".fa-times");
const navUl = document.querySelector("nav ul");
const ul = document.querySelector("ul");

const one = document.querySelector(".first");
const two = document.querySelector(".second");
const three = document.querySelector(".third");
const four = document.querySelector(".fourth");
const five = document.querySelector(".fiveth");
const six = document.querySelector(".sixth");

const handleNav = () => {
	navUl.classList.toggle("active");
	barsIco.classList.toggle("hide");
	xIco.classList.toggle("hide");
};

const closeMenu = () => {
	ul.classList.remove("active");
	xIco.classList.toggle("hide");
	barsIco.classList.toggle("hide");
};

document.getElementsByTagName("footer")[0].innerHTML = date;
burgerBtn.addEventListener("click", handleNav);
one.addEventListener("click", closeMenu);
two.addEventListener("click", closeMenu);
three.addEventListener("click", closeMenu);
four.addEventListener("click", closeMenu);
five.addEventListener("click", closeMenu);
six.addEventListener("click", closeMenu);