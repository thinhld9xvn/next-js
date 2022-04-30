import React from 'preact/compat'
import HeaderLogoutAccount from './header-logout-account'
import HeaderNavAccount from './header-nav-account'
import { NAV_ICON } from '@constants/constants'
import { onClick_handleShowHeaderPMenu } from 'handleEvents/onClick_handleShowHeaderPMenu'
import { useSession, signIn, signOut } from "next-auth/react"
export default function HeaderIAccountMobile({props}) {
    const {data : session} = useSession();    
    return (
        <header className="header-mobile">
            <div className="container">
                <div className="wrapper flex flex-align-center flex-justify-space-between">
                    <div className="nav-side flex flex-align-center">
                        <div className="nav-menu">
                            <a href="#"
                                onClick={onClick_handleShowHeaderPMenu.bind(this, props)}>
                                <img src={NAV_ICON} />
                            </a>
                        </div>
                        <HeaderNavAccount props = {props} />
                    </div>
                    <HeaderLogoutAccount props = {{session, signOut}} />
                </div>
            </div>
        </header>
    )
}
