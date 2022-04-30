import React from 'preact/compat'
export default function TemplateSlider({ data, index }) {
    const {thumbnail} = data;
    return (
        <div key = {index}>
            <img src={thumbnail} alt="slider" />
        </div>
    )
}
