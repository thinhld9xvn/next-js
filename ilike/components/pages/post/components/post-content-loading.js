import React from 'preact/compat'
import PdLoadingSquare from '@loading/pd-loading-square'

export default function PostContentLoading() {
    return (
        <div className="module__content">

            <div className="detail__desc">

                <PdLoadingSquare size = "large" />
                
            </div>

            <div className="detail__tag" style={{marginTop : '20px'}}>

                <PdLoadingSquare size = "small" />  

            </div>

        </div>
    )
}
