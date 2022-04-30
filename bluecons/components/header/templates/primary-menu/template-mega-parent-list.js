import React from 'preact/compat'
import TemplateMegaChildItem from './template-mega-child-item';
function TemplateParentLayout({ data }) {
    const {text, templateMegaLists} = data;
    return (
        <div className="menu-cate">
            <h3 className="title">
                {text}
            </h3>
            <ul className="nav nav-tabs" role="tablist">
                {templateMegaLists}
            </ul>
        </div>
    )
}
function TemplateChildLayout({ data }) {
    const {templateMegaLists} = data;
    return (
        <div className="menu-list">
            <div className="tab-content">
                {templateMegaLists}
            </div>
        </div>
    )
}
export default function TemplateMegaParentList({ data, props, layout = 'parent' }) {
    const {text, data : megaLists} = data;
    const templateMegaLists = megaLists.map(item => <TemplateMegaChildItem key = {item.id}
                                                                            data = {item}
                                                                            props = {props}
                                                                           layout = {layout} />  );
    const templateLayout = layout === 'parent' ? <TemplateParentLayout data = {{text, templateMegaLists }} /> : 
                                                  <TemplateChildLayout data = {{ templateMegaLists }} />;
    return (
        <>
            {templateLayout}
        </>
    );
}
