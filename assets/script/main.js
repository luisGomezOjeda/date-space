const nav_links = document.querySelector(".nav-links");
const close_menu__mobile = document.querySelector(".close-menu--mobile");
const nav_hamborguer = document.querySelector(".nav-hamborguer");
const main__hidden = document.querySelector(".main");
const visible = document.querySelector(".hidden");
const nav_logo = document.querySelector(".nav-logo");
const body = document.querySelector("body");

nav_hamborguer.addEventListener("click",()=>{
 nav_links.classList.toggle("nav-link__visible");
 nav_hamborguer.classList.remove("nav-hamborguer");
 nav_hamborguer.classList.add("nav-hamborguer__hidden");
 main__hidden.classList.toggle("main__hidden");
 visible.classList.toggle("visible");
 nav_logo.classList.toggle("nav-logo--hidden");
 body.classList.toggle("body-hidden");
});

close_menu__mobile.addEventListener("click",()=>{
 nav_links.classList.toggle("nav-link__visible");
 nav_hamborguer.classList.remove("nav-hamborguer__hidden");
 nav_hamborguer.classList.add("nav-hamborguer");
 main__hidden.classList.toggle("main__hidden");
 visible.classList.toggle("visible");
 nav_logo.classList.toggle("nav-logo--hidden");
 body.classList.toggle("body-hidden");
});

