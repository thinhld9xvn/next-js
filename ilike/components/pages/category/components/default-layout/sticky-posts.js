import React from 'preact/compat'
import FeaturedArticle from '@templates/featured-article'
import FeaturedLargeArticle from '@templates/featured-large-article'
import FeaturedLargeArticleLoading from '@templates/featured-large-article-loading'
import FeaturedArticleLoading from '@templates/featured-article-loading'
export default function StickyPosts({ loading = true, data = null, layout = 'default' }) {
    return (
        <section className="page-sport page-category-sticky page-ct-main">
            <div className="container">
                <div className="sport__header">
                    {loading || (!loading && data.length) ? (
                        <div className="sport__item">
                            {loading ? (
                                <>
                                    <FeaturedLargeArticleLoading />
                                    <FeaturedLargeArticleLoading thumbnail = "small" />  
                                </>
                            ) : (
                                <>
                                    <FeaturedLargeArticle loading = {loading}
                                                            data = {data}
                                                            index = {0} />
                                    <FeaturedLargeArticle loading = {loading}
                                                            data = {data}
                                                            index = {1} />
                                </>
                            )}
                        </div>
                    ) : null}
                    {loading ? (
                            <div className="mtop10">
                                <FeaturedLargeArticleLoading showthumbnail = {false} />
                                <FeaturedLargeArticleLoading showthumbnail = {false} />  
                            </div>
                    ) : (
                        <>
                            {data.length > 3 ? (
                                <div className="sport__sidebar">
                                    <FeaturedArticle loading = {loading}   
                                                        data = {data}
                                                        index = {2}
                                                        showthumbnail = {false}
                                                        />
                                    <FeaturedArticle loading = {loading}   
                                                        data = {data}
                                                        index = {3}
                                                        showthumbnail = {false} />
                                </div>
                            ) : null}
                        </>
                    )}
                </div>
                <div className="global__bottom">
                     {loading ? (
                            <>
                                <FeaturedArticleLoading thumbnail = "tiny" />
                                <FeaturedArticleLoading thumbnail = "tiny" />
                                <FeaturedArticleLoading thumbnail = "tiny" />
                                <FeaturedArticleLoading thumbnail = "tiny" />
                                <FeaturedArticleLoading thumbnail = "tiny" />
                                <FeaturedArticleLoading thumbnail = "tiny" />
                                <FeaturedArticleLoading thumbnail = "tiny" />
                                <FeaturedArticleLoading thumbnail = "tiny" />
                                <FeaturedArticleLoading thumbnail = "tiny" />
                                <FeaturedArticleLoading thumbnail = "tiny" />
                            </>
                        ) : (
                            <>
                                <FeaturedArticle loading = {loading}   
                                                data = {data}
                                                index = {4}
                                                showexcerpt = {false}
                                                showthumbnail = {true}
                                                thumbnailpos = "top" />
                                <FeaturedArticle loading = {loading}   
                                                data = {data}
                                                index = {5}
                                                showexcerpt = {false}
                                                showthumbnail = {true}
                                                thumbnailpos = "top" />
                                <FeaturedArticle loading = {loading}   
                                                data = {data}
                                                index = {6}
                                                showexcerpt = {false}
                                                showthumbnail = {true}
                                                thumbnailpos = "top" />
                                <FeaturedArticle loading = {loading}   
                                                data = {data}
                                                index = {7}
                                                showexcerpt = {false}
                                                showthumbnail = {true}
                                                thumbnailpos = "top" />
                                <FeaturedArticle loading = {loading}   
                                                data = {data}
                                                index = {8}
                                                showexcerpt = {false}
                                                showthumbnail = {true}
                                                thumbnailpos = "top" />
                                <FeaturedArticle loading = {loading}   
                                                data = {data}
                                                index = {9}
                                                showexcerpt = {false}
                                                showthumbnail = {true}
                                                thumbnailpos = "top" />
                                <FeaturedArticle loading = {loading}   
                                                data = {data}
                                                index = {10}
                                                showexcerpt = {false}
                                                showthumbnail = {true}
                                                thumbnailpos = "top" />
                                <FeaturedArticle loading = {loading}   
                                                data = {data}
                                                index = {11}
                                                showexcerpt = {false}
                                                showthumbnail = {true}
                                                thumbnailpos = "top" />
                                <FeaturedArticle loading = {loading}   
                                                data = {data}
                                                index = {12}
                                                showexcerpt = {false}
                                                showthumbnail = {true}
                                                thumbnailpos = "top" />
                                <FeaturedArticle loading = {loading}   
                                                data = {data}
                                                index = {13}
                                                showexcerpt = {false}
                                                showthumbnail = {true} 
                                                thumbnailpos = "top" />
                        </>
                    )}
                </div>
            </div>
        </section>
    )
}
