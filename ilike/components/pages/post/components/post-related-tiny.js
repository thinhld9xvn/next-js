import FeaturedArticle from '@templates/featured-article'
import React from 'preact/compat'

export default function PostRelatedTiny({ data }) {
    const {related} = data;
    return (
        <div className="container__detail">
            <div className="news__group">
                <FeaturedArticle loading = {false}
                                data = {related}
                                index = {0}
                                showthumbnail = {true}
                                thumbnailpos = "left"
                                thumbnail = "tiny"
                                showexcerpt = {false}
                                showcomments = {false}
                                showbookmark = {false} />
                <FeaturedArticle loading = {false}
                                data = {related}
                                index = {1}
                                showthumbnail = {true}
                                thumbnailpos = "left"
                                thumbnail = "tiny"
                                showexcerpt = {false}
                                showcomments = {false}
                                showbookmark = {false} />
            </div>
        </div>
)
}
