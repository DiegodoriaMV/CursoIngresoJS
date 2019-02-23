/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
var numeroSecreto; 
var contadorIntentos;

function comenzar()
{
	//Genero el número RANDOM entre 1 y 100
	 

	numeroSecreto =	Math.floor(Math.random() * 100) + 1;
		//alert(numeroSecreto );

	console.log(numeroSecreto);

	contadorIntentos = 0;
	

}

function verificar()
{
	var numeroIngresado;
	numeroIngresado= numero.value;
	console.log(numeroIngresado)

	contadorIntentos = contadorIntentos + 1;

	if (numeroIngresado == numeroSecreto) {

		
		if (contadorIntentos >= 3) 
		{
			mensaje =" sos un genio ";
		} else 
		{
			mensaje= " fue pura suerte ";
		}

	} else 
	{	
		if (numeroIngresado > numeroSecreto) 
		{
			mensaje= "se paso";
		} else {
			mensaje= "el numero es mas grande";
		}

	}

	intentos.value = contadorIntentos;
	alert(mensaje);
}

