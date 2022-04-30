import React from 'preact/compat'
import PdLoadingSquare from '@loading/pd-loading-square';
import FeaturedImagazineMobileArticle from '@templates/featured-imagazine-mobile-article';
export default function MainMobile({ loading = true, data }) {
    let arrPostsList = [];    
    if ( !loading ) {
        arrPostsList = data.map(item => <FeaturedImagazineMobileArticle single = {item}
                                                                        key = {data.id} />);
    }
    return (
        <>
            {loading ? (
                <div className="mtop10">
                    <PdLoadingSquare size = "large" />
                </div>
            ) : (
                <div className="mb-posts-list mb-cat-posts-list mb-imagazine-posts-list global__bottom ">
                    {arrPostsList}
                </div>
            )}
        </>
        
    )
}
