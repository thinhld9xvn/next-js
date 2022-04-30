import React from 'preact/compat'
import { memo } from 'react'

function Heading() {
    return (
        <h1 className="video__title" data-split-letters-big>
            Video
        </h1>
    )
}

export default memo(Heading);
