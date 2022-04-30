import React from 'preact/compat'
import TemplatePanelItem from './nav-panels/template-panel-item'

export default function NavPanels({ data, props }) {
    const items = data.map((item, i) => {
        const settings = {
            wowDuration : '2s',
            wowDelay : ((i + 1) * 0.4) + 's'
        }
        return <TemplatePanelItem data = {item}    
                                    props = {props}
                                    settings = {settings}
                                    key = {i} />

    });
    return (
        <div className="video__group grid">
            {items}
        </div>
    )
}
