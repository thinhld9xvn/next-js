import React from 'preact/compat'

import { onClick_performResponse } from '@postpage/events/onClick_performResponse'

export default function CommentAnswerButton({ data }) {
    const {user, setUserTag} = data;
    return (
        <button type="button" 
                className="btn btn__reply"
                onClick={e => onClick_performResponse(e, {user, setUserTag})}>
            Trả lời
        </button>
    )
}
