import React from 'preact/compat'

import { connect } from 'react-redux';

import {setupWow} from '@js_utils/setupWowUtils';

function MainPage({ currentArticle }) {

    setTimeout( function(){ 
      
        setupWow();

    }, 1000);

    return (
        <>
            {currentArticle ? (
                <div className="main-contents"
                    dangerouslySetInnerHTML={{
                        __html : currentArticle.contents
                    }}>
                    
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


export default connect(mapStateToProps, mapDispatchToProps)(MainPage);

