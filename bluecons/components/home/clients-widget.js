import TemplateClientItem from '@templates/template-client-item';
import React from 'preact/compat'
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { multiple } from '@js_dir/utils/arrayUtils';
const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    fade: false,
    autoplay: true,
    speed: 1000,
    autoPlaySpeed: 10000,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
            }
          },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
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
export default function ClientsWidget({ data }) {
    const {heading, data : clientsList} = data;
    const arrClientsList = multiple(clientsList).map(item => <TemplateClientItem key = {item.id} data = {item} />);
    return (
        <section className="customer">
            {heading ? (
                <div className="block-title-primary text-center">
                    <h2 dangerouslySetInnerHTML={{
                        __html : heading
                    }}></h2>
                </div>
            ) : null}
            {arrClientsList ? (
                <div className="container">
                    <div className="clients-slider">
                        <Slider {...settings}>
                            {arrClientsList}
                        </Slider>
                    </div>
                </div>
            ) : null}
        </section>
    )
}
