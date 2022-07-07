import React from "react";
import letter_C from "../assets/letter_C.png";
import support_network from "../assets/support_network.png";

const C = () => {
 return (
  <div className="bg-C">
   <section className="container-C">
    <h3 className="paso-C">PASO</h3>
    <h2 className="title-C">
     Categorización <br /> de necesidades
    </h2>
    <img className="img_C" src={letter_C} alt="letra C" />
   </section>

   <main className="cx">
    <p className="tag tagc tag-c">Objetivo</p>
    <div className="slot slotc slot-c1">
     Luego de un evento traumático o impactante emocionalmente puede pasar que
     los afectados experimenten: Confusión mental, embotamiento y problema para
     ordenar sus ideas. La labor del acompañante debe ser la de ayudar al
     afectado a recuperar la lógica y ordenar sus necesidades más urgentes.
    </div>
    <p className="tag tagc tag-c2">Consiste en</p>
    <div className="slot slotc slot-c2">
     Guiar por medio de preguntas al afectado en la búsqueda de identificar lo
     que necesita: Denuncia de un siniestro, llamar a emergencias, conectar con
     un familiar, búsqueda de pertenencias, contactar con su seguro, etc.
    </div>
    <p className="tag tagc tag-c3">Ejemplo</p>
    <div className="slot slotc slot-c3">
     “¿Qué es lo que más le preocupa en este momento?... <br /> ¿En qué
     necesidad quisiera usted que nos centraramos en este momento?”
    </div>
    <p className="tag tagc tag-c4">Puntos clave</p>
    <div className="slot slotc slot-c4">
     Puede resultar muy útil tomar un lápiz y papel y escribir las necesidades y
     preocupaciones que el afectado comente y después guiarlo para poner en
     orden jerárquico las más urgentes o aquellas que pueden ser atendidas con
     mayor prontitud.
    </div>
   </main>

   <img
    className="support"
    src={support_network}
    alt="Voluntarios ayudando con donaciones"
   />
  </div>
 );
};

export default C;
