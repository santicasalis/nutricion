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
            {/* <div className={styles.points}>
              <h3> Enfoque Personalizado</h3>
              <p>
                Cada individuo es único y merece un enfoque de nutrición
                adaptado a sus necesidades y objetivos específicos. Mi enfoque
                se basa en escucharte, comprender tus metas y desafíos, y
                trabajar juntos para desarrollar un plan alimentario que sea
                práctico y efectivo. Creo en empoderarte con el conocimiento
                necesario para tomar decisiones informadas sobre tu salud y
                nutrición.
              </p>
            </div> */}
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

            {/* <div className="points">
              <h3>Colaboración y Apoyo Constante</h3>
              <p>
                El camino hacia una mejor salud y rendimiento es un viaje en el
                que te acompaño en cada paso. Trabajaremos en equipo para
                superar obstáculos y celebrar tus logros. Mi compromiso es
                brindarte apoyo constante y motivación mientras trabajamos
                juntos hacia una vida más saludable y plena.
              </p>

              <p>
                Estoy emocionada de conocerte y ser parte de tu camino hacia el
                bienestar. ¡Juntos, lograremos metas increíbles a través de la
                nutrición y el compromiso!
              </p>
            </div> */}
          </div>

          <img src={florchicac} alt="Florencia" />
        </div>
      </div>
    </>
  );
};

export default Me;
