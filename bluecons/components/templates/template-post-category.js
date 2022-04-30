import React from 'preact/compat'
import Link from 'next/link'
export default function TemplatePostCategory({ data }) {
    if ( !data || data.length === 0 ) return <></>;
    const {text, url} = data[0];
    return (
        <Link href={url}>
            <a className="card-new-cate" 
                dangerouslySetInnerHTML={{
                    __html : text
                }}></a>
        </Link>
    )
}
