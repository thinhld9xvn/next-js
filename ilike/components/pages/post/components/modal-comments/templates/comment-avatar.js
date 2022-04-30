import React from 'preact/compat'
import { USER_THUMBNAIL } from '@constants/constants'

export default function CommentAvatar() {
    return (
        <div className="reply__avatar">
            <img src={USER_THUMBNAIL} alt="user" />
        </div>
    )
}
