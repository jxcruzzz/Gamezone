import ContactForm from '../../Components/ContactForm/ContactForm'
import './Contact.css'

function Contact() {
  return (
    <div className="contact">
      <h1>Contáctanos</h1>
      <div className="contact-container">
        <div className="contact-info">
          <h3>Información de contacto</h3>
          <p>C. Cam. al Batan S/n, Lomas de San Alfonso, 72575 Heroica Puebla de Zaragoza, Pue.</p>
          <p>contacto@gamezone.com</p>
          <p>Ing. Angel Eduardo Fong Estrada <br></br>
          +52 221 437 6788</p>
          <p>Lun-Vie: 9:00 - 18:00</p>
          <p>Sab-Dom: 10:00 - 4:00</p>
        </div>
        <ContactForm />
      </div>
    </div>
  )
}

export default Contact