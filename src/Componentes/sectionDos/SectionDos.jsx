import styles from "../sectionDos/sectionDos.module.css";

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
        <h1>Ofreciéndote las herramientas para que alcances tus metas </h1>
        <div className={styles.cardContainer}>
          {cards.map((card, index) => (
            <div className={styles.card} key={index}>
              <img src={card.imageSrc} alt={card.title} />
              <div className={styles.titulo}>
                <h3>{card.title}</h3>
                <div className={styles.descripcionCard}>{card.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default SectionDos;
