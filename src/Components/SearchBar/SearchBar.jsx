import { useState } from 'react'
import Button from '../Button/Button'
import './SearchBar.css'

function SearchBar({ onSearch, placeholder = 'Buscar videojuego...' }) {
  const [texto, setTexto] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    onSearch(texto)
  }

  const handleReset = () => {
    setTexto('')
    onSearch('')
  }

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <input
        type="text"
        className="search-input"
        placeholder={placeholder}
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
      />
      <Button type="submit" variant="primary">Buscar</Button>
      {texto && (
        <Button type="button" variant="secondary" onClick={handleReset}>
          Limpiar
        </Button>
      )}
    </form>
  )
}

export default SearchBar