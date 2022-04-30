import React from 'preact/compat'
import { memo } from 'react'

function Heading() {
    return (
        <h1 className="bg-title" data-split-letters-big>
            search
        </h1>
    )
}

export default memo(Heading);
