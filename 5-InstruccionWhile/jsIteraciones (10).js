function mostrar()
{
	var numero;
	var sumaNegativos;
	var sumaPositvos;
	var contador=0;

	var positivosCont = 0;
	var negativosCont = 0;

	var sumaNegativos = 0;
	var sumaPositvos = 0;


	var respuesta="si";

	while(respuesta!="n")
	{
		numero = prompt("ingrese numero");
		numero = parseInt(numero);

		if (numero < 0) 
		{
			sumaNegativos = sumaNegativos + numero;
			negativosCont++;
		}
		if(numero > 0)
		{
			sumaPositvos = sumaPositvos + numero;
			positivosCont++;

		}










		respuesta = prompt("ingrese 'n' para salir");
	}
	console.log("SUMA DE POSIVOS " +sumaPositvos);
	console.log("SUMA DE negativos " +sumaNegativos);
	console.log("hay " +positivosCont+" POSIVOS")
	console.log("hay " +negativosCont+" negativos")


}//FIN DE LA FUNCIÓN