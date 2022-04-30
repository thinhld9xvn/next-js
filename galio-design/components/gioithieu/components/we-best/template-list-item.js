import React from 'preact/compat'

export default function TemplateListItem({ data, settings }) {
    const {no, icon, title, contents} = data;
    const {wowDuration, wowDelay} = settings;
    return (
        <div className="best-list-item wow fadeInUp" 
                data-wow-duration={wowDuration}
                data-wow-delay={wowDelay}>
            <div className="best-list-bg">{no}</div>
            <div className="best-list-title">
                <img src={icon} alt="icon" />
                <h3 className="best-list-box">
                    {no} <br />
                    {title}
                </h3>
            </div>
            <div className="best-list-content"
                 dangerouslySetInnerHTML={{
                     __html : contents
                 }}>
            </div>
        </div>
    )
}
