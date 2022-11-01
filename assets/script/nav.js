const d = document,
nav = (navLogo,visible,navLinks)=>{
 d.querySelector("main").classList.toggle("main__hidden");
   d.querySelector("body").classList.toggle("body-hidden");
   d.querySelector(navLinks).classList.toggle("nav-link__visible");
   d.querySelector(visible).classList.toggle("visible");
   d.querySelector(navLogo).classList.toggle("nav-logo--hidden");
}

export function displayNav(navLogo,visible,navHamborguer,navLinks,navLink){
 d.addEventListener("click",(e)=>{
  if(e.target.matches(navHamborguer)){
   nav(navLogo,visible,navLinks);
  }
  if(e.target.matches(navLink)){
   nav(navLogo,visible,navLinks);
   d.querySelector(".active").classList.remove("active");
   console.log(e.target.closest("li").classList.add("active"));
  }
 });
}