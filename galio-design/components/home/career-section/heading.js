import React from 'preact/compat'
import { memo } from 'react'

function Heading() {
    return (
        <h1 className="bg-title wow fadeInUp" data-types-card>career</h1>
    )
}

export default memo(Heading);
