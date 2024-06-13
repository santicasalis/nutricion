import React from "react";
import styles from "../consult/consults.module.css";

export const Consults = () => {
  return (
    <div className={styles.consultsContainer}>
      <p>Estás a un paso de mejorar tu alimentación</p>
      <h1>Consultas</h1>
      <div className={styles.cardsContainer}>
        <div className={styles.cardContainer}>
          {" "}
          <img
            src="https://media.istockphoto.com/id/939585094/es/foto/mujer-nutricionista-trabajando-en-ordenador-port%C3%A1til.jpg?s=612x612&w=0&k=20&c=mhPqHim6wtpqIRK-BGIgQLA5-3zCQ5wYVSDHJM2AQbY="
            alt="Consulta nutricional"
            srcset=""
          />
          <h2 className={styles.consultas}>Consultas Online</h2>
          {/* <h4 className={styles.consultas}>
            Que la distancia no sea un impedimento
          </h4> */}
          <p>
            {" "}
            Realizamos consultas a través de videollamada (Meet), donde llevamos
            a cabo la evaluación nutricional. <br /> <br /><br />
            Durante la primera entrevista, te hacemos preguntas detalladas sobre
            hábitos, gustos, objetivos, salud, rutina diaria, entre otros. Con
            esta información, creamos un plan de alimentación personalizado
            según tus necesidades y metas. <br /> <br />
          </p>
          <a
           href="https://wa.link/ndjqym"
           target="_blank"
           rel="noopener noreferrer"
          >
            Reservá tu turno
          </a>
        </div>
        <div className={styles.cardContainer}>
          {" "}
          <img
            src=""
            alt=""
            srcset="https://media.istockphoto.com/id/1140134131/es/foto/experto-en-nutrici%C3%B3n-saludable-que-hace-un-plan-de-comidas-semanal-para-clientes.webp?b=1&s=170667a&w=0&k=20&c=7P5sFNwf4vuDKx64y-_LNhSNeZxFaZhUl6snDazL8yA="
          />
          <h2 className={styles.consultas}>Consultas Presenciales</h2>
          <p>
            En las consultas presenciales, ofrecemos un valor adicional al
            incluir la medición de la composición corporal mediante la
            Antropometría.
            <br />
            <br />
            <br /> Esta herramienta nos permite analizar en detalle aspectos
            como la masa grasa, muscular y ósea, proporcionando una visión más
            completa y personalizada de tu estado nutricional. <br />
            
            <br className={styles.brSectionUno} />
            <br className={styles.brSectionUno} />
          </p>
          <a
            href="https://wa.link/ndjqym"
            target="_blank"
            rel="noopener noreferrer"
          >
            Reservá tu turno
          </a>
        </div>
      </div>
    </div>
  );
};
