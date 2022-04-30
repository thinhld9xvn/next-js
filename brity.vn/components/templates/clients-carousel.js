import React from 'preact/compat'

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [        
        {
            breakpoint: 1400,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 1,
                infinite: true,
                dots: false
            }
        },
        {
            breakpoint: 1100,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                infinite: true,
                dots: false
            }
        },

        {
            breakpoint: 600,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: false
            }
        },

        {
            breakpoint: 500,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: false
            }
         },

         {
            breakpoint: 400,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: false
            }
         },
        
    ]
  };

const getTempClientItem = (item) => {

    return (
        <div className="client-carousel-item">
            <img src={item.thumbnail} alt="client" loading="lazy" />
        </div>
    )

}

export default function ClientsCarousel({ data }) {

    const arrClientsData = [];

    data.map(item => {

        arrClientsData.push(getTempClientItem(item));

    });

    return (
        <div className="container services-type-two clients top_120 box-animate">
            <div className="row">
                <div className="col-xl-12 col-md-12">
                    <h2 className="small-title">Clients.</h2>
                </div>
            </div>
            <div className="slider">
                <div className="slick-carousel">
                    <Slider {...settings}>
                        {arrClientsData}
                    </Slider>
                </div>
            </div>
        </div>
    )
}
