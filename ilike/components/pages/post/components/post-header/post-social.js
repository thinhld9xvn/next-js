import React from 'preact/compat'
import FbShareButton from './post-social/fb-share-button';
import TwShareButton from './post-social/tw-share-button';
import SavePostButton from './post-social/save-post-button';
import PostCommentButton from './post-comment-button';
export default function PostSocial({ data = null, states = null }) {
    return (
        <div className="detail__select">
            <FbShareButton data = {data} />
            <TwShareButton data = {data} />
            <SavePostButton data = {data}
                            states = {states} />
            <PostCommentButton states = {states} />
        </div>
    )
}
