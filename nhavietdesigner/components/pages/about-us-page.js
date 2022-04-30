import React, {useEffect} from 'preact/compat'

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function getTempLogoItem(item) {

    const {image} = item;
    const {url} = image;

    return (

        <div className="_item">
            <div className="vk-img">
                <img src={url} alt="logo" loading="lazy" />
            </div>
        </div>

    );

}

export default function AboutUsPage({ data }) {

    const logoPartnersData = [];

    const {title, banner, section1, section2, section3, section4, section5, section6, section7} = data;

    const {title : sectionOneTitle, description : sectionOneDescription} = section1;

    const {image : sectionTwoBanner} = section2;

    const {title: sectionThreeTitle, description : sectionThreeDescription} = section3;

    const {image : sectionFourBanner } = section4;

    const {title: sectionFiveTitle, description: sectionFiveDescription} = section5;

    const {title: sectionSevenTitle, logo_partners} = section7;
    
    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: logo_partners.length,
        slidesToScroll: 1
    }

    logo_partners.map((item, i) => {

        logoPartnersData.push(getTempLogoItem(item));

    }); 

    useEffect(() => {

        const offsetHeaderHeight = 60;

        setTimeout(function() {
       
            if ( typeof(window) !== 'undefined' ) {

                if (location.hash) {

                    const targetElem = document.querySelector(`div[data-id="${location.hash}"]`);
                    console.log((window.scrollY + targetElem.getClientRects()[0].top) - offsetHeaderHeight);
                    const offsetTop = targetElem ? (window.scrollY + targetElem.getClientRects()[0].top) - offsetHeaderHeight : null;

                    offsetTop && window.scroll(0, offsetTop);

                }

            }

        }, 10);
        
    });

    return (
        <section id="main" 
            className="vk-content">
            <div className="vk-about vk-default-page">
                <div className="vk-about__banner" 
                        style={{
                            backgroundImage: `url(${banner})`
                        }}>
                    {/*<div className="_content">
                        <h1 className="_title">{title}</h1>
                    </div>*/}
                </div>
                <div className="container pt-30">
                    <div className="vk-about__section" data-id="#overallAbout">
                        <div className="row">
                            <div className="col-lg-3">
                                <h2 className="vk-about__title">{sectionOneTitle}</h2>
                            </div>
                            <div className="col-lg-9"
                                dangerouslySetInnerHTML={{
                                    __html : sectionOneDescription
                                }}>                                
                            </div>
                        </div>
                    </div>
                    <div className="vk-about__section--style-1">
                        <div className="vk-img">
                            <img src={sectionTwoBanner} alt="banner" loading="lazy" />
                        </div>
                    </div>
                    <div className="vk-about__section" data-id="#visionAbout">
                        <div className="row">
                            <div className="col-lg-3">
                                <h2 className="vk-about__title"
                                    dangerouslySetInnerHTML={{
                                        __html : sectionThreeTitle
                                    }}>
                                </h2>
                            </div>
                            <div className="col-lg-9"
                                dangerouslySetInnerHTML={{
                                    __html : sectionThreeDescription
                                }}>
                            </div>
                        </div>
                    </div>
                    <div className="vk-about__section--style-1">
                        <div className="vk-img">
                            <img src={sectionFourBanner} alt="banner" loading="lazy" />
                        </div>
                    </div>
                    <div className="vk-about__section" data-id="#whyAbout">
                        <div className="row">
                            <div className="col-lg-3">
                                <h2 className="vk-about__title">{sectionFiveTitle}</h2>
                            </div>
                            <div className="col-lg-9"
                                dangerouslySetInnerHTML={{
                                    __html : sectionFiveDescription
                                }}>
                            </div>
                        </div>
                    </div>
                    <div className="vk-about__section partnerAbout" data-id="#partnerAbout">
                        <div className="row">
                            <div className="col-lg-3">
                                <h2 className="vk-about__title">{sectionSevenTitle}</h2>
                            </div>
                            <div className="col-lg-9">

                                <div className="vk-cus__list slick-slider vk-slider">

                                    <Slider {...settings}>

                                        {logoPartnersData}

                                    </Slider>

                                </div>
                                
                            </div>
                        </div>
                    </div>
                    <div className="vk-divider--style-1 mt-50 mb-30"></div>
                </div>
            </div>
        </section>

    )
}
