import React from 'preact/compat'

export default function HeadingNoneWidget({ text }) {
    return (
        <h1 className="d-none">{text}</h1>
    )
}
