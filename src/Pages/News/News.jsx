import { useEffect, useState } from 'react'
import Article from '../../Components/Article/Article'
import './News.css'

const News = () => {
  const [posts, setPosts] = useState([])
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {

    const getPosts = async () => {
      try {

        const response = await fetch('https://jsonplaceholder.typicode.com/posts')
        console.log(response)

        if (!response.ok) {
          throw new Error('No se pudieron obtener los posts')
        }
        const data = await response.json()
        setPosts(data)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    getPosts()
  }, [])

  return (
    <section className="news">
      <div className="news__heading">
        <h1>Noticias GameZone</h1>
        <p>Mantente al día con las últimas novedades del mundo gamer</p>
      </div>

      {loading && <p className="news__feedback">Cargando posts....</p>}
      {error && <p className="news__feedback news__feedback--error">{error}</p>}

      {!loading && !error && (
        <div className="news__grid">
          {posts.map((post) => (
            <Article
              key={post.id}
              tag={`Post #${post.id}`}
              title={post.title}
              text={post.body}
            />
          ))}
        </div>
      )}
    </section>
  )
}

export default News
