import emailjs from '@emailjs/browser';

export const sendEmail = (serviceId,templateId,currentForm,publicKey) => {
    emailjs.sendForm(serviceId, templateId, currentForm, publicKey)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };