function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;
var mensaje;

 switch(mesDelAño)
 {
 	case "Enero" :
 		mensaje ="que comiences bien el año";
 		break
 	case "marzo" :
 		mensaje = "a clases";
 		break
 	case "Junio" :
 		mensaje = "se viene las vacas";
 		break

 	case "Diciembre" :
 		mensaje = "FELICES FIESTAS";
 		break

 	default:
 	mensaje = "es un mes comun";
 	break

 }

 	alert(mensaje);


}//FIN DE LA FUNCIÓN