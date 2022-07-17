import React from "react";
import dont_symbol from "../assets/dont_symbol.webp";

const Dont = () => {
 return (
  <div className="dont-bg">
   <h2 className="title_dont">Qué NO debe Hacer</h2>
   <span className="dont_element">
    <img className="dont_symbol" src={dont_symbol} alt="simbolo de prohibido" />
    <p>
     No excederse en las facultades y atribuciones de la asistencia de Primeros
     Auxilios Psicológicos y limitarse a mantenerse al margen de la escucha
    </p>
   </span>
   <span className="dont_element">
    <img className="dont_symbol" src={dont_symbol} alt="simbolo de prohibido" />
    <p>
     No hablar acerca de temas religiosos, políticos, ni tampoco cuestionar las
     creencias personales
    </p>
   </span>
   <span className="dont_element">
    <img className="dont_symbol" src={dont_symbol} alt="simbolo de prohibido" />
    <p>
     Acortar las experiencias personales. Centrar la conversación en el afectado
    </p>
   </span>
   <span className="dont_element">
    <img className="dont_symbol" src={dont_symbol} alt="simbolo de prohibido" />
    <p>
     No haga de la conversación un interrogatorio, maneje un tono casual y
     amable. Estimule la fluidez en la conversación y ocupe preguntas abiertas
     centradas y transmita que señales de que se mantiene escuchando atentamente
    </p>
   </span>
   <span className="dont_element">
    <img className="dont_symbol" src={dont_symbol} alt="simbolo de prohibido" />
    <p>
     No aconsejar o decidir por la otra persona. Se pueden mostrar alternativas
     y resaltar oportunidades
    </p>
   </span>
   <span className="dont_element">
    <img className="dont_symbol" src={dont_symbol} alt="simbolo de prohibido" />
    <p>
     No juzgar la narrativa de la otra persona. Las preguntas que comienzan con
     “por qué...” pueden sonar como un juicio a la persona. Si bien son
     preguntas que buscan el origen del conflicto, la persona puede sentirse
     juzgada como la responsable del conflicto
    </p>
   </span>
  </div>
 );
};

export default Dont;
