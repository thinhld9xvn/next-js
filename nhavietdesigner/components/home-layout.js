import React from 'preact/compat'

import Header from '@header/header';

import SeoBasicHelmet from '@components/seo-basic-helmet'

import VideoWidget from '@home_widgets/video-widget';
import GalleriesSectionWidget from '@components/home-widgets/galleries-section-widget';
import FooterWidget from '@home_widgets/footer-widget';

import HeadingNoneWidget from '@home_widgets/heading-none-widget';

import { connect } from 'react-redux';

function HomeLayout({ pageContext }) {    

    const {data} = pageContext;
    const {seo, extras} = data;
    const {home, props} = extras;
    const {header, ctinfo} = props;

    const {video_url, 
            slider_section_one, 
                slider_section_one_options,
                    slider_section_two,
                        slider_section_two_options} = home;

    const design_widget_options = {
        banners : slider_section_one,
        options : slider_section_one_options
    };

    const project_widget_options = {
        banners : slider_section_two,
        options : slider_section_two_options
    };

    return (
        <>
            <div className="main-wrapper">

                <SeoBasicHelmet data = {seo} />

                <Header data = {header} />

                <div className="vk-content">

                    <HeadingNoneWidget text = "Công ty cổ phần xây dựng và hoàn thiện nội thất Nhà Việt" />
                    
                    <VideoWidget data = {video_url} />

                    <GalleriesSectionWidget data = {design_widget_options} />

                    <GalleriesSectionWidget data = {project_widget_options} />

                    <FooterWidget data = {ctinfo} />

                </div>

            </div>
        </>
            
    )
}

function mapStateToProps(state) {   

    return { 
    }

}

function mapDispatchToProps(dispatch) {

    return {
 
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(HomeLayout);
