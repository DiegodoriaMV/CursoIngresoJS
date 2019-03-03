function mostrar()
{
	var numero;
	var sumaNegativos;
	var sumaPositvos;
	var diferencia;

	var contador=0;
 	
	var ceroCont = 0;

	var positivosCont = 0;
	var negativosCont = 0;

	var sumaNegativos = 0;
	var sumaPositvos = 0;

	var paresCont = 0;

	var promedioPos;
	var promedioNeg;


	var respuesta="si";

	while(respuesta!="n")
	{
		numero = prompt("ingrese numero");
		numero = parseInt(numero);


		if (numero == 0) 
		{
			ceroCont++;

		} else if (numero < 0) 
			{
				sumaNegativos = sumaNegativos + numero;
				negativosCont++;
			}
			else
			{
				sumaPositvos = sumaPositvos + numero;
				positivosCont++;

			}



		if (numero%2 == 0) 
		{
			paresCont++;
		}



		respuesta = prompt("ingrese 'n' para salir");
	}

	promedioNeg = sumaNegativos / negativosCont;
	promedioPos = sumaPositvos / positivosCont;
	diferencia =  sumaNegativos + sumaPositvos;



	document.write("SUMA DE POSIVOS " +sumaPositvos);
	document.write("<br>SUMA DE negativos " +sumaNegativos);
	document.write("<br>hay " +positivosCont+" POSIVOS");
	document.write("<br>hay " +negativosCont+" negativos");
	document.write("<br>hay " + ceroCont+ " ceros");
	document.write("<br>la cantidad de numeros pares es  " + paresCont);
	document.write("<br>el promedio de los negativoses es " + promedioNeg);
	document.write("<br>el promedio de los positivos es  " +promedioPos);
	document.write("<br>la diferencia entre los positivos y negativos es  " + diferencia);

}//FIN DE LA FUNCIÓN