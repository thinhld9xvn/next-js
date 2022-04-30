import React from 'preact/compat'
import FeaturedArticle from '@templates/featured-article'
import FeaturedArticleLoading from '@templates/featured-article-loading'
import Ads from "../ads"
export default function OldPosts({loading = true, title = "Bài viết cũ hơn ", loadingBanner = true, data = null, bannersList}) {
    const posts = [];
    const loadingPosts = [];
    if ( loading ) {
        for ( let i = 0; i < 17; i++ ) {
            loadingPosts.push(<FeaturedArticleLoading thumbnailpos = "right"
                                                        thumbnail = "tiny" />);
        }
    }
    if ( !loading ) {
        for ( let j = 0; j < data.length; j++ ) {
            posts.push(<FeaturedArticle loading = {loading}   
                                        data = {data}
                                        index = {j}
                                        showthumbnail={true} />)
        }
    }
    return (
        <>
            {loading || (!loading && posts.length) ? (
                <section className="old-post">
                    <div className="container">
                        <div className="module__header">
                            <h2 className="title__global">
                                {title}
                            </h2>
                        </div>
                        <div className="module__content">
                            <div className="post">
                                <div className="post__item">
                                    {loading ? (
                                        <>
                                            {loadingPosts}
                                        </>
                                    ) : (
                                        <>
                                            {posts}
                                        </>
                                    )}
                                </div>
                                <div className="post__sidebar">
                                    <Ads loading = {loading}
                                        loadingBanner = {loadingBanner}
                                        data = {bannersList} />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            ) : null}
        </>
    )
}
