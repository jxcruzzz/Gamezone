import Button from '../../Components/Button/Button'
import './About.css'

function About() {
  return (
    <div className="about">

      <div className="about-hero">
        <h1>Sobre GameZone</h1>
        <p>
          Somos una comunidad apasionada por los videojuegos, fundada en 2024 con la misión
          de conectar a jugadores de todo el mundo.
        </p>
        <p>
          En GameZone encontrarás reseñas, noticias y los mejores precios en videojuegos
          para PC, PlayStation, Xbox y Nintendo Switch.
        </p>
        <Button variant="primary">Únete a la comunidad</Button>
      </div>

      <div className="about-stats">
        <div className="stat-item">
          <span className="stat-numero">+10,000</span>
          <span className="stat-label">Juegos disponibles</span>
        </div>
        <div className="stat-item">
          <span className="stat-numero">+50,000</span>
          <span className="stat-label">Usuarios activos</span>
        </div>
        <div className="stat-item">
          <span className="stat-numero">+100</span>
          <span className="stat-label">Plataformas soportadas</span>
        </div>
        <div className="stat-item">
          <span className="stat-numero">24/7</span>
          <span className="stat-label">Soporte al cliente</span>
        </div>
      </div>

      <div className="about-mision">
        <div className="mision-card">
          <h3>Nuestra Misión</h3>
          <p>
            Brindar a cada jugador acceso rápido, seguro y asequible a los mejores
            videojuegos del mercado, sin importar su plataforma o presupuesto.
          </p>
        </div>
        <div className="mision-card">
          <h3>Nuestra Visión</h3>
          <p>
            Convertirnos en la plataforma de referencia para gamers de habla hispana,
            construyendo una comunidad activa y apasionada por los videojuegos.
          </p>
        </div>
        <div className="mision-card">
          <h3>Nuestros Valores</h3>
          <p>
            Transparencia, calidad y compromiso con nuestros usuarios. Creemos en el
            juego justo, tanto dentro como fuera de la pantalla.
          </p>
        </div>
      </div>

    </div>
  )
}

export default About