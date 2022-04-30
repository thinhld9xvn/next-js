import React, {useEffect, useState, useRef} from 'preact/compat'
import TemplateSlideItem from './slider/template-slide-item'
import TemplateSlideNav from './slider/template-slide-nav'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { useRouter } from 'next/router';
import 'react-modal-video/css/modal-video.min.css';
import ModalVideoFullscreen from './slider/modal-video-fullscreen';
import { showAnimationElement, splitLetterElement } from '@js_dir/utils/animations/letterAnimationUtils';
const TIMEOUT = 10000; // 10s
const settings = {
    dots: true,
    infinite: true,
    fade: true,
    arrows: false,
    //autoplaySpeed: 10000,
    autoplay: false,
    slidesToShow: 1,
    slidesToScroll: 1  
}  

const navSettings = {...settings, 
                        slidesToShow : 3, 
                        fade : false};
var tmrSwitchSlider = null;
function resetHeadingAnimations() {
    const headerElems = document.querySelectorAll('.slider-for-header');
    headerElems.forEach(headerElem => {
        const headings = headerElem.querySelectorAll('h1');
        const lines = headerElem.querySelectorAll('.line');
        lines && lines.forEach(e => e.remove());
        headings && headings.forEach(heading => {
            const text = heading.dataset['text'];
            heading.innerHTML = text;
            heading.classList.remove('show');
        });                
    });
}
function splitHeadingLetters() {
    const headerElems = document.querySelectorAll('.slider-for-header');
    headerElems.forEach(headerElem => {
        const headings = headerElem.querySelectorAll('h1');
        headings && 
            headings.forEach(heading => {                
                splitLetterElement(heading);
                showAnimationElement(heading, 100);
            });                
    });
}
export default function HomeSlider({ data }) {
    const router = useRouter();
    const mainSliderRef = useRef(null);
    const navSliderRef = useRef(null);
    const [mainSlider, setMainSlider] = useState(null);
    const [navSlider, setNavSlider] = useState(null);
    const [showVdModal, setShowVdModal] = useState(false);
    const [videoUrl, setVideoUrl] = useState(null);   
    const onSelectSliderItem = (e) => {
        e.preventDefault();
        const index = parseInt(e.currentTarget.dataset['index']);
        killTimerAutoPlaySlider();
        mainSliderRef.current.slickGoTo(index);
        navSliderRef.current.slickGoTo(index);       
        setTimeout(function() {
            switchSliderItemAnimation();
            setupTimerAutoPlaySlider();
        }, 100);
    } 
    const switchSliderItemAnimation = () => {
        resetHeadingAnimations();            
        splitHeadingLetters();
    }
    const onTimerAutoPlaySlider = () => {
        mainSliderRef.current.slickNext();
        navSliderRef.current.slickNext();
        setTimeout(function() {             
            switchSliderItemAnimation();
        }, 100);
    }
    const killTimerAutoPlaySlider = () => {
        if ( tmrSwitchSlider ) {
            clearInterval(tmrSwitchSlider);
        }
    }
    const setupTimerAutoPlaySlider = () => {
        tmrSwitchSlider = setInterval(onTimerAutoPlaySlider, TIMEOUT);
    }
    const init = () => {
        const mainSliderData = [];
        const navSliderData = [];
        const length = data.length.toLocaleString('en-US', {
                                                    minimumIntegerDigits: 2,
                                                    useGrouping: false
                                                });

        data.map((item, i) => {
            const index = (i + 1).toLocaleString('en-US', {
                                            minimumIntegerDigits: 2,
                                            useGrouping: false
                                        });
            mainSliderData.push(<TemplateSlideItem data = {{
                                                             item,
                                                             index,
                                                             length
                                                           }}
                                                    props = {{ setVideoUrl, setShowVdModal }} />);
            navSliderData.push(<TemplateSlideNav data = {{
                                                            item,
                                                            index,
                                                        }} />);
        });

        setMainSlider(mainSliderData);
        setNavSlider(navSliderData);

        setTimeout(function() {
            document.querySelector('.slider-nav')
                    .querySelectorAll('.slick-slide')
                    .forEach(elem => {
                elem.addEventListener('click', onSelectSliderItem);
            });
            document.querySelectorAll('video')
                    .forEach(video => video.play());
            killTimerAutoPlaySlider();
            setupTimerAutoPlaySlider();
        }, 200);
    }
    
    useEffect(() => {
        init();       
        return () => {
            document.querySelector('.slider-nav')
                    .querySelectorAll('.slick-slide')
                    .forEach(elem => {
                elem.removeEventListener('click', onSelectSliderItem);
            });
            killTimerAutoPlaySlider();
        }
    }, []);

    useEffect(() => {
        init();
        return () => {
            document.querySelector('.slider-nav')
                    .querySelectorAll('.slick-slide')
                    .forEach(elem => {
                elem.removeEventListener('click', onSelectSliderItem);
            });
            killTimerAutoPlaySlider();
        }
    }, [router.locale]);

    return (
        <>
            <section className="home__slide">
                <div className="slide">
                    <div className="slider-for slick-slider">
                        <Slider {...settings}
                                ref={slider => (mainSliderRef.current = slider)}>
                            {mainSlider}
                        </Slider>
                    </div>
                    <div className="slider-nav slick-slider">
                        <Slider {...navSettings}
                                ref={slider => (navSliderRef.current = slider)}>
                            {navSlider}
                        </Slider>
                    </div>
                </div>
                <div className="home__slide-icon">
                    <a href="#">
                        <i className="fa fa-behance" aria-hidden="true"></i>
                    </a>
                    <a href="#">
                        <i className="fa fa-facebook" aria-hidden="true"></i>
                    </a>
                    <a href="#">
                        <i className="fa fa-instagram" aria-hidden="true"></i>
                    </a>
                </div>
            </section>
            
            <ModalVideoFullscreen videoUrl = {videoUrl}
                                  setShowVdModal = {setShowVdModal}
                                  showVdModal = {showVdModal} />

        </>
    )
}
