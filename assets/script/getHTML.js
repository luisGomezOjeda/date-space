export async function getHTML(url,cssStyle=undefined,main=undefined,loadContent=undefined,loadContent2=undefined,loadContent3=undefined){
 try{
  let res = await fetch(url),
  html = await res.text();
  
  (main !== undefined) ? main = document.querySelector(main) : main = document.querySelector("main");
  console.log(url);
  main.innerHTML = html;
 }catch(err){
  main.innerHTML = `${err.status} : ${err.statusText || "ocurrio un error"}`;
 }

 if(cssStyle !== undefined) document.head.querySelector("link[rel=stylesheet]").href = cssStyle;

 if(loadContent !== undefined){
 const {urlContent,mainContent} = loadContent;
 getHTML(urlContent,undefined,mainContent);
 if(loadContent2 !== undefined){
   const {urlContent,mainContent} = loadContent2;
   getHTML(urlContent,undefined,mainContent);
   if(loadContent3 !== undefined){
    const {urlContent,mainContent} = loadContent3;
    getHTML(urlContent,undefined,mainContent);
   }
  }
 }
}