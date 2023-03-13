/*11- Realiza un script que pida por teclado 3 edades y 3 nombres e indique el nombre del mayor. */

let edad1=parseInt(prompt('Ingrese la edad de la primer persona'));
let nombre1= prompt('Ingrese el Nombre ')
let edad2=parseInt(prompt('Ingrese la edad de la segunda persona'));
let nombre2= prompt('Ingrese el Nombre ')
let edad3=parseInt(prompt('Ingrese la edad de la tercer persona'));
let nombre3= prompt('Ingrese el Nombre ')

var mayor=Math.max(edad1,edad2,edad3);

if(mayor==edad1)
{
    document.write('El mayor es:' +nombre1);
}
else if(mayor==edad2)
{
    document.write('El mayor es: '+nombre2);
}
else
{
    document.write('El mayor es: '+nombre3);
}