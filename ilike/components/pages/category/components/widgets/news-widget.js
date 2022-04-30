import FeaturedArticle from '@templates/featured-article'
import React from 'react'
export default function NewsWidget({loading = true, className='', title='tin mới', data}) {
  return (
    <div className={"tags-widget news-widget ".concat(className)}>
        <h2 className="title__global">{title}</h2>
        <div className="widget-contents mtop20">
            <FeaturedArticle  loading = {loading}
                              data = {data} 
                              index = {0}
                              showthumbnail = {true}
                              showexcerpt = {false}
                              showcomments = {false}
                              showbookmark = {false}
                              thumbnail = "small" />
            <FeaturedArticle  loading = {loading}
                              data = {data} 
                              index = {1}
                              showthumbnail = {true}
                              showexcerpt = {false}
                              showcomments = {false}
                              showbookmark = {false}
                              thumbnail = "small" />
            <FeaturedArticle  loading = {loading}
                              data = {data} 
                              index = {2}
                              showthumbnail = {true}
                              showexcerpt = {false}
                              showcomments = {false}
                              showbookmark = {false}
                              thumbnail = "small" />
            <FeaturedArticle  loading = {loading}
                                data = {data} 
                                index = {3}
                                showthumbnail = {true}
                                showexcerpt = {false}
                                showcomments = {false}
                                showbookmark = {false}
                                thumbnail = "small" />
            <FeaturedArticle  loading = {loading}
                                data = {data} 
                                index = {4}
                                showthumbnail = {true}
                                showexcerpt = {false}
                                showcomments = {false}
                                showbookmark = {false}
                                thumbnail = "small" />
        </div>
    </div>
  )
}
