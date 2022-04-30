import React from 'preact/compat'

export default function PostCommentButton({ states = null }) {
    
    const {showCommentsBox, setShowCommentsBox, articleComments} = states;

    const showCommentBoxEvent = (e) => {

        e.preventDefault();

        setShowCommentsBox(true);

    }

    return (
        <button type="button" 
                className="btn btn__comment detail--icon"
                onClick={showCommentBoxEvent}>
            <span>
                {articleComments.length}
            </span>
        </button>
    )
}
