import Hero from '../../Components/Hero/Hero'
import Card from '../../Components/Card/Card'
import './Home.css'

function Home() {
  const handleExplorar = () => {
    window.location.href = '/gallery'
  }

  return (
    <div className="home">
      <Hero 
        titulo="Bienvenido a GameZone"
        subtitulo="El mejor lugar para encontrar tus videojuegos favoritos"
        textoBoton="Explorar juegos"
        onBotonClick={handleExplorar}
      />

      <h2 className="section-title">¿Por qué elegirnos?</h2>
      <div className="cards-container">
        <Card 
          titulo="Variedad"
          descripcion="Miles de juegos disponibles para todas las plataformas"
        />
        <Card 
          titulo="Rapidez"
          descripcion="Descargas rápidas y sin complicaciones"
        />
        <Card 
          titulo="Seguridad"
          descripcion="Compra segura con garantía de devolución"
        />
      </div>
    </div>
  )
}

export default Home