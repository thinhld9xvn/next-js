import React from 'preact/compat'
import PdLoadingArticle from '@components/loading/pd-loading-article'

export default function FeaturedArticleLoading({ showthumbnail = true, thumbnailpos = 'top', thumbnail = 'large' }) {
    return (
        <div className="news__global">
            <PdLoadingArticle showthumbnail = {showthumbnail}
                            thumbnailpos = {thumbnailpos} 
                            thumbnail = {thumbnail} />
        </div>  
    )
}
