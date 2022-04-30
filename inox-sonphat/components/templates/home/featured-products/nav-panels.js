import React from 'preact/compat'
import NavPanelItem from './templates/nav-panel-item';

export default function NavPanels({data, props}) {
    const panelsList = data.map(item => <NavPanelItem data = {item}
                                                        props = {props}
                                                        key = {'panel__' + item.id} />);
    return (
        <div className="tab-content hpro-tabs-content">
            {panelsList}
        </div>
    )
}
