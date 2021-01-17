// Creacion de Variables
var build = barajarCards();
var movimientos = 0;
var actualCard = null;
var listas = 0;

//Funcion que se encarga de Barajar las cartas
function barajarCards(){
    var cantidad = 12;
    var tipes = ["conejo","conejo","gato","gato","loro","loro","perro","perro","raton","raton","tortuga","tortuga"]
    tipes = tipes.sort(() => Math.random() - 0.5)
    var cards= [];
    for (var i = 0; i < cantidad; i++){
        cards.push({
            id: i + 1,
            tipe: tipes[i]
        });
    }
    return cards;
}
//Funcion que despliega las cartas barajadas al html
function displayCards(){
    var output = "";
    for (var i = 0; i < build.length; i++) {
		output += "<div class='card' id='"+build[i].id+"' style='background: url(\"images/carta.png\");background-repeat: no-repeat;background-position: center;background-size: cover;'></div>\n";
    }
    document.getElementById("game").innerHTML = output;
}
//Funcion que verifica el tipo de carta y la voltea mostrando el animal que contiene
function tipeCard(id){
    if (build[id-1].tipe === "conejo"){
        document.getElementById(id.toString()).style.backgroundImage = "url('images/conejo.png')";
        comparar(id,"conejo");
    } else if (build[id-1].tipe === "gato"){
        document.getElementById(id.toString()).style.backgroundImage = "url('images/gato.png')";
        comparar(id,"gato");
    } else if (build[id-1].tipe === "loro"){
        document.getElementById(id.toString()).style.backgroundImage = "url('images/loro.png')";
        comparar(id,"loro");
    } else if (build[id-1].tipe === "perro"){
        document.getElementById(id.toString()).style.backgroundImage = "url('images/perro.png')";
        comparar(id,"perro");
    } else if (build[id-1].tipe === "raton"){
        document.getElementById(id.toString()).style.backgroundImage = "url('images/raton.png')";
        comparar(id,"raton");
    } else if (build[id-1].tipe === "tortuga"){
        document.getElementById(id.toString()).style.backgroundImage = "url('images/tortuga.png')";
        comparar(id,"tortuga");
    }
}
// funcion que se encarga de imprimir el tiempo en pantalla
function displayIntentos(){
    document.getElementById("intentos").innerHTML = movimientos;
}
//Funcion encargada de comparar las cartas y ademas de verificar si has ganado
function comparar(code,bestia){
    if (actualCard === null){
        actualCard = {
            id: code,
            animal: bestia
        }
        return
    }
    if (actualCard.animal === bestia){
        listas += 1;
        movimientos += 1;
        actualCard = null;
        displayIntentos();
    } else {
        setTimeout(function () {
            document.getElementById(code.toString()).style.backgroundImage = 'url("images/carta.png")';
            document.getElementById(actualCard.id.toString()).style.backgroundImage = 'url("images/carta.png")';
            actualCard = null;
        }, 500);
        movimientos += 1;
        displayIntentos();
    }
    if (listas == 6){
        alert("Felicidades, Lo has Resuelto en "+movimientos.toString());
    }
}

//Creacion del mundo

displayCards();
displayIntentos();

//acciones de botones

document.getElementById('1').style.cursor = 'pointer';
document.getElementById('1').onclick = function() {
    if(document.getElementById('1').style.backgroundImage === 'url("images/carta.png")'){
        tipeCard(1);
    }
};
document.getElementById('2').style.cursor = 'pointer';
document.getElementById('2').onclick = function() {
    if(document.getElementById('2').style.backgroundImage === 'url("images/carta.png")'){
        tipeCard(2);
    }
};
document.getElementById('3').style.cursor = 'pointer';
document.getElementById('3').onclick = function() {
    if(document.getElementById('3').style.backgroundImage === 'url("images/carta.png")'){
        tipeCard(3);
    }
};
document.getElementById('4').style.cursor = 'pointer';
document.getElementById('4').onclick = function() {
    if(document.getElementById('4').style.backgroundImage === 'url("images/carta.png")'){
        tipeCard(4);
    }
};
document.getElementById('5').style.cursor = 'pointer';
document.getElementById('5').onclick = function() {
    if(document.getElementById('5').style.backgroundImage === 'url("images/carta.png")'){
        tipeCard(5);
    }
};
document.getElementById('6').style.cursor = 'pointer';
document.getElementById('6').onclick = function() {
    if(document.getElementById('6').style.backgroundImage === 'url("images/carta.png")'){
        tipeCard(6);
    }
};
document.getElementById('7').style.cursor = 'pointer';
document.getElementById('7').onclick = function() {
    if(document.getElementById('7').style.backgroundImage === 'url("images/carta.png")'){
        tipeCard(7);
    }
};
document.getElementById('8').style.cursor = 'pointer';
document.getElementById('8').onclick = function() {
    if(document.getElementById('8').style.backgroundImage === 'url("images/carta.png")'){
        tipeCard(8);
    }
};
document.getElementById('9').style.cursor = 'pointer';
document.getElementById('9').onclick = function() {
    if(document.getElementById('9').style.backgroundImage === 'url("images/carta.png")'){
        tipeCard(9);
    }
};
document.getElementById('10').style.cursor = 'pointer';
document.getElementById('10').onclick = function() {
    if(document.getElementById('10').style.backgroundImage === 'url("images/carta.png")'){
        tipeCard(10);
    }
};
document.getElementById('11').style.cursor = 'pointer';
document.getElementById('11').onclick = function() {
    if(document.getElementById('11').style.backgroundImage === 'url("images/carta.png")'){
        tipeCard(11);
    }
};
document.getElementById('12').style.cursor = 'pointer';
document.getElementById('12').onclick = function() {
    if(document.getElementById('12').style.backgroundImage === 'url("images/carta.png")'){
        tipeCard(12);
    }
};