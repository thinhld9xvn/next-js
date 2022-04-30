import React from 'preact/compat'
import Link from 'next/link'
import { onClick_handleShowHeaderPMenu } from 'handleEvents/onClick_handleShowHeaderPMenu';
import { ACCOUNT_PAGE_URL, MOBILE_LOGO, NAV_ICON, USER_NAV_ICON } from '@constants/constants';
import { useRouter } from 'next/router';
export default function HeaderPrimary({props}) {
    const {login, updateShowLoginModal} = props;
    const router = useRouter();
    const handleShowLoginModal = (e) => {
        e.preventDefault();
        if ( login ) {
            router.push(ACCOUNT_PAGE_URL);
            return;
        }
        updateShowLoginModal(true);
    }
    return (
        <header className="header-mobile">
            <div className="container">
                <div className="wrapper flex flex-align-center flex-justify-space-between">
                    <div className="nav-menu">
                        <a href="#"
                            onClick={onClick_handleShowHeaderPMenu.bind(this, props)}>
                            <img src={NAV_ICON} />
                        </a>
                    </div>
                    <div className="logo">
                        <Link href="/">
                            <img src={MOBILE_LOGO} />
                        </Link>
                    </div>
                    <div className="users">
                        <a href="#" 
                            onClick = {handleShowLoginModal.bind(this)}>
                            <img src={USER_NAV_ICON} />
                         </a>
                    </div>
                </div>
            </div>
        </header>
    )
}
