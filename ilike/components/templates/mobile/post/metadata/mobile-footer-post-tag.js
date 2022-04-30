import { getTagLink } from '@js_dir/utils/tagUtils';
import React from 'preact/compat'
import Link from 'next/link'
function getTempItem(item) {
    const {name} = item;
    return (
        <Link href={getTagLink(item)}>
            <a className="tag">
                {name}
            </a>
        </Link>
    )
}
export default function MobileFooterPostTag({ data }) {
    const arrTagsList = data.map(item => {
       return getTempItem(item);
    });
    return (
        <div className="mb-section-scnt flex mtop20">
            {arrTagsList}
        </div>
    )
}
