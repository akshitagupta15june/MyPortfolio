const emailjs = require('emailjs-com')

const submitForm = (e) => {
    e.preventDefault();
    emailjs.sendForm('akshita_gupta', 'template_pacau5b', 'contact-form', 'user_GiOLntWQJaFDEsf6eL2M0')
     .then(result => alert('Your message has been sent. I will be in contact with you soon.Thank you!'))
     .catch(err => alert('Oops! Please try again.'))

}

document.querySelector('.submitButton').addEventListener('click', submitForm)