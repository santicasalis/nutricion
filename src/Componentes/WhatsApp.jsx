import "../Estilos/whatsapp.css";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/5491139243705"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src="https://cdn-icons-png.flaticon.com/128/733/733585.png"
        alt="WhatsApp"
        className="whatsapp-icon"
        title="Haga clic para chatear en WhatsApp"
      />
    </a>
  );
};

export default WhatsAppButton;
