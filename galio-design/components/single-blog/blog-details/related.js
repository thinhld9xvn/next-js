import React from 'preact/compat'
import TemplatePanelItem from '@components/blog/blog-section/nav-panels/template-panel-item'

export default function Related({ data }) {
    const postsList = data.map((post, i) => {
        const settings = {
            wowDuration : '2s',
            wowDelay : ((i + 1) * 0.4) + 's'
        }
        return <TemplatePanelItem data = {post}
                                  settings = {settings}
                                    key = {i} />
    });
    return (
        <div className="blog__group">
            {postsList}
        </div>
    )
}
