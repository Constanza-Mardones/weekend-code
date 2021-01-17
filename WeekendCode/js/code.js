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
    iman();
}

function deseleccion(evt){
    if(seleccionelemento !=0){
        console.log("posicion X: "+seleccionelemento.getAttribute("x"));
        console.log("posicion Y: "+seleccionelemento.getAttribute("y"));
        seleccionelemento.removeAttribute("onmousemove"); 
        seleccionelemento.removeAttribute("onmouseout"); 
        seleccionelemento.removeAttribute("onmouseup"); 
        seleccionelemento = 0;
    }
    testing();
}
var recuadro = document.getElementById('recuadro');

function reordenar(evt){
    var herencia = evt.target.parentNode;
    var clonar = herencia.cloneNode(true);
    var id= herencia.getAttribute("id");
    console.log("Imagen id: "+id)
    recuadro.removeChild(document.getElementById(id));
    recuadro.appendChild(clonar);
    return recuadro.lastChild.firstChild;
}

var origX = [222,309,425,569,685,222,308,423,539,655,222,308,424,569,655];
var origY = [73,74,74,74,74,162,191,160,191,191,307,307,276,307,307];

function iman(){
    for (var i=0; i<imagenes.length; i++){
        if(Math.abs(xfinal-origX[i])<15 && Math.abs(yfinal-origY[i])<15){
            seleccionelemento.setAttribute("x",origX[i]);
            seleccionelemento.setAttribute("y",origY[i]);
        }
    }
}

function testing(){
    var listas = 0;
    var padres = document.getElementsByClassName('herencia');
    for (var i=0; i<imagenes.length; i++){
        var posX = parseFloat(padres[i].firstChild.getAttribute("x"));
        var posY = parseFloat(padres[i].firstChild.getAttribute("y"));
        ide = padres[i].getAttribute("id");
        if(origX[ide] == posX && origY[ide] == posY){
            listas += 1;
        }
    }
    if (listas === 15){
        alert("Felicidades haz completado el Puzzle");
    }
}