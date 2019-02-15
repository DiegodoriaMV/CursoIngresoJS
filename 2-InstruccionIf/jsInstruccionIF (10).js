function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var nota;
	nota=Math.floor((Math.random() * 10) + 1);
	var mensaje;

		if (nota >= 9) 
		{
			mensaje ="exelente";
		} else
		{
			if (nota >= 4 ) 
			{
			 mensaje ="aprobo";

			} else 
			{
			mensaje = "suerte la proxima ";
			}
		}

alert("su nota es " +nota+ " y "+ mensaje);

}//FIN DE LA FUNCIÓN