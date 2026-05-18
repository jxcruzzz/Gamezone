import Button from '../Button/Button'
import './GalleryFilter.css'

function GalleryFilter({ categorias, categoriaActiva, onFilterChange }) {
  return (
    <div className="gallery-filter">
      {categorias.map(cat => (
        <Button
          key={cat}
          variant={categoriaActiva === cat ? 'primary' : 'secondary'}
          onClick={() => onFilterChange(cat)}
        >
          {cat}
        </Button>
      ))}
    </div>
  )
}

export default GalleryFilter