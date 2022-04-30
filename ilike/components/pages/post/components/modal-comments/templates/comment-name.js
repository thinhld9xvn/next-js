import React from 'preact/compat'

export default function CommentName({ data }) {
    return (
        <h3 className="cm__name">
            {data}
        </h3>
    )
}
