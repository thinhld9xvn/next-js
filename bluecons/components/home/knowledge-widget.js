import React from 'preact/compat'
import Link from 'next/link';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    fade: false,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 10000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
            }
          },
        {
          breakpoint: 1024,
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
import TemplateKnowledgeItem from '@templates/template-knowledge-item';
export default function KnowledgeWidget({ data }) {
    const {heading, button_text, button_url, data : postsList} = data;
    const arrPostsList = postsList.map(item => <TemplateKnowledgeItem key = {item.id} 
                                                                      data = {item} />);
    return (
        <section className="knowledge">
            {heading ? (
                <div className="block-title-primary text-center">
                    <h2 dangerouslySetInnerHTML={{
                        __html : heading
                    }}></h2>
                </div>
            ) : null}
            <div className="container">
                <div className="knowledge-inner" style={{display: 'block'}}>
                    <Slider {...settings}>
                        {arrPostsList}
                    </Slider>
                </div>
                {button_text && button_url ? (
                    <Link href={button_url}>
                        <a className="see-more">
                            {button_text}
                        </a>
                    </Link>
                ) : null}
            </div>
        </section>

    )
}
