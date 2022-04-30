import React from 'preact/compat'
export default function TemplatePartnerItem({data, index}) {
    const {thumbnail} = data;
    return (
        <div className="slide-def-item" key={index}>
            <a href="#">
                <img src={thumbnail} height="60px" />
            </a>
        </div>
    )
}
