const persons = document.querySelectorAll(".main-sections div input");
const main_info = document.querySelector(".main-info");
const main_img = document.querySelector(".main-img");

persons[3].checked = true;
main_info.innerHTML =`<h3>Flight Engineer</h3><h2>Anousheh Ansari</h2><p>Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.</p>`;
main_img.innerHTML = `<img src="./assets/crew/image-anousheh-ansari.webp" alt="Anousheh Ansari">`;


persons[0].addEventListener("click",()=>{
 if(persons[0].checked){
  persons[1].checked = false;
  persons[2].checked = false;
  persons[3].checked = false;
 }

 main_info.innerHTML =`<h3>Commander</h3><h2>Douglas Hurley</h2><p>Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.</p>`;
 main_img.innerHTML = `<img src="./assets/crew/image-douglas-hurley.webp" alt="Douglas Hurley">`;
})

persons[1].addEventListener("click",()=>{
 if(persons[1].checked){
  persons[0].checked = false;
  persons[2].checked = false;
  persons[3].checked = false;

  main_info.innerHTML =`<h3>Mission Specialist</h3><h2>Mark Shuttleworth</h2><p>Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.</p>`;
  main_img.innerHTML = `<img src="./assets/crew/image-mark-shuttleworth.webp" alt="Mark Shuttleworth">`;
 }
})

persons[2].addEventListener("click",()=>{
 if(persons[2].checked){
  persons[0].checked = false;
  persons[1].checked = false;
  persons[3].checked = false;
  
  main_info.innerHTML =`<h3>Pilot</h3><h2>Victor Glover</h2><p>Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.</p>`;
  main_img.innerHTML = `<img src="./assets/crew/image-victor-glover.webp" alt="Anousheh Ansari">`;
 }
})


persons[3].addEventListener("click",()=>{
 if(persons[3].checked){
  persons[0].checked = false;
  persons[1].checked = false;
  persons[2].checked = false;

  main_info.innerHTML =`<h3>Flight Engineer</h3><h2>Anousheh Ansari</h2><p>Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.</p>`;
  main_img.innerHTML = `<img src="./assets/crew/image-anousheh-ansari.webp" alt="Anousheh Ansari">`;
 }
})