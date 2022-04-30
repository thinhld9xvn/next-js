import React, {useEffect, useState, useRef} from 'preact/compat'
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import TemplateFeedbackItem from './feedback/template-feedback-item';
import { useRouter } from 'next/router';
import { isDiff, multiple } from '@js_dir/utils/arrayUtils';
const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    fade: false,
    autoplay: true,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        }
      ]
};
export default function FeedbackSection({ data }) {
    const router = useRouter();
    const {heading, contents, background, data : feedbackListsData} = data;
    const [sliderList, setSlider] = useState(null);
    const sliderRef = useRef(null);
    const onClick_nextSlideItem = () => {
        sliderRef.current.slickNext();
    }
    const onClick_prevSlideItem = () => {
        sliderRef.current.slickPrev();
    }
    useEffect(() => { 
        if ( data ) {
            setSlider(multiple(feedbackListsData).map((item, i) => {
                return <TemplateFeedbackItem data = {item}
                                            index = {i}
                                            key = {item.id} />
            }));
        }
    }, [data]);
    return (
        <section className="text-white tes home-feedback-section b2"
                style={{
                    backgroundImage: `url("${background}")`
                }}>
            <div className="container">
                <h2 className="s24 medium text-center text-uppercase tit tes-tit">
                    {heading}
                </h2>
                <div className="text-center tes-slogan"
                    dangerouslySetInnerHTML={{
                        __html: contents
                    }}>
                </div>
                <div className="slider main-slider feedback-slider">
                    <div className="slider-wrapper">
                        <Slider ref={c => (sliderRef.current = c)} {...settings}>
                            {sliderList}           
                        </Slider>
                    </div>
                    <div className="swiper-button-controls swiper-button-next swiper-button-white"
                        onClick={onClick_nextSlideItem}>
                        <img src="/static/images/right2.png" alt="" />
                    </div>
                    <div className="swiper-button-controls swiper-button-prev swiper-button-white"
                        onClick={onClick_prevSlideItem}>
                        <img src="/static/images/left2.png" alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}
