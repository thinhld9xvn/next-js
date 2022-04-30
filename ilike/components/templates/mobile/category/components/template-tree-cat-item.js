import React from 'preact/compat'
import Link from 'next/link'
import { getCategoryLink } from '@js_dir/utils/categoriesUtils';
export default function TemplateTreeCatItem({ data, activeCat }) {
    const {id, name} = data;
    return (
        <li className={activeCat.id === id || activeCat.parent_id === id ? 'active' : ''}>
            <Link href={getCategoryLink(data)}>
                <a title={name}>
                    {name}
                </a>
            </Link>
        </li>
    )
}
