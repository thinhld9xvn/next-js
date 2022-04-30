import React from 'preact/compat'
export default function TemplateFeedbackItem({ data, index }) {
    const {thumbnail} = data;
    return (
        <div className="slide-def-item" key={index}>
            <img className="img-center" src={thumbnail} />
        </div>
    )
}
