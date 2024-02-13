import { useRef, useState } from "react";
import styles from "../formContact/formContact.module.css";
import profilAzulChica from "../../assets/profilAzulChica.png";
import margarita from "../../assets/margarita.jpg";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
function FormContact() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const initialValues = {
    nombre: "",
    apellido: "",
    email: "",
    mensaje: "",
  };
  const validationSchema = Yup.object().shape({
    nombre: Yup.string().required("El nombre es obligatorio"),
    nombre: Yup.string().required("El apellido es obligatorio"),
    email: Yup.string()
      .email("El email no es válido")
      .required("El email es obligatorio"),
    mensaje: Yup.string().required("El mensaje es obligatorio"),
  });

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      setIsSubmitting(true);

      // Your form submission logic here
      await emailjs.sendForm(
        "service_z2rj20r",
        "template_bu1w8c7",
        form.current,
        {
          publicKey: "PyBdXNdSyECQEKVgA",
        }
      );

      Swal.fire({
        position: "center",
        icon: "success",
        title: "El mensaje se envió correctamente",
        showConfirmButton: false,
        timer: 1500,
      });
      resetForm();
    } catch (error) {
      console.error("Error sending email:", error);
    } finally {
      setIsSubmitting(false);
      setSubmitting(false);
    }
  };
  const form = useRef();
  return (
    <div className={styles.formContainer}>
      <img className={styles.margarita} src={margarita} alt="" />

      <div className={styles.formularioContainer}>
        <div className={styles.contactame}>
          <img src={profilAzulChica} alt="" />
          <h1>
            Dejame tu <br /> consulta
          </h1>
        </div>
        {isSubmitting && <p>Formulario enviado correctamente</p>}
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form ref={form} className={styles.formResponsive}>
            <div className={styles.labelInput}>
              <label htmlFor="nombre"></label>
              <Field
                className={styles.inputField}
                name="nombre"
                id="nombre"
                placeholder="Nombre"
              />
              <ErrorMessage
                name="nombre"
                component="div"
                className={styles.error}
              />
              <label htmlFor="apellido"></label>
              <Field
                className={styles.inputField}
                name="apellido"
                id="apellido"
                placeholder="Apellido"
              />
              <ErrorMessage
                name="apellido"
                component="div"
                className={styles.error}
              />

              <label htmlFor="email"></label>
              <Field
                name="email"
                id="email"
                type="email"
                placeholder="Correo electrónico"
                className={styles.inputField}
              />
              <ErrorMessage
                name="email"
                component="div"
                className={styles.error}
              />

              <label htmlFor="mensaje"></label>
              <Field
                name="mensaje"
                id="mensaje"
                as="textarea"
                placeholder="Escriba su mensaje"
                className={styles.textAreaField}
              />
              <ErrorMessage
                name="mensaje"
                component="div"
                className={styles.error}
              />
            </div>
            <button
              type="submit"
              className={styles.buttonSubmit}
              disabled={isSubmitting}
            >
              Enviar
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
}

export default FormContact;
