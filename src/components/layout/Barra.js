import React from "react";

export const Barra = () => {
  return (
    <header className="app-header">
      <p className="nombre-usuario">
        Hola
        <span> Francisco París</span>
      </p>
      <nav className="nav-principal">
        <a href="#!">Cerrar Sesión</a>
      </nav>
    </header>
  );
};
