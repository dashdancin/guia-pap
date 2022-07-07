import React from "react";
import bandaid from "../assets/band-aid_heart.png";

const profits = () => {
 return (
  <div className="bg-p">
   <h2 className="title_p">
    Beneficios de la persona que recibe el protocolo de intervención emocional
   </h2>
   <section className="list_p">
    <img className="img_list" src={bandaid} alt="corazon con vandita" />
    <span className="text_p">
     Contención emocional, sensación de alivio y calma
    </span>
   </section>
   <section className="list_p">
    <img className="img_list" src={bandaid} alt="corazon con vandita" />
    <span className="text_p">
     Sentirse acompañado, escuchado y comprendido{" "}
    </span>
   </section>
   <section className="list_p">
    <img className="img_list" src={bandaid} alt="corazon con vandita" />
    <span className="text_p">
     Reestablecer sus capacidades para afrontar la situación que detono la
     crisis
    </span>
   </section>
   <section className="list_p">
    <img className="img_list" src={bandaid} alt="corazon con vandita" />
    <span className="text_p">
     Conexión con redes de apoyo, como familiares y servicios de emergencia
    </span>
   </section>
   <section className="list_p">
    <img className="img_list" src={bandaid} alt="corazon con vandita" />
    <span className="text_p">
     Obtener información sobre los efectos psicológicos, emocionales y físicos
     <br />
     que se pueden presentar al vivir una situación de crisis
    </span>
   </section>
   <section className="list_p">
    <img className="img_list" src={bandaid} alt="corazon con vandita" />
    <span className="text_p">
     Reducir la posibilidad de desarrollar Síndrome de Estrés Postraumático
    </span>
   </section>
  </div>
 );
};

export default profits;
