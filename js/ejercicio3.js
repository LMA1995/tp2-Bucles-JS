//  Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”. Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión -.

let resultado ='';
do{
    let cadena =prompt('Ingresa texto');
    if (resultado=='') {
        
    resultado= resultado+cadena;
    }
    else 
    {
        resultado=resultado + '-' + cadena;
    }
    
  }while (confirm('Desea Seguir?'));

  document.write(resultado);

