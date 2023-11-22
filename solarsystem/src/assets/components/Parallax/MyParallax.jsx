// MyParallax.jsx
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import "./Parallax.css";
import mouse from "../../img/mouse.png";
import sun from "../../img/sun.png";
import mercury from "../../img/mercury.png";
import venus from "../../img/venus.png";
import luna from "../../img/moon.png";
import tierra from "../../img/earth.png";
import marte from "../../img/mars.png";
import asteroides01 from "../../img/asteroids01.png";
import asteroides02 from "../../img/asteroids02.png";
import jupiter from "../../img/jupiter.png";
import satA from "../../img/satA.png";
import satB from "../../img/satB.png";
import satC from "../../img/satC.png";
import satD from "../../img/satD.png";
import satE from "../../img/satE.png";
import saturno from "../../img/saturn.png";
import satSaturno from "../../img/satSaturno.png";
import urano from "../../img/uranus.png";
import neptuno from "../../img/neptuno.png";
import pluton from "../../img/pluton.png";

function MyParallax() {
  return (
    <Parallax pages={13} style={{ top: "0", left: "0" }}>
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

      {/*PRIMERAS ESTRELLAS*/}
      <ParallaxLayer offset={2} speed={1}>
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
      {/*PRIMERAS ESTRELLAS*/}
      <ParallaxLayer offset={3} speed={1}>
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
      {/*PRIMERAS ESTRELLAS*/}
      <ParallaxLayer offset={4} speed={1}>
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
      {/*PRIMERAS ESTRELLAS*/}
      <ParallaxLayer offset={5} speed={1}>
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
      {/*PRIMERAS ESTRELLAS*/}
      <ParallaxLayer offset={6} speed={1}>
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
      {/*PRIMERAS ESTRELLAS*/}
      <ParallaxLayer offset={7} speed={1}>
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
      {/*PRIMERAS ESTRELLAS*/}
      <ParallaxLayer offset={7} speed={1}>
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
      {/*PRIMERAS ESTRELLAS*/}
      <ParallaxLayer offset={8} speed={1}>
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
      {/*PRIMERAS ESTRELLAS*/}
      <ParallaxLayer offset={1.8} speed={1}>
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
      {/*PRIMERAS ESTRELLAS*/}
      <ParallaxLayer offset={2.5} speed={1}>
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

      <ParallaxLayer offset={2.4} speed={0.5}>
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

      <ParallaxLayer offset={2.8} speed={0.5}>
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

      <ParallaxLayer offset={3.3} speed={0.5}>
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

      <ParallaxLayer offset={4.6} speed={0.8}>
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

      {/*PRIMERAS ESTRELLAS*/}
      <ParallaxLayer offset={7} speed={1}>
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

      <ParallaxLayer offset={7} speed={0.5}>
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
      {/*SOL*/}

      <ParallaxLayer offset={0.95} speed={0.4}>
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

      {/*TEXTO SOL*/}

      <ParallaxLayer offset={1} speed={0.5}>
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
            <h2>Nos da calor y es... ¡GIGAAANTE!</h2>
          </div>
        </div>
      </ParallaxLayer>

      {/*MERCURIO*/}
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

      {/*TEXTO MERCURIO*/}

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
            <h2>
              Está muy cerca del sol y aunque no lo creas, hace mucho frió por
              la noche.
            </h2>
            <h2>
              Eso si, por el día hay que salir corriendo de allí o ¡tendrás que
              echarte mucha crema solar!
            </h2>
          </div>
        </div>
      </ParallaxLayer>
      {/*VENUS*/}
      <ParallaxLayer offset={2.5} speed={0.7}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
          }}
        >
          <img src={venus} alt="Sol" style={{ maxWidth: "80%" }} />
        </div>
      </ParallaxLayer>
      <ParallaxLayer offset={2} speed={2}>
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
      {/*TEXTO VENUS*/}
      <ParallaxLayer offset={2.7} speed={1}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "end",
            height: "100%",
            color: "white", // Cambia esto según el color de fondo
            fontSize: "16px", // Ajusta según sea necesario
          }}
        >
          <div style={{ textAlign: "center", maxWidth: "50%" }}>
            {" "}
            {/* Asegúrate de que el texto tenga espacio */}
            <h1>VENUS</h1>
            <h2>Es muy brillante y puede verse al atardecer.</h2>
            <h2>
              Tiene un tamaño similar a La Tierra pero hace muchísima calor.
            </h2>
          </div>
        </div>
      </ParallaxLayer>
      {/*LA LUNA*/}
      <ParallaxLayer offset={3} speed={1.5}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
          }}
        >
          <img src={luna} alt="Sol" style={{ maxWidth: "80%" }} />
        </div>
      </ParallaxLayer>
      {/*LA TIERRA*/}
      <ParallaxLayer offset={3} speed={0.7}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
          }}
        >
          <img src={tierra} alt="Sol" style={{ maxWidth: "80%" }} />
        </div>
      </ParallaxLayer>

      {/*TEXTO LA TIERRA*/}
      <ParallaxLayer offset={3.1} speed={1}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
            alignItems: "end",
            textAlign: "right",
            height: "100%",
            color: "white", // Cambia esto según el color de fondo
            fontSize: "16px", // Ajusta según sea necesario
          }}
        >
          <div style={{ textAlign: "center", maxWidth: "50%" }}>
            {" "}
            {/* Asegúrate de que el texto tenga espacio */}
            <h1
              style={{
                flexGrow: 1, // Permite que el elemento hijo crezca para ocupar el espacio disponible
                textAlign: "right", // Alinea el texto a la derecha dentro del elemento hijo
              }}
            >
              LA TIERRA Y LA LUNA
            </h1>
            <h2
              style={{
                flexGrow: 1, // Permite que el elemento hijo crezca para ocupar el espacio disponible
                textAlign: "right", // Alinea el texto a la derecha dentro del elemento hijo
              }}
            >
              Nuestro hogar. Un diminuto punto azul en el firmamento al que
              debemos cuidar.
            </h2>
            <h2
              style={{
                flexGrow: 1, // Permite que el elemento hijo crezca para ocupar el espacio disponible
                textAlign: "right", // Alinea el texto a la derecha dentro del elemento hijo
              }}
            >
              La Luna, que gira a su alrededor como una peonza.
            </h2>
          </div>
        </div>
      </ParallaxLayer>

      {/*MARTE*/}
      <ParallaxLayer offset={4.5} speed={0.3}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
          }}
        >
          <img src={marte} alt="Sol" style={{ maxWidth: "80%" }} />
        </div>
      </ParallaxLayer>

      {/*TEXTO MARTE*/}
      <ParallaxLayer offset={4.4} speed={0.8}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
            alignItems: "end",
            textAlign: "right",
            height: "100%",
            color: "white", // Cambia esto según el color de fondo
            fontSize: "16px", // Ajusta según sea necesario
          }}
        >
          <div style={{ textAlign: "center", maxWidth: "50%" }}>
            {" "}
            {/* Asegúrate de que el texto tenga espacio */}
            <h1
              style={{
                flexGrow: 1, // Permite que el elemento hijo crezca para ocupar el espacio disponible
                textAlign: "left", // Alinea el texto a la derecha dentro del elemento hijo
              }}
            >
              MARTE
            </h1>
            <h2
              style={{
                flexGrow: 1, // Permite que el elemento hijo crezca para ocupar el espacio disponible
                textAlign: "left", // Alinea el texto a la derecha dentro del elemento hijo
              }}
            >
              Es un poco más pequeño que nuestro planeta. Su temperatura es muy
              baja.
            </h2>
            <h2
              style={{
                flexGrow: 1, // Permite que el elemento hijo crezca para ocupar el espacio disponible
                textAlign: "left", // Alinea el texto a la derecha dentro del elemento hijo
              }}
            >
              Se cree que en algún momento, Marte tuvo vida.
            </h2>
          </div>
        </div>
      </ParallaxLayer>
      {/*ASTEROIDES 01*/}
      <ParallaxLayer offset={5.4} speed={0.5}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
          }}
        >
          <img src={asteroides01} alt="Sol" style={{ maxWidth: "80%" }} />
        </div>
      </ParallaxLayer>
      {/*ASTEROIDES02*/}
      <ParallaxLayer offset={5.2} speed={1}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
          }}
        >
          <img src={asteroides02} alt="Sol" style={{ maxWidth: "80%" }} />
        </div>
      </ParallaxLayer>
      {/*ASTEROIDES 01*/}
      <ParallaxLayer offset={6.2} speed={0.5}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
          }}
        >
          <img src={asteroides01} alt="Sol" style={{ maxWidth: "80%" }} />
        </div>
      </ParallaxLayer>
      {/*ASTEROIDES02*/}
      <ParallaxLayer offset={5.8} speed={0.5}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
          }}
        >
          <img src={asteroides02} alt="Sol" style={{ maxWidth: "80%" }} />
        </div>
      </ParallaxLayer>
      {/*SATE*/}
      <ParallaxLayer offset={7} speed={0.7}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
          }}
        >
          <img src={satE} alt="Sol" style={{ maxWidth: "80%" }} />
        </div>
      </ParallaxLayer>
      {/*JUPITER*/}
      <ParallaxLayer offset={7.1} speed={0.4}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
          }}
        >
          <img src={jupiter} alt="Sol" style={{ maxWidth: "80%" }} />
        </div>
      </ParallaxLayer>
      {/*SATA*/}
      <ParallaxLayer offset={7} speed={1}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
          }}
        >
          <img src={satA} alt="Sol" style={{ maxWidth: "80%" }} />
        </div>
      </ParallaxLayer>
      {/*SATB*/}
      <ParallaxLayer offset={7} speed={0.6}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
          }}
        >
          <img src={satB} alt="Sol" style={{ maxWidth: "80%" }} />
        </div>
      </ParallaxLayer>
      {/*SATD*/}
      <ParallaxLayer offset={7} speed={0.2}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
          }}
        >
          <img src={satC} alt="Sol" style={{ maxWidth: "80%" }} />
        </div>
      </ParallaxLayer>
      {/*SATD*/}
      <ParallaxLayer offset={7} speed={0.9}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
          }}
        >
          <img src={satD} alt="Sol" style={{ maxWidth: "80%" }} />
        </div>
      </ParallaxLayer>
      {/*TEXTO JUPITER*/}
      <ParallaxLayer offset={7} speed={0.1}>
        <div
          style={{
            display: "flex",
            justifyContent: "end",
            width: "80%",
            alignItems: "end",
            textAlign: "right",
            height: "80%",
            color: "white", // Cambia esto según el color de fondo
          }}
        >
          <div style={{ textAlign: "right", maxWidth: "50%" }}>
            {" "}
            {/* Asegúrate de que el texto tenga espacio */}
            <h1
              style={{
                flexGrow: 1, // Permite que el elemento hijo crezca para ocupar el espacio disponible
                textAlign: "right", // Alinea el texto a la derecha dentro del elemento hijo
              }}
            >
              JÚPITER
            </h1>
            <h2
              style={{
                flexGrow: 1, // Permite que el elemento hijo crezca para ocupar el espacio disponible
                textAlign: "right", // Alinea el texto a la derecha dentro del elemento hijo
              }}
            >
              El planeta más grande del sistema solar.
            </h2>
            <h2
              style={{
                flexGrow: 1, // Permite que el elemento hijo crezca para ocupar el espacio disponible
                textAlign: "right", // Alinea el texto a la derecha dentro del elemento hijo
              }}
            >
              Tiene más de 60 satélites.
            </h2>
          </div>
        </div>
      </ParallaxLayer>

      {/*SATURNO*/}
      <ParallaxLayer offset={8} speed={0.9}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
          }}
        >
          <img src={saturno} alt="Sol" style={{ maxWidth: "80%" }} />
        </div>
      </ParallaxLayer>
      {/*SAT SATURNO*/}
      <ParallaxLayer offset={8} speed={0.5}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
          }}
        >
          <img src={satSaturno} alt="Sol" style={{ maxWidth: "80%" }} />
        </div>
      </ParallaxLayer>
      {/*TEXTO SATURNO*/}
      <ParallaxLayer offset={8} speed={0.3}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            width: "50%",
            alignItems: "center",
            height: "80%",
            color: "white", // Cambia esto según el color de fondo
          }}
        >
          <div style={{ textAlign: "center", maxWidth: "50%" }}>
            {" "}
            {/* Asegúrate de que el texto tenga espacio */}
            <h1
              style={{
                flexGrow: 1, // Permite que el elemento hijo crezca para ocupar el espacio disponible
                textAlign: "left", // Alinea el texto a la derecha dentro del elemento hijo
              }}
            >
              SATURNO
            </h1>
            <h2
              style={{
                flexGrow: 1, // Permite que el elemento hijo crezca para ocupar el espacio disponible
                textAlign: "left", // Alinea el texto a la derecha dentro del elemento hijo
              }}
            >
              Con sus imponentes anillos.
            </h2>
            <h2
              style={{
                flexGrow: 1, // Permite que el elemento hijo crezca para ocupar el espacio disponible
                textAlign: "left", // Alinea el texto a la derecha dentro del elemento hijo
              }}
            >
              Tiene más de 60 satélites.
            </h2>
          </div>
        </div>
      </ParallaxLayer>

      {/*URANO*/}
      <ParallaxLayer offset={9} speed={1}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
          }}
        >
          <img src={urano} alt="Sol" style={{ maxWidth: "80%" }} />
        </div>
      </ParallaxLayer>
      {/*TEXTO URANO*/}
      <ParallaxLayer offset={9} speed={0.3}>
        <div
          style={{
            display: "flex",
            justifyContent: "end",
            width: "80%",
            alignItems: "center",
            height: "80%",
            color: "white", // Cambia esto según el color de fondo
          }}
        >
          <div style={{ textAlign: "center", maxWidth: "50%" }}>
            {" "}
            {/* Asegúrate de que el texto tenga espacio */}
            <h1
              style={{
                flexGrow: 1, // Permite que el elemento hijo crezca para ocupar el espacio disponible
                textAlign: "left", // Alinea el texto a la derecha dentro del elemento hijo
              }}
            >
              URANO
            </h1>
            <h2
              style={{
                flexGrow: 1, // Permite que el elemento hijo crezca para ocupar el espacio disponible
                textAlign: "left", // Alinea el texto a la derecha dentro del elemento hijo
              }}
            >
              Con sus imponentes anillos.
            </h2>
            <h2
              style={{
                flexGrow: 1, // Permite que el elemento hijo crezca para ocupar el espacio disponible
                textAlign: "left", // Alinea el texto a la derecha dentro del elemento hijo
              }}
            >
              Tiene más de 60 satélites.
            </h2>
          </div>
        </div>
      </ParallaxLayer>

      {/*NEPTUNO*/}
      <ParallaxLayer offset={10} speed={1.5}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
          }}
        >
          <img src={neptuno} alt="Sol" style={{ maxWidth: "80%" }} />
        </div>
      </ParallaxLayer>
      {/*TEXTO NEPTUNO*/}
      <ParallaxLayer offset={10} speed={0.3}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            width: "50%",
            alignItems: "center",
            height: "80%",
            color: "white", // Cambia esto según el color de fondo
          }}
        >
          <div style={{ textAlign: "center", maxWidth: "50%" }}>
            {" "}
            {/* Asegúrate de que el texto tenga espacio */}
            <h1
              style={{
                flexGrow: 1, // Permite que el elemento hijo crezca para ocupar el espacio disponible
                textAlign: "left", // Alinea el texto a la derecha dentro del elemento hijo
              }}
            >
              NEPTUNO
            </h1>
            <h2
              style={{
                flexGrow: 1, // Permite que el elemento hijo crezca para ocupar el espacio disponible
                textAlign: "left", // Alinea el texto a la derecha dentro del elemento hijo
              }}
            >
              Con sus imponentes anillos.
            </h2>
            <h2
              style={{
                flexGrow: 1, // Permite que el elemento hijo crezca para ocupar el espacio disponible
                textAlign: "left", // Alinea el texto a la derecha dentro del elemento hijo
              }}
            >
              Tiene más de 60 satélites.
            </h2>
          </div>
        </div>
      </ParallaxLayer>

      {/*PLUTON*/}
      <ParallaxLayer offset={11} speed={1}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
          }}
        >
          <img src={pluton} alt="Sol" style={{ maxWidth: "80%" }} />
        </div>
      </ParallaxLayer>
      {/*TEXTO pluton*/}
      <ParallaxLayer offset={11} speed={0.3}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
            alignItems: "center",
            height: "80%",
            color: "white", // Cambia esto según el color de fondo
          }}
        >
          <div style={{ textAlign: "center", maxWidth: "50%" }}>
            {" "}
            {/* Asegúrate de que el texto tenga espacio */}
            <h1
              style={{
                flexGrow: 1, // Permite que el elemento hijo crezca para ocupar el espacio disponible
                textAlign: "center", // Alinea el texto a la derecha dentro del elemento hijo
              }}
            >
              y por último...PLUTÓN
            </h1>
            <h2
              style={{
                flexGrow: 1, // Permite que el elemento hijo crezca para ocupar el espacio disponible
                textAlign: "center", // Alinea el texto a la derecha dentro del elemento hijo
              }}
            >
              Con sus imponentes anillos.
            </h2>
            <h2
              style={{
                flexGrow: 1, // Permite que el elemento hijo crezca para ocupar el espacio disponible
                textAlign: "center", // Alinea el texto a la derecha dentro del elemento hijo
              }}
            >
              Tiene más de 60 satélites.
            </h2>
          </div>
        </div>
      </ParallaxLayer>

      <ParallaxLayer offset={12} speed={0.3}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
            alignItems: "center",
            height: "80%",
            color: "white", // Cambia esto según el color de fondo
          }}
        >
          <div style={{ textAlign: "center", maxWidth: "50%" }}>
            {" "}
            {/* Asegúrate de que el texto tenga espacio */}
            <h1
              style={{
                flexGrow: 1, // Permite que el elemento hijo crezca para ocupar el espacio disponible
                textAlign: "center", // Alinea el texto a la derecha dentro del elemento hijo
              }}
            >
              GRACIAS POR LLEGAR HASTA AQUÍ!
            </h1>
            <h2
              style={{
                flexGrow: 1, // Permite que el elemento hijo crezca para ocupar el espacio disponible
                textAlign: "center", // Alinea el texto a la derecha dentro del elemento hijo
              }}
            >
              Jesús Fernández | Creado con react-srping
            </h2>
          </div>
        </div>
      </ParallaxLayer>
    </Parallax>
  );
}

export default MyParallax;
