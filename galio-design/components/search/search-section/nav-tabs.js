import React from 'preact/compat'
import TemplateNavItem from './nav-tabs/template-nav-item'

export default function NavTabs({ data, props }) {    
    const navTabsItem = data.map((item, i) => {
        const settings = {
            wowDuration : '2s',
            wowDelay : (i * .5) + 's'
        }
        return <TemplateNavItem data = {item}
                                settings = {settings}
                                props = {props}
                                key = {i} />
    });
    return (
        <ul className="project__menu">
            {navTabsItem}
        </ul>
    )
}
