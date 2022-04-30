import React from 'preact/compat'
export default function Phone({ data }) {
    return (
        <span className="tphone hidden-xsm460">
            <a href={`tel:${data}`}>
                <span>Hotline: {data}</span>
            </a>
        </span>
    )
}
