function mostrar()
{
	var pais;
	var superficie;
	var paisesImpar;
	var superficieMCien;
	var superficieIgualCien;
	var contador;
	var paisMayorCien;
	var sumaDeSuperficie;
	var promedio;
	var cantidadDePaisesIng;

	cantidadDePaisesIng = 0;
	superficieMCien = 0;
	superficieIgualCien = 0;
	contador = 0;
	var respuesta = "y";
	paisesImpar = 0;


	while(respuesta != "n")
	{
		pais = prompt("ingrese el pais");
		superficie = prompt("ingrese la superficie")
		superficie = parseInt(superficie);


		if (superficie > 100) 
		{
			superficieMCien++;
		}
		if(superficie == 100)
			{
				superficieIgualCien++;
			}	



		if (superficie%2 != 0) 
		{
			paisesImpar++;
		}

		if (superficie > 100) 
		{
			if (contador == 0) 
			{
				paisMayorCien = pais;
			}
			contador++;
		}
	
	cantidadDePaisesIng++;
	sumaDeSuperficie = sumaDeSuperficie + superficie;
	respuesta = prompt("para salir aprete la tecla 'n' ");
	}

	promedio = sumaDeSuperficie / cantidadDePaisesIng;
	
	document.write("el pais es " +pais);
	document.write("<br> su superficie es " +superficie);
	document.write("<br> los paises impar " + paisesImpar);
	document.write("<br> la cantidad de paises con superficie igual a 100 son " + superficieIgualCien);
	document.write("<br> la cantidad de paises con superficie menor a 100 son " + superficieMCien);
	document.write("<br> el primer pais que supero los 100 es "+ paisMayorCien);
	document.write("<br> el promedio de la superficie es  " + promedio);
}
/*2-en ocho.js, .
Realizar el algoritmo que permita iterar el ingreso de dos datos, un país y la
superficie de su territorio (validar) hasta que el usuario quiera e informar al terminar
el ingreso por document.write:
1-La cantidad de países con superficie impar.
2-La cantidad de países con superficie menor a 100
3-La cantidad de países con superficie igual a 100
4-El nombre del primer país que superó los 100 de superficie
5-El promedio de kilómetros ingresados.
6-El nombre del que menos territorio tiene.
*/