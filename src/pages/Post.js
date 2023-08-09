import './post.css'
import {useParams} from 'react-router-dom'
import postsData from '../utils/postData.js'

const Post = () => {

    // Getting id from url and converting it to int
    let { id } = useParams();
    let idInteger = parseInt(id)


    // Searching in post data for exact post with id from param
    const post = postsData.find((post) => post.id === idInteger);
  

  return (
    <section id="post">
      <div className='container'>
        <div className='post__wrapper'>
          <h1 className='section__title'>{post.title}</h1>
          <hr className="line" />
          <img className='post__image' src={post.image} alt={`post-${post.id}`}/>
          <p className='section__text'>{post.text}</p>
        </div>
      </div>
    </section>
  )
}

export default Post