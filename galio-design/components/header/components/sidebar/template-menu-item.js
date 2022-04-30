import React, {useState} from 'preact/compat'
import Link from 'next/link'

function hasChildrens(item) {
    return item.childrens && item.childrens.length;
}

function onClick_toggleSubMenu(e, showSubMenu, setShowSubMenu) {
    e.preventDefault();
    setShowSubMenu(!showSubMenu);
}

export default function TemplateMenuItem({ data, isChild = false }) {
    const [showSubMenu, setShowSubMenu] = useState(false);
    const {text, url, childrens} = data;
    const childItemLists = hasChildrens(data) ? childrens.map((item, i) => <TemplateMenuItem data = {item} 
                                                                                            isChild = {true}
                                                                                            key = {item.id} />) : 
                                                null;
    return (
        <li className="menu__list">
            <Link href={url}>             
                <a className={!isChild ? "menu__link" : ""}
                    title={text}>{text}</a>
            </Link>
            {childItemLists ? (
                <>
                     <button type="button" 
                            className={"btn__childrens ".concat(showSubMenu ? 'active' : '')}
                            onClick={e => onClick_toggleSubMenu(e, showSubMenu, setShowSubMenu)}>
                    </button>
                    <ul className={showSubMenu ? 'show' : ''}>
                        {childItemLists}
                    </ul>
                   
                </>
            ) : null}
        </li>
    )
}
