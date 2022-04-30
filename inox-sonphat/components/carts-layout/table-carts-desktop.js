import TemplateCartDesktopItems from '@components/templates/template-cart-desktop-items'
import React from 'preact/compat'
export default function TableCartsDesktop({ data, props, locale, messages }) {
    return (
        <div className="table-desktop flex justify-space-between">
            <TemplateCartDesktopItems data = {data} 
                                    messages = {messages}
                                    props = {props}
                                    locale = {locale} />
        </div>
    )
}
