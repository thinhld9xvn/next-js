import React from 'preact/compat'

import { getArticleFullLink } from '@js_dir/utils/articleUtils'
import { getFbShareLink } from '@js_dir/utils/socialUtils'

export default function FbShareButton({ data }) {
    return (
        <a href={getFbShareLink(getArticleFullLink(data))} 
            target="__blank" 
            className="detail__icon" 
            title="facebook">
            <i className="fa fa-facebook" aria-hidden="true"></i>
        </a>
    )
}
