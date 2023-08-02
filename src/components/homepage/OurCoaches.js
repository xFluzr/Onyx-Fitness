import React from "react";
import Slider from "react-slick";
import "../../components/homepage/ourCoaches.css";
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import coachesData from "../../utils/coachesData";
import Slide from "./Slide";

const OurCoaches = () => {

    let sliderSettings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
    };

    return (
        <section id="our-coaches">
            <div className="our-coaches__box">
                <h2 className="section__title">
                    <span className="heading-pink">Our</span> Coaches
                </h2>
                <hr className="line"/>
                <p className="section__text">
                    Transform your fitness journey with expert guidance from dedicated personal trainers. Unlock your potential today!
                </p>
                <div className="slider__box">
                    <Slider {...sliderSettings}>
                        {
                            coachesData.map(coach => <Slide link={coach.link}/>)
                        }
                    </Slider>
                </div>
            </div>
        </section>
    );
}

export default OurCoaches;