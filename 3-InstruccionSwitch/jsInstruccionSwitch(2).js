function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;
var mensaje;

switch(mesDelAño)
{
	case "Julio":
	case "Agosto":
		mensaje ="abrigate que hace frio";
		break;
 	case "Enero":
 	case "Febrero":
 	case "Marzo":
 	case "Mayo":
 	case "Abril":
 	case "Junio":
 		mensaje = "falta para el invierno";
 		break;
 	/*
 	case "Septiembre":
 	case "Octubre":
 	case "Nobiembre":
 	case "Diciembre":
 		mensaje = "ya pasamos el frio ; ahora viene el calor"
 		break;
 	*/

 	default:
 		mensaje = "ya pasamos el frio , ahora viene el calor"
 	break;

}




alert (mensaje);




}//FIN DE LA FUNCIÓN