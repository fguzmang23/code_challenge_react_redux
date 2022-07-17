import React, { useState } from "react";
import "./AboutUsTabView.scss";

const MainCard = () => {
  return (
    <div className="AboutUs">
      <h1 className="AboutUs__title">
        Cobertura médica para más familias en Latinoamérica
      </h1>
      <p className="AboutUs__paragraph">
        Somos la primera plataforma de seguros de emergencia y asistencia médica
        inmediata enfocada en apoyar a quienes han emigrado para que puedan
        seguir cuidando a sus seres queridos en sus países de origen, sin
        importar las distancias. asistensi es un grupo empresarial dirigido por
        médicos especializados en servicios de salud con un alto nivel de
        compromiso enfocado a la generación de valor y calidad de vida para
        nuestros usuarios. Tenemos más de 15 años de experiencia trabajando en
        cuidar la salud de las personas y, durante nuestra trayectoria, hemos
        desarrollado sólidas alianzas en la región, para poder brindar el mejor
        seguro para emergencias médicas con atención médica inmediata de
        Latinoamérica.
      </p>
    </div>
  );
};

export default MainCard;
