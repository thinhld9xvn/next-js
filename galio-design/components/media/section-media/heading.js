import React from 'preact/compat'
import { memo } from 'react'

function Heading() {
    return (
        <h1 className="media__title wow fadeInUp" data-wow-duration="2s" data-wow-delay="1s">
            Media
        </h1>
    )
}

export default memo(Heading);
