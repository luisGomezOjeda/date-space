import {displayNav} from "./nav.js"
import {getHTML} from "./getHTML.js"
import {getData} from "./getData.js"

const d = document;
d.addEventListener("DOMContentLoaded",(e)=>{
 displayNav(".nav-logo",".hidden",".nav-hamborguer",".nav-links",".nav-link");
 getHTML("./assets/html/main.html","./assets/css/main.css"); 
});



d.addEventListener("click",(e)=>{
  // home //
  if(e.target.matches(".nav-ul-li a"))e.preventDefault();
  if(e.target.textContent === "00 Home"){
    getHTML(e.target.href,e.target.dataset.css,undefined);
  }
  // destination //
  if(e.target.textContent.includes("01")){
  getHTML(e.target.href,e.target.dataset.css,undefined,{
    urlContent:"./assets/html/destination/destination--moon-img.html",
    mainContent:".ilustration-img",
  },{
    urlContent:"./assets/html/destination/destination--moon-description.html",
    mainContent:".info-article",
  },{
    urlContent:"./assets/html/destination/destination--moon-info.html",
    mainContent:".info-date",
  });
  getData(getHTML,".info-sections input + label",".info-sections input",".info-date",".ilustration-img",".info-article");
  }
  // crew //
  if(e.target.textContent.includes("02")){
  getHTML(e.target.href,e.target.dataset.css,undefined,{
    urlContent:"./assets/html/crew/crew-Engineer-info.html",
    mainContent:".main-info",
  },{
    urlContent:"./assets/html/crew/crew-Engineer-img.html",
    mainContent:".main-img",
  });
  getData(getHTML,".main-sections input + label",".main-sections input",".main-info",".main-img");
  }
  // tecnology //
  if(e.target.textContent.includes("03")){
    getHTML(e.target.href,e.target.dataset.css,undefined,{
      urlContent:"./assets/html/tecnology/launch_vehicle--info.html",
      mainContent:".info-date",
    },{
      urlContent:"./assets/html/tecnology/launch-vehicle--img.html",
      mainContent:".main-img",
    });
    getData(getHTML,".info-sections input + label",".info-sections input",".info-date",".main-img");
  }
});

