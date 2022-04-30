import React from 'preact/compat'
import Link from 'next/link'
export default function TemplatePanelItem({ data, settings }) {
    const {wowDuration, wowDelay} = settings;
    const { title, url, thumbnail, categories } = data;
    const isofilters = categories.map(cat => 'isotope-' + cat.id).join(' ');
    return (
        <Link href={url}>
            <a className={"project__group-item wow fadeInUp grid-item ".concat(isofilters)}
                data-wow-duration={wowDuration}
                data-wow-delay={wowDelay}>
                <img src={thumbnail} alt="item" />
                <h2 className="project__group-title">
                    {title}
                </h2>
            </a>
        </Link>
    )
}
