import React from 'preact/compat'

import { connect } from 'react-redux';

import ContactBreadcrumbs from './contact-breadcrumbs'

function getTempBreadcrumbs(currentArticle) {

    return (
        <div className="full-image hero me">
            <div className="full-text">
                <div className="outer">
                    <div className="inner tavonline">
                        <span>{currentArticle.text}</span>
                        <h1>{currentArticle.heading}</h1>
                    </div>
                </div>
            </div>
            <div className="image overlays"
                 style={{
                     backgroundImage : `url('${currentArticle.breadcrumbs.background}')`
                 }}></div>
        </div> 
    )

}

function PageBreadcrumbs({ currentArticle }) {

    const data = currentArticle && currentArticle.breadcrumbs?.background ? getTempBreadcrumbs(currentArticle) : null;

    return (

        <>
            {currentArticle ? (
                <>
                    {currentArticle.breadcrumbs?.background ? (

                        <>
                            {data}
                        </>
                        
                    ) : <ContactBreadcrumbs />}
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


export default connect(mapStateToProps, mapDispatchToProps)(PageBreadcrumbs);