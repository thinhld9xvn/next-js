import React from 'preact/compat'
export default function TemplateClientItem({ data }) {
    const {thumbnail} = data;
    return (
        <div className="client-logo">
            <img src={thumbnail} alt="logo" />
        </div>
    )
}
