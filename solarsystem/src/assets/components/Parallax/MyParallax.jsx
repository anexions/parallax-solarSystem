// MyParallax.jsx
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import "./Parallax.css";

function MyParallax() {
  return (
    <Parallax pages={3} style={{ top: "0", left: "0" }}>
      {/* Capa de fondo (background) */}
      <ParallaxLayer
        offset={0}
        speed={1}
        factor={3}
        style={{ backgroundColor: "#242237" }}
      />

      {/* Contenido de la pridmera página */}
      <ParallaxLayer offset={0} speed={0.4}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
          }}
        >
          <h1>Bienvenido al sistema solar!</h1>
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
      <ParallaxLayer offset={1} speed={0.5}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
          }}
        >
          <p>Contenido de la segunda página</p>
        </div>
      </ParallaxLayer>

      {/* Contenido de la tercera página */}
      <ParallaxLayer offset={2} speed={0.5}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
          }}
        >
          <p>Contenido de la tercera página</p>
        </div>
      </ParallaxLayer>
    </Parallax>
  );
}

export default MyParallax;
