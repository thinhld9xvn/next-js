import React from 'preact/compat'

export default function TemplateWorkItem({ data, index }) {
    const {title, contents, icon} = data;
    return (
        <div className="work-steps-item">
            {title ? (
                <div className="steps-title">
                    <h1>{index}</h1>
                    <h3>{title}</h3>
                </div>
            ) : null}
            <div className="steps-content">
                {icon ? (
                    <img src={icon} alt="icon__work" />
                ) : null}
                {contents ? (
                    <figcaption dangerouslySetInnerHTML={{
                        __html : contents
                    }}></figcaption>
                ) : null}
            </div>
        </div>
    )
}
