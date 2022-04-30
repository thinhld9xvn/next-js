import React from 'preact/compat'
import PdLoadingSquare from '@loading/pd-loading-square'
import MobilePostAuthor from './metadata/mobile-post-author'
import MobilePostHeading from './metadata/mobile-post-heading'
import MobilePostShares from './metadata/mobile-post-shares'

export default function MobilePostHeader({loading = true, data}) {
    
    return (
        <div>
            {loading ? (
                <>
                    <div className="mtop10">
                        <PdLoadingSquare size = "small" />
                    </div>
                    <div className="mtop10">
                        <PdLoadingSquare size = "small" />
                    </div>
                    <div className="mtop10">
                        <PdLoadingSquare size = "small" />
                    </div>
                </>
            ) : (
                <>
                    <MobilePostHeading data = {data} />
                    <MobilePostShares data = {data} />
                    <MobilePostAuthor data = {data} />
                </>
            )}
        </div>
    )
}
