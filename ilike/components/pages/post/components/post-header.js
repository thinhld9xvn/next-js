import React from 'preact/compat'
import Heading from './post-header/heading'
import CreatedTime from './post-header/created-time';
import PostSocial from './post-header/post-social';
import PostHeaderLoading from './post-header-loading';
import { getIntroText } from '@js_dir/utils/articleUtils';
export default function PostHeader({ loading = true, data = null, states = null }) {
    if ( loading ) {
        return (
            <PostHeaderLoading />
        )
    }
    const { title, introtext, created_at, created_time, updated_time } = data;   
    return (
        <div className="module__header container__detail">
            <Heading data = {title} />
            <div className="intro" 
                dangerouslySetInnerHTML={{
                __html : getIntroText(introtext)
            }}>
            </div>
            <div className="detail__control">
                <CreatedTime data = {created_at || created_time || updated_time} />
                <PostSocial states = {states}
                            data = {data} />
            </div>
        </div>
    )
}
