import FeaturedMobileArticle from '@components/templates/featured-mobile-article'
import PdLoadingSquare from '@loading/pd-loading-square';
import React from 'preact/compat'
export default function MainMobile({ loading = true, className = '', data }) {
    let arrPostsList = [];
    if ( !loading ) {
        arrPostsList = data.map(item => <FeaturedMobileArticle single = {item}
                                                                showthumbnail = {true}
                                                                thumbnailpos = "right"
                                                                key = {data.id} />);
    }
    return (
        <>
            {loading ? (
                <div className="mtop10">
                    <PdLoadingSquare size = "large" />
                </div>
            ) : (
                <div className={"mb-posts-list mb-cat-posts-list global__bottom ".concat(className)}>
                    {arrPostsList}
                </div>
            )}
        </>
        
    )
}
