// Declarando variables con tipos
let nombre: string = "María"
let edad: number = 28
let activo: boolean = true

// Función con tipos
function presentar(nombre: string, edad: number): string {
  return `Hola, soy ${nombre} y tengo ${edad} años`
}

console.log(presentar(nombre, edad))

// Array tipado
let numeros: number[] = [10, 20, 30]
console.log(numeros)
