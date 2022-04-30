import React from 'preact/compat'
import Link from 'next/link'
import { DEFAULT_LOGO_PRIMARY, DEFAULT_LOGO_WHITE } from '@constants/constants';
import { getLogoSrc } from '@js_dir/utils/logoUtils';
export default function Logo({ data }) {
    const {url, alt} = data;
    const logoSrc = getLogoSrc(data);
    return (
        <>
            <Link href={url}>
                <a className="logo logo-main">
                    <img src={logoSrc.white} alt={alt} />
                </a>
            </Link>
            <Link href={url}>
                <a className="logo logo-hover">
                    <img src={logoSrc.primary} alt={alt} />
                </a>
            </Link>
        </>
    )
}
