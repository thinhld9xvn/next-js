import React from 'preact/compat'

import Link from 'next/link'

function getTempCatItem(data) {

    return (
        <li key={data.id} className="link">
            <Link href="#">
                <a className="ajax-link" rel="category tag">
                    <span data-hover={data.text}>{data.text}</span>
                </a>
            </Link>
        </li>
    )

}

function BlogTreeCat({data}) {

    const arrCategories = [];

    data.categories.map(cat => arrCategories.push(getTempCatItem(cat)));

    return (

        <>
            {arrCategories}
        </>

    )
}

export default BlogTreeCat

