import React from 'preact/compat'
import Link from 'next/link'
import {injectIntl} from 'react-intl';

function TemplatePanelItem({ data, intl, settings }) {
    const {wowDuration, wowDelay} = settings;
    const {messages} = intl;
    const {title, url, thumbnail, date_created, categories} = data;
    const post_date = date_created[0];
    const {day, month, year} = post_date;
    const isofilters = categories.map(cat => 'isotope-' + cat.id).join(' ');
    return (
        <div className={"blog__group-item wow fadeInUp grid-item ".concat(isofilters)}
                data-wow-duration={wowDuration}
                data-wow-delay={wowDelay}>
            <Link href={url}>
                <a className="blog__link">
                    <img src={thumbnail} alt="blog" className="blog-avatar" />
                    <div className="blog-box">
                        <time className="blog-time">
                            {day} {messages.month} {month}, {year}
                        </time>
                        <h2 className="title">
                            {title}
                        </h2>
                    </div>
                </a>
            </Link>
        </div>
    )
}

export default injectIntl(TemplatePanelItem)
