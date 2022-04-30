import React from 'preact/compat'
import PdLoadingArticle from '@components/loading/pd-loading-article'

export default function FeaturedLargeArticleLoading({ thumbnailpos = 'top', thumbnail = 'large', showthumbnail = true, fluidrow = false }) {
    return (
        <div className="news__global">

            <PdLoadingArticle thumbnail = {thumbnail}
                                thumbnailpos = {thumbnailpos}
                                showthumbnail = {showthumbnail}
                                fluidrow = {fluidrow}
                                layout = {thumbnailpos === 'top' || thumbnailpos === 'bottom' ? "block" : "grid"} />    

        </div>    
    )
}
