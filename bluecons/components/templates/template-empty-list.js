import React from 'preact/compat'

export default function TemplateEmptyList({ msg = "Không có bài viết nào ở đây." }) {
    return (
        <div className="empty-list">{msg}</div>
    )
}
