// 1. Uso de tipos unión
type ID = string | number;
let usuarioID: ID = 12345;
let otroUsuarioID: ID = "abc123";

// 2. Uso de interfaces y objetos
interface Producto {
  nombre: string;
  precio: number;
}

const laptop: Producto = {
  nombre: "MacBook Pro",
  precio: 1500
};

// 3. Uso de una función genérica
function obtenerElemento<T>(elementos: T[]): T {
  return elementos[0];
}

console.log(obtenerElemento<string>(["manzana", "pera", "uva"]));  // "manzana"
console.log(obtenerElemento<number>([10, 20, 30]));                // 10
