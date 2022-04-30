import React from 'preact/compat'

import HeaderMenu from '@templates/header-menu'

export default function MainMenu({ data }) {

    return (

        <nav className="classic-menu d-none d-sm-none d-md-none d-lg-block d-xl-block">
            <ul>
                <HeaderMenu data={data} />
            </ul>
        </nav>

    )
}
