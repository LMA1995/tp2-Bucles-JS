let i;
let repeticion;
 let num= parseInt(prompt('Ingrese un numero'));
 while(num <1 || num>50)
 {
    alert('ingreso un valor fuera del rando admitido')
    num=parseInt(prompt('Ingrese un nuevo valor'));
 }

for (i=1 ; i<=num; i++)
{
    for (repeticion=0 ; repeticion<i; repeticion++)
    {
        document.write(i);
    }
    document.write('<br>')
}