import { useState } from 'react'
import GameCard from '../../Components/GameCard/GameCard'
import GalleryFilter from '../../Components/GalleryFilter/GalleryFilter'
import './Gallery.css'

const juegos = [
  { id: 1, nombre: 'Grand theft Auto', imagen: '/Images/GTA.jpeg', descripcion: 'Es un juego de mundo abierto donde puedes explorar una ciudad, realizar misiones y hacer actividades ilegales o libres. Tiene una historia con tres protagonistas y un modo online muy popular.', precio: 100, categoria: 'Aventura' },
  { id: 2, nombre: 'Halo INFINITE', imagen: '/Images/Hallo.jpeg', descripcion: 'Es una saga de disparos en primera persona ambientada en el espacio. Sigues la historia del Master Chief luchando contra alienígenas, con una mezcla de campaña y multijugador.', precio: 49, categoria: 'RPG' },
  { id: 3, nombre: 'FIFA 26', imagen: '/Images/FIFA26.jpeg', descripcion: 'Es un simulador de fútbol donde puedes jugar partidos, gestionar equipos y competir en línea con clubes y selecciones reales.', precio: 69, categoria: 'Deportes' },
  { id: 4, nombre: 'Call of Duty', imagen: '/Images/COD.jpeg', descripcion: 'Es una saga de disparos en primera persona enfocada en guerras modernas o históricas. Destaca por su modo multijugador competitivo y campañas con historia.', precio: 69, categoria: 'Shooter' },
  { id: 5, nombre: 'Minecraft', imagen: '/Images/Minecraft.jpeg', descripcion: 'Es un juego de mundo abierto donde puedes construir, explorar y sobrevivir en un mundo hecho de bloques. Tiene modos como creativo (sin límites) y supervivencia (recolectando recursos).', precio: 29, categoria: 'Sandbox' },
  { id: 6, nombre: 'Fortnite', imagen: '/Images/Fortnite.jpeg', descripcion: 'Es un juego tipo battle royale donde 100 jugadores compiten en una isla hasta que solo queda uno. Se caracteriza por poder construir estructuras (muros, rampas) y por sus constantes eventos y colaboraciones.', precio: 0, categoria: 'Battle Royale' },
]

const categorias = ['Todos', 'Aventura', 'RPG', 'Deportes', 'Shooter', 'Sandbox', 'Battle Royale']

function Gallery() {
  const [categoria, setCategoria] = useState('Todos')

  const juegosFiltrados = juegos.filter(juego => {
    return categoria === 'Todos' || juego.categoria === categoria
  })

  return (
    <div className="gallery">
      <div className="gallery-header">
        <h1>Galería de Videojuegos</h1>
        <p>Explora nuestro catálogo y encuentra tu próximo juego favorito</p>
      </div>

      <GalleryFilter 
        categorias={categorias}
        categoriaActiva={categoria}
        onFilterChange={setCategoria}
      />

      <div className="juegos-grid">
        {juegosFiltrados.map(juego => (
          <GameCard
            key={juego.id}
            nombre={juego.nombre}
            imagen={juego.imagen}
            descripcion={juego.descripcion}
            precio={juego.precio}
            onClick={() => handleVerMas(juego)}
          />
        ))}
      </div>

      {juegosFiltrados.length === 0 && (
        <p className="sin-resultados">No se encontraron juegos en esta categoría.</p>
      )}
    </div>
  )
}

export default Gallery