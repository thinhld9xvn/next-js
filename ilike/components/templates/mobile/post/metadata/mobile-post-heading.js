import React from 'preact/compat'

export default function MobilePostHeading({ data }) {
    const {title} = data;
    return (
        <h2 className="mb-post-page-heading mb-single-post-heading">
            {title}
        </h2>
    )
}
