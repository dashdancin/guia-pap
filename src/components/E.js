import React from "react";
import letter_E from "../assets/letter_E.jpg";
import education_psy from "../assets/education_psy.webp";

const E = () => {
 return (
  <div className="bg-E">
   <section className="container-E">
    <h3 className="paso-E">PASO</h3>
    <h2 className="title-E">Psico-educación</h2>
    <img className="img_E" src={letter_E} alt="letra E" />
   </section>

   <main className="ex">
    <p className="tag tage tag-e1">Objetivo</p>
    <div className="slot slote slot-e1">
     Informar a las personas sobre los efectos psicológicos y fisiológicos que
     se viven al enfrentar una crisis emocional y los efectos que pueden
     aparecer en los próximos días para que entiendan más acerca de su situación
     y puedan tomar mejores decisiones.
    </div>
    <p className="tag tage tag-e2">Consiste en</p>
    <div className="slot slote slot-e2">
     Hacer algunas recomendaciones concretas de técnicas de afrontamiento
     positivo del estrés, recomendaciones de cómo mantener rutinas de sueño,
     rutinas de descanso y alimentación, proponer estrategias para generar
     actividad social, entre otras.
    </div>
    <p className="tag tage tag-e3">Ejemplo</p>
    <div className="slot slote slot-e3">
     "Ahora, quisiera entregarle este folleto [descargar folleto informativo],
     el cual contiene información sobre psico-educación en crisis, además de
     algunos contactos importantes con instituciones y redes de servicio
     psicológico y legal que puedan brindarle ayuda si llega a necesitarla a
     futuro.”
    </div>
    <p className="tag tage tag-e4">Informe</p>
    <div className="slot slote slot-e4">
     Psicoeducación hace referencia a la educación o información que se ofrece a
     las personas acerca de temas relacionados a una actividad o fenómeno
     psicológico que se relaciona con ellos, pudiendo así dar explicación a lo
     que les sucede y reforzar las fortalezas, los recursos y las habilidades
     propias.
    </div>
   </main>

   <img
    className="education_psy"
    src={education_psy}
    alt="Un chico explicando cosas a un chico y una chica"
   />
  </div>
 );
};

export default E;
