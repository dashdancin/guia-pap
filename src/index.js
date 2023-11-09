import ReactDOM from "react-dom/client";
import "./index.css";
import "./styles/media.css";
import "./styles/abcde.css";
import "./styles/abcdemedia.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// Verificar si el navegador admite Service Workers
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/service-worker.js") // Ruta al archivo service-worker.js
      .then((registration) => {
        console.log("Service Worker registrado con éxito:", registration);
      })
      .catch((error) => {
        console.log("Error al registrar el Service Worker:", error);
      });
  });
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

<<<<<<< HEAD
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/service-worker.js')
        .then(registration => {
          console.log('Service Worker registrado con éxito:', registration);
        })
        .catch(error => {
          console.log('Error al registrar el Service Worker:', error);
        });
    });
  }
  
=======
// Si deseas medir el rendimiento de tu aplicación, puedes utilizar reportWebVitals.
>>>>>>> b7dab3488934a6d195e3dabb25d5382057ab762a
reportWebVitals();

