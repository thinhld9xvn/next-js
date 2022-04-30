import React from 'preact/compat'
import FooterMenu from '@components/templates/footer-menu'

export default function CategoryItemWidget({ data }) {
    return (
        <div className="_item">
            <div className="vk-footer__list--style-1">
                <section id="nav_menu-10" className="widget widget_nav_menu">
                    <h2 className="widget-title vk-footer__title">Danh mục</h2>
                    <div className="menu-footer-1-container">
                        <ul id="menu-footer-1" className="menu">
                            <FooterMenu data = {data} />
                        </ul>
                    </div>
                </section>
            </div>
        </div>
    )
}
