import React from 'preact/compat'

import FeaturedLargeArticleLoading from '@templates/featured-large-article-loading'
import PdLoadingSquare from '@loading/pd-loading-square'

export default function PostRelatedLoading() {
    return (
        <section className="post-article">
            <div className="container">
                <div className="article">
                    <div className="article__main">
                        <h2 className="title__global">
                            Bài viết cùng chuyên mục
                        </h2>
                        <div className="main__body">

                            <FeaturedLargeArticleLoading thumbnailpos = "right" />
                            <FeaturedLargeArticleLoading thumbnailpos = "right" />
                            <FeaturedLargeArticleLoading thumbnailpos = "right" />
                            

                        </div>
                    </div>
                    <div className="article__sidebar">
                        <h2 className="title__global">
                            phổ biến
                        </h2>
                        <div className="sidebar__body">

                            <h3>
                                <PdLoadingSquare />
                            </h3>

                            <h3>
                                <PdLoadingSquare />
                            </h3>

                            <h3>
                                <PdLoadingSquare />
                            </h3>

                            <h3>
                                <PdLoadingSquare />
                            </h3>

                            <h3>
                                <PdLoadingSquare />
                            </h3>

                            <h3>
                                <PdLoadingSquare />
                            </h3>

                            <h3>
                                <PdLoadingSquare />
                            </h3>
                            
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
