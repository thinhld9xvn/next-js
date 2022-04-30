import React, {useState, useEffect} from 'preact/compat'
import Link from 'next/link'

import { connect } from 'react-redux';

import { CATEGORY_PER_PAGE, MONTHS } from "@constants/constants"
import PdLoadingArticle from '@templates/pd-loading-article';
import {useRouter} from 'next/router';

function getTempBlogItem(data) { 

    const {title, url, thumbnail, date_created, excerpt} = data;

    const {day, month, year} = date_created;

    const monthName = MONTHS[month - 1];

    const thumbnailUrl = thumbnail ? thumbnail : '/static/images/no_thumbnail.png';

    return (

        <div className="col-sm-6 col-md-6 col-lg-12 _item">

            <div className="vk-blog-item vk-blog-item--style-1">

                <Link href={url}>

                    <a title={title}
                        className="vk-blog-item__img">

                        <img src={thumbnailUrl} alt={title} loading="lazy" />

                    </a>

                </Link>

                <div className="vk-blog-item__brief">

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

        </div>

    )

}

function getBlogListFiltered(data, paged) {

    const blogsData = [];

    const startIndex = paged * CATEGORY_PER_PAGE - CATEGORY_PER_PAGE,
          endIndex = startIndex + ( CATEGORY_PER_PAGE - 1 );

    data.map((item, i) => {

        if ( i >= startIndex && i <= endIndex ) {

            blogsData.push(getTempBlogItem(item));

        }

    });  
    
    return blogsData;

}

function BlogGrid({ resultsFiltered, paged }) { 

    const route = useRouter();
    
    const [loading, setLoading] = useState(true);    
    const [blogItemsData, setBlogItemsData] = useState([]);

    useEffect(() => { 

        setBlogItemsData(getBlogListFiltered(resultsFiltered, paged));

        setLoading(false);    

    }, []);

    useEffect(() => { 

        setBlogItemsData(getBlogListFiltered(resultsFiltered, paged));

        setLoading(false); 

    }, [route.query.slug]);

    useEffect(() => {        

        setLoading(true);        
        
        setTimeout(function() {

            setTimeout(function() {

                if ( typeof(document) !== 'undefined' ) {

                    const elem = document.querySelector('.vk-blog__banner');
                    const offsetTop = elem ? elem.clientHeight : null;

                    offsetTop && window.scroll(0, offsetTop);

                }

            }, 20)

        }, 10);

        setBlogItemsData(getBlogListFiltered(resultsFiltered, paged));

        setTimeout(function() {

            setLoading(false);            
    
        }, 1000);

    }, [paged]);

    return (

        <div className="blogsList vk-blog__list--style-1 row">

            {! loading ? (
                blogItemsData.length ?
                    (
                        <>
                            {blogItemsData}
                        </>
                    ) : (

                        <div>Không có bài viết nào ở đây ...</div>

                    )
                ) : (
                    <PdLoadingArticle />
                )
            }      
                           
        </div>

    )
}

function mapStateToProps(state) {   

    return {
        
        resultsFiltered: state.globalReducer.resultsFiltered,
        paged: state.globalReducer.paged
    
    }
  
  }
  
  function mapDispatchToProps(dispatch) {
  
    return {}

  }


export default connect(mapStateToProps, mapDispatchToProps)(BlogGrid);