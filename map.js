// Funcion de suma total
const suma = (ns) => {
    let acumulado = 0;

    for (let i=0; i<ns.length; i++){
        acumulado += ns[i];
    }

    return acumulado;
}

const numeros = [1,2,3,4,5]
// const multiplicados = numeros.map(numero => numero*2)
// console.log(numeros, multiplicados)
// const parejas = numeros.map(x => [x,x])
// console.log(parejas)

const mascotas = [
    { nombre: 'Puchini', edad: 12, tipo: 'perro'},
    { nombre: 'Chanchito feliz', edad: 3, tipo: 'perro'},
    { nombre: 'Pulga', edad: 10, tipo: 'perro'},
    { nombre: 'Pelusa', edad: 16, tipo: 'gato'},

]

// edad promedio de todas las mascotas
const edades = mascotas.map(mascota => mascota.edad);
const sumaEdades = suma(edades);
console.log(sumaEdades / edades.length);