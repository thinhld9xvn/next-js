import React from 'preact/compat'

export default function TemplateLogoImage({data, settings}) {
    const {thumbnail} = data;
    const {wowDuration, wowDelay} = settings;
    return (
        <div className="logo--item wow fadeInUp" 
                data-wow-duration={wowDuration} 
                data-wow-delay={wowDelay}>
            <a href="#" className="logo-link">
                <img src={thumbnail} alt="logo" />
            </a>
        </div>
    )
}
