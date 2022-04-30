import React from 'preact/compat'

import { default as NewsFeaturedLargeArticle } from '@home_featured_widget/components/featured-large-article'

export default function FeaturedLargeArticle({ loading = true, data = null, index = 0, thumbnailpos = 'right', thumbnail = "large", fluidrow = true }) {

    return (
        <NewsFeaturedLargeArticle loading = {loading}
                                  data = {data} 
                                  index = {index}
                                  thumbnailpos = {thumbnailpos}
                                  thumbnail = {thumbnail}
                                  fluidrow = {fluidrow} />
    )
}
