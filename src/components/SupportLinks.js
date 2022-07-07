import React from "react";
import heart from "../assets/heart_in_cross-med.png";
import unam_line from "../assets/unam_line.png";
import unam_covid from "../assets/unam_covid.png";
import unam_psychology from "../assets/unam_psichology.png";
import video from "../assets/video.png";
import udechile from "../assets/udechile.png";

const SupportLinks = () => {
 return (
  <div className="supportlink_bg">
   <img className="heart" src={heart} alt="cruz roja con corazon dentro" />
   <h2 className="title_slink">Redes e información de apoyo</h2>
   <main className="main_slink">
    <span className="slink_element">
     <img
      className="unam_line"
      src={unam_line}
      alt="Atención Psicológica en Línea"
     />
     <p>
      Atención Psicológica a Distancia <br />
      Teléfono: 5025-0855 / 562-22288 <br />
      Horario de atención: L - V de 8:00 a 18:00 hrs
     </p>
    </span>
    <span className="slink_element">
     <img
      className="unam_psychology"
      src={unam_psychology}
      alt="logo facultad psicología"
     />
     <p>
      Cuestionario para la detección de riesgos a la salud mental en el contexto
      del COVID-19 <br />
      En: www.misalud.unam.mx/covid19/
     </p>
    </span>
    <span className="slink_element">
     <img
      className="unam_igualdad"
      src={unam_covid}
      alt="UNAM igualdad de genero"
     />
     <p>
      Conoce los centros de atención de la comunidad universitaria <br />
      En: www.coordinaciongenero.unam.mx /atencion-psicologica-unam
     </p>
    </span>
    <span className="slink_element">
     <img className="udechile" src={udechile} alt="" />
     <p>
      Manual ABCDE para la aplicación de Primeros Auxilios Psicológicos <br />
      En crisis individuales y colectivas: Descarga
     </p>
    </span>
    <span className="slink_element">
     <img
      className="papvideo"
      src={video}
      alt="Imagen de un video de youtube"
     />
     <p>
      Más información sobre los Pasos del Modelo ABCDE explicado por su autor
      <br />
      Video de Youtube
     </p>
    </span>
   </main>
  </div>
 );
};

export default SupportLinks;
