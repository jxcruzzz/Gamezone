import { useState } from 'react'
import Button from '../Button/Button'
import './ContactForm.css'

function ContactForm() {
  const [nombre, setNombre] = useState('')
  const [email, setEmail] = useState('')
  const [mensaje, setMensaje] = useState('')
  const [enviado, setEnviado] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (nombre && email && mensaje) {
      setEnviado(true)
      setNombre('')
      setEmail('')
      setMensaje('')
      setTimeout(() => setEnviado(false), 3000)
    }
  }

  return (
    <div className="contact-form-container">
      {enviado && <div className="mensaje-exito">Mensaje enviado con exito!</div>}
      
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Nombre</label>
          <input 
            type="text" 
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input 
            type="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Mensaje</label>
          <textarea 
            value={mensaje}
            onChange={(e) => setMensaje(e.target.value)}
            rows="5"
            required
          ></textarea>
        </div>

        <Button type="submit" variant="primary">
          Enviar mensaje
        </Button>
      </form>
    </div>
  )
}

export default ContactForm