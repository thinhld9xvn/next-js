import React from 'preact/compat'

import { getArticleFullLink } from '@js_dir/utils/articleUtils'
import { getTwShareLink } from '@js_dir/utils/socialUtils';

export default function TwShareButton({ data }) {
    return (
        <a href={getTwShareLink(getArticleFullLink(data))} 
            target="__blank" 
            className="detail__icon" 
            title="twitter">
            <i className="fa fa-twitter" aria-hidden="true"></i>
        </a>
    )
}
