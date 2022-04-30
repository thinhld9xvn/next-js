import React from 'preact/compat'

import FeaturedArticle from '@templates/featured-article'
import FeaturedLargeArticle from '@templates/featured-large-article'
import FeaturedLargeArticleLoading from '@templates/featured-large-article-loading'

export default function StickyPosts({ loading = true, data = null }) {

    const headerPosts = [];
    const bottomPosts = [];

    if ( !loading ) {

        for ( let i = 0; i < 4; i++ ) {

            headerPosts.push(<FeaturedLargeArticle loading = {loading}
                                                    data = {data}
                                                    index = {i} />);

        }

        for ( let j = 4; j < 9; j++ ) {

            bottomPosts.push(<FeaturedArticle loading = {loading}   
                                                data = {data}
                                                index = {j}
                                                showexcerpt = {false}
                                                showthumbnail = {true}
                                                thumbnailpos = "top" />);

        }

    }

    return (
        <section className="page-beautify page-category-sticky page-ct-main">

            <div className="container">

                <div className="beautify__header">

                        {loading ? (
                            <>
                                <FeaturedLargeArticleLoading thumbnailpos = "right"
                                                             thumbnail = "huge" 
                                                             fluidrow = {true} />
                                <FeaturedLargeArticleLoading thumbnail = "small" />
                                <FeaturedLargeArticleLoading thumbnail = "small" />
                                <FeaturedLargeArticleLoading thumbnail = "small" />
                            </>
                        ) : (
                            <>
                                {headerPosts}
                            </>
                        )}

                </div>

                <div className="global__bottom">

                    {loading ? (
                        <>
                            <FeaturedLargeArticleLoading thumbnail = "tiny" />
                            <FeaturedLargeArticleLoading thumbnail = "tiny" />
                            <FeaturedLargeArticleLoading thumbnail = "tiny" />
                            <FeaturedLargeArticleLoading  thumbnail = "tiny"/>
                            <FeaturedLargeArticleLoading thumbnail = "tiny" />
                        </>
                    ) : (
                        <>
                            {bottomPosts}
                        </>

                    )}

                </div>
            </div>
        </section>
    )
}
