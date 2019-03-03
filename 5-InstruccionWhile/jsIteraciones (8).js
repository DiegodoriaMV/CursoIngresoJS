function mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	var contadorDeNotas;

	var numero;
	
	
	var respuesta='si';


	while(respuesta != "n")
	{
		 numero = prompt("ingrese numeros");
		  numero = parseInt(numero);




		//respuesta = prompt("quiere seguir sumando??") //texto predeterminado
		 
		 //numero	= prompt("ingrese numeros"); //texto predeterminado
		

		 if ( numero > 0) {
		 	positivo = positivo + numero;
		 }else
		 {
		 	negativo = negativo * numero;
		 }



		 	respuesta = prompt("para salir ingrese 'n' ");
	}



	document.getElementById('suma').value=positivo;
	document.getElementById('producto').value=negativo;




















}//FIN DE LA FUNCIÓN