import React, {useEffect, useState, useRef} from 'preact/compat'
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import TemplatePartnerItem from './partner-section/template-partner-item';
import { useRouter } from 'next/router';
import { multiple } from '@js_dir/utils/arrayUtils';
import { injectIntl } from 'react-intl';
const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    fade: false,
    autoplay: true,
    speed: 1000,
    slidesToShow: 6,
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
function PartnerSection({ data, intl }) {
  const {messages} = intl;
    const router = useRouter();
    const [sliderList, setSlider] = useState(null);
    const sliderRef = useRef(null);
    useEffect(() => { 
      if ( data ) {
        setSlider(multiple(data).map((item, i) => {
            return <TemplatePartnerItem data = {item}
                                         index = {i}
                                         key = {item.id} />
        }));
      }
    }, [data]);
    return (
        <section className="py-5 partner b2">
            <div className="container">
                <h2 className="s24 bold t3 pb-4 text-center text-uppercase tit hpro-tit">{messages.partners}</h2>
                <div className="slider main-slider partner-slider">
                    <div className="slider-wrapper">
                        <Slider ref={c => (sliderRef.current = c)} {...settings}>
                            {sliderList}
                        </Slider>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default injectIntl(PartnerSection);
