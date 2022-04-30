import React from 'preact/compat'
import Link from 'next/link'
export default function TemplateBreadcrumbsItem({ item, is_last = false }) {
    const {text, url} = item;
    return (
        <>
            {
                ! is_last ? (
                    <>
                        <Link href = {url}>
                            <a dangerouslySetInnerHTML={{
                                __html : text
                            }}></a>
                        </Link>
                        <span className="fa fa-angle-double-right"></span>
                    </>
                ) : null
            }
            {
                is_last ? (
                    <span className="current"
                           dangerouslySetInnerHTML={{
                               __html : text
                           }}></span>
                ) : null
            }
        </>
    )
}
