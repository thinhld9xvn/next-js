import React from 'preact/compat'
import Link from 'next/link'

import BlogTreeCat from '@templates/blog-tree-cat'

import { connect } from 'react-redux';

import { CATEGORY_PER_PAGE, MONTHS } from "@constants/constants"

function getTempBlogItem(item) {

    let {day, month, year}= item.date_created;

    month = MONTHS[parseInt(month) - 1];

    return (

        <div key={item.id} className="blog top_120 box-animate">
            <Link href={item.url}>
                <a>
                    <img className="blog-image" 
                            src={item.thumbnail}
                            layout="fill"
                            objectFit="contain"
                            loading="lazy"  />
                </a>
            </Link>
            <div className="blog-infos top_15">
                <div className="datenauthor">
                    <div className="date">{month} {day}, {year}</div> 
                    <span>
                        <Link href="#">
                            <a>admin</a></Link>
                    </span>
                </div>
                <Link href={item.url}>
                    <a className="title-outter">
                        <h2 className="blog-title"
                            dangerouslySetInnerHTML={{
                                __html : item.text
                            }}>                                
                        </h2>
                    </a>
                </Link>
                <ul className="post-categories">
                    <BlogTreeCat data = {item} />
                </ul>
            </div>
        </div>

    );

}

function BlogMain({ resultsFiltered, paged }) {

    const blogsData = [];

    const startIndex = paged * CATEGORY_PER_PAGE - CATEGORY_PER_PAGE,
          endIndex = startIndex + ( CATEGORY_PER_PAGE - 1 );

    resultsFiltered.map((item, i) => {

        if ( i >= startIndex && i <= endIndex ) {

            blogsData.push(getTempBlogItem(item));

        }

    })

    return (

        <div className="container">

            {blogsData}

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


export default connect(mapStateToProps, mapDispatchToProps)(BlogMain);
