import React from "react";
import check from "../assets/check.webp";

const Do = () => {
 return (
  <div className="do_bg">
   <h2 className="title_do">Qué SI debe hacer</h2>
   <div>
    <span className="do_element">
     <img className="check" src={check} alt="casilla con palomita" />
     <p>
      <b>Validar:</b> Es una forma de normalizar y aceptar los sentimientos que
      surgen en una situación determinada. Al normalizar y validar las emociones
      de nuestro interlocutor generamos espacio para que se siga comunicando y
      para que se sienta comprendido
     </p>
    </span>
    <span className="do_element">
     <img className="check" src={check} alt="casilla con palomita" />
     <p>
      <b>Connotaciones positivas:</b> se parecen a un halago en que ambas
      resaltan un rasgo positivo, pero en el caso de la connotación positiva
      este se conecta con una acción específica. Es una técnica que busca
      empoderar al interlocutor y poner en evidencia sus capacidades
     </p>
    </span>
    <span className="do_element">
     <img className="check" src={check} alt="casilla con palomita" />
     <p>
      <b>Reformulación:</b> busca retomar las palabras de nuestro interlocutor
      en una suerte de resumen, pero ponerlo en nuestras propias palabras la
      reformulación aporta una novedad. Al reformular tenemos que escuchar no
      solo el contenido, sino también el mensaje que se quiere comunicar
     </p>
    </span>
    <span className="do_element">
     <img className="check" src={check} alt="casilla con palomita" />
     <p>
      <b>Formulaciones tentativas:</b> son parecidas a las reformulaciones, pero
      en este caso estamos buscando confirmar si comprendimos correctamente. Por
      lo tanto las formulaciones tentativas no van a ser afirmaciones plenas,
      sino que incluyen palabras o comentarios para que nuestro interlocutor nos
      corrija si no son acertadas
     </p>
    </span>
    <span className="do_element">
     <img className="check" src={check} alt="casilla con palomita" />
     <p>
      <b>Hacer preguntas abiertas:</b> Realizar preguntas que permitan la
      expresión de las emociones y se enfoquen en explorar el asunto que más
      preocupa al usuario.
     </p>
    </span>
   </div>
  </div>
 );
};

export default Do;
