import './article.css'
import { Link } from 'react-router-dom'

const Article = ({image,title,author,id}) => {
  return (
    <div className='article__box'>
        <img className='article__image' src={image} alt={'post'}/>
        <p className='article__author'>Author - {author}</p>
        <h2><Link className='article__title' to={`/post/${id}`}>{title}</Link></h2>
    </div>
  )
}

export default Article