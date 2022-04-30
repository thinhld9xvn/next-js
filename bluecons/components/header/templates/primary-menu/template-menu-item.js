import React, {useEffect, useState, useCallback} from 'preact/compat'
import Link from 'next/link'
import { isValidateMega, isValidateSub, isNotValidateMega } from '@js_utils/menuUtils';
import TemplateMegaParentList from './template-mega-parent-list';
import TemplateMegaMansory from './template-mega-mansory';
import TemplateMobileItem from './template-mobile-item';
import { useRouter } from 'next/router';
export default function TemplateMenuItem({ data, child = false, mega = false, submega = false }) {
    const router = useRouter();
    const [showChildMenu, setShowChildMenu] = useState(false);    
    const isMegaLayout = isValidateMega(data);
    const isNotMegaLayout = isNotValidateMega(data);
    const hasChildrens = isValidateSub(data);
    const handleToggleShowChildMenu = useCallback((e) => {
        e.preventDefault();
        setShowChildMenu(!showChildMenu);
    }, [,showChildMenu]);
    const {id, text, url, childrens} = data;
    const citemFirst = hasChildrens ? childrens[0] : null;
    const [panelActiveId, setPanelActiveId] = useState(citemFirst ? citemFirst.id : null);
    const [mansoryData, setMansoryData] = useState(citemFirst);    
    const arrMegaPList = hasChildrens && isMegaLayout ? <TemplateMegaParentList data = {{text, data: childrens }} 
                                                                                layout = "parent"
                                                                                props = {{panelActiveId, setPanelActiveId, setMansoryData}} /> : null;
    const arrMegaCPList = hasChildrens && isMegaLayout ? <TemplateMegaParentList data = {{text, data: childrens }} 
                                                                                 layout = "child"
                                                                                 props = {{panelActiveId, setMansoryData}} /> : null;
    const arrMegaMansory = hasChildrens && isMegaLayout ? <TemplateMegaMansory data = {mansoryData} /> : null;
    const arrMobileList = hasChildrens ? <TemplateMobileItem data = {data} /> : null;  
    return (
        <li key={id} className={"menu-item ".concat(router.asPath === url ? 'active' : '')}>
            {!child || (child && submega) ? (
                <>
                    <Link href={url}>
                        <a className="menu-link">
                            {text}                            
                        </a>
                    </Link>       
                    {hasChildrens ? (
                        <>
                            <i className={"fal fa-chevron-".concat(showChildMenu ? 'up' : 'down')}></i>
                            <i className="fas fa-chevron-right icon-mega-mobile"
                                onClick={handleToggleShowChildMenu}></i>
                        </>
                    ) : null}             
                </>
            ) : null}
            {hasChildrens && isMegaLayout ? (
                <>
                    <ul className="menu-mega">
                        <div className="container">
                            <div className="menu-mega-inner">
                                {arrMegaPList}
                                {arrMegaCPList}
                                {arrMegaMansory}
                            </div>
                        </div>                    
                    </ul>                    
                </>
            ) : null}
            {hasChildrens ? (
                <>
                    <ul className={"mega-mobile ".concat(showChildMenu ? 'active' : '')}>
                        <div className="container">
                            <div className="mega-mobile-inner">
                                <span onClick={handleToggleShowChildMenu}>
                                    <i className="far fa-arrow-left icon-return"></i>
                                    Quay lại
                                </span>
                            </div>
                            <ul className="mega-drop-item">
                                {arrMobileList}
                            </ul>
                        </div>
                    </ul>
                </>
            ) : null}
        </li>
    )
}
