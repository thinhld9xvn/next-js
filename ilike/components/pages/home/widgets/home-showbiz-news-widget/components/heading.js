import React from 'preact/compat'
import { default as NewsHeadingWidget } from '@home_featured_widget/components/heading'
export default function Heading({text = 'Sao'}) {
    return (
        <NewsHeadingWidget className = "header__global"
                            text = {text} />
    )
}
