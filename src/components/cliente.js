// src/components/ClientePage.js
import React from "react";
import productos from "../lists/products";
import "../styles/cliente.css";

const ClientePage = () => {
  return (
    <div className="pagina">
      {/* Cuadro de color amarillo */}

      <div className="cuadro-amarillo"></div>

      {/* Rectángulo con fondo difuminado */}
      <div className="fondo-difuminado">
        {/* Contenido que se sobrepondrá al amarillo suave */}
        <div className="contenido">
          <div className="inputs-container">
            <input type="text" placeholder="Buscar productos aqui..." />
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
            <button className="boton-azul">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                fill="currentColor"
                class="bi bi-caret-left-fill"
                viewBox="0 0 16 16"
              >
                <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z" />
              </svg>
            </button>
            <button className="boton-azul">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                fill="currentColor"
                class="bi bi-caret-right-fill"
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
        {productos.map((producto) => (
          <div key={producto.id} className="producto-card">
            <img src={producto.imagen} alt={producto.nombre} />
            <div>
              <h4>{producto.nombre}</h4>
              <p>{producto.descripcion}</p>
              <p>Categoría: {producto.categoria}</p>
              <p>Reseña: {producto.resena}</p>
              <p>Precio: ${producto.precio}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClientePage;
