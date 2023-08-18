import PropTypes from "prop-types";
import "../Estilos/services.css";
import frutas from "../assets/frutas.jpg";
const Services = ({ title }) => {
  return (
    <>
      <div className="cardHover">
        <div className="servicesCard">
          <div>
            {" "}
            <img src={frutas} alt={title} />
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
