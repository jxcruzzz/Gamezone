import './Article.css'

const Article = ({ tag, title, text }) => {
  return (
    <article className="article-card">
      <span className="article-card__tag">{tag}</span>
      <h3 className="article-card__title">{title}</h3>
      <p className="article-card__text">{text}</p>
    </article>
  )
}

export default Article
