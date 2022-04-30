import React, {useEffect} from 'preact/compat'

import { connect } from 'react-redux';

function getTempItemHasBackground(currentArticle) {

    const main_category = currentArticle.categories[0];    

    return (
        <div className="full-image hero me">
            <div className="full-text box-animate">
                <div className="outer">
                    <div className="inner">
                        <span>{main_category.text}</span>
                        <h1>{currentArticle.text}</h1>
                    </div>
                </div>
            </div>
            {currentArticle.thumbnail ? (
                <div className="image overlays" 
                    style={{
                        backgroundImage : `url('${currentArticle.thumbnail}')`
                    }}></div>
            ) : null}
            {currentArticle.video?.src ? (
                <div className="video-wrapper">
                    <video  crossOrigin="anonymous" autoPlay={true} loop={true} muted={true} playsInline={true} className="video-bg">
                        <source src={currentArticle.video.src} type="video/mp4" />
                    </video>
                </div>
            ) : null}
        </div>
    )

}

function getTempItemHasNoBackground(currentArticle) {

    const main_category = currentArticle.categories[0];
    
    return (
        <div className="page-header type-two box-animate">
            <span className="little-title">{main_category.text}</span>
            <h1 className="title">{currentArticle.text}</h1>
        </div>
    )

}

function SingleBreadcrumbs({ currentArticle }) {

    let temp = null;

    if ( currentArticle ) {

        temp = currentArticle.thumbnail ? 
                            getTempItemHasBackground(currentArticle) : 
                                    getTempItemHasNoBackground(currentArticle);

    }

    useEffect(() => {

        setTimeout(function() {

            const video = document.querySelector('.video-bg');

            video && video.load(); // refresh video each page changed

        }, 200);

    });    

    return (
        <>
            {temp}
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


export default connect(mapStateToProps, mapDispatchToProps)(SingleBreadcrumbs);
