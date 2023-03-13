/*10- Realiza un script que pida número de filas y columnas y escriba una tabla. Dentro de cada una de las celdas deberá escribirse un número consecutivo en orden descendente. Si, por ejemplo, la tabla es de 7×5 los números irán del 35 al 1.*/
let resultado=0;
let i=0;
let j=0;

let filas=parseInt(prompt('Ingrese un numero de filas'));
let columnas=parseInt(prompt('Ingrese el numero de columnas'));
resultado=filas*columnas;

document.write('<table >')
for( i=0; i<filas ;i++  )
{
    document.write('<tr><td>')
    for(j=0; j<columnas; j++)
    {
        document.write('<td>')
        document.write(resultado);
        resultado --;
        document.write('</td>')
    }
    document.write('</tr>')
}
document.write('</table>')
