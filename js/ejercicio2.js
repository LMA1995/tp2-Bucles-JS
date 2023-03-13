/*Escribir un programa que solicite una nota (número) de 0  a 10. Luego mostrar la calificación en un alert según los siguientes rangos de nota:

0-2: Muy deficiente
3-4: Insuficiente
5-6: Suficiente
7: Bien
8-9: Notable
10: Sobresaliente

Si ingreso un número que no esté dentro del rango de 0 a 10 mostrar un mensaje de “número erróneo”. Si el número ingresado no es válido mostrar el mensaje “Introduce un número válido”.*/

let nota=0;
nota= parseInt(prompt('Ingrese un valor'));

while(nota<0 || nota>10 )
{
    window.alert('Ingrese un numero del 1 al 10 de caso contrario no sera reconocido como valido');
    nota=parseInt(prompt('Ingrese el valor'));
   
}
switch (nota)
{
   case 0 :
    {
        document.write('Muy deficiente');
    }
    
    break;
    case 1 :
    {
        document.write('Muy deficiente');
    }
    
    break;
    case 2 :
    {
        document.write('Muy deficiente');
    }
    
    break;
    case 3 :
    {
        document.write('Insuficiente');
    }
    
    break;
    case 4 :
    {
        document.write('Insuficiente');
    }
    
    break;
    case 5 :
    {
        document.write('suficiente');
    }
    
    break;
    case 6 :
    {
        document.write('suficiente');
    }
    
    break;
    case 7 :
    {
        document.write('Bien');
    }
    
    break;
    case 8 :
    {
        document.write('Notable');
    }
    
    break;
    case 9 :
    {
        window.alert('Notable');
        
    }
    break;
   
    
  
    case 10 :
    {
        document.write('Muy sobresaliente');
    }
    
    break;
    
    
}


