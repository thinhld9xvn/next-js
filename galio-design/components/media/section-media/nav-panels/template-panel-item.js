import React, {useState, useEffect} from 'preact/compat'

export default function TemplatePanelItem({ data, settings }) {
    const {thumbnail, categories} = data;
    const {wowDuration, wowDelay} = settings;
    const isofilters = categories.map(cat => 'isotope-' + cat.id).join(' ');
    return (
        <div className={"media__group--item wow fadeInUp grid-item ".concat(isofilters)}
                data-wow-duration={wowDuration}
                data-wow-delay={wowDelay}>
            <a href="#" className="media-link">
                <img src={thumbnail} alt="media" />
            </a>
        </div>
    )
}
