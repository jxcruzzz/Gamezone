import Button from '../Button/Button'
import './ServiceCard.css'

function ServiceCard({ titulo, descripcion, precio, detalle, onClick }) {
  return (
    <div className="service-card">
      <h3>{titulo}</h3>
      <p>{descripcion}</p>
      {detalle && <span className="service-detalle">{detalle}</span>}
      <span className="precio">${precio}<small>/mes</small></span>
      <Button variant="primary" onClick={onClick}>
        Contratar
      </Button>
    </div>
  )
}

export default ServiceCard