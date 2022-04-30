import React from 'preact/compat'
import TemplateArticleItem from './tuyendung-articles/template-article-item'

export default function TuyenDungArticles({ data }) {
    const postsList = data.map((post, i) => <TemplateArticleItem data = {post}
                                                                key = {i} />);
    return (
        <div className="info__recruit">
            {postsList}
        </div>
    )
}
