import React from 'preact/compat'
import Link from 'next/link'
export default function TemplateMegaMansory({ data }) {
    if ( !data ) return <></>;
    const {background, url, type} = data;
    return (
        <div className="menu-media menu-mansory">  
            {background ? (
                <Link href={url}>
                    <a>
                        <img src={background} alt="thumbnail" />
                    </a>
                </Link>
            ) : null}
            {/*{type === process.env.SERVICES_TAX || 
                type === process.env.PRODUCTS_TAX ? (
                <Link href={url}>
                    <a className="see-all">Xem tất cả</a>
                </Link>
                ): null}*/}
            {background ? (
                <Link href={url}>
                    <a className="see-all">Xem tất cả</a>
                </Link>
            ) : null}
        </div>
    )
}
