import React, {useEffect, useState} from 'preact/compat'

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

import TemplateLogoImage from './logo-section/template-logo-image';

const settings = {
    dots: false,
    infinite: true,
    fade: false,
    arrows: false,
    autoplaySpeed: 5000,
    autoplay: true,
    slidesToShow: 8,
    slidesToScroll: 1,
    responsive: [{
        breakpoint: 1400,
        settings: {
            slidesToShow: 6,
        }
    }, {
        breakpoint: 992,
        settings: {
            slidesToShow: 4,
        }
    }, {
        breakpoint: 768,
        settings: {
            slidesToShow: 3,
        }
    }, {
        breakpoint: 480,
        settings: {
            slidesToShow: 2,
        }
    }] 
}

export default function LogoSection({ data }) {

    const [logoList, setLogoList] = useState(null);

    useEffect(() => {

        setLogoList(data.map((item, i) => {
            const settings = {
                wowDuration : '2s',
                wowDelay : (i * 0.5) + 's'
            };
            return <TemplateLogoImage data = {item}
                                      settings = {settings}
                                      key = {i} />;
        }));
        

    }, []);

    return (
        <section className="home__logo">
            <div className="container">
                <div className="logo__slide slick-slider">

                    <Slider {...settings}>
                        {logoList}
                    </Slider>

                </div>
            </div>
        </section>
    )
}
