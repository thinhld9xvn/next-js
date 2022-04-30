import React from 'preact/compat'

export default function TemplateFooterSocial({ data }) {
    const {id, text, url} = data;
    return (
        <a href={url} className="footer-link">
            <i className={`fa fa-${text}`} aria-hidden="true"></i>
        </a>
    )
}
