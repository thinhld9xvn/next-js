import React, {useEffect, useState} from 'preact/compat'
import Link from 'next/link'
import dynamic from 'next/dynamic';

import lgThumbnail from 'lightgallery/plugins/thumbnail'
import lgZoom from 'lightgallery/plugins/zoom'

import 'react-modal-video/css/modal-video.min.css';

const LightGallery = dynamic(() => import('lightgallery/react'), {ssr : false});

const ModalVideo = dynamic(() => import('react-modal-video'), { ssr: false });

function getTempGalleryItem(item) {

    return (
        <div className="col-6 _item">
            <div className="vk-canmau-item">
                <a href={item.url}
                    className="lg-item vk-canmau-item__img">
                    <img src={item.url} alt="gallery" className="_img" loading="lazy" />
                </a>
            </div>
        </div>
    )

}

export default function NhaMayPage({ data }) {

    const [showYoutubeVd, setShowYoutubeVd] = useState(false);

    const arrGalleries = [];
    const arrAboutGalleriesData = [];

    const {banner, title, section1, youtube, section2, galleries, footer} = data;

    const {title : sectionOneTitle, description_right : sectionOneDescRight} = section1;

    const {description_left : sectionTwoDescLeft, description_right : sectionTwoDescRight} = section2;

    const {video_id, thumbnail} = youtube;
    const {url : thumbnail_url} = thumbnail;

    const {title : footerTitle, button : footerButton} = footer;

    const {text : registerButtonText, url : registerButtonUrl} = footerButton;

    galleries.map(item => {

        arrAboutGalleriesData.push(getTempGalleryItem(item));

        arrGalleries.push(
            <a className="item-gallery" href={item.url}>
                <img data-src={item.url} alt={item.title} loading="lazy" />
            </a>
        );

    });

    const showYoutubeVdEvent = (e) => {
        
        e.preventDefault();

        setShowYoutubeVd(true);

    }

    const closeYoutubeVdEvent = (e) => {

        setShowYoutubeVd(false);

    }  
    
    useEffect( async() => {

        if ( typeof(document) !== 'undefined' ) {

            setTimeout( function(){ 

                const elements = document.querySelectorAll('.lg-item');

                if ( elements ) {
                        
                    elements.forEach(item => item.addEventListener('click', function(e) {

                        e.preventDefault();

                        const idx = Array.from(elements).indexOf(item);

                        document.querySelector(`.item-gallery:nth-child(${idx + 1})`)
                                .click();

                    }));

                }
            
            
            }, 200);

        }

        return () => {}

    }, []);

    return (
        <>
            <section id="main" 
                className="vk-content">

                <div className="vk-blog vk-default-page">
                    <div className="vk-blog__banner" 
                            style={{
                                backgroundImage: `url(${banner})`
                            }}>
                        <div className="container">
                            <div className="_content">
                                <div className="_box">
                                    <h1 className="vk-blog__title">{title}</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container pt-60 pb-60 pt-lg-100 pb-lg-100">
                        <div className="vk-about__section">
                            <div className="row">
                                <div className="col-lg-5">
                                    <h2 className="vk-about__title--style-1">{sectionOneTitle}</h2>
                                </div>
                                <div className="col-lg-7"
                                    dangerouslySetInnerHTML={{
                                        __html : sectionOneDescRight
                                    }}>
                                
                                </div>
                            </div>
                        </div>
                        <div className="vk-about__section">

                            <a href="#" 
                                className="vk-img vk-canmau__video"
                                onClick={showYoutubeVdEvent}> 

                                    <img src={thumbnail_url} alt="thumbnail" loading="lazy" /> 

                            </a>

                        </div>

                        <div className="vk-about__section">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="pr-lg-40"
                                        dangerouslySetInnerHTML={{
                                            __html : sectionTwoDescLeft
                                        }}>                                    
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="pl-lg-40"
                                        dangerouslySetInnerHTML={{
                                            __html : sectionTwoDescRight
                                        }}>
                                    
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="vk-about__section1">
                            <div className="row vk-canmau__list">
                                {arrAboutGalleriesData}
                            </div>
                        </div>
                        <div className="vk-canmau__bot">
                            <div className="container">
                                <div className="vk-canmau__bot-content">
                                    <div className="_title">{footerTitle}</div>
                                    <a href="#" className="vk-btn">{registerButtonText}</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            
            </section>

            <ModalVideo channel='youtube' 
                        autoplay                        
                        isOpen={showYoutubeVd} 
                        videoId={video_id}
                        onClose={closeYoutubeVdEvent} />


            <div style={{display: 'none'}}>
                <LightGallery
                    thumbnail={false}
                    toggleThumb={false}
                    animateThumb={false}
                    allowMediaOverlap={true}
                    zoomFromOrigin={false}
                    showThumbByDefault={false}
                    selector=".item-gallery"
                    addClass="lg-fixed-size"
                    speed={500}
                    plugins={[lgThumbnail, lgZoom]}
                >
                    {arrGalleries}
                </LightGallery>
            </div>

        </>

    )
}
