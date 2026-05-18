import './Card.css'

function Card({ titulo, descripcion, icono }) {
  return (
    <div className="card">
      {icono && <div className="card-icono">{icono}</div>}
      <h3 className="card-titulo">{titulo}</h3>
      <p className="card-descripcion">{descripcion}</p>
    </div>
  )
}

export default Card