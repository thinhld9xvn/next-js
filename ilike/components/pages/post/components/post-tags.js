import React from 'preact/compat'
import Link from 'next/link'
import { getTagLink } from '@js_dir/utils/tagUtils';
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
export default function PostTags({ data = null }) {
    const arrTagsList = [];
    data.map(item => {
        arrTagsList.push(getTempItem(item));
    });
    return (
        <div className="detail__tag">
            {arrTagsList}            
        </div>
    )
}
