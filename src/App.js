import React, { useState } from "react";

const normalizar = (texto) => {
  return texto
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, " ")
    .trim();
};

const dataOriginal = {
  "Brayan Ernesto Rivas Peña": "Brayan, felicidades por haber alcanzado este logro. Todo el esfuerzo que pusiste se refleja claramente hoy. Disfruta este momento, porque realmente te lo ganaste.",
  
  "Keiry Alexandra Quijada Pérez": "Keiry, lo lograste. Todo el trabajo que hiciste valió la pena y hoy puedes verlo reflejado. Quédate con este momento, porque es resultado de tu dedicación.",
  
  "Natalia Melissa Monterroza Castillo": "Natalia, felicidades por llegar hasta aquí. Este logro demuestra todo lo que has construido con tu esfuerzo. Hoy se nota todo el camino que recorriste.",
  
  "Josué David Hernández Alvarado": "Josué, lo conseguiste. Todo el empeño que pusiste en cada práctica hoy tiene sentido. Este es un momento para sentirte orgulloso de lo que lograste.",
  
  "Javier Edgardo González Díaz": "Javier, felicidades por este gran paso. Todo tu esfuerzo se ve reflejado en este resultado. Valió la pena cada momento que invertiste.",
  
  "Marilyn Janella Mendez Avalos": "Marilyn, felicidades por este logro tan importante. Has demostrado lo que eres capaz de hacer. Y de verdad, me alegra mucho verte lograrlo ❤️, eso me hace muy feliz y quizas te diga el viernes algo importante. ",
  
  "Ashly Lissette Guerra Arévalo": "Ashly, lo lograste. Todo tu esfuerzo se nota en este resultado. Este es un momento que te pertenece completamente.",
  
  "Débora Alexandra Sánchez Rivera": "Débora, felicidades por este logro. Cada paso que diste te trajo hasta aquí. Ahora puedes ver lo que construiste con tu dedicación.",
  
  "Aldo Enrique Barriere García": "Aldo, felicidades por alcanzar esta meta. Todo el trabajo que hiciste tuvo su resultado. Hoy se ve reflejado en este logro.",
  
  "Leonardo Fabricio López Franco": "Leonardo, lo lograste. Este es un paso importante y se nota el esfuerzo que pusiste. Sigue adelante, porque esto es solo una parte de lo que puedes lograr.",
  
  "Carlos Ezequiel Tovar Jovel": "Carlos, felicidades por este logro. Todo lo que aprendiste ahora tiene un resultado real. Este momento habla por sí solo.",
  
  "Mateo Antonio Menjivar Melara": "Mateo, felicidades por este logro. Todo el esfuerzo que hiciste dio resultado. Quédate con este momento, porque lo construiste tú.",
  
  "Madelinne Beatriz Pineda Pimentel": "Madelinne, lo lograste. Este resultado refleja tu dedicación. Disfruta este momento, porque realmente lo mereces.",
  
  "Briseyda Marisela Zarpate Aguilar": "Briseyda, felicidades por este logro. Todo el camino que recorriste te llevó hasta aquí. Se nota todo tu esfuerzo.",
  
  "Stephanie Michelle Figueroa Henriquez": "Stephanie, felicidades por este paso. Todo lo que aprendiste hoy se convierte en algo real. Este es solo el inicio de muchas cosas más.",
  
  "Adriana Valeria Guerrero Rivas": "Adriana, lo lograste. Este resultado refleja todo tu esfuerzo. Sigue adelante, porque tienes mucho más por lograr.",
  
  "Ingrid Tatiana Marin Mejia": "Ingrid, felicidades por este logro. Has demostrado todo lo que eres capaz de hacer. Hoy se ve reflejado tu esfuerzo.",
  
  "Jennifer Stefany Martínez Belloso": "Jennifer, lo conseguiste. Todo el trabajo que hiciste hoy tiene su recompensa. Este momento es tuyo.",
  
  "Danilo Antonio Granados Marenco": "Danilo, felicidades por este logro. Todo el esfuerzo que pusiste se nota. Esto es solo el comienzo de algo más grande.",
  
  "Rocío de los Ángeles Reyes Marroquín": "Rocío, felicidades por llegar hasta aquí. Todo lo que hiciste te trajo a este momento. Disfrútalo.",
  
  "Daniela Patricia López Guardado": "Daniela, lo lograste. Este resultado demuestra tu esfuerzo. Es un momento para sentirte orgullosa.",
  
  "Elias Josue De Jesus Ortega": "Elías, felicidades por este logro. Todo tu esfuerzo se refleja claramente hoy. Este momento habla por ti.",
  
  "Keyli Tatiana Ramírez Hernández": "Keyli, felicidades por este paso. Todo el trabajo que hiciste valió la pena. Sigue adelante.",
  
  "Johanna Alejandra Rosales Cornejo": "Johanna, lo lograste. Este logro es una muestra de todo tu esfuerzo. Esto apenas comienza.",
  
  "Elmer Mauricio Guevara Moreno": "Elmer, felicidades por este resultado. Todo tu esfuerzo ha valido la pena. Se nota todo lo que hiciste.",
  
  "Alan Ismael Méndez Hernández": "Alan, lo conseguiste. Este es un paso importante. Sigue avanzando con esa misma determinación.",
  
  "Fátima Gabriela Hernández González": "Fátima, felicidades por este logro. Has demostrado tu compromiso y dedicación. Este momento es tuyo.",
  
  "Christopher Wilfredo Flamenco Rivera": "Christopher, Merecias ganar willy la verdad lo siento, siento que tuve que apoyarte más en esta certificación te defraude y por eso me perdono contigo.",
  
  "José Mateo Orellana Arriaza": "José, lo lograste. Todo tu esfuerzo hoy tiene sentido. Este es un momento importante.",
  
  "Cristofher Gerar Hernandez Guzman": "Cristofher, felicidades por este logro. Todo el trabajo que hiciste se ve reflejado ahora.",
  
  "Yoselin Guadalupe Rodríguez Salinas": "Yoselin, felicidades por este logro. Todo tu esfuerzo dio frutos. Este momento es tuyo.",

  "Irvin Pineda": "Fue un gusto haber recibido sus clases fueron las mejores de todas el conocimiento, el apoyo y sobre todo ser una gran ayuda para dar dirección a nuestras vidas. Y solo eso es algo que todo tercer año tendra en el corazón ya que eso nunca se olvida es como una chispa que queda para dar una luz guía y de apoyo en los momentos más oscuros y lo vemos pronto. Y como dice ME DEPIERTO ME LEVANTO TRIUNFO. -Con mucho aprecio y cariño todo 3° año."
};

const data = Object.fromEntries(
  Object.entries(dataOriginal).map(([nombre, frase]) => [
    normalizar(nombre),
    frase
  ])
);

export default function App() {
  const [nombre, setNombre] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [vista, setVista] = useState("inicio");

  const buscar = () => {
    const nombreNormalizado = normalizar(nombre);
    const entrada = Object.entries(data).find(([key]) =>
      key.includes(nombreNormalizado)
    );

    if (entrada) {
      setMensaje(entrada[1]);
      setVista("resultado");
    } else {
      alert("Nombre no encontrado");
    }
  };

  if (vista === "inicio") {
    return (
      <div style={styles.fondo}>
        <div style={styles.card}>
          <h1 style={styles.titulo}>🎓 Certificación Excel</h1>
          <p style={styles.subtitulo}>
            Escribe tu nombre para ver tu felicitación
          </p>

          <input
            type="text"
            placeholder="Escribe tu nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            style={styles.input}
          />

          <button onClick={buscar} style={styles.boton}>
            Ver felicitación 🎉
          </button>
        </div>
      </div>
    );
  }

  return (
    <div style={styles.resultadoFondo}>
      <div style={styles.resultadoCard}>
        <h1 style={styles.nombreGrande}>{nombre}</h1>
        <p style={styles.mensajeGrande}>{mensaje}</p>

        <button onClick={() => setVista("inicio")} style={styles.botonVolver}>
          Volver
        </button>
      </div>
    </div>
  );
}

const styles = {
  fondo: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #14532d, #22c55e, #4ade80)",
    fontFamily: "Arial"
  },
  card: {
    background: "white",
    padding: "40px",
    borderRadius: "20px",
    width: "380px",
    textAlign: "center",
    boxShadow: "0 20px 40px rgba(0,0,0,0.2)"
  },
  titulo: {
    fontSize: "28px",
    fontWeight: "bold",
    color: "#166534"
  },
  subtitulo: {
    marginBottom: "15px",
    color: "#555"
  },
  input: {
    width: "100%",
    padding: "12px",
    marginBottom: "15px",
    borderRadius: "10px",
    border: "1px solid #ccc"
  },
  boton: {
    width: "407px",
    padding: "12px",
    background: "#16a34a",
    color: "white",
    border: "none",
    borderRadius: "10px",
    height: "50px"
  },
  resultadoFondo: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#052e16"
  },
  resultadoCard: {
    color: "white",
    textAlign: "center",
    maxWidth: "700px"
  },
  nombreGrande: {
    fontSize: "42px",
    marginBottom: "20px"
  },
  mensajeGrande: {
    fontSize: "24px",
    lineHeight: "1.5"
  },
  botonVolver: {
    marginTop: "20px",
    padding: "10px 20px",
    borderRadius: "10px",
    border: "none"
  }
};