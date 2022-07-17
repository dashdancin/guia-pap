import principal from "../assets/principal.webp";
import orange_cruz from "../assets/orange_cruz.webp";

export default function Cover() {
 return (
  <div className="background-cover">
   <h1 className="title">
    GUÍA DE FORMACIÓN BÁSICA EN PRIMEROS AUXILIOS PSICOLÓGICOS
   </h1>
   <h2 className="subtitle">Para asistir a otros cuando más lo necesitan</h2>
   <figure className="figure-cover">
    <img className="img_cover" src={principal} alt="imagen de bienestar" />
   </figure>
   <section className="footer-container">
    <section className="textbox">
     <p>
      Basado en el Protocolo A B C D E <br /> para Primeros Auxilios
      Psicológicos <br /> de la Universidad Católica de Chile
     </p>
    </section>
    <picture>
     <img className="symbol_cruz" src={orange_cruz} alt="symbol_orange_cruz" />
    </picture>
   </section>
  </div>
 );
}
