import getDay from "date-fns/getDay";

export const handleChange = (id, value, setContactForm, contactForm) => {
  setContactForm({ ...contactForm, [id]: value });
};

export const handleSend = (contactForm, setShowSuccess, setContactForm) => {
  if (
    contactForm?.name?.length > 0 &&
    contactForm?.mail?.length > 0 &&
    contactForm?.country?.length > 0 &&
    contactForm?.company?.length > 0 &&
    contactForm?.date_reunion?.length > 0
  ) {
    setShowSuccess(true);
    setContactForm({});
  }
};

export const isWeekday = (date) => {
  const day = getDay(date);
  return day !== 0 && day !== 6;
};
