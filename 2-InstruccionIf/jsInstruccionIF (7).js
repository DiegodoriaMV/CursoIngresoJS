function mostrar()
{
//tomo la edad  

	var suEdad;
	var eCivil;

	suEdad = document.getElementById('edad').value;
	eCivil = document.getElementById('estadoCivil').value;


	if (suEdad <18  && eCivil!= "soltero" ) {
		alert("es muy pequeño para no ser soltero")
	}


}//FIN DE LA FUNCIÓN