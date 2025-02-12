const windowholder = document.getElementById("windowholder");
let windows = [];


let windowWithMax = 500;
let windowWithMin = 300;
let windowPosMaxY = 500;
let windowPosMinY = 0;
let windowPosMaxX = 80;
let windowPosMinX = 0;

var viewportWidth = window.innerWidth;
var viewportHeight = window.innerHeight;

fetch("./windows.json")
  .then((res) => res.json())
  .then((data) => {
    windows = [...data];
    genereraWindows();
  });

function genereraWindows() { //placerar koten i html filen i den ordningen som de är i i listan
  for (let windowsWindow of windows) {
    const windowElement = document.createElement("div");
    windowElement.setAttribute("data-name", windowsWindow.name);
    if (viewportWidth > 900){
      windowWidth = Math.random()*(windowWithMax - windowWithMin) + windowWithMin;
      windowX = Math.random()*(windowPosMaxX - windowPosMinX) + windowPosMinX;
      windowY = Math.random()*(windowPosMaxY - windowPosMinY) + windowPosMinY;
    }
    else
    {
      windowWidth = viewportWidth-100;
      windowX = 5;
      windowY = 50;
    }
    windowElement.innerHTML = 

    
      `<div id="${windowsWindow.id}" style="width: ${windowWidth}px; right: ${windowX}vw; top: ${windowY}px; display: none;" class="window">
         <div class="windowbar" onclick ="dragElement(document.getElementById('${windowsWindow.id}'));">
                <p style="user-select: none;">${windowsWindow.name}</p>
                <div>
                    <button onclick="closewindow('${windowsWindow.id}')" style="background: linear-gradient(144deg, rgba(169,176,244,1) 0%, rgba(37,98,221,1) 70%);"><strong><svg xmlns="http://www.w3.org/2000/svg" height="15px" viewBox="20 -1250 960 960" width="15px" fill="#ffffff"><path d="M200-440v-80h560v80H200Z"/></svg></strong></button>
                    <button onclick="closewindow('${windowsWindow.id}')" style="background: linear-gradient(144deg, rgba(169,176,244,1) 0%, rgba(37,98,221,1) 70%);"><strong><svg xmlns="http://www.w3.org/2000/svg" height="15px" viewBox="100 -950 800 800" width="15px" fill="#ffffff"><path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm0-80h640v-400H160v400Z"/></svg></strong></button>
                    <button onclick="closewindow('${windowsWindow.id}')" style="background: linear-gradient(144deg, rgba(244,169,169,1) 0%, rgba(255,0,0,1) 100%);"><strong><svg xmlns="http://www.w3.org/2000/svg" height="15px" viewBox="170 -860 650 650" width="15px" fill="#ffffff"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg></strong></button>
                </div>
            </div>
            <div class="windowcontent" style="display: block;">
                <h1 style="margin-bottom: 0px;" id="">${windowsWindow.name}</h1>
                
                <div style="margin: 20px;"><p style="color: black;">${windowsWindow.info}</p>
                </div>
                    <img src="${windowsWindow.image}" width="80%" alt="">
            </div>
      </div>`;
      windowholder.appendChild(windowElement);
  }
}

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

});