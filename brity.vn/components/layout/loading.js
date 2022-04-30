import React, {useEffect} from 'preact/compat'

import {setupPreloader} from '@js_utils/setupPreloaderUtils'

function Loading() {

    useEffect(() => {

        setTimeout(function() {

            setupPreloader();

        }, 200);

    }, [])

    return (
        
        <div className="preloader-element">
            <div id="loader" className="preloader">
                <span className="loading">
                <span className="txt">Loading</span>
                <span className="progress">
                    <span className="bar-loading"></span>
                </span>
                </span>
            </div>  
        </div>
       
    )

}

export default Loading

