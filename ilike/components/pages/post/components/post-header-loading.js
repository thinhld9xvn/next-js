import React from 'preact/compat'

import PdLoadingSquare from '@loading/pd-loading-square'

export default function PostHeaderLoading() {
    return (
        <div className="module__header container__detail">

            <h1>
                <PdLoadingSquare size = "small" />
            </h1>

            <div className="detail__control">

                <PdLoadingSquare size = "small" />
                
            </div>

        </div>
    )
}
