import React from 'preact/compat'

export default function TemplateSlideNav({ data }) {
    const {item, index} = data;
    const {heading} = item;
    return (
        <a className="slider-nav-item" href="#">
            <div className="slider-nav-title">
                <p>{index}</p>
                <h3 dangerouslySetInnerHTML={{
                    __html : heading
                }}></h3>
            </div>
        </a>
    )
}
