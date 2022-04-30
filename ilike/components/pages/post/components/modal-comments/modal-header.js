import React from 'preact/compat'
import { onClick_hideCommentsModal } from '@postpage/events/onClick_hideCommentsModal'

export default function ModalHeader({ data }) {
    const {setShowCommentsBox} = data;
    return (
        <div className="module__header">
            <h2 className="title">
                Bình luận
            </h2>
            <button type="button" 
                    className="btn btn__clos"
                    onClick={e => onClick_hideCommentsModal(e, {setShowCommentsBox})}>
                X
            </button>
        </div>
    )
}
