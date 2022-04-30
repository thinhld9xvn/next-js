import PdLoadingSquare from '@loading/pd-loading-square'
import React from 'preact/compat'
import MobileFooterPostTag from './metadata/mobile-footer-post-tag'
import MobilePostShares from './metadata/mobile-post-shares'
import MobilePostSignupBox from './metadata/mobile-post-signup-box'
import MobilePostCommentsModal from './mobile-post-comments-modal'
import MobilePostRelated from './mobile-post-related'

export default function MobilePostFooter({loading = true, data, featuredlists}) {
    const {related, in_related, tags} = data || {};
    return (
        <>
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
                    <div className="mtop10">
                        <PdLoadingSquare size = "small" />
                    </div>
                </>
            ) : (
                <>
                    <MobileFooterPostTag data = {tags} />
                    <MobilePostShares data = {data} />
                    <MobilePostRelated data = {related}
                                       isTinyRelated = {true}
                                       className = {"__tiny"} />
                    <MobilePostSignupBox />                    
                    <MobilePostRelated heading = "bài viết cùng chuyên mục"
                                        data = {in_related} />
                    <MobilePostRelated heading = "có thể bạn quan tâm"
                                       data = {featuredlists} />
                    <MobilePostCommentsModal />
                </>
            )}
        </>
    )
}
