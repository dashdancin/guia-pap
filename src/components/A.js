import React from "react";
import letter_A from "../assets/letter_A.jpg";
import help_consult from "../assets/help_consult.webp";

const A = () => {
 return (
  <div className="bg-A">
   <section className="container-A">
    <h3 className="paso-A">PASO</h3>
    <h2 className="title-A">Escucha activa</h2>
    <img className="img_A" src={letter_A} alt="letra A" />
   </section>
   <main>
    <p className="tag">Objetivo</p>
    <div className="slot">
     Es una comunicación centrada en escuchar al usuario, que empieza por
     generar un vínculo que permita al usuario explorar la crisis y motivar el
     desahogo.
    </div>
    <p className="tag tag2">Consiste en</p>
    <div className="slot">
     Permitir la expresion de los sentimientos del otro sin emitir juicios y
     limitarse a: Asentir, comunicar qué se escucha y usar el parafraseo para
     hacer sentir al otro escuchado y comprendido.
    </div>
    <p className="tag tag3">Ejemplo</p>
    <div className="slot">
     “Mi nombre es ___ y estoy aquí para ofrecerle mi ayuda. Solo si usted desea
     hablar de ello, vamos a conversar sobre lo que le ha pasado. Yo le voy a
     escuchar atentamente”
    </div>
    <p className="tag tag4">Puntos clave</p>
    <div className="slot">
     • Demostrar interés • Lograr una comunicación fluida • Dar espacio a
     expresiones como el llanto y el enojo • Mantener el foco en el discurso de
     la otra persona • No aconsejar
    </div>
   </main>

   <img
    className="img_consult"
    src={help_consult}
    alt="Dos mujeres conversando"
   />
  </div>
 );
};

export default A;
