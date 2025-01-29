var indexcount = 0;
function dragElement(elmnt) {

  if (this.window < 500){
    elmnt.style.top = "0px";
    elmnt.style.left = "0px";
  }
  indexcount++;
  document.getElementById(elmnt.id).style.zIndex = indexcount;
  

  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // mus pos på start:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    //flytta när den rör på sig
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    //mus pos
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    //nypos
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    //sluta flytta
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

function closewindow(elem){
  document.getElementById(elem).style.display = "none";
}

function openwindow(elem){
  document.getElementById(elem).style.display = "block";
}

window.addEventListener("resize", function(){

  if (window.innerWidth < 500){
    
  }
  else{

  }
});