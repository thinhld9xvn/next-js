import React from 'preact/compat'
import FooterMenu from '@components/templates/footer-menu'

export default function SupportItemWidget({ data }) {
    return (
        <div className="_item">
            <div className="vk-footer__list--style-1">
                <section id="nav_menu-4" className="widget widget_nav_menu">
                    <h2 className="widget-title vk-footer__title">HỖ TRỢ</h2>
                    <div className="menu-ho-tro-container">
                        <ul id="menu-ho-tro" className="menu">
                           <FooterMenu data = {data} />
                        </ul>
                    </div>
                </section>
            </div>
        </div>
    )
}
