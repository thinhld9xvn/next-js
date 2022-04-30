import React from 'preact/compat'

import FeaturedArticle from '@templates/featured-article'
import FeaturedLargeArticle from '@templates/featured-large-article'
import FeaturedLargeArticleLoading from '@templates/featured-large-article-loading'
import { SICKY_MOVIE_POST_NUM } from '@constants/constants';
import FeaturedArticleLoading from '@templates/featured-article-loading';

export default function StickyPosts({ loading = true, data = null }) {
    
    const sidebarPosts = [];
    const mainPosts = [];
    const bottomPosts = [];

    if ( !loading ) {

        for ( let j = 1; j < 4; j++ ) {

            sidebarPosts.push(<FeaturedArticle loading = {loading}   
                                                data = {data}
                                                index = {j}
                                                showthumbnail = {true}
                                                thumbnailpos = "right"
                                                layout = "movie" />);

        }

        for ( let k = 4; k < 7; k++ ) {

            mainPosts.push(<FeaturedArticle loading = {loading}   
                                                data = {data}
                                                index = {k}
                                                showexcerpt = {true}
                                                showthumbnail = {true}
                                                thumbnailpos = "top" />);

        }

        for ( let x = 7; x < SICKY_MOVIE_POST_NUM; x++ ) {

            bottomPosts.push(<FeaturedArticle loading = {loading}   
                                                data = {data}
                                                index = {x}
                                                showexcerpt = {false}
                                                showthumbnail = {true}
                                                thumbnailpos = "top" />);

        }

    }

    return (
        <section className="page-film page-category-sticky page-ct-main">

            <div className="container">

                <div className="film__header">

                    <div className="film__one">

                        {loading ? (
                            <>
                                <FeaturedLargeArticleLoading thumbnail = "large" />
                            </>
                        ) : (
                            <>
                                <FeaturedLargeArticle loading = {loading}
                                                        data = {data}
                                                        index = {0} />
                            </>
                        )}

                    </div>

                    <div className="film__sidebar">

                        {loading ? (
                            <>
                                <FeaturedArticleLoading thumbnail = "tiny" thumbnailpos = "right" />
                                <FeaturedArticleLoading thumbnail = "tiny" thumbnailpos = "right" />
                                <FeaturedArticleLoading thumbnail = "tiny" thumbnailpos = "right" />
                            </>
                        ) : (
                            <>
                                {sidebarPosts}
                            </>

                        )}

                    </div>

                </div>

                <div className="film__main">

                    {loading ? (
                        <>
                            <FeaturedArticleLoading  />
                            <FeaturedArticleLoading />
                            <FeaturedArticleLoading />
                        </>
                    ) : (
                        <>
                            {mainPosts}
                        </>
                    )}

                </div>

                <div className="global__bottom">

                    {loading ? (
                        <>
                          <FeaturedArticleLoading thumbnail = "tiny"  />
                            <FeaturedArticleLoading thumbnail = "tiny" />
                            <FeaturedArticleLoading thumbnail = "tiny" />  
                            <FeaturedArticleLoading thumbnail = "tiny" />  
                            <FeaturedArticleLoading thumbnail = "tiny" />  
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
