import React from 'preact/compat'

import { connect } from 'react-redux';

function getTempBreadcrumbs(currentArticle) {
    return (
        <React.Fragment key={currentArticle.id}>
            <div className={`page-header type-${currentArticle.type} box-animate`}>
                <span className="little-title">{currentArticle.text}</span>
                <h1 className="title">{currentArticle.heading}</h1>
            </div>

            <div className="container text-center top_60 box-animate">
                <div className="subtext">
                    <h2 dangerouslySetInnerHTML={{
                        __html : currentArticle.subheading
                    }}></h2>
                </div>
            </div>
        </React.Fragment>
    )
}

function ContactBreadcrumbs({ currentArticle }) {

    const data = [];

    currentArticle && data.push(getTempBreadcrumbs(currentArticle));   

    return (
        <>
            {currentArticle ? (
                <>
                    {currentArticle.type === 'one' ? (
                        <div className="container box-animate animated">
                            {data}
                        </div>
                    ) : <>{data}</>}
                </>
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


export default connect(mapStateToProps, mapDispatchToProps)(ContactBreadcrumbs);
