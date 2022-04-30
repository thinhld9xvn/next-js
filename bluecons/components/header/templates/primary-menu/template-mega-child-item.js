import React, {useCallback} from 'preact/compat'
import { isValidateSub } from '@js_dir/utils/menuUtils';
import Link from 'next/link'
function TemplateParentLayout({ data, props }) {
    const {id, text} = data;
    const {panelActiveId, setPanelActiveId, setMansoryData} = props;
    const handleMouseEnterItem = useCallback((e) => {
        e.preventDefault();
        setPanelActiveId(id);
        setMansoryData(data);
    }, [,data]);
    return (
        <li className="nav-item">
            <a className={"nav-link ".concat(panelActiveId === id ? 'active' : '')}
                onMouseEnter={handleMouseEnterItem.bind(this)}
                href="#"
                dangerouslySetInnerHTML={{
                    __html : text
                }}></a>
        </li>
    )
}
function TemplateChildItem({ data, props }) {
    const {url, text, type} = data;
    const {setMansoryData} = props;
    const handleMouseEnterItem = useCallback((e) => {
        e.preventDefault();
        //if ( type === process.env.SERVICES_TAX || 
                //type === process.env.PRODUCTS_TAX ) {  
            setMansoryData(data);
        //}
    }, [,data]);
    return (
        <li>
            <Link href={url}>
                <a dangerouslySetInnerHTML={{
                    __html : text
                }} onMouseEnter={handleMouseEnterItem}></a>
            </Link>
        </li>
    )
}
function TemplateChildPanelLayout({ data, props }) {
    const {id} = data;
    const {panelActiveId} = props;
    const arrSubItems = isValidateSub(data) ? data.childrens.map(item => <TemplateChildItem key = {item.id}
                                                                                            data = {item}
                                                                                            props = {props} />) : null;
    return (
        <div className={"tab-pane ".concat(panelActiveId === id ? 'active' : '')} id={`tabs-${id}`} role="tabpanel">
            <ul>
                {arrSubItems}
            </ul>
        </div>
    )
}
export default function TemplateMegaChildItem({ data, props, layout = 'parent' }) {
    const templateLayout = layout === 'parent' ? <TemplateParentLayout data = {data}
                                                                        props = {props} /> : 
                                                 <TemplateChildPanelLayout data = {data}
                                                                           props = {props} />;
    return (
        <>
            {templateLayout}
        </>
    )
}
