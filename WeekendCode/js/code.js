var imagenes = document.getElementsByClassName('pieza');

var ancho = [118,147,176,147,117,117,147,147,147,147,118,147,177,117,147];
var alto = [118,147,117,147,147,176,147,147,147,147,118,117,147,117,117];

for(var i=0; i<imagenes.length; i++){
    imagenes[i].setAttribute("width", ancho[i]);
    imagenes[i].setAttribute("height", alto[i]);
    imagenes[i].setAttribute("x", Math.floor((Math.random() *20) +1));
    imagenes[i].setAttribute("y", Math.floor((Math.random() *350) +1));
}