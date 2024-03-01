import cliente from './cliente.js';
import calculadoraImpuestos from './calculadoraimpuestos.js';

const cliente = new cliente('Juan', 10000, 2000);
const calculadora = new calculadoraimpuestos();

console.log('Impuesto a pagar:', calculadora.calcularimpuesto(cliente));