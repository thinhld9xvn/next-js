import React, {useState, useEffect} from 'preact/compat'
import Link from 'next/link'
import { addPathToUrl } from '@js_dir/utils/urlUtils';
import { useRouter } from 'next/router';
import { isDiff } from '@js_dir/utils/arrayUtils';
function hasChildElements(e) {
    return e && e.length;
}
function isCatType(code) {
    return code === 'category';
}
function isPageType(code) {
    return code === 'page';
}
function addValidBase(item) {
    const {link, code} = item;
    if ( isCatType(code) ) {
        return addPathToUrl(link, 'category', true);
    }
    if ( isPageType(code) ) {
        return addPathToUrl(link, 'page', true);
    }
    return link;
}
function isMenuActive(link) {
    return window.location.pathname.toLocaleLowerCase() === link.toLocaleLowerCase();
}
function onClick_performClickMenuEvent(e, setShowMobileMenu) {
    setShowMobileMenu(false);
}
export default function TemplateMenuItem({ data, states = {}, isChildItem = false }) {
    const router = useRouter();
    const [active, setActive] = useState(false);
    const {setShowMobileMenu} = states;
    const {id, url, name} = data;
    const childMenuItemsList = hasChildElements(data.elements) ? data.elements.map(item => <TemplateMenuItem data = {item}
                                                                                                             key = {id}
                                                                                                             isChildItem = {true} />) : null;
    useEffect(() => {
        if ( isDiff(active, isMenuActive(url)) ) {
            setActive(!active);
        }
    }, [router.query.slug]);
    return (
        <li className={(isChildItem ? ' ' : 'menu__list ').concat(
                             active ? 'active ' : ' '
                        )}>
            <Link href={url}>
                <a className={isChildItem ? '' : 'menu__link'} 
                    title={name}
                    onClick={e => onClick_performClickMenuEvent(e, setShowMobileMenu)}>
                    {name}
                </a>
            </Link>
            {hasChildElements(data.elements) ? (
                <ul>
                    {childMenuItemsList}
                </ul>
            ) : null}
        </li>
    )
}
