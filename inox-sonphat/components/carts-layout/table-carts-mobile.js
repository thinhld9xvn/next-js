import TemplateCartMobileItems from '@components/templates/template-cart-mobile-items'
import React from 'preact/compat'
export default function TableCartsMobile({ data, messages, locale, props }) {
    return (
        <div className="table-mobile">
            <TemplateCartMobileItems data = {data}
                                     messages = {messages}
                                     locale = {locale} 
                                     props = {props} />
        </div>
    )
}
