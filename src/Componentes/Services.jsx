import PropTypes from "prop-types";
import "D:/nutricion-flor/nutricion-flor/src/Estilos/services.css";

const Services = ({ title }) => {
  return (
    <>
      <div className="cardHover">
        <div className="servicesCard">
          <div>
            {" "}
            <img src="/src/assets/frutas.jpg" alt="" />
          </div>
          <h3>{title}</h3>
        </div>
      </div>
    </>
  );
};
Services.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imagen: PropTypes.string.isRequired,
};

export default Services;
