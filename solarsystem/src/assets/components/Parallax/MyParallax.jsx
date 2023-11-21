// MyParallax.jsx
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import "./Parallax.css";
import mouse from "../../img/mouse.png";
import sun from "../../img/sun.png";
import mercury from "../../img/mercury.png";

function MyParallax() {
  return (
    <Parallax pages={8} style={{ top: "0", left: "0" }}>
      {/* Capa de fondo (background) */}
      <ParallaxLayer offset={0} speed={1} factor={3} />

      {/* Contenido de la pridmera página */}
      <ParallaxLayer offset={0} speed={0.4}>
        <div
          style={{
            display: "flex",
            flexDirection: "column", // Cambio importante aquí
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
          }}
        >
          <h1>Bienvenido al sistema solar!</h1>
          <div>
            <img src={mouse}></img>
          </div>
        </div>
      </ParallaxLayer>

      {/*PRIMERAS ESTRELLAS*/}
      <ParallaxLayer offset={0} speed={1}>
        <div
          className="estrellasPequeñas"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
          }}
        ></div>
      </ParallaxLayer>

      <ParallaxLayer offset={0} speed={2}>
        <div
          className="estrellasMedianas"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
          }}
        ></div>
      </ParallaxLayer>

      {/* Contenido de la segunda página */}
      <ParallaxLayer offset={0.95} speed={0.3}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
          }}
        >
          <img src={sun} alt="Sol" style={{ maxWidth: "80%" }} />
        </div>
      </ParallaxLayer>
      <ParallaxLayer offset={0.95} speed={0.5}>
        <div
          className="estrellasMedianas"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
          }}
        ></div>
      </ParallaxLayer>




      <ParallaxLayer offset={1} speed={0.6}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            color: "white", // Cambia esto según el color de fondo
            fontSize: "16px", // Ajusta según sea necesario
          }}
        >
          <div style={{ textAlign: "center", maxWidth: "50%" }}>
            {" "}
            {/* Asegúrate de que el texto tenga espacio */}
            <h1>Este es el sol.</h1>
            <h2>Nos da calor y es ¡GIGAAANTE!</h2>
          </div>
        </div>
      </ParallaxLayer>

      {/* Contenido de la tercera página */}
      <ParallaxLayer offset={1.9} speed={0.8}>
      <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
          }}
        >
          <img src={mercury} alt="Sol" style={{ maxWidth: "80%" }} />
        </div>
      </ParallaxLayer>
      {/* Contenido de la 4 página */}

      <ParallaxLayer offset={1.9} speed={0.4}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            color: "white", // Cambia esto según el color de fondo
            fontSize: "16px", // Ajusta según sea necesario
          }}
        >
          <div style={{ textAlign: "center", maxWidth: "50%" }}>
            {" "}
            {/* Asegúrate de que el texto tenga espacio */}
            <h1>MERCURIO</h1>
            <h2>Está muy cerca del sol y aunque no lo creas, también hace mucho frió por la noche.</h2>
            <h2>Eso si, por el día hay que salir corriendo de allí o ¡¡¡hará mucha calor!!!</h2>
          </div>
        </div>
      </ParallaxLayer>


      <ParallaxLayer offset={3} speed={0.5}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
          }}
        >
          <p>Contenido de la cuarta página</p>
        </div>
      </ParallaxLayer>
      {/* Contenido de la 5 página */}
      <ParallaxLayer offset={4} speed={0.5}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
          }}
        >
          <p>Contenido de la 5 página</p>
        </div>
      </ParallaxLayer>
      {/* Contenido de la 6 página */}
      <ParallaxLayer offset={5} speed={0.5}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
          }}
        >
          <p>Contenido de la 6 página</p>
        </div>
      </ParallaxLayer>
      {/* Contenido de la 7 página */}
      <ParallaxLayer offset={6} speed={0.5}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
          }}
        >
          <p>Contenido de la 7 página</p>
        </div>
      </ParallaxLayer>
      {/* Contenido de la 8 página */}
      <ParallaxLayer offset={7} speed={0.5}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
          }}
        >
          <p>Contenido de la 8 página</p>
        </div>
      </ParallaxLayer>
    </Parallax>
  );
}

export default MyParallax;
