import React from 'preact/compat'
import Link from 'next/link'
import { onClick_handleShowHeaderPMenu } from 'handleEvents/onClick_handleShowHeaderPMenu';
export default function TemplatePrimarySnapMenuItem({ data, props }) {
    const {slug, title, icon, markable} = data;
    return (
        <li>
            <Link href={slug}>
                <a className={"tag tag-cat ".concat(markable ? 'markable' : '')}
                    onClick={onClick_handleShowHeaderPMenu.bind(this, {...props, prevent: false})}>
                    <span className="flex flex-align-items" style="">
                        <img className="mb-idefault mb-isvg" src={icon} />
                        <span className="padleft10">{title}</span>
                    </span>                
                </a>
            </Link>
        </li>
    )
}
