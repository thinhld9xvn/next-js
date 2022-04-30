import React from 'preact/compat'

export default function TemplateNavItem({ data, settings, props}) {
    const {wowDuration, wowDelay} = settings;
    const {tabActiveId, setTabActiveId} = props;
    const {id, title, count} = data;
    const onClick_selectTab = (e, tabId) => {
        e.preventDefault();
        setTabActiveId(tabId);
    }
    return (
        <li className={"project__menu--list ".concat(tabActiveId === id ? 'active' : '')}
            key={id}>
            <a className="wow fadeInUp"  
                data-wow-duration={wowDuration}
                    data-wow-delay={wowDelay}
                    onClick={e => onClick_selectTab(e, id)}>
                {title} ({count})
            </a>
        </li>
    )
}
