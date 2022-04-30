import React from 'preact/compat'

export default function TemplateSlideItem({ data }) {
    const {thumbnail, index, length} = data;
    return (
        <div className="introduce__slide-item">
            <img src={thumbnail} alt="slider" />
            <div className="pagination">
                <p>
                    {index}
                </p>
                <p>
                   {length}
                </p>
            </div>
        </div>
    )
}
