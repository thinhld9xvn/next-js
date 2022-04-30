import React from 'preact/compat'
import { memo } from 'react'

function Heading({ title }) {
    return (
        <h1 className="blog__title" data-split-letters-big>
            {title}
        </h1>
    )
}

export default memo(Heading);
