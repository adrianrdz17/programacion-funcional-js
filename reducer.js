// funcion reducer
// const reducer = (acumulador, valorActual) => nuevoAcumulador

// El segundo argumento despues del nuevoAcumulador, es el valor inicial del acumulador
// const reducido = [1,2].reduce((acc, el) => acc + el, 0);
// console.log(reducido);

const numeros = [1,2,3,4,5];
const resultado = numeros.reduce((acc, el) => acc + el, 0)
console.log(resultado);

const mascotas = [
    { nombre: 'Puchini', edad: 12, tipo: 'perro'},
    { nombre: 'Chanchito feliz', edad: 3, tipo: 'perro'},
    { nombre: 'Pulga', edad: 10, tipo: 'perro'},
    { nombre: 'Pelusa', edad: 16, tipo: 'gato'},
];

// Cuando queremos buscar un elemento en particular, utilizamos en find

const indexed = mascotas.reduce((acc, el) => ({
    ...acc,
    [el.nombre]: el,
}),{})
console.log(indexed);
console.log(indexed['Pelusa']);

const anidado = [1, [2,3], 4, [5]]

// console.log(anidado.flat())
// Lo siguiente es una alternativa a lo anterior.
const plano = anidado.reduce((acc, el) => acc.concat(el), [])
console.log(plano)