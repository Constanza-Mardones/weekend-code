var imagenes = document.getElementsByClassName('pieza');

var ancho = [118,147,176,147,117,117,147,147,147,147,118,147,177,117,147];
var alto = [118,147,117,147,147,176,147,147,147,147,118,117,147,117,117];

for(var i=0; i<imagenes.length; i++) {
    imagenes[i].setAttribute("width", ancho[i]);
    imagenes[i].setAttribute("height", alto[i]);
    imagenes[i].setAttribute("x", Math.floor((Math.random() * 10) +1));
    imagenes[i].setAttribute("y", Math.floor((Math.random() * 300) +1));
    imagenes[i].setAttribute("onmousedown", "seleccion(evt)");
}

var seleccionelemento = 0;
var xinicial = 0;
var yinicial = 0;
var xfinal = 0;
var yfinal = 0;

function seleccion(evt) {
    seleccionelemento = reordenar(evt);
    xinicial = evt.clientX;
    yinicial = evt.clientY;
    xfinal= parseFloat(seleccionelemento.getAttribute("x"));
    yfinal= parseFloat(seleccionelemento.getAttribute("y"));
    seleccionelemento.setAttribute("onmousemove", "mover(evt)");
}
function mover(evt){
    var movx = evt.clientX - xinicial;
    var movy = evt.clientY - yinicial;
    xfinal = xfinal + movx;
    yfinal = yfinal + movy;
    seleccionelemento.setAttribute("x",xfinal);
    seleccionelemento.setAttribute("y",yfinal);
    xinicial = evt.clientX;
    yinicial = evt.clientY;
    seleccionelemento.setAttribute("onmouseout","deseleccion(evt)");
    seleccionelemento.setAttribute("onmouseup","deseleccion(evt)");
}

function deseleccion(evt){
    if(seleccionelemento !=0){
        seleccionelemento.removeAttribute("onmousemove"); 
        seleccionelemento.removeAttribute("onmouseout"); 
        seleccionelemento.removeAttribute("onmouseup"); 
        seleccionelemento = 0;
    }
}
var recuadro = document.getElementById('recuadro');

function reordenar(evt){
var herencia = evt.target.parentNode;
var clonar = herencia.cloneNode(true);
var id= herencia.getAttribute("id");
recuadro.removeChild(document.getElementById(id));
recuadro.appendChild(clonar);
return recuadro.lastChild.firstChild;
}