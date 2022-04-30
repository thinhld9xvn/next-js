import React from 'preact/compat'
import Link from 'next/link'
export default function Logo({data}) {
    const {url, src} = data;
    return (
        <Link href={url}><img src={src} alt="" title="" className="logo" /></Link>
    )
}
