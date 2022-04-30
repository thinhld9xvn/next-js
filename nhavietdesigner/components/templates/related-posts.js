import React, {useState, useEffect} from 'preact/compat'

import Link from 'next/link'

import PdLoadingArticle from './pd-loading-article';
import { getArticleRelated } from '@lib/getArticleRelatedApi';
import { MONTHS } from '@constants/constants';

function getTempItem(data) {

    const {title, url, thumbnail, date_created, excerpt} = data;

    const {day, month, year} = date_created;

    const monthName = MONTHS[month - 1];

    const thumbnailUrl = thumbnail ? thumbnail : '/static/images/no_thumbnail.png';

    return (
        <div className="element">
            <div className="thumbnail">
                <Link href={url}>
                    <a title={title} 
                        className="image">
                        <img src={thumbnailUrl}
                            alt={title}
                            loading="lazy" />
                    </a>
                </Link>
            </div>
            <div className="contents mtop20">
                <h3 className="vk-blog-item__title">

                    <Link href={url}>

                        <a title={title}
                            dangerouslySetInnerHTML={{
                                __html : title
                            }}>                              

                        </a>

                    </Link>

                </h3>

                <div className="vk-blog-item__date">
                    <i className="_icon fa fa-newspaper-o"></i>
                    <span className="padLeft5">{day} {monthName} {year}</span>
                </div>

                <div className="vk-blog-item__text"
                        dangerouslySetInnerHTML={{
                            __html : excerpt
                        }}>
                </div>
            </div>
        </div>
    )

}

function getGridLoader() {

    return (
        <>
            <div className="element">
                <PdLoadingArticle layout="block" />
            </div>
            <div className="element">
                <PdLoadingArticle layout="block" />
            </div>
            <div className="element">
                <PdLoadingArticle layout="block" />
            </div>
        </>
    )

}

function RelatedPosts({ data }) { // param @data : biến lưu trữ danh mục của bài viết hiện hành

    const [loading, setLoading] = useState(true); 
    const [params, setParams] = useState(null);
    const [relatedPostsData, setRelatedPostData] = useState([]);
    
    const gridLoader = getGridLoader();

    useEffect(async () => {

        if ( JSON.stringify(params) !== JSON.stringify(data) ) {

            const arrRelatedData = await getArticleRelated(data);
            const arrTempRelatedList = [];

            arrRelatedData.map(item => {

                arrTempRelatedList.push(getTempItem(item));
        
            });

            setRelatedPostData(arrTempRelatedList);

            setTimeout(function() {
                
                setParams(data);
                setLoading(false);

            }, 1000);

        }

    });    
 
    return (
        <div className="vk-related-posts">
            <h1 className="vk-blog-detail__title">Bài viết liên quan</h1>
            <div className="grid-three-columns">

                {loading ? (
                    <>
                        {gridLoader}
                    </>
                ) : (
                    <>
                        {relatedPostsData}
                    </>
                )}
                
            </div>
        </div>

    )
}

export default RelatedPosts;