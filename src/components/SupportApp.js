import React from "react";
import aquiestoy from "../assets/aquiestoy.png";
import yana from "../assets/yana.png";
import terapify from "../assets/terapify.jpg";

const SupportApp = () => {
 return (
  <div className="support_bg">
   <h2 className="title_support">
    Si es usted quien requiere abordaje de Primeros Auxilios Psicológicos ...
   </h2>
   <span className="support_element">
    <p>
     Si estás en un momento difícil y sientes que necesitas pedir ayuda o
     necesitas contarle algo a alguien... o tal vez, estas pasando por una etapa
     de soledad, puedes encontrar acompañamiento en Aquiestoy.chat aquí
     encontraras un acompañante que te escuchará vía chat de forma totalmente
     gratuita.
    </p>
    <img
     className="imgs aquiestoy"
     src={aquiestoy}
     alt="aqui estoy logo de la app"
    />
   </span>
   <span className="support_element">
    <p>
     Si no hay un horario disponible el servicio, te recomendamos bajar YANA
     App, disponible para IOS y Android. Se trata de un bot de asistencia
     emocional qué te puede ayudar de una manera que te va a sorprender. También
     te puede derivar con especialistas de salud mental.
    </p>
    <img className="imgs yana" src={yana} alt="robotcito llamado Yana" />
   </span>
   <span className="support_element">
    <p>
     Por último, si requieres ayuda profesional especializada en Terapify podrás
     conectar con servicios profesionales en psicología clínica.
    </p>
    <img
     className="imgs terapify"
     src={terapify}
     alt="icono de mensaje con carita de color azul"
    />
   </span>
  </div>
 );
};

export default SupportApp;
