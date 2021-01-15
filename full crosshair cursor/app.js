
var cV = document.createElement('div');
var cH = document.createElement('div');

cH.id = "full-crosshair-cursor-h";
cV.id = "full-crosshair-cursor-v";

document.body.append(cV);
document.body.append(cH);

var handler = function (e) {
	cH.style.top = e.clientY + 'px';
    cV.style.left = e.clientX + 'px';
    e.stopPropagation();
};

window.addEventListener("mousemove", handler);
window.addEventListener("touchmove", handler);   
