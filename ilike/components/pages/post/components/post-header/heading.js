import React from 'preact/compat'

export default function Heading({ data }) {
    return (
        <h1 className="detail__title">
            {data}
        </h1>
    )
}
