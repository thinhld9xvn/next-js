import React from 'preact/compat'
import Image from 'next/image'
import Link from 'next/link'

import BlogTreeCat from '@templates/blog-tree-cat'

import SingleRelatedBlog from './single-related-blog'

import { connect } from 'react-redux';

import { MONTHS } from "@constants/constants"

function SingleMainBlog({ currentArticle }) {

    let day = currentArticle ? currentArticle.date_created.day : null,
        month = currentArticle ? currentArticle.date_created.month : null,
        year = currentArticle ? currentArticle.date_created.year : null;

    if ( month ) {

        month = MONTHS[parseInt(month) - 1];

    }

    return (

        <>

            {currentArticle ? (

                <div className="container">
                    <div className="blog single-blog top_150">
                        <div className="blog-infos">
                            <div className="datenauthor">
                                <div className="date">{month} {day}, {year}</div>
                                <span>
                                    <Link href="#">
                                        <a>admin</a>
                                    </Link>
                                </span>
                            </div>
                            <h2 className="blog-title" 
                                dangerouslySetInnerHTML={{
                                    __html : currentArticle.text
                                }}>
                            </h2>
                            <ul className="post-categories">
                                <BlogTreeCat data = {currentArticle} />
                            </ul>
                        </div>
                    </div>
                    <img className="blog-image" 
                            src={currentArticle.thumbnail}
                            layout="fill"
                            objectFit="contain"
                            loading="lazy" />

                    <article className="single-blog-text top_60"
                            dangerouslySetInnerHTML={{
                                __html : currentArticle.contents
                            }}>
                    
                    </article>

                    <SingleRelatedBlog />
                    
                </div>

            ) : null}

        </>


    )

}

function mapStateToProps(state) {   

    return {
        currentArticle : state.articlesReducer.currentArticle
    }
  
  }
  
  function mapDispatchToProps(dispatch) {
  
    return {}

  }


export default connect(mapStateToProps, mapDispatchToProps)(SingleMainBlog);

