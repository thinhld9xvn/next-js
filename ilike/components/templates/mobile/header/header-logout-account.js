import { LOGOUT_ICON } from '@constants/constants'
import { onClick_handleLogout } from 'handleEvents/onClick_handleLogout'
import React from 'preact/compat'

export default function HeaderLogoutAccount({props}) {
    const {session} = props;
    return (
        <div className="nav-logout">
            <a href="#"
                onClick={onClick_handleLogout.bind(this, session)}>
                    <img src={LOGOUT_ICON} />
            </a>
        </div>
    )
}
