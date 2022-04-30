import React from 'preact/compat'
import PdLoadingSquare from '@loading/pd-loading-square';

export default function MobilePostMain({ loading = true, data }) {
    const {content = ''} = data || {};
    return (
        <>
            <div className="mb-post-page-cnt mb-post-page-cnt-fm">
                {loading ? (
                   <div className="mtop10">
                       <PdLoadingSquare size = "large" />
                    </div>
                ) : (
                    <div className="detail__desc"
                        dangerouslySetInnerHTML={{
                            __html : content
                        }}>
                    </div>
                )}
            </div>
        </>
    )
}
