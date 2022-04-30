import FooterSocial from '@components/templates/footer-social'
import React from 'preact/compat'
import CategoryItemWidget from './category-item-widget'
import ContactItemWidget from './contact-item-widget'
import IntroItemWidget from './intro-item-widget'
import ScrollToTop from './scroll-to-top'
import SocialItemWidget from './social-item-widget'
import SupportItemWidget from './support-item-widget'

function getTempStyleOne(data) {

    const {copyright, social} = data;

    return (
        <>
            <div className="_left">{copyright}</div>
            <div className="_right">
                <FooterSocial data = {social} />  
            </div>
        </>

    )

}

function getTempStyleThree(data) {

    const {intro_html, menu_footer, menu_support, social, copyright} = data;
    
    return (
        <>
            <IntroItemWidget data = {intro_html}/>
                        
            <CategoryItemWidget data = {menu_footer} />

            <SupportItemWidget data = {menu_support} />

            <div className="big_item">

                <SocialItemWidget data = {social} />

                <br />

                <ContactItemWidget data = {copyright} />

            </div>
        </>
    )

}

export default function Footer({ style = 'style-3', data }) {

    const footerData = style === 'style-3' ? getTempStyleThree(data) : getTempStyleOne(data);

    return (
        <>
            <footer className={`vk-footer vk-footer--${style}`}>

                <div className="vk-container">

                    <div className="vk-footer__content">

                        {footerData}

                    </div>
                </div>
            </footer>
            <ScrollToTop />
        </>
    )
}
