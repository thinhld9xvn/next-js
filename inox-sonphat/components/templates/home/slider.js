import React, {useEffect, useState, useRef} from 'preact/compat'
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import TemplateSlider from './slider/template-slider';
import { multiple } from '@js_dir/utils/arrayUtils';
import { useRouter } from 'next/router';
const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    fade: false,
    autoplay: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1
  };
export default function HomeSlider({ data }) {
    const router = useRouter();
    const [sliderList, setSlider] = useState(null);
    useEffect(() => {   
        setSlider(data.map((item, i) => {
            return <TemplateSlider data = {item}
                                   index = {i}
                                   key = {item.id} />
        }));
    }, [,data]);
    return (
        <section className="slider main-slider">
            <div className="slider-wrapper">
                <Slider {...settings}>
                    {sliderList}           
                </Slider>
            </div>
        </section>
    )
}
