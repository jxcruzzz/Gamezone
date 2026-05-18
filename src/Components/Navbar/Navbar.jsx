import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  const [menuAbierto, setMenuAbierto] = useState(false)

  return (
    <nav className="navbar">
      <div className="navbar-wrapper">
        <div className="navbar-pill">
          <Link to="/" className="logo">
            <span className="logo-icon">◈</span>
            GameZone
          </Link>

          <div className={`menu-enlaces ${menuAbierto ? 'abierto' : ''}`}>
            <NavLink to="/" end onClick={() => setMenuAbierto(false)}>Inicio</NavLink>
            <NavLink to="/about" onClick={() => setMenuAbierto(false)}>Nosotros</NavLink>
            <NavLink to="/services" onClick={() => setMenuAbierto(false)}>Servicios</NavLink>
            <NavLink to="/gallery" onClick={() => setMenuAbierto(false)}>Galería</NavLink>
            <NavLink to="/news" onClick={() => setMenuAbierto(false)}>Noticias</NavLink>
            <NavLink to="/contact" onClick={() => setMenuAbierto(false)}>Contacto</NavLink>
          </div>

          <button className="menu-boton" onClick={() => setMenuAbierto(!menuAbierto)}>
            <span className={`hamburger ${menuAbierto ? 'abierto' : ''}`}>
              <span></span><span></span><span></span>
            </span>
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar