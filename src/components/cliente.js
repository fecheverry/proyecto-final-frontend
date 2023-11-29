import React, { useState } from "react";
import productos from "../lists/products";
import "../styles/cliente.css";

const ClientePage = () => {
  const productosPorPagina = 10;
  const [paginaActual, setPaginaActual] = useState(1);

  // Calcular el índice inicial y final para los productos de la página actual
  const indiceInicial = (paginaActual - 1) * productosPorPagina;
  const indiceFinal = paginaActual * productosPorPagina;

  const productosPaginaActual = productos.slice(indiceInicial, indiceFinal);

  const cambiarPagina = (direccion) => {
    if (direccion === "adelante" && paginaActual <= 2) {
      setPaginaActual(paginaActual + 1);
    } else if (direccion === "atras" && paginaActual > 1) {
      setPaginaActual(paginaActual - 1);
    }
  };

  return (
    <div>
      {/* Cuadro de color amarillo */}
      <div className="cuadro-amarillo"></div>
      {/* Rectángulo con fondo difuminado */}
      <div className="fondo-difuminado">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icono-bolsa"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0M14 14V5H2v9a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1M8 7.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132"
          />
        </svg>
        {/* Contenido que se sobrepondrá al amarillo suave */}
        <div className="contenido">
          <div className="inputs-container">
            <input type="text" placeholder="Buscar productos aquí..." />
            <select>
              <option value="Electrónica">Electrónica</option>
              <option value="Ropa y Calzado">Ropa y Calzado</option>
              <option value="Libros">Libros</option>
              {/* Agrega más opciones según sea necesario */}
            </select>
            <button className="buscar-btn">Buscar ahora!</button>
          </div>
        </div>
      </div>

      <div className="ultimos-productos-container">
        <div className="contenido-ultimos-productos">
          <p>Últimos productos en línea</p>
          <div className="botones-container">
            <button
              className="boton-azul primero"
              onClick={() => cambiarPagina("atras")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                fill="currentColor"
                className="bi bi-caret-left-fill"
                viewBox="0 0 16 16"
              >
                <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z" />
              </svg>
            </button>
            <button
              className="boton-azul"
              onClick={() => cambiarPagina("adelante")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                fill="currentColor"
                className="bi bi-caret-right-fill"
                viewBox="0 0 16 16"
              >
                <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Contenido original (productos y texto) */}
      <div className="productos-container">
        {productosPaginaActual.map((producto) => (
          <div key={producto.id} className="producto-card">
            <img src={producto.imagen} alt={producto.nombre} />
            <div className="producto-card-content">
              <h4>{producto.nombre}</h4>
              <p className="descripcion">{producto.descripcion}</p>
              <div className="fila-card">
                <p className="categoria">
                  {producto.categoria}{" "}
                  <span className="precio">${producto.precio}</span>
                </p>
              </div>
              <hr />
              <div className="resena-container">
                {" "}
                <p className="resena">{producto.resena}</p>
                <svg className="icono-estrella" viewBox="0 0 16 16">
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClientePage;
