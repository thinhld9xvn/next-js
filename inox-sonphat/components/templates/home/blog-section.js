import React, {useEffect, useState, useRef} from 'preact/compat'
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import TemplateBlogItem from '@templates/template-blog-item';
import { useRouter } from 'next/router';
import { injectIntl } from 'react-intl';
import Link from 'next/link';
import { getPageUrlByLocale } from '@js_dir/utils/urlUtils';
const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    fade: false,
    autoplay: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
  };
function BlogSection({ data, intl }) {
  const {messages} = intl;
    const router = useRouter();
    const [sliderList, setSlider] = useState(null);
    const sliderRef = useRef(null);
    useEffect(() => { 
        if ( data ) {
          setSlider(data.map((item, i) => {
              return <TemplateBlogItem data = {item}
                                      key = {item.id} />
          }));
        }
    }, [data]);
    return (
        <section className="blog b2 section-pad-xs">
            <div className="container">
                <h2 className="s24 bold t3 text-center text-uppercase tit hpro-tit">
                  {messages.news_events}
                  <span className="view-all">
                    <Link href={getPageUrlByLocale('blog', router.locale)}>
                      <a>{messages['view_all']}</a></Link>
                  </span>
                </h2>
                <div className="slider main-slider blog-slider">
                    <div className="swiper-wrapper">
                        <Slider ref={c => (sliderRef.current = c)} {...settings}>
                            {sliderList}
                        </Slider>
                    </div>
                </div>
            </div>
        </section>
)
}
export default injectIntl(BlogSection);
