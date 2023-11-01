import emailjs from "emailjs-com";

export const enviarCorreo = async (
  contactForm,
  setContactForm,
  setShowSuccess,
  setShowError,
  setMissingFields
) => {
  const serviceID = "tu_service_id"; // Reemplaza con tu Service ID de EmailJS
  const templateID = "tu_template_id"; // Reemplaza con tu Template ID de EmailJS
  const userID = "tu_user_id"; // Reemplaza con tu User ID de EmailJS

  const data = {
    to_email: "info@ushuaiasolutions.com", // Dirección de correo de destino
    message: "Este es el cuerpo del correo electrónico.",
  };

  await emailjs
    .send(serviceID, templateID, data, userID)
    .then((response) => {
      console.log("Correo enviado con éxito:", response);
      setShowSuccess(true);
      setContactForm({});
      setMissingFields([]);
    })
    .catch((error) => {
      setShowError(true);
      console.error("Error al enviar el correo:", error);
    });
};
