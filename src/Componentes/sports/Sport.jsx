import React, { useEffect, useState } from "react";
import styles from "../sports/sport.module.css";
export const Sport = () => {
  const [backgroundIndex, setBackgroundIndex] = useState(0);

  const backgrounds = [
    "https://res.cloudinary.com/ddpmly8bf/image/upload/v1707699497/deporte_4_oy2ktj.jpg",
    "https://res.cloudinary.com/ddpmly8bf/image/upload/v1707697717/deporte3_eumydf.jpg",
    "https://res.cloudinary.com/ddpmly8bf/image/upload/v1707697698/deporte1_dkzm2e.jpg",
    // Agrega más URLs de imágenes según sea necesario
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setBackgroundIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
    }, 3000);

    return () => clearInterval(interval); // Limpia el intervalo cuando el componente se desmonta
  }, [backgroundIndex]);

  const currentBackground = backgrounds[backgroundIndex];

  return (
    <>
      <div
        className={styles.imgSport}
        style={{
          backgroundImage: `url(${currentBackground})`,
        }}
      >
        <h1 className={styles.titleSport}>
          Especialista en Nutrición deportiva <br />
          <br />
          Optimiza tu rendimiento y alcanza tus metas
        </h1>
        {/* <p>
          Descubre cómo la nutrición puede ayudarte
          <br /> a alcanzar tu máximo potencial
        </p> */}
      </div>
    </>
  );
};
