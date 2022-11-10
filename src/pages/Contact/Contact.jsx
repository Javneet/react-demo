import React from "react";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Header/Navbar/Navbar";
import Main from "../../components/Main/Main";

const Contact = () => {
  return (
    <div>
      <Header title="Contacto" color="green" />
      <Navbar />
      <Main text="Pagina Contact" />
    </div>
  );
};

export default Contact;
