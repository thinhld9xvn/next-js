import React from 'preact/compat'
import Address from './footer-top/address'
import Info from './footer-top/info'
import Logo from './footer-top/logo'
import Socials from './footer-top/socials'
import Support from './footer-top/support'
export default function FooterTop({ data }) {
    const {siteLogo, contact, info, supporter, socials} = data;
    return (
        <div className="footer-top">
            <div className="container">
                <div className="footer-inner">
                    <Logo data = {siteLogo} />
                    <Address data = {contact} />
                    <Info data = {info} />
                    <Support data = {supporter} />
                    <Socials data = {socials} />
                </div>
            </div>
        </div>
    )
}
