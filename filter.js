const numeros = [1,2,3,4,5,6,7,8,9]

const mascotas = [
    { nombre: 'Puchini', edad: 12, raza: 'perro'},
    { nombre: 'Chanchito feliz', edad: 3, raza: 'perro'},
    { nombre: 'Pulga', edad: 10, raza: 'perro'},
    { nombre: 'Pelusa', edad: 16, raza: 'gato'},

]

const menoresQueCinco = numeros.filter(numero => numero < 5);
console.log(menoresQueCinco, numeros);

// const perros = mascotas.filter(mascota => mascota.raza === 'perro');
// console.log(perros, mascotas);

const gatos = mascotas.filter(mascota => mascota.raza === 'gato');
console.log(gatos);