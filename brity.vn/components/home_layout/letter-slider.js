import React, {useState, useEffect} from 'preact/compat'
import Link from 'next/link'

import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swipe@ styles
import 'swiper/swiper-bundle.min.css';
import { setupLazyLoading } from '@js_dir/utils/setupLazyLoading';

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

var isMouseWheeling = false;

function onChange_slideChange(data, e) {

    const {swipeInst, setBulletSwFocusIndex, 
            setSlImageSwFocusIndex, setBulletMarginTop} = data;

    var aktifindex = swipeInst.activeIndex;
    var coord = aktifindex * -55;

    typeof(document) !== 'undefined' && 
            document.querySelectorAll('.slider-images video')
                    .forEach(node => node.pause());

    setBulletSwFocusIndex(aktifindex);
    setSlImageSwFocusIndex(aktifindex);

    setBulletMarginTop(coord);

    setTimeout(function() {        
        
        typeof(document) !== 'undefined' &&
                document.querySelectorAll('.slider-images .focus video')
                        .forEach(node => node.play());

    }, 500);

}

function onClick_switchSwipeItem(data, e) {

    e.preventDefault();

    const {swipeInst, index, setSwipeCurrentIndex} = data;

    setSwipeCurrentIndex(index);

    swipeInst.slideTo(index);

}

function getTempSwiperItem(item) {

    return (
        <SwiperSlide key={'swiperslide_'.concat(item.id)}>
            <div className="slide-content">
                <span className="category">{item.categories[0].text}</span>
                <h2 className="title">{item.text}</h2>
                <p dangerouslySetInnerHTML={{
                    __html : item.excerpt
                }}>
                </p>
            </div>
            <Link href={item.url}>
                <a className="slide-arrow magnetize">
                    <div className="circle" data-cursor-type="medium">
                        <i className="fas fa-chevron-right"></i>
                    </div>
                    {/*<i className="fas fa-chevron-right"></i>*/}
                    {/*<div className="spine" data-cursor-type="medium"></div>*/}
                </a>
            </Link>
        </SwiperSlide>
    )

}

function getTempBulletItem(data, i) {

    const { swipeInst, bulletSwFocusIndex, item, setSwipeCurrentIndex } = data;

    const title = item.text;

    return (
        <li key={'bullet_'.concat(item.id)}
            onClick={e => onClick_switchSwipeItem({
                swipeInst,  
                index : i,
                setSwipeCurrentIndex
            }, e)}
            className={"magnetize ".concat(i === bulletSwFocusIndex ? 'focus' : '')}>
            <span data-cursor-type="medium">
                {title.charAt(0).concat(" ")}
            </span>
        </li>
    )

}

function getTempOverlayImage(data, i) {

    const { slImageSwFocusIndex, item } = data;

    const thumbnail = item.thumbnail ? item.thumbnail : (
                                            item.galleries ? item.galleries[0] : 
                                                                    null );

    return (
        <li key={item.id} className={i === slImageSwFocusIndex ? "focus" : ""} 
            data-bg={thumbnail || ''}>
            
            {item.video?.src ? (
                <div className="video-wrapper">
                    <video crossOrigin="anonymous" autoPlay={true} loop={true} muted={true} playsInline={true} className="video-bg">
                        <source src={item.video.src} type="video/mp4" />
                    </video>
                </div>            
            ) : null}

        </li>
    )

}

export default function LetterSlider({ data }) {

    const arrSlider = [],
          arrBullets = [],
          arrOverlayImages = [];

    const [swipeInst, setSwipeInst] = useState(null);
    const [swipeCurrentIndex, setSwipeCurrentIndex] = useState(0);
    const [bulletSwFocusIndex, setBulletSwFocusIndex] = useState(0);
    const [slImageSwFocusIndex, setSlImageSwFocusIndex] = useState(0);
    const [bulletMarginTop, setBulletMarginTop] = useState(0);     

    data.map((item, i) => {

        arrSlider.push(getTempSwiperItem(item));
        arrBullets.push(getTempBulletItem({
                                            swipeInst,                                       
                                            bulletSwFocusIndex, 
                                            item,
                                            setSwipeCurrentIndex
                                        }, i));
        arrOverlayImages.push(getTempOverlayImage({
                                                slImageSwFocusIndex,
                                                item
                                            }, i));

    });  

    typeof(document) !== 'undefined' && 
            document.querySelector('html')
                    .classList
                    .add('showcase'); 

    useEffect(() => {   
        
        const onMouseWheel_wheelSlider = function(e) {
        
            const isScrollingDown = e.deltaY > 0;
        
            if( ! isMouseWheeling) {
                
                isMouseWheeling = true;
        
                if ( isScrollingDown )  {
        
                    swipeInst && swipeInst.slideNext();
        
                }
        
                else {
        
                    swipeInst && swipeInst.slidePrev();
        
                }
                
                setTimeout(function() {
                    isMouseWheeling = false;
                }, 1000);
            }
        
        }
        
        typeof(document) !== 'undefined' && 
                document.addEventListener("wheel", onMouseWheel_wheelSlider, {passive: true});        

        return () => {

            typeof(document) !== 'undefined' && 
                    document.removeEventListener("wheel", onMouseWheel_wheelSlider, {passive: true});            

        }

    }, [swipeInst]);

    useEffect(() => { 

        setTimeout(function() {
          
            setupLazyLoading();
        
          }, 1000);

        return () => {

            typeof(document) !== 'undefined' &&
                document.querySelector('html')
                        .classList
                        .remove('showcase'); 

        }

    }, []);

    return (
        
        <div id="letter-slider">

            <Swiper
                speed={1000}
                direction={"vertical"}
                simulateTouch={false}
                slidesPerView={"auto"}
                mousewheel={true}
                onSlideChange={e => onChange_slideChange({
                                                            swipeInst,
                                                            swipeCurrentIndex,
                                                            setBulletSwFocusIndex,
                                                            setSlImageSwFocusIndex,
                                                            setBulletMarginTop
                                                         }, e)}
                onSwiper={setSwipeInst}>
                {arrSlider}           
            </Swiper>

            <div className="bullets">
                <ul style={{
                    marginTop : bulletMarginTop
                }}>
                    {arrBullets}
                </ul>
            </div>

            <div className="slider-images overlays">
                <ul>
                    {arrOverlayImages}
                </ul>
            </div>
            
        </div>

    )

}
