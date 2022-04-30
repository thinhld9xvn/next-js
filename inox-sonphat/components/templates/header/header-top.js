import React from 'preact/compat'
import Phone from './header-top/phone'
import Social from './header-top/social'
import ShoppingCarts from './header-top/shopping-carts'
export default function HeaderTop({ data }) {
    const {hotline, socials} = data || {};
    return (
        <div className="d-flex align-items-center justify-content-end">
            <Phone data = {hotline} />
            <Social data = {socials} />
            <ShoppingCarts />
        </div>
    )
}
