/*En esta oportunidad el juego evaluará tus
 aptitudes a partir de la cantidad de intentos, 
 por lo cual se informará lo siguiente:
1° intento: “usted es un Psíquico”.
2° intento: “excelente percepción”.
3° intento: “Esto es suerte”.
4° intento: “Excelente técnica”.
5° intento: “usted está en la media”.
Desde  6 Intentos hasta 10:”falta técnica”
Más de 10 intentos: “afortunado en el amor!!”.*/

var numeroSecreto; 
var contadorIntentos;
var mensaje;

function comenzar()
{
	//Genero el número RANDOM entre 1 y 100
	 
	numeroSecreto =	Math.floor(Math.random() * 100) + 1;


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

		switch(contadorIntentos)
		{

			case 1:
				mensaje="usted es un psiquico"
				break
			case 2:
				mensaje= "Excelente percepción"
				break
			case 3:
				 mensaje = "esto es suerte"
				 break
			case 4:
				mensaje= "Excelente tencnica"
				break
			case 5:
				mensaje= "usted esta en la media"
				break
			case 6:
			case 7:
			case 8:
			case 9:
			case 10:
			 	mensaje= "falta tencnica"
			 	break;

			default:
			 	mensaje= "afortunado en el amor"
			 	break
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
//---------------------------------------------------
/*	switch(contadorIntentos)
	{

		case 1:
			mensaje="usted es un psiquico"
			break
		case 2:
			mensaje= "Excelente percepción"
			break
		case 3:
			 mensaje = "esto es suerte"
			 break
		case 4:
			mensaje= "Excelente tencnica"
			break
		case 5:
			mensaje= "usted esta en la media"
			break
		case 6:
		case 7:
		case 8:
		case 9:
		case 10:
		 	mensaje= "falta tencnica"
		 	break;

		default:
		 	mensaje= "afortunado en el amor"
		 	break
	}


*/






	intentos.value = contadorIntentos;
	alert(mensaje);

}