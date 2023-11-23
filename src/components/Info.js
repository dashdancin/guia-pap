import React from "react";
import unam_logo from "../assets/unam.png";
import fpsic_logo from "../assets/FacPsic.png";

const Info = () => {
 return (
  <div className="info-section">
   <section className="info-credits">
   <h2>Contribuciones</h2>
    <div className="img-container-credits">
     <img className="credits-img" src={unam_logo} alt="corazon con vandita" />
     <img className="credits-img" src={fpsic_logo} alt="corazon con vandita" />
    </div>
    <span>
     <p>Lic. Omar García Betanzos.</p>
     <p>
      Licenciatura en Psicologia Facultad de Psicología. UNAM Desarrollador de
      software frontend.
     </p>
     <p>Autoria y Desarrollo.</p>
    </span>
    <span>
     <p>Dra. Juana Patlán Perez.</p>
     <p>
      Licenciatura en Administración de Empresas, Instituto Tecnológico de
      Pachuca. Maestra y Doctora en Administración, UNAM{" "}
     </p>
     <p>Dirección, Supervisión y Revisión documental.</p>
    </span>
    <span>
     <p>Mtra. Jeannette Tierrablanca Bermúdez</p>
     <p>
      Licenciatura en Psicología Facultad de Psicología, UNAM Maestra en Alta
      Dirección e Inteligencia Estratégic, IEU.
     </p>
     <p>Supervisión y Revisión documental.</p>
    </span>
    <span>
        <p>Contacto: comunicacion@auxiliopsicologico.com</p>
    </span>
   </section>
  </div>
 );
};

export default Info;
