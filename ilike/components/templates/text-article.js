import React from 'preact/compat'
import Link from 'next/link'
import { getArticleData, getArticleFullLink } from '@js_dir/utils/articleUtils';
import PdLoadingSquare from '@loading/pd-loading-square';
export default function TextArticle({ loading = true, className = '',  data = null, index = 0 }) {
    const article = data && data[index] ? data[index] : {}; 
    const {title} = getArticleData(article);
    if ( loading ) {
        return (
            <h3 className={className}>
                <PdLoadingSquare />
            </h3>
        )
    }
    return (
        <h3 className={className}>
            <Link href={getArticleFullLink(article)}>
                <a title={title}>
                    {title}
                </a>
            </Link>
        </h3>
    )
}
