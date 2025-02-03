interface Vehiculo {
    marca: string;
    acelerar(): string;
  }
  
  class Coche implements Vehiculo {
    marca: string;
  
    constructor(marca: string) {
      this.marca = marca;
    }
  
    acelerar() {
      return `El coche ${this.marca} está acelerando...`;
    }
  }
  
  const miAuto = new Coche("Toyota");
  console.log(miAuto.acelerar());
  