//definir largo y ancho del mapa del tesoro

const ANCHO = 400;
const ALTO = 400;

//DEFINIMOS UN TESORO RAMDON UTILIZANDO LOS METODOS YA DEFINIDOS EN ayudas.js
let tesoro = {
  x: getNumeroRandom(ANCHO),
  y: getNumeroRandom(ALTO)
};

//comprobar que se creo un tesoro aleatorio
//console.log('nuevo tesoro X:'+ tesoro.x +' Y:'+tesoro.y)

//Obtener el elemento mapa del HTML por el id y guardarlo en una variable 
//utilizamos el dom = document
let $mapa = document.getElementById('mapa');
var posicion = $mapa.getBoundingClientRect();


let $textopistas = document.querySelector('#pistas');
let clicks = 0;   //para llevar el conteo de los click 
var $tesoro = document.querySelector('#tesoro');


//ahora a la variable del mapa le agregamos un escuchador
//en la accion de click 
$mapa.addEventListener('click', function (evento) {
  clicks++;  //aumentamos los click 
  //usamos la funcion de la distancia enviandole el lugar donde damos click y el tesoro
  let distancia = getDistancia(evento, tesoro);
  //obtenemos la pista segun la distancia calculada  
  let distanciaPista = getPista(distancia);
  //integramos o agregamos el html esta pista 
  $textopistas.innerHTML = `<h1>${distanciaPista}</h1>`;
  //si la distancia es muy cercana enviamos una alerta de que gano 

  if (distancia < 20) {
    $tesoro.setAttribute('style', 'position:absolute;  top: ' + (posicion.top + tesoro.y - 50) + 'px; left:' + (posicion.left + tesoro.x - 40) + 'px;');
    $tesoro.innerHTML = '<img src="img/tesoro.png" id="imgt">';
    //recargamos la pagina web para que se reinicie todo 
    //location.reload();
  }
});