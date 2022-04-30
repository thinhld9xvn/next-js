import React from 'preact/compat'
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    fade: false,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 10000,
    slidesToShow: 1,
    slidesToScroll: 1
  };
function TemplateSliderItem({data}) {
    const {large_title, small_title, thumbnail} = data;
    return (
        <div className="item">
            <img src={thumbnail} alt="slider" />
            <div className="title-banner">
                <h4 dangerouslySetInnerHTML={{
                    __html : small_title
                }}></h4>
                <h2 dangerouslySetInnerHTML={{
                    __html : large_title
                }}></h2>
            </div>
        </div>
    )
}
export default function SliderWidget({data}) {
    const arrSliderItems = data.map(item => <TemplateSliderItem key = {item.id} data = {item} />)
    return (
        <section className="banner-main banner-main-home">
            <div className="slider-main">
                <Slider {...settings}>
                    {arrSliderItems} 
                </Slider>             
            </div>
        </section>
    )
}
