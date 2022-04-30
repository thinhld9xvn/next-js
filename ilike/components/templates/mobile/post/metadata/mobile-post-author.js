import { USER_ICON } from '@constants/constants';
import { getArticleData } from '@js_dir/utils/articleUtils';
import React from 'preact/compat'

export default function MobilePostAuthor({ data }) {
    const {author, date_format} = getArticleData(data);
    return (
        <div className="mb-element-metadata mb-element-harquant-metadata flex flex-align-center">
            <img className="mb-default-avatar" src={USER_ICON} alt="" />
            <strong className="mb-author-name padleft10">{author}</strong>
            <strong className="mb-post-category mb-dot-before flex flex-align-center padleft10">
                {date_format}
            </strong>
        </div>
    )
}
