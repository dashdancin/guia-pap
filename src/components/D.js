import React from "react";
import letter_D from "../assets/letter_D.webp";
import remote_support from "../assets/remote_support.webp";
import group_support from "../assets/group_support.webp";

const D = () => {
 return (
  <div className="bg-D">
   <section className="container-D">
    <h3 className="paso-D">PASO</h3>
    <h2 className="title-D">
     Derivación a <br /> redes de apoyo
    </h2>
    <img className="img_D" src={letter_D} alt="letra D" />
   </section>

   <main className="dx">
    <p className="tag tagd tag-d1">Objetivo</p>
    <div className="slot slotd">
     Una vez identificadas estas necesidades, asista a la persona afectada a
     contactar a las personas y/o servicios de apoyo que podrán ayudarle a
     satisfacer dichas necesidades.
    </div>
    <p className="tag tagd tag-d2">Consiste en</p>
    <div className="slot slotd">
     Facilite el contacto con sus familiares o amigos. Sugiera llamarlos si es
     necesario o gestione un teléfono móvil con su institución. También puede
     enlazar con servicios de asistencia.
    </div>
    <p className="tag tagd tag-d3">Ejemplo</p>
    <div className="slot slotd">
     “Ahora que hemos visto algunas de sus necesidades, me gustaría contactarlo
     con un servicio de taxi seguro para que lo llevé a su domicilio y le
     avisaremos a su familiar que va en camino a casa”
    </div>
    <p className="tag tagd tag-d4">Redes de apoyo</p>
    <div className="slot slotd slot-d4">
     • Familiares&nbsp;&nbsp; • Amigos&nbsp;&nbsp; • Pareja&nbsp;&nbsp; •
     Policía&nbsp;&nbsp; • Bomberos&nbsp;&nbsp; • Líneas de vida (Contra el
     suicidio)&nbsp;&nbsp; • Ayuda&nbsp;&nbsp; psicológica&nbsp;&nbsp; •
     Asistencia social&nbsp;&nbsp; • Agente de seguros&nbsp;&nbsp;&nbsp;&nbsp;
     •Ambulancia&nbsp;&nbsp; • Asesoría médica&nbsp;&nbsp; • Asesoría
     legal&nbsp;&nbsp; •Autoridades&nbsp;&nbsp; • Alcohólicos
     anónimos&nbsp;&nbsp; • Servicio de transporte&nbsp;&nbsp; • Otros servicios
    </div>
   </main>

   <section className="img_support">
    <img
     className="remote_support"
     src={remote_support}
     alt="Atención teléfonica"
    />
    <img
     className="group_support"
     src={group_support}
     alt="Reunion de familia y amigos"
    />
   </section>
  </div>
 );
};

export default D;
