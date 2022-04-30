import React from 'preact/compat'
import Link from 'next/link'
import { CATEGORIES, HOME_PAGE_URL } from '@constants/constants';
export default function FooterLogo({ data }) {
    return (
        <Link href={HOME_PAGE_URL}>
            <a  className="logo__f">
                <img src={data} alt="logo" />
            </a>
        </Link>
    )
}
