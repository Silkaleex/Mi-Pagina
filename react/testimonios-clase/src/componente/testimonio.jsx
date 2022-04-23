import react from "react";
import "../hojas-de-estilo/Testimonio.css";

class Testimonio extends react.Component {
  render() {
    return (
      <div className="contenedor-testimonio">
        <img
          className="imagen-tesimonio"
          src={require(`../imagenes/testimonio-${this.props.imagen}.jpg`)}
          alt={`Foto de ${this.props.nombre}`}
        />
        <div className="contenedor-texto-testimonio">
          <p className="nombre-testimonio">
            <strong>{this.props.nombre}</strong> de la {this.props.villa}
          </p>
          <p className="texto-testimonio">{this.props.testimonio}'</p>
        </div>
      </div>
    );
  }
}
export default Testimonio;
