import React from "react";
import Button from "../Componente/Button/Button";
import "./Main.css";

const Main = ({ text }) => {
  return (
    <div className="main">
      <h1>{text}</h1>
      <Button variant="cancelar" text="Cancelar" />
      <Button variant="confirmar" text="Confirmar" />
      <Button variant="confirmar" text="Aceptar" />
    </div>
  );
};

export default Main;
