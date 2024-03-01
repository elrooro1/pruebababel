class cliente {
    constructor(nombre, montoTotalAnual, deduccionesAnuales) {
      this.nombre = nombre;
      this.montoTotalAnual = montoTotalAnual;
      this.deduccionesAnuales = deduccionesAnuales;
    }
  
    // Getter y setter para acceder y modificar propiedades
    getNombre() {
      return this.nombre;
    }
  
    setNombre(nombre) {
      this.nombre = nombre;
    }
  
    // Otros getter y setter para montoTotalAnual y deduccionesAnuales
  
    // Método para calcular el impuesto total a pagar por el cliente
    calcularImpuesto() {
      return ((this.montoTotalAnual - this.deduccionesAnuales) * 0.21);
    }
  }
  
  export default cliente;