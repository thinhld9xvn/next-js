import React from 'preact/compat'
export default function AddonMenu({showSidebar, showSearchBar, data}) {
    return (
        <div className={"addon__menu"}>
            <div className="box__menu">
                <ul className={"menu ".concat(showSearchBar ? 'top' : '')}>
                    {data}
                </ul>
            </div>
        </div>
    )
}
