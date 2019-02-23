function mostrar()
{

	var contador=0;
	// declarar variables
	var numero;
	var maximo;
	var minimo;
	var respuesta='si';
	var flag = false;

	while(respuesta!='no')
	{
		numero = prompt("ingrese numero");



		if (flag == false || numero > maximo)//si se evalua y si la primera da verdadera no se evalua la segunda
		{	
			maximo = numero;
			
		}
		if (flag == false || minimo < numero)
		{	
			minimo = numero
			flag = true;
		}
	}
document.getElementById('minimo').value = minimo;
document.getElementById('maximo').value = maximo;



}//FIN DE LA FUNCIÓN