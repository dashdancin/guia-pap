import React from "react";
import letter_B from "../assets/letter_B.png";
import breathing from "../assets/breathing.png";

const B = () => {
 return (
  <div className="bg-B">
   <section className="container-B">
    <h3 className="paso-B">PASO</h3>
    <h2 className="title-B">
     Respiración <br /> o Ventilación
    </h2>
    <img className="img_B" src={letter_B} alt="letra B" />
   </section>
   <main className="bx">
    <p className="tag tagb tag-b1">Objetivo</p>
    <div className="slot slot-b slot-b1">
     Los ejercicios de respiración tienen múltiples beneficios: <br />• Generan
     calma &nbsp;&nbsp; • Relajan el cuerpo &nbsp;&nbsp;• Nos ayuda a
     oxigenarnos mejor &nbsp;&nbsp;• Podemos evocar imágenes que nos
     tranquilicen
    </div>
    <p className="tag tagb tag-b2">Consiste en</p>
    <div className="slot slot-b slot-b2">
     Inspirar durante 4 tiempos, luego botar el aire durante 4 tiempos y en vez
     de volver a inspirar luego de haber botado el aire como normalmente lo
     haríamos, vamos a aguantar 4 tiempos más antes de volver a repetir el
     ciclo.
    </div>
    <p className="tag tagb tag-b3">Ejemplo</p>
    <div className="slot slot-b">
     “A continuación, vamos a hacer un ejercicio de respirción. Inhalé: un
     tiempo, dos, tres, cuatro. Ahora exhalé: un tiempo, dos, tres, cuatro y
     aguante: un tiempo, dos, tres, cuatro. Y volvemos a empezar”
    </div>
    <p className="tag tagb tag-b4">Explique</p>
    <div className="slot slot-b">
     Cuando sacamos el aire nos relajamos más que cuando inspiramos, por lo que
     podemos entrar en un estado de calma si prolongamos el tiempo en que
     nuestros pulmones están vacíos.
    </div>
   </main>

   <img
    className="breathing"
    src={breathing}
    alt="Una mujer inhalando  y exhalando"
   />
  </div>
 );
};

export default B;
