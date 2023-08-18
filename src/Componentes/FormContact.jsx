import { useState } from "react";
import "D:/nutricion-flor/nutricion-flor/src/Estilos/formContact.css";

function FormContact() {
  const [formData, setFormData] = useState({
    name: "",
    secondName: "",
    email: "",
    message: "",
  });

  const handleInputChange = () => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    event.preventDefault();
    console.log("datos enviados", formData),
      setFormData({
        name: "",
        secondName: "",
        email: "",
        message: "",
      });
  };

  return (
    <>
      <div className="formContainer">
        <img className="margarita" src="/src/assets/margarita.jpg" alt="" />

        <div className="formularioContainer">
          <div className="contactame">
            <img src="/src/assets/profilAzulChica.png" alt="" />
            <h1>
              Dejame tu <br /> consulta
            </h1>
          </div>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              placeholder="Nombre"
              className="inputForm"
            />

            <input
              type="text"
              name="secondName"
              id="secondName"
              value={formData.secondName}
              onChange={handleInputChange}
              required
              placeholder="Apellido"
              className="inputForm"
            />

            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              placeholder="Correo electrónico"
              className="inputForm"
            />

            <textarea
              name="message"
              id="message"
              value={formData.message}
              onChange={handleInputChange}
              required
              placeholder="Escribe un mensaje"
              className="inputForm"
            ></textarea>

            <button className="inputForm" type="submit">
              Enviar
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default FormContact;
