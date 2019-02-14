function mostrar()
{
//tomo la edad  

	var suEdad;
	suEdad = document.getElementById('edad').value;

	if (suEdad < 13) {

		alert("es niño")
	} else {
		if (suEdad < 17) {
			alert("es adolecente");
		}
		else{
				alert("es adulto");
				
			}
	}


}//FIN DE LA FUNCIÓN
//3 if anidados