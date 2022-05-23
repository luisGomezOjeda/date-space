const planets = document.querySelectorAll(".planet");
const info_article = document.querySelector(".info-article");
const ilustration_img = document.querySelector(".ilustration-img");
const info_date = document.querySelector(".info-date");

planets[1].checked = true;
if(mars.checked){
ilustration_img.innerHTML = `<img src="./assets/destination/image-mars.png">`; 
info_article.innerHTML = `<h2>Mars</h2><p>Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!</p>`;
info_date.innerHTML = `<div class="info-date--distance"><p>Avg. distance</p><h4>225 mil. km</h4></div><div class="info-date--travel"><p>Est. travel timeb</p><h4>9 months</h4></div>`
}

planets[1].addEventListener("click",()=>{
 if(planets[1].checked){
  planets[0].checked = false;
  planets[2].checked = false;
  planets[3].checked = false;
  
  ilustration_img.innerHTML = `<img src="./assets/destination/image-mars.png">`; 
info_article.innerHTML = `<h2>Mars</h2><p>Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!</p>`;
info_date.innerHTML = `<div class="info-date--distance"><p>Avg. distance</p><h4>225 mil. km</h4></div><div class="info-date--travel"><p>Est. travel time</p><h4>9 months</h4></div>`
 }
});
planets[0].addEventListener("click",()=>{
 if(planets[0].checked){
  planets[1].checked = false;
  planets[2].checked = false;
  planets[3].checked = false;
  
  ilustration_img.innerHTML = `<img src="./assets/destination/image-moon.png">`; 
  info_article.innerHTML = `<h2>Moon</h2><p>See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.</p>`;
  info_date.innerHTML = `<div class="info-date--distance"><p>Avg. distance</p><h4>384,400 km</h4></div><div class="info-date--travel"><p>Est. travel time</p><h4>3 days</h4></div>`
 }
});
planets[2].addEventListener("click",()=>{
 if(planets[2].checked){
  planets[0].checked = false;
  planets[1].checked = false;
  planets[3].checked = false;

  ilustration_img.innerHTML = `<img src="./assets/destination/image-europa.png">`; 
  info_article.innerHTML = `<h2>Europa</h2><p>The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.</p>`;
  info_date.innerHTML = `<div class="info-date--distance"><p>Avg. distance</p><h4>628 mil. km</h4></div><div class="info-date--travel"><p>Est. travel time</p><h4>3 years</h4></div>`
 }
});
planets[3].addEventListener("click",()=>{
 if(planets[3].checked){
  planets[0].checked = false;
  planets[1].checked = false;
  planets[2].checked = false;

  ilustration_img.innerHTML = `<img src="./assets/destination/image-titan.png">`; 
  info_article.innerHTML = `<h2>Titan</h2><p>The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.</p>`;
  info_date.innerHTML = `<div class="info-date--distance"><p>Avg. distance</p><h4>1.6 bil. km</h4></div><div class="info-date--travel"><p>Est. travel time</p><h4>7 years</h4></div>`
 }
});

