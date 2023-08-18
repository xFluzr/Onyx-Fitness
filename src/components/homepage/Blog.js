import './blog.css'
import Article from './Article'
import Button from './Button.js'
import postsData from '../../utils/postData'

const Blog = () => {
  return (
    <section id='blog'>
        <div className='container'>
            <div className='blog__wrapper'>
                <h2 className='section__title'><span className='heading-pink'>Latest</span> News & Blog</h2>
                <p className='section__text'>Strengthen your body and explore power of yoga with our latest news.</p>
                <div className='articles__wrapper'>
                  {postsData.map((post)=>{
                    return <Article key={post.id} image={post.image} title={post.title} desciption={post.desciption} author={post.author} id={post.id}/>
                  })}
                </div>
                <Button text="See More News" link='/post/1'/>
            </div>
        </div>
    </section>
  )
}

export default Blog