import React from 'preact/compat'

export default function FooterMenu({ data }) {
    return (
        <div className="group__item">
            <h2 className="title__footer">Thông tin</h2>
            <ul>
                {data}
            </ul>
        </div>
    )
}
