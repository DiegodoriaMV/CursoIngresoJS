function mostrar()
{

	var velocidadKilo;
	var tipoDeCombustible;
	var autosCont;
	var promedioDeVelocidad;
	var velocidadTotales;
	var contador;
	var combustibleSMax;
	var velocidadBaja;
	var velocidadBajaCombustible;
	var combustibleLMax;
	var contadorDos

	//var velocidadBajaCombustible = "";
	
	combustibleLMax = 0;
	velocidadTotales = 0;
	contador = 0;
	autosCont = 0;
	contadorDos = 0;

	while(autosCont < 5)
	{
		velocidadKilo = prompt("ingrese la velocidad en kilómetros");
		velocidadKilo = parseInt(velocidadKilo);

		while(velocidadKilo < 0 || velocidadKilo > 250)
		{
			alert("error es de 0 a 250");
			velocidadKilo = prompt("reingrese la velocidad en kilómetros");
		}


	tipoDeCombustible = prompt("ingrese el tipo de combustible 's' para solido y 'l' para liquido");
		while(tipoDeCombustible != "s" && tipoDeCombustible != "l")
		{
			alert("error ese tipo de combustible no valido");
			tipoDeCombustible = prompt("reingrese el tipo de combustible 's' para solido y 'l' para liquido");
		}


		if(contador == 0)
			{
				velocidadBaja = velocidadKilo;
				contador++;
			}
		while(velocidadKilo < velocidadBaja) //<
			{
				velocidadBaja = velocidadKilo;
				velocidadBajaCombustible=tipoDeCombustible;
			}	


		if(tipoDeCombustible=="l" && velocidadKilo > 100 )
		{
			combustibleLMax++;
		}
		
		if (contadorDos == 0)
		{
			combustibleSMax = velocidadKilo;
			contadorDos ++;
		}
		if (combustibleLMax < velocidadKilo && tipoDeCombustible == "s") 
			{
				combustibleSMax = velocidadKilo;
			}
		


	velocidadTotales = velocidadTotales + velocidadKilo;
	
	autosCont++;
	}
	promedioDeVelocidad = velocidadTotales / 5


	alert("el promedio de la velocidad total es de " + promedioDeVelocidad);
	alert("la velocidad mas baja fue de " +velocidadBaja + " y su tipo de combustible fue " + velocidadBajaCombustible);
	alert("la cantidad de combusibles liquidos que superaron los 100k son " + combustibleLMax);
	alert("la velocidad mas alta de solido es " + combustibleSMax);
}


/*
1-en siete.js,
Realizar el algoritmo que permita el ingreso por prompt de las velocidades en
kilómetros (validar entre 0 y 250) , el tipo de combustible, validar el tipo “s” o “l”
para solido o liquido, de 5 vehículos de prueba ,informar por alert:
1-El promedio de las velocidades totales.
2-La velocidad más baja y el tipo de combustible de ese vehículo.
3-La cantidad de combustibles líquidos que su velocidad supere los 100
kilómetros.
4-la velocidad más alta de los de combustible sólido*/