import React, {useState} from 'preact/compat'

import HeaderMenu from '@templates/header-menu'

export default function MobileMenu({ data }) {

    const [showMobileMenu, setShowMobileMenu] = useState(false);

    return (

        <>

            <div className={"hamburger d-sm-block d-md-block d-lg-none d-xl-none ".concat(showMobileMenu ? "open" : "")}
                onClick={e => setShowMobileMenu(! showMobileMenu)}>
                <span className={showMobileMenu ? "open" : ""}></span>
                <span className={showMobileMenu ? "open" : ""}></span>
            </div>

            <div className={"full-menu ".concat(! showMobileMenu ? "nav-menu hide" : "")}>
                <nav>
                    <ul>
                        <HeaderMenu data={data}
                                    isMobile = {true} />
                    </ul>
                </nav>
            </div>

        </>

    )
}
