import ServiceCard from '../../Components/ServiceCard/ServiceCard'
import './Services.css'

const servicios = [
  { id: 1, titulo: 'Suscripción Premium', descripcion: 'Acceso ilimitado a todos los juegos del catálogo sin restricciones, incluyendo lanzamientos anticipados y contenido exclusivo.', precio: 29, detalle: 'Acceso a +10,000 títulos' },
  { id: 2, titulo: 'Asesoría Personalizada', descripcion: 'Un experto gamer te ayuda a elegir los mejores juegos según tus gustos, plataforma y presupuesto.', precio: 49, detalle: 'Sesión de 60 minutos' },
  { id: 3, titulo: 'Soporte 24/7', descripcion: 'Atención al cliente las 24 horas, los 7 días de la semana por chat, correo o llamada telefónica.', precio: 19, detalle: 'Respuesta en menos de 1 hora' },
]

const beneficios = [
  { titulo: 'Sin contratos', descripcion: 'Cancela cuando quieras, sin penalizaciones ni letras pequeñas.' },
  { titulo: 'Pagos seguros', descripcion: 'Todos los pagos están protegidos con cifrado SSL de 256 bits.' },
  { titulo: 'Garantía de devolución', descripcion: '30 días de garantía si no estás satisfecho con el servicio.' },
  { titulo: 'Multiplataforma', descripcion: 'Compatible con PC, PlayStation, Xbox y Nintendo Switch.' },
]

function Services() {

  return (
    <div className="services">
      <div className="services-header">
        <h1>Nuestros Servicios</h1>
        <p>Elige el plan que mejor se adapte a tus necesidades</p>
      </div>

      <div className="services-grid">
        {servicios.map(serv => (
          <ServiceCard
            key={serv.id}
            titulo={serv.titulo}
            descripcion={serv.descripcion}
            precio={serv.precio}
            detalle={serv.detalle}
            onClick={() => handleContratar(serv)}
          />
        ))}
      </div>

      <div className="services-beneficios">
        <h2>Por qué confiar en nosotros</h2>
        <div className="beneficios-grid">
          {beneficios.map((b, i) => (
            <div key={i} className="beneficio-item">
              <h4>{b.titulo}</h4>
              <p>{b.descripcion}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Services