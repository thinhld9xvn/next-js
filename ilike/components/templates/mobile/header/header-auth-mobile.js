import { MOBILE_LOGO } from '@constants/constants'
import React from 'preact/compat'
import Link from 'next/link'
export default function HeaderAuthMobile() {
    return (
        <header className="header-mobile">
            <div className="container">
                <div className="wrapper flex flex-align-center flex-justify-center">
                    <div className="logo">
                        <Link href="/"><img src={MOBILE_LOGO} /></Link>
                    </div>
                </div>
            </div>
        </header>
    )
}
