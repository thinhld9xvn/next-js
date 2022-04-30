import React from 'react'
import Link from 'next/link'
export default function NavTabItem({ data, props }) {
    const {id, title, url, view_all} = data;
    const {tabActiveId, setTabActiveId} = props;
    const onClick_setTabActive = (e) => {
        e.preventDefault();
        setTabActiveId(id);
    }
    return (
        <li className={`nav-item ${view_all ? 'view-all' : ''}`} key={id}>
            <Link href={url || '#'}>
                <a className={tabActiveId === id ? 'active' : ''}
                    onClick={!view_all ? onClick_setTabActive : null}>
                    {title}
                </a>
            </Link>
        </li>
    )
}
