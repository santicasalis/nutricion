import styles from "../whatsApp/whatsApp.module.css";

const WhatsApp = () => {
  return (
    <a
      href="https://wa.me/5491138989305"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src="https://cdn-icons-png.flaticon.com/128/733/733585.png"
        alt="WhatsApp"
        className={styles.whatsappIcon}
        title="Haga clic para chatear en WhatsApp"
      />
    </a>
  );
};

export default WhatsApp;
