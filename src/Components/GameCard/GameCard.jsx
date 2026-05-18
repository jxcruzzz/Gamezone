import Button from '../Button/Button'
import './GameCard.css'

function GameCard({ nombre, imagen, descripcion, precio, onClick }) {
  return (
    <div className="game-card">
      <img src={imagen} alt={nombre} className="game-card-img" />
      <div className="game-card-content">
        <h3 className="game-card-title">{nombre}</h3>
        <p className="game-card-desc">{descripcion}</p>
        <div className="game-card-footer">
          <span className="game-card-price">${precio}</span>
          <Button variant="primary" onClick={onClick}>
            Ver más
          </Button>
        </div>
      </div>
    </div>
  )
}

export default GameCard