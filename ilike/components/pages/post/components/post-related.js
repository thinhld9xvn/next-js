import React from 'preact/compat'
import FeaturedLargeArticle from '@components/templates/featured-large-article'
import { default as NewsTextArticle } from '@templates/text-article'
export default function PostRelated({ loading = true, data = null, featuredlists = null }) {
    const {in_related} = data || {};
    return (
        <section className="post-article">
            <div className="container">
                <div className="article">
                    <div className="article__main">
                        <h2 className="title__global">
                            Bài viết cùng chuyên mục
                        </h2>
                        <div className="main__body">
                            <FeaturedLargeArticle loading = {loading}
                                                  data = {in_related}
                                                  index = {0}
                                                  thumbnailpos = "right"
                                                  thumbnail="tiny" />
                            <FeaturedLargeArticle loading = {loading}
                                                  data = {in_related}
                                                  index = {1}
                                                  thumbnailpos = "right"
                                                  thumbnail="tiny" />
                            <FeaturedLargeArticle loading = {loading}
                                                  data = {in_related}
                                                  index = {2}
                                                  thumbnailpos = "right"
                                                  thumbnail="tiny" />
                        </div>
                    </div>
                    <div className="article__sidebar">
                        <h2 className="title__global">
                            phổ biến
                        </h2>
                        <div className="sidebar__body">
                            <NewsTextArticle loading = {loading}
                                            data = {featuredlists}
                                            index = {0}
                                            className = "name__news" />
                            <NewsTextArticle loading = {loading}
                                            data = {featuredlists}
                                            index = {1}
                                            className = "name__news" />
                            <NewsTextArticle loading = {loading}
                                            data = {featuredlists}
                                            index = {2}
                                            className = "name__news" />
                            <NewsTextArticle loading = {loading}
                                            data = {featuredlists}
                                            index = {3}
                                            className = "name__news" />
                            <NewsTextArticle loading = {loading}
                                            data = {featuredlists}
                                            index = {4}
                                            className = "name__news" />
                            <NewsTextArticle loading = {loading}
                                            data = {featuredlists}
                                            index = {5}
                                            className = "name__news" />
                            <NewsTextArticle loading = {loading}
                                            data = {featuredlists}
                                            index = {6}
                                            className = "name__news" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
