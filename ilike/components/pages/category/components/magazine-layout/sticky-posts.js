import React from 'preact/compat'
import FeaturedArticle from '@templates/featured-article'
import FeaturedArticleLoading from '@templates/featured-article-loading'
import { CATEGORY_LAYOUT } from '@constants/constants'
export default function StickyPosts({ loading = true, 
                                        data = null, 
                                        showHeader = true,
                                        startIndx = 0 }) {
    return (
        <section className="page-imagazine page-category-sticky page-ct-main">
            <div className="container">
                {showHeader ? (
                    <div className="imagazine__header">
                        {loading ? (
                            <>
                                <FeaturedArticleLoading thumbnail = "huge" />
                                <FeaturedArticleLoading thumbnail = "small" />
                                <FeaturedArticleLoading thumbnail = "small" />
                            </>
                        ) : (
                            <>
                                <FeaturedArticle loading = {loading}
                                                    data = {data}
                                                    index = {startIndx}
                                                    showthumbnail = {true}
                                                    showexcerpt = {false}
                                                    layout = {CATEGORY_LAYOUT.magazine} />
                                <FeaturedArticle loading = {loading}
                                                    data = {data}
                                                    index = {startIndx + 1}
                                                    showthumbnail = {true}
                                                    showexcerpt = {false}
                                                    layout = {CATEGORY_LAYOUT.magazine} />
                                <FeaturedArticle loading = {loading}   
                                                data = {data}
                                                index = {startIndx + 2}
                                                showthumbnail = {true}
                                                showexcerpt = {false}
                                                layout = {CATEGORY_LAYOUT.magazine} />
                            </>
                        )}
                    </div>
                ) : null}
                <div className="global__bottom">
                    {loading ? (
                        <>
                            <FeaturedArticleLoading thumbnailpos = "top"
                                                    thumbnail = "small" />
                            <FeaturedArticleLoading thumbnailpos = "top"
                                                    thumbnail = "small" />
                            <FeaturedArticleLoading thumbnailpos = "top"
                                                    thumbnail = "small" />
                            <FeaturedArticleLoading thumbnailpos = "top"
                                                    thumbnail = "small" />
                            <FeaturedArticleLoading thumbnailpos = "top"
                                                    thumbnail = "small" />
                            <FeaturedArticleLoading thumbnailpos = "top"
                                                    thumbnail = "small" />
                        </>
                    ) : (
                        <>
                            <FeaturedArticle loading = {loading}   
                                            data = {data}
                                            index = {startIndx + 3}
                                            showexcerpt = {false}
                                            showthumbnail = {true}
                                            thumbnailpos = "top"
                                            layout = {CATEGORY_LAYOUT.magazine} />
                            <FeaturedArticle loading = {loading}   
                                            data = {data}
                                            index = {startIndx + 4}
                                            showexcerpt = {false}
                                            showthumbnail = {true}
                                            thumbnailpos = "top"
                                            layout = {CATEGORY_LAYOUT.magazine} />
                            <FeaturedArticle loading = {loading}   
                                            data = {data}
                                            index = {startIndx + 5}
                                            showexcerpt = {false}
                                            showthumbnail = {true}
                                            thumbnailpos = "top"
                                            layout = {CATEGORY_LAYOUT.magazine} />
                            <FeaturedArticle loading = {loading}   
                                            data = {data}
                                            index = {startIndx + 6}
                                            showexcerpt = {false}
                                            showthumbnail = {true}
                                            thumbnailpos = "top"
                                            layout = {CATEGORY_LAYOUT.magazine} />
                            <FeaturedArticle loading = {loading}   
                                            data = {data}
                                            index = {startIndx + 7}
                                            showexcerpt = {false}
                                            showthumbnail = {true}
                                            thumbnailpos = "top"
                                            layout = {CATEGORY_LAYOUT.magazine} />
                            <FeaturedArticle loading = {loading}   
                                            data = {data}
                                            index = {startIndx + 8}
                                            showexcerpt = {false}
                                            showthumbnail = {true}
                                            thumbnailpos = "top"
                                            layout = {CATEGORY_LAYOUT.magazine} />
                    </>
                )}
                </div>
            </div>
        </section>
    )
}
