import React from 'preact/compat'
import { memo } from 'react'

function Title({ title }) {
    return (
        <h2 className="title_global" data-split-letters="500">{title}</h2>
    )
}

export default memo(Title);
