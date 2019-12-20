var moveArea = document.getElementById("container");
var moveRect = document.getElementById("greenItem");
var staticRect = document.getElementById("yellowItem");
var maxTop = moveArea.offsetHeight - moveRect.offsetHeight;
var maxLeft = moveArea.offsetWidth - moveRect.offsetWidth;

var dragging;
var tTop;
var tLeft;

document.addEventListener("mousedown", e => {
  if (e.target === moveRect) {
    dragging = true;

    tLeft = e.pageX - moveArea.offsetLeft - moveRect.offsetLeft;
    tTop = e.pageY - moveArea.offsetTop - moveRect.offsetTop;
  }
});

document.addEventListener("mouseup", () => {
  dragging = false;
});

document.addEventListener("mousemove", e => {
  if (dragging) {
    currentLeft = e.pageX - tLeft;
    currentTop = e.pageY - tTop;

    movedX = Math.min(Math.max(0, currentLeft), maxLeft);
    movedY = Math.min(Math.max(0, currentTop), maxTop);
    moveRect.style.left = movedX + "px";
    moveRect.style.top = movedY + "px";

    if (movedX+moveRect.offsetWidth >= staticRect.offsetLeft &&
      movedX <= staticRect.offsetLeft + staticRect.offsetWidth &&
      movedY <= staticRect.offsetTop + staticRect.offsetHeight &&
      movedY + moveRect.offsetHeight >= staticRect.offsetTop){
        staticRect.style.backgroundColor ="#1c43f0";
      } else {
        staticRect.style.backgroundColor = "#f0f13b";
      }
  }
});