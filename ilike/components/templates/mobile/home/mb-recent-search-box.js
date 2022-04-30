import { RECENTS_SEARCH } from '@constants/constants'
import React from 'preact/compat'
import Link from 'next/link'
export default function MbRecentSearchBox() {
    const arrRecentsList = RECENTS_SEARCH.map(tag => <Link key={tag.id} href={`/search?s=${encodeURIComponent(tag.s)}`}><a className="tag" >{tag.text}</a></Link>);
    return (
        <div className="fullwith-section mb-section mb-recent-search-box">
            <div className="container">
                <h2 className="mb-section-heading flex flex-align-center">
                    <strong className="upper">được tìm kiếm nhiều</strong>
                </h2>

                <h2 className="mb-section-scnt flex">
                    {arrRecentsList}
                </h2>
            </div>
        </div>
    )
}
