const info_section = document.querySelectorAll(".info-sections input");

const info_date = document.querySelector(".info-date");
const main_img = document.querySelector(".main-img");

info_section[2].checked = true;

info_date.innerHTML = `<h3>The terminology...</h3><h2>Launch vehicle</h2><p>A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!</p>`
main_img.innerHTML = `<img src="./assets/technology/image-launch-vehicle-portrait.jpg" alt="">`


info_section[0].addEventListener("click",()=>{
 if(info_section[0].checked){
  info_section[1].checked = false;
  info_section[2].checked = false;
 
  
 info_date.innerHTML = `<h3>The terminology...</h3><h2>Spaceport</h2><p>A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.</p>`
 main_img.innerHTML = `<img src="./assets/technology/image-spaceport-portrait.jpg" alt="">` 
 }
});

info_section[1].addEventListener("click",()=>{
 if(info_section[1].checked){
  info_section[0].checked = false;
  info_section[2].checked = false;
 
  info_date.innerHTML = `<h3>The terminology...</h3><h2>Space capsule</h2><p>A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.</p>`
  main_img.innerHTML = `<img src="./assets/technology/image-space-capsule-portrait.jpg" alt="">` 
 }
});

info_section[2].addEventListener("click",()=>{
 if(info_section[2].checked){
  info_section[0].checked = false;
  info_section[1].checked = false;
  
  info_date.innerHTML = `<h3>The terminology...</h3><h2>Launch vehicle</h2><p>A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!</p>`
  main_img.innerHTML = `<img src="./assets/technology/image-launch-vehicle-portrait.jpg" alt="">`
 }
});