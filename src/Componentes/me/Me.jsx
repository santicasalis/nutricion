import styles from "../me/me.module.css";
import florchicac from "../../assets/florchicac.png";

const Me = () => {
  return (
    <>
      <div className={styles.welcome}>
        <div className={styles.bienvenidos}>
          <h1>¡Bienvenidos a mi Mundo Nutricional!</h1>

          <p>
            Hola, soy Florencia Casalis, y mi pasión por la nutrición me ha
            llevado a convertir mi amor por el bienestar en una carrera
            apasionante. Con una sólida formación en nutrición y una
            especialización en nutrición deportiva, estoy comprometida en
            ayudarte a alcanzar tus objetivos de salud y rendimiento a través de
            una alimentación inteligente y consciente.
          </p>
        </div>
        <div className={styles.meLayout}>
          <img src={florchicac} alt="Florencia" />
          <div className={styles.meContainer}>
            <div className={styles.points}>
              <h3>Mi Historia y Formación</h3>
              <p>
                Me gradué en la Universidad de Buenos Aires, donde obtuve mi
                título en Nutrición. Durante mi educación, desarrollé una
                comprensión profunda de cómo la nutrición influye en todos los
                aspectos de nuestra vida, desde la energía que sentimos hasta
                nuestra salud general. Mi búsqueda de conocimiento no se detiene
                ahí, ya que estoy comprometida con la educación continua y el
                aprendizaje de las últimas investigaciones y tendencias en el
                campo de la nutrición.
              </p>
            </div>
            <div className={styles.points}>
              <h3>Especialización en Nutrición Deportiva</h3>
              <p>
                Mi viaje me llevó a descubrir mi pasión por la nutrición
                deportiva. He invertido tiempo y esfuerzo en convertirme en una
                experta en el ámbito, comprendiendo cómo la alimentación puede
                potenciar el rendimiento atlético. Desde atletas de alto
                rendimiento hasta aficionados del fitness, mi objetivo es
                ayudarte a alcanzar tu máximo potencial a través de estrategias
                nutricionales personalizadas.
              </p>
            </div>

            <div className={styles.points}>
              <h3> Más que una Dieta, un Estilo de Vida</h3>
              <p>
                Mi objetivo no es simplemente proporcionarte una dieta temporal,
                sino equiparte con las herramientas para adoptar un estilo de
                vida saludable y sostenible. Juntos, exploraremos tus
                preferencias alimentarias y encontrarás formas de disfrutar los
                alimentos mientras trabajamos hacia tus objetivos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Me;
