import React from 'preact/compat'

import { default as TemplateFeaturedLargeArticle } from '@templates/featured-large-article'

export default function FeaturedLargeArticle({ loading = true, 
                                                data = null, 
                                                index = 0,
                                                 thumbnailpos = 'top', 
                                                 thumbnail = "large", 
                                                 lazy = true,
                                                fluidrow = false }) {

    return (

        <TemplateFeaturedLargeArticle loading = {loading} 
                                      data = {data} 
                                      index = {index} 
                                      thumbnailpos = {thumbnailpos}
                                      thumbnail = {thumbnail}
                                      fluidrow = {fluidrow}
                                      lazy={lazy} />

    )
}
