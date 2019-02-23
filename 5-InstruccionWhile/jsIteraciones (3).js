function mostrar()
{	 

	var clave;
	var intentos;
	var flag = false;

	intentos= 0;

	clave = prompt("ingrese el número clave.");

	while(clave != "utn750")
		{
			clave = prompt("ERROR ,ingrese el número clave.");
			intentos = intentos + 1;

			if (intentos == 3) 
			{
				flag = true;
				break;
			}


		}
	if (flag == false) 
	{
		alert("bienvenido/a");
	}


}//FIN DE LA FUNCIÓN
