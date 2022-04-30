import React, {useState, useEffect} from 'preact/compat'
import Image from 'next/image'
import {isUndefined} from "@js_dir/utils/arrayUtils"

import { connect } from 'react-redux';

import Lightbox from "react-awesome-lightbox";

import "react-awesome-lightbox/build/style.css";

import {setupWow} from '@js_utils/setupWowUtils';

import SingleRelatedStory from './single-related-story'

var count = 0,
    curIdx = -1;

function getTempGalleryItem(url, i, length) {    

    let className = 'col-xl-12';

    if ( count === 2 ) {

        className = 'col-xl-6';

        if ( i === curIdx + 1 ) {

            curIdx = -1;
            count = 0;

        }

        curIdx = i;

    }

    else {

        count++;

    }

    return (

        <div key={'lightbox_' + url} 
            className={className}>
            <div className="thumbnail-article">
                <a href={url} 
                    className="lightbox">
                        <img src={url}
                            layout="fill"
                            objectFit="contain"
                            alt="gallery"
                            loading="lazy" />
                </a>
            </div>
        </div>

    );

}

function SingleMainStory({ currentArticle }) {

    const [showLightBox, setShowLightBox] = useState(false);
    const [startIndexLightBox, setStartIndexLightBox] = useState(0);

    count = 0;
    curIdx = -1;

    const arrGalleriesList = [],
          arrGalleries = [],
          length = currentArticle && currentArticle.galleries ? currentArticle.galleries.length : 0;

    currentArticle && 
        currentArticle.galleries && 
            currentArticle.galleries
                          .map((url, i) => {

            arrGalleriesList.push(getTempGalleryItem(url, i, length));

            arrGalleries.push({
                url,
                title : ""
            });

        });

    setTimeout( function(){ 
      
        setupWow();

        typeof(document) !== 'undefined' && 
                document.querySelectorAll('.lightbox')
                        .forEach(item => item.addEventListener('click', function(e) {

            e.preventDefault();

            const target = e.currentTarget,
                  image = target.getAttribute('href');

            const index = arrGalleries.findIndex(item => item.url === image);

            if ( index !== -1 ) {

                setStartIndexLightBox(index);

                setShowLightBox(true);

            }
            

        }));
      
      
    }, 1000);

    return (

        <>
            {currentArticle ? (
                <>
                    {currentArticle.heading || currentArticle.contents ? (
                        <div className="container text-widget works type_one top_120 box-animate">
                            <div className="row">
                                {currentArticle.heading ? (
                                    <h3 className="col-xl-4"
                                        dangerouslySetInnerHTML={{
                                            __html : currentArticle.heading
                                        }}></h3>
                                    ) : null}

                                {currentArticle.contents ? (
                                    <div className="col-xl-8"
                                        dangerouslySetInnerHTML={{
                                            __html : currentArticle.contents
                                        }}>
                                    </div>
                                ) : null}
                            </div>
                        </div>
                    ) : null}

                    {/*arrGalleriesBody.length && (
                    
                        <div className="container gallery top_90 box-animate">
                            <div className="row">
                                
                                {arrGalleriesBody}
                                
                            </div>
                        </div>  

                    )*/}

                    {currentArticle.subheading ? (
                    
                        <div className="container top_90 box-animate">
                            <h3 className="work-subtext text-center"
                                dangerouslySetInnerHTML={{
                                    __html : currentArticle.subheading
                                }}>                    
                            </h3>
                        </div>

                    ) : null}
                
                    <div className="container gallery top_90 box-animate">
                        <div className="row row-galleries-ft">
                            {arrGalleriesList}
                        </div>
                    </div>

                    <SingleRelatedStory />

                    {/*<div className="fixed-signature" data-scroll data-scroll-sticky data-scroll-target="main">GCO GROUP</div>*/}

                    { showLightBox ? (

                        <Lightbox images={arrGalleries}
                                startIndex={startIndexLightBox}
                                title=""
                                onClose={() => setShowLightBox(false)} />

                    ) : null}
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


export default connect(mapStateToProps, mapDispatchToProps)(SingleMainStory);


