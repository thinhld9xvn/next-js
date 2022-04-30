import React from 'preact/compat'
import Link from 'next/link'
import PdLoadingSquare from '@loading/pd-loading-square'
import { getArticleFullLink } from '@js_dir/utils/articleUtils';
import { BLANK_IMAGE } from '@constants/constants';
function getTempItem(data, i) {
    const {title} = data;
    return (
        <li key={i}>
            <Link href={getArticleFullLink(data)}>
                <a title={title}>
                    {title}
                </a>
            </Link>
        </li>
    )
}
export default function FeaturedDiscoverBox({ loading = true, data = null }) {   
    const {title, thumbnail, data : postsList} = data;
    const arrListItems = postsList && postsList.map(getTempItem);
    return (
        <div className="discover__item">
            <h3 className="discover__title">{title}</h3>
            <div className="frame">
                <img data-src={thumbnail} src={BLANK_IMAGE} alt={title} />
            </div>
            <ul className={`discover__list `.concat(loading ? 'loading' : '')}>
                {loading ? (
                    <>
                        <li>
                            <PdLoadingSquare size = "small" />
                        </li>
                        <li>
                            <PdLoadingSquare size = "small" />
                        </li>
                        <li>
                            <PdLoadingSquare size = "small" />
                        </li>
                    </>
                ) : (
                    <>
                        {arrListItems}
                    </>                    
                )}
            </ul>
        </div>
    )
}
