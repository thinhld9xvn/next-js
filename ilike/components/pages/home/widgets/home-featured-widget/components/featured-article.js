import React from 'preact/compat'
import { default as TemplateFeaturedArticle } from '@templates/featured-article'

export default function FeaturedArticle({ loading = true, 
                                             data = null, 
                                             index = 1, 
                                             showthumbnail = false, 
                                             lazy = true,
                                             thumbnailpos = "right",
                                             thumbnail = "large" }) {

   return (

        <TemplateFeaturedArticle loading = {loading}
                                 data = {data}
                                 index = {index}
                                 showthumbnail = {showthumbnail}
                                 thumbnailpos = {thumbnailpos}
                                 thumbnail = {thumbnail}
                                 lazy={lazy} />

   )
    
}
