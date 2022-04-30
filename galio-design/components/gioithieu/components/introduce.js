import React, {useEffect} from 'preact/compat'
import { injectIntl, FormattedRelative } from 'react-intl';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import TemplateSlideItem from './introduce/template-slide-item';
import { useRouter } from 'next/router';
const settings = {
    dots: false,
    infinite: true,
    fade: true,
    arrows: true,
    autoplaySpeed: 5000,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1  
}  
function Introduce({ data, intl }) {
    const {messages} = intl;    
    const router = useRouter();
    const length = data.length.toLocaleString('en-US', {
                                                minimumIntegerDigits: 2,
                                                useGrouping: false
                                            });
    const sliderData = data.map((item, i) => {
        const index = (i + 1).toLocaleString('en-US', {
            minimumIntegerDigits: 2,
            useGrouping: false
        });
        return <TemplateSlideItem data = {{...item, index, length }}
                                  key = {i} />
    });
    const setI18nSliderLabel = () => {
        const prev = document.querySelector('.slick-prev.slick-arrow');
        const next = document.querySelector('.slick-next.slick-arrow');
        if ( prev ) {
            prev.innerHTML = messages.previous;
        }
        if ( next ) {
            next.innerHTML = messages.next;
        }
    }
    const onReInitSlider = () => {
        setTimeout(function() {
            setI18nSliderLabel();
        }, 1000);
    }
    useEffect(() => {
        setTimeout(function() {
            setI18nSliderLabel();
        }, 1000);
    }, [router.locale]);
    return (
        <div className="introduce__slide wow fadeInUp" data-wow-duration="2s" data-wow-delay="2.5s">
            <Slider {...settings}
                    onReInit={onReInitSlider}>
                {sliderData}
            </Slider>
        </div>
    )
}

export default injectIntl(Introduce);
