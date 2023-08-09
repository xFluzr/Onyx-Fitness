import Slider from 'react-slick'

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './instagramSlider.css'

//IMAGES
import img1 from '../../assets/instagram/ig1.jpg'
import img2 from '../../assets/instagram/ig2.jpg'
import img3 from '../../assets/instagram/ig3.jpg'
import img4 from '../../assets/instagram/ig4.jpg'
import img5 from '../../assets/instagram/ig5.jpg'
import img6 from '../../assets/instagram/ig6.jpg'
import img7 from '../../assets/instagram/ig7.jpg'
import img8 from '../../assets/instagram/ig8.jpg'
import img9 from '../../assets/instagram/ig9.jpg'
import img10 from '../../assets/instagram/ig10.jpg'


const InstagramSlider = () => {
    const sliderSettings = {
        dots: true,
        infinite: false,
        
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 800,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              initialSlide: 1
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              initialSlide: 1
            }
          },
          {
            breakpoint: 450,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
    };

  return (
    <Slider {...sliderSettings} className='instagram__slider'>
        <img src={img1} className='instagram__image' alt='insta1'/>
        <img src={img2} className='instagram__image' alt='insta2'/>
        <img src={img3} className='instagram__image' alt='insta3'/>
        <img src={img4} className='instagram__image' alt='insta4'/>
        <img src={img5} className='instagram__image' alt='insta5'/>
        <img src={img6} className='instagram__image' alt='insta6'/>
        <img src={img7} className='instagram__image' alt='insta7'/>
        <img src={img8} className='instagram__image' alt='insta8'/>
        <img src={img9} className='instagram__image' alt='insta9'/>
        <img src={img10} className='instagram__image' alt='insta10'/>
    </Slider>
  )
}

export default InstagramSlider