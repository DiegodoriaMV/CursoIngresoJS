function mostrar()
{	 

	var clave;
	var intentos;
	var bandera = false;

	intentos= 0;

	clave = prompt("ingrese el número clave.");

	while(clave != "utn750")
		{
			clave = prompt("ERROR ,ingrese el número clave.");
			intentos = intentos + 1;

			if (intentos == 3) 
			{
				bandera = true;
				break;
			}


		}
	if (bandera == false) 
	{
		alert("bienvenido/a");
	}


}//FIN DE LA FUNCIÓN
