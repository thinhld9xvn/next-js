import React, {useState, useEffect} from 'preact/compat'
import Link from 'next/link'
import dynamic from 'next/dynamic';
import { addPathToUrl } from '@js_dir/utils/urlUtils';
import lgThumbnail from 'lightgallery/plugins/thumbnail'
import lgZoom from 'lightgallery/plugins/zoom'
const LightGallery = dynamic(() => import('lightgallery/react'), {ssr : false});
const onAfterClose = (e) => {
    document.body.style.overflow = '';
}
const showLightGallery = function(e) {
    e.preventDefault();
    document.body.style.overflow = 'hidden';
    e.target.closest('.col-gallery-section')
            .querySelector('.item-gallery')
            .click();
}
function getTempItem(item, i) {
    const arrGalleries = [];    
    item.galleries.map((item) => {
        arrGalleries.push(
            <a className="item-gallery" href={item.url}>
                <img alt={item.title} data-src={item.url} loading="lazy" />
            </a>
        );
    });
    return (
        <div className="col-lg-4 col-gallery-section _item">
            <div className="vk-shop-item vk-shop-item--style-1 animated fadeInLeft" 
                    data-animation="fadeInLeft" 
                    data-animation-delay="0" 
                    data-animation-duration="2">
                <div className="vk-shop-item__img">
                    <img src={item.thumbnail} 
                            alt={item.title} 
                                className="_img" 
                                loading="lazy"/>
                </div>
                <div className="vk-shop-item__brief">
                    <div className="vk-shop-item__box">
                        <h3 className="vk-shop-item__title">{item.title}</h3>
                        <div className="vk-shop-item__icon">
                            <img src={`/static/images/icon-1.png`} 
                                alt="icon"
                                loading="lazy" /></div>
                    </div>
                </div>
                <a href={item.galleries[0].url}
                        className="vk-shop-item__link lightbox"
                        onClick={showLightGallery}></a>
            </div>
            <div style={{display : 'none'}}>
                <LightGallery
                    thumbnail={false}
                    toggleThumb={false}
                    animateThumb={false}
                    allowMediaOverlap={true}
                    zoomFromOrigin={false}
                    showThumbByDefault={false}
                    selector=".item-gallery"
                    addClass="lg-fixed-size"
                    onAfterClose={onAfterClose}
                    speed={500}
                    plugins={[lgThumbnail, lgZoom]}
                >
                    {arrGalleries}
                </LightGallery>
            </div>
        </div>
    )
}
export default function GalleriesSectionWidget({ data }) {
    const {banners, options } = data;
    const optionsData = [];
    options.map((e, i) => {
        optionsData.push(getTempItem(e, i));
    });
    useEffect(() => {
    }, []);
    return (
        <>
            <div className="section section-12 fp-section fp-table active fp-completely">
                <div className="fp-tableCell">
                    <div className="vk-home__shop">
                        <div className="vk-shop__top">
                            <div className="vk-slider vk-shop__slider" data-slider="banner">
                                <div className="_wrapper">
                                    <div className="vk-img">
                                        <img src={banners[0].background} alt="banner" loading="lazy" />
                                    </div>
                                    <div className="_content">
                                        <h2 className="_title">{banners[0].title}</h2>
                                        <Link href={addPathToUrl(banners[0].button_url, 'page')}>
                                            <a className="_btn">
                                                {banners[0].button_text}
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="vk-shop__bot">
                            <div className="vk-shop__list row no-gutters">
                                {optionsData}
                            </div>
                        </div>                    
                    </div>
                </div>
            </div>
        </>
    )
}
