import React from 'preact/compat'
const key = '/projects-category';
export default function TemplateNavItem({ data, settings, props}) {
    const {wowDuration, wowDelay} = settings;
    const {tabActiveId, setTabActiveId} = props;
    const {id, url, title} = data;
    const onClick_selectTab = (e, tabId, tabUrl) => {
        e.preventDefault();
        const myTabUrl = tabUrl.toLowerCase();
        const myActiveUrl = window.location.href;
        setTabActiveId(tabId);
        if ( myActiveUrl.indexOf(key) !== -1 ) {
            if ( myTabUrl === '#' ) {
                history.pushState("", "", key);
            }
            else {
                history.pushState("", "", `${myTabUrl}`);
            }
        }
    }
    return (
        <li className={"project__menu--list ".concat(tabActiveId === id ? 'active' : '')}
            key={id}>
            <a className="wow fadeInUp"  
                data-wow-duration={wowDuration}
                    data-wow-delay={wowDelay}
                    onClick={e => onClick_selectTab(e, id, url)}>
                {title}
            </a>
        </li>
    )
}
