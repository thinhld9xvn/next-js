import React from 'preact/compat'
import TemplateMenuItem from './primary-menu/template-menu-item'
export default function PrimaryMenu({ data }) {
    const arrTemplateMenuItems = data.map(item => <TemplateMenuItem key = {item.id}
                                                                    data = {item} />)
    return (
        <ul className="menu">
            {arrTemplateMenuItems}
        </ul>
    )
}
