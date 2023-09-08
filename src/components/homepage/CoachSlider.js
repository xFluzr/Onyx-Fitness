import React from "react";

import Slider from "react-slick";
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import coachesData from "../../utils/coachesData";
import Slide from "./Slide";

const CoachSlider = () => {

    const sliderSettings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 4,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 800,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              initialSlide: 1
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
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
        <Slider {...sliderSettings}>
            {
                coachesData.map(coach => <Slide key={coach.name}
                                                link={coach.link} 
                                                name={coach.name}
                                                image={coach.icon}
                                                discipline={coach.discipline}
                                         />
                                )
            }
        </Slider>
    );
}

export default CoachSlider;