function mostrar()
{
	var contador=0;
	var numero;
	var maximo;
	var minimo;
	var respuesta='si';
	var bandera = 0;

	while(respuesta!='n')
	{
		numero = prompt("ingrese numero");
		numero = parseInt(numero);

		if (contador == 0) 
		{
			maximo =numero;
			minimo =numero;
			contador++;
		}
		else if ( maximo > numero)//si se evalua y si la primera da verdadera no se evalua la segunda
		{	
			maximo = numero;
			
		}
		if (minimo < numero)
		{	
			minimo = numero;
		}
		
		



		respuesta = prompt("ingrese 'n' para salir");
	}
	document.getElementById('minimo').value = minimo;
	document.getElementById('maximo').value = maximo;



}//FIN DE LA FUNCIÓN