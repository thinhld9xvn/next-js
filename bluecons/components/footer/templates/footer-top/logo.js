import Link from 'next/link';
import React from 'preact/compat'
export default function Logo({ data }) {
    const {url, src} = data;
    const {url : logo_white_url} = src[1];
    return (
        <div className="col-logo footer-col">
            <Link href={url}>
                <a>
                    <img src={logo_white_url} alt="" />
                </a>
            </Link>
            <a>
                <img src='/static/images/logo-BCT.png' alt="" />
            </a>
        </div>
    )
}
