import React from 'preact/compat'
export default function Heading({ className = 'module__header', text = 'được quan tâm' }) {
    return (
        <div className={className}>
            <h2 className="title__global">{text}</h2>
        </div>
    )
}
