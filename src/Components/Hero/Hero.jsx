import Button from '../Button/Button'
import './Hero.css'

function Hero({ titulo, subtitulo, textoBoton, onBotonClick }) {
  return (
    <div className="hero">
      <h1>{titulo}</h1>
      <p>{subtitulo}</p>
      <Button variant="primary" onClick={onBotonClick}>
        {textoBoton}
      </Button>
    </div>
  )
}

export default Hero