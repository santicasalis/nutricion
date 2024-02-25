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
          <img
            src="https://res.cloudinary.com/ddpmly8bf/image/upload/v1708902588/a7153c14-0905-47a5-b52c-9190ec265fc2_m9dspd.png"
            style={{ maxWidth: "400px", maxHeight: "400px" }}
            alt="Florencia"
          />
          <div className={styles.meContainer}>
            <div className={styles.points}>
              <h3>SOBRE MÍ</h3>
              <p>
                Soy Florencia Casalis, Licenciada en Nutrición graduada en la
                Universidad de Buenos Aires con una sólida formación en
                nutrición y especialización en Nutrición deportiva. Mi enfoque
                busca ayudar a las personas a mejorar sus hábitos y alcanzar sus
                objetivos, acompañándolos a través de planes de alimentación
                personalizados que se adapten a cada uno.
              </p>
            </div>
            <div className={styles.points}>
              <h3>MI FORMACIÓN</h3>
              <p>
                Me gradué en la Universidad de Buenos Aires, donde obtuve mi
                título como Licenciada en Nutrición. Durante mi educación,
                desarrolle una comprensión profunda de como la nutrición influye
                en todos los aspectos de nuestra vida, y como una alimentación
                saludable es fundamental para mantener o mejorar nuestra salud
                general.
              </p>
            </div>

            <div className={styles.points}>
              <h3> ESPECIALIZACIÓN EN NUTRICIÓN DEPORTIVA</h3>
              <p>
                Empecé la carrera sabiendo que lo que me apasionaba era la
                Nutrición deportiva. Próximo a recibirme, realicé cursos
                específicos sobre el tema donde pude profundizar y comprender la
                importancia de la alimentación en el rendimiento deportivo,
                desde deportistas amateur hasta deportistas de alto rendimiento.
                Mi objetivo es ayudarte a alcanzar tu máximo potencial a través
                de planes nutricionales personalizados adaptados a tu tipo de
                deporte, objetivos, entrenamiento, gustos, horarios, etc.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Me;
