import React from 'preact/compat'

import { connect } from 'react-redux';

import Link from 'next/link'

function SingleRelatedStory({ relatedArticle }) {

    return (
        <>
            {relatedArticle ? (
                <div className="container text-center top_60 box-animate">
                    <div className="row top_30">
                        <div className="col-xl-12">
                            <Link href={relatedArticle.url}>
                                <a className="next-link">
                                    <div className="nav-title">Next content</div>
                                    <div className="next-title">{relatedArticle.text}</div>
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            ) : null}
        </>
    )
}

function mapStateToProps(state) {   

    return {
        relatedArticle : state.articlesReducer.relatedArticle
    }
  
  }
  
  function mapDispatchToProps(dispatch) {
  
    return {}

  }


export default connect(mapStateToProps, mapDispatchToProps)(SingleRelatedStory);
