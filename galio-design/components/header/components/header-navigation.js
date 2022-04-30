import React from 'preact/compat'
import Langbar from './header-navigation/langbar'
import Search from './header-navigation/search'
export default function HeaderNavigation({props, div = true}) {
    return (
        <>
            {div ? (
                <div className="header__right-group">
                    <div className="header__right-menu">
                        <Search props = {props} />
                        <Langbar />                
                    </div>
                </div>
            ) : <li className="header__right-group">
                    <div className="header__right-menu">
                        <Search props = {props} />
                        <Langbar />                
                    </div>
                </li>}
        </>
    )
}

