function mostrar()
{
//tomo la edad  

	var suEdad;
	var eCivil;

	suEdad = document.getElementById('edad').value;
	eCivil = document.getElementById('estadoCivil').value;


	if (suEdad <18  && eCivil == "Soltero" ) {/*esta no se puede agragar un if y no hacer nada*/
		alert("es soltero y es menor de edad");	
	}



}//FIN DE LA FUNCIÓN