import React from 'preact/compat'
import Link from 'next/link'

export default function Logo({ data, left }) {
    const {url, alt, src} = data;

    return (
        <Link href={url}>
            <a className="logo" 
                title="suyn fashion"
                style={{
                    left : left ? left + 'px' : 'unset'
                }}>
                <div className="logo-img">
                    <img src={src} alt={alt} />
                </div>
            </a>
        </Link>
    )
}