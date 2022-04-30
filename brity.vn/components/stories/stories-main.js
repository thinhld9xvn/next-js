import React from 'preact/compat'
import Image from 'next/image'
import Link from 'next/link'

import { connect } from 'react-redux';

import { CATEGORY_PER_PAGE, MONTHS } from "@constants/constants"

function getTempStoryCatItem(item) {

    const thumbnail = item.thumbnail ? item.thumbnail : (item.galleries ? item.galleries[0] : null );

    return (
        <div className="grid-story-cat">

            <div className="element">

                <div className="thumbnail">
                    
                    {thumbnail ? (

                        <img src={thumbnail} 
                                layout="fill"
                                objectFit="contain"
                                alt={item.text} 
                                loading="lazy" />

                    ) : null}

                </div>

                <Link href={item.url}>
                    <a className="overlay">
                        <h3>{item.text}</h3>
                    </a>
                </Link>

            </div>

        </div>
    )

}

function StoriesMain({ resultsFiltered, paged }) {

    const storiesData = [];

    const startIndex = paged * CATEGORY_PER_PAGE - CATEGORY_PER_PAGE,
          endIndex = startIndex + ( CATEGORY_PER_PAGE - 1 );

    resultsFiltered.map((item, i) => {

        if ( i >= startIndex && i <= endIndex ) {

            storiesData.push(getTempStoryCatItem(item));

        }

    })

    return (

        <div className="stories-main top_60 box-animate">
            <div className="container">
                <div className="grid-three-columns">
                    {storiesData}
                </div>
            </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(StoriesMain);
