import React from 'preact/compat'

import { default as NewsFeaturedArticle } from '@home_featured_widget/components/featured-article'

export default function FeaturedArticle({ loading = true, data = null, index = 1, showthumbnail = false, thumbnail = "tiny"}) {

    return (

        <NewsFeaturedArticle loading = {loading}
                             data = {data}
                             index = {index}
                             showthumbnail = {showthumbnail}
                             thumbnail = {thumbnail} />

    )

}
