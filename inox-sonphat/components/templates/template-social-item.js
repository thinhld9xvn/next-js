import React from 'preact/compat'
export default function TemplateSocialItem({ data, type = 'list' }) {
    const {id, text, url} = data;
    return (
        <>
            {type === 'list' ? (
                <li>
                    <a href={url}>
                        <i className={`fa fa-${id}`}></i>
                    </a>
                </li>
            ) : null}
            {type === 'link' ? (
                <a href={url}>
                    <i className={`fa fa-${id}`}></i>
                </a>
            ) : null}
        </>
    )
}
