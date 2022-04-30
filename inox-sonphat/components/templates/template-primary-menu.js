import React, {useState} from 'preact/compat'
import TemplateMenuItem from './primary-menu/template-menu-item';
export default function TemplatePrimaryMenu({ data, mobile = false }) {
    const arrMenuItems = data ? data.map(item => <TemplateMenuItem data = {item}
                                                                    mobile = {mobile}
                                                                    key = {item.id} />) : null;
    return (
        <>
            {arrMenuItems}
        </>
    )
}
