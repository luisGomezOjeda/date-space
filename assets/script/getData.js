export function getData(fun,listLabels,listCheckbox,mainInfo,mainImg,mainDescription=undefined,){
 document.addEventListener("click",(e)=>{
  if(e.target.matches(listLabels)){
   let $inputs = Array.from(document.querySelectorAll(listCheckbox));
   $inputs.forEach(input=>{
     if(input.checked)$inputs.filter(el=>el === input).map(el=> el.checked = false);
   });
   fun(e.target.dataset.info,undefined,mainInfo);
   fun(e.target.dataset.img,undefined,mainImg);
   if(mainDescription!== undefined)fun(e.target.dataset.description,undefined,mainDescription);
  }
 });
}

