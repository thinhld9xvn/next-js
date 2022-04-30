import React from 'preact/compat'
import NavTabItem from './templates/nav-tab-item'

export default function NavTabs({data, props}) {
    const tabsList = data.map(item => <NavTabItem data = {item}
                                                  props = {props}
                                                  key = {item.id} />);
    return (
        <ul className="nav nav-pills justify-content-center hp-tabs" role="tablist">
            {tabsList}
        </ul>
    )
}
