import Link from 'next/link';
import React from 'preact/compat'
export default function TemplateServiceItem({ data }) {
    const {title, thumbnail, url} = data;
    return (
        <div className="block-card">
            <img src={thumbnail} alt="thumbnail" />
            <Link href={url}>
                <a dangerouslySetInnerHTML={{
                    __html : title
                }}></a>
            </Link>
        </div>
    )
}
