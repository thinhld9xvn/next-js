import React from 'preact/compat'
import Link from 'next/link'
import { getArticleDateCreatedStr } from '@js_dir/utils/articleUtils';
import TemplatePostCategory from './template-post-category';
import { NO_THUMBNAIL_IMAGE } from '@constants/constants';
export default function TemplateKnowledgeItem({ data }) {
    const {title, url, thumbnail, categories} = data;
    const date_created = getArticleDateCreatedStr(data);
    return (
        <div className="card-new">
            <>
                <a className="card-new-thumb">
                    <img src={thumbnail || NO_THUMBNAIL_IMAGE} alt="new" />
                    <Link href={url}><a className="overlay"></a></Link>
                </a>                    
            </>
            {date_created || categories ? (
                <div className="d-flex">
                    {date_created ? (
                        <p className="card-new-create">{date_created}</p>
                    ) : null}
                    {categories ? (
                        <TemplatePostCategory data = {categories} />
                    ) : null}
                </div>
            ) : null}
            {title ? (
                <h3 className="card-new-title">
                    <Link href={url}>
                        <a dangerouslySetInnerHTML={{
                            __html : title
                        }}></a>
                    </Link>
                </h3>
            ) : null}
        </div>
    )
}
