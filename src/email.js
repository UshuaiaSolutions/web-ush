import emailjs from "emailjs-com";

export const enviarCorreo = async (
  contactForm,
  setContactForm,
  setShowSuccess,
  setShowError,
  setMissingFields
) => {
  const serviceID = "service_qblgztt"; // Reemplaza con tu Service ID de EmailJS
  const templateID = "template_iq7cfym"; // Reemplaza con tu Template ID de EmailJS
  const publicKey = "H6NhML3hqpcrhssuQ"; // Reemplaza con tu User ID de EmailJS

  var fechaOriginal = new Date(contactForm.date_reunion);
  var dia = fechaOriginal.getDate();
  var mes = fechaOriginal.getMonth() + 1;
  var anio = fechaOriginal.getFullYear();

  const data = {
    user_name: contactForm.name,
    user_company: contactForm.company,
    user_email: contactForm.mail,
    user_country: contactForm.country,
    user_meeting: contactForm.quiereReu
      ? "Sí. " + dia + "/" + mes + "/" + anio
      : "No",
    message: contactForm.comment ? contactForm.comment : "",
  };

  await emailjs
    .send(serviceID, templateID, data, publicKey)
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
