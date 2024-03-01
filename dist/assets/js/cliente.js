"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var cliente = /*#__PURE__*/function () {
  function cliente(nombre, montoTotalAnual, deduccionesAnuales) {
    _classCallCheck(this, cliente);
    this.nombre = nombre;
    this.montoTotalAnual = montoTotalAnual;
    this.deduccionesAnuales = deduccionesAnuales;
  }

  // Getter y setter para acceder y modificar propiedades
  _createClass(cliente, [{
    key: "getNombre",
    value: function getNombre() {
      return this.nombre;
    }
  }, {
    key: "setNombre",
    value: function setNombre(nombre) {
      this.nombre = nombre;
    }

    // Otros getter y setter para montoTotalAnual y deduccionesAnuales

    // Método para calcular el impuesto total a pagar por el cliente
  }, {
    key: "calcularImpuesto",
    value: function calcularImpuesto() {
      return (this.montoTotalAnual - this.deduccionesAnuales) * 0.21;
    }
  }]);
  return cliente;
}();
var _default = exports["default"] = cliente;