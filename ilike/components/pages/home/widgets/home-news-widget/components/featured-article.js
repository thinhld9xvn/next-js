import React from 'preact/compat'
import { default as NewsFeaturedArticle } from '@home_featured_widget/components/featured-article'
export default function FeaturedArticle({ loading = true, data = null, index = 1, showthumbnail = false, thumbnailpos = "top", thumbnail = "large"}) {
    return (
        <NewsFeaturedArticle loading = {loading}
                             data = {data}
                             index = {index}
                             showthumbnail = {showthumbnail}
                             thumbnailpos = {thumbnailpos}
                             thumbnail = {thumbnail} />
    )
}
