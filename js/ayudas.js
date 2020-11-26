//metodo que nos ayude a generar un numero random desde 0 hasta N  
//funcion flecha que recibe un parametro  Numero
let getNumeroRandom = Numero => {
  return Math.floor(Math.random() * Numero);      //fuction getNumeroRandom(Numero){}
}

//metodo que calcule la distancia entre el tesoro y el click del mouse
let getDistancia = (evento, tesoro) => {
  //obtener la diferencia entre el punto x donde diste click con el x del tesoro
  let difX = evento.offsetX - tesoro.x;
  //obtener la diferencia entre el punto y donde diste click con el y del tesoro
  let difY = evento.offsetY - tesoro.y;

  return Math.sqrt((difX * difX) + (difY * difY));
}

//metodo que regrese un string (la pista) segun la distancia entre l clik y el tesoro
let getPista = distancia => {
  getPistaColor(distancia);
  if (distancia < 30) {
    return "Hirviendo!";
  } else if (distancia < 40) {
    return "Muy caliente";
  } else if (distancia < 60) {
    return "Caliente";
  } else if (distancia < 100) {
    return "Tibio";
  } else if (distancia < 180) {
    return "Frio";
  } else if (distancia < 360) {
    return "Realmente Frio";
  } else {
    return "Congelado!";
  }
}

//cambiar el color del fondo
var $fondo = document.getElementById('fondo');
console.log($fondo);

let getPistaColor = distancia => {
  if (distancia < 30) {
    $fondo.setAttribute('style', 'background-color: #FFA420');
  } else if (distancia < 40) {
    $fondo.setAttribute('style', 'background-color: #FE0000');
  } else if (distancia < 60) {
    $fondo.setAttribute('style', 'background-color: #CC0605');
  } else if (distancia < 100) {
    $fondo.setAttribute('style', 'background-color: #D36E70');
  } else if (distancia < 180) {
    $fondo.setAttribute('style', 'background-color: #063971');
  } else if (distancia < 360) {
    $fondo.setAttribute('style', 'background-color: #0E294B');
  } else {
    $fondo.setAttribute('style', 'background-color: #1D334A');
  }
}
