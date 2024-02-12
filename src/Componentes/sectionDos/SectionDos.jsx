import styles from "../sectionDos/sectionDos.module.css";
import { TbReportAnalytics } from "react-icons/tb";
import { FaCalendarAlt } from "react-icons/fa";
import { FaUserGroup } from "react-icons/fa6";
function SectionDos() {
  const cards = [
    {
      title: "Gestión de Nutrición Deportiva",
      imageSrc: "https://cdn-icons-png.flaticon.com/128/763/763891.png",
      description:
        "Optimiza tu rendimiento físico y alcanza tus metas deportivas",
    },
    {
      title: "Planificación de Dietas Personalizadas",
      imageSrc: "https://cdn-icons-png.flaticon.com/128/747/747310.png",
      description:
        "Haremos una evaluación inicial para identificar cuáles son tus objetivos y poder ofrecerte las herramientas que necesitas.",
    },
    {
      title: "Apoyo Constante",
      imageSrc: "https://cdn-icons-png.flaticon.com/128/4117/4117222.png",
      description:
        "Trabajaremos en equipo para superar obstáculos y celebrar tus logros.",
    },
  ];

  return (
    <>
      <div className={styles.container}>
        <h1>
          Descubre tu Mejor Versión <br />
          en 3 pasos{" "}
        </h1>
        <div className={styles.cardContainer}>
          <div className={styles.card}>
            <TbReportAnalytics
              style={{ fontSize: "70px", color: "#f2e9dc", marginTop: "2rem" }}
            />
            <div className={styles.titulo}>
              <h3>Evaluación Nutricional</h3>
              <div className={styles.descripcionCard}>
                En nuestra primera consulta, Te conoceremos a fondo, indagaremos
                sobre tus hábitos, gustos, metas y rutinas de entrenamiento.
                Esta información nos permite ofrecerte un enfoque personalizado
                que nos llevará juntos a alcanzar tus objetivos.
              </div>
            </div>
          </div>
          <div className={styles.card}>
            <FaCalendarAlt
              style={{ fontSize: "70px", color: "#f2e9dc", marginTop: "2rem" }}
            />
            <div className={styles.titulo}>
              <h3>Mejorá tus Hábitos</h3>
              <div className={styles.descripcionCard}>
                Me aseguro de educarte sobre la alimentación adecuada antes,
                durante y después de tus entrenamientos o actividades diarias.
                Juntos, estableceremos pautas nutricionales personalizadas que
                te impulsen hacia un rendimiento óptimo y un estilo de vida
                saludable.
              </div>
            </div>
          </div>
          <div className={styles.card}>
            <FaUserGroup
              style={{ fontSize: "70px", color: "#f2e9dc", marginTop: "2rem" }}
            />
            <div className={styles.titulo}>
              <h3>Mejorá tu rendimiento</h3>
              <div className={styles.descripcionCard}>
                Juntos, trazamos un plan de alimentación personalizado diseñado
                específicamente para tus necesidades y objetivos.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SectionDos;
