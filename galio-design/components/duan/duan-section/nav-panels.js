import React, {useEffect} from 'preact/compat'
import TemplatePanelItem from './nav-panels/template-panel-item'

export default function NavPanels({ data }) {
    const items = data.map((item, i) => {
        const settings = {
            wowDuration : '2s',
            wowDelay : ((i + 1) * 0.4) + 's'
        };
        return <TemplatePanelItem data = {item}
                                    settings = {settings}
                                    key = {i} />
    });
    return (
        <div className="project__group grid">             
            {items}
        </div>
    )
}
