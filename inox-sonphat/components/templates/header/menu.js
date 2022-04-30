import React from 'preact/compat'
import TemplatePrimaryMenu from '../template-primary-menu';
export default function Menu({data}) {
    return (
        <>
            <div className="header-menu">
                <nav id="menu" className="menu-wrap nav-mobile-menu" style={{display:'none'}}>
                    <ul className="menu">
                        <TemplatePrimaryMenu data = {data}
                                             mobile = {true} />
                    </ul>
                </nav>
                <nav id="primary" className="menu-wrap">
                    <ul className="menu">
                        <TemplatePrimaryMenu data = {data}
                                             mobile = {false} />
                    </ul>
                </nav>
            </div>
        </>
    )
}
