import "D:/nutricion-flor/nutricion-flor/src/Estilos/sectionDos.css";

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
      <div className="container">
        <h1>Ofreciéndote las herramientas para que alcances tus metas </h1>
        <div className="card-container">
          {cards.map((card, index) => (
            <div className="card" key={index}>
              <img src={card.imageSrc} alt={card.title} />
              <div className="titulo">
                <h3>{card.title}</h3>
                <div className="descripcion-card">{card.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default SectionDos;
