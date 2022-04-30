import React from 'preact/compat'
import { onClick_showResponseBox } from '@postpage/events/onClick_showResponseBox'

export default function CommentReplyButton({ data }) {
    const {showRespBox, setShowRespBox, responseLength} = data;
    return (
        <div className="btn btn__ph"
                onClick={e => onClick_showResponseBox(e, {showRespBox, setShowRespBox})}>
            Phản hồi ({responseLength})
        </div>
    )
}
