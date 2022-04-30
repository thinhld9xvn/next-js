import FooterSocial from '@components/templates/footer-social'
import React from 'preact/compat'

export default function SocialItemWidget({ data }) {

    return (
        <div className="_item">
            <section id="cta_widget-2" className="widget cta_widget">
                <h2 className="vk-footer__title">LIÊN KẾT VỚI CHÚNG TÔI</h2>
                <FooterSocial data = {data} />   
            </section>
        </div>
    )
}
