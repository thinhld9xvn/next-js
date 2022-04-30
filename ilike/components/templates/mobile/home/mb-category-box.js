import React, {useState, useEffect} from 'preact/compat'
import FeaturedLargeMobileArticle from '@templates/featured-large-mobile-article';
import FeaturedMobileArticle from '@templates/featured-mobile-article';
import { isDiff } from '@js_dir/utils/arrayUtils';
import PdLoadingSquare from '@components/loading/pd-loading-square';
import MagazineTempItem from '@templates/magazine-temp-item'
export default function MbCategoryBox({ data = [], 
                                        layout = 'films', 
                                        heading = '',
                                        thumbnailLargePos = 'bottom',
                                        showExcerptNormalPost = true,
                                        showThumbnailNormalPost = false,
                                        imagazine = false }) {
    const [loading, setLoading] = useState(true);
    const [postsList, setPostsList] = useState([]);
    const className = layout === 'films' ? 'mb-films-box' : (
                            layout === 'sports' ? 'mb-sports-box' : ''
                       );
    useEffect(async () => {
        if ( imagazine ) {
            setPostsList(data ? data.map((item, i) => <MagazineTempItem  key = {i}
                                                                        boxClassName="mb-judge-post mb-judge-large-post"
                                                                        headingClassName="mb-judge-post-title mtop10"
                                                                         data = {item} />) : []);
            setTimeout(() => {
                setLoading(false);
            }, 200);
        }
        else {
            if ( isDiff(data, postsList) ) {
                setPostsList(data);
                setTimeout(() => {
                    setLoading(false);
                }, 200);
            }
            else {
                if ( postsList && loading ) {
                    setTimeout(() => {
                        setLoading(false);
                    }, 200);
                }
            }
        }
    }, [data]);
    
    return (
        <div className={"fullwith-section mb-section mb-featured-box ".concat(className)}>
            <div className="container">
                <hr className="mb-hr-line" />
                <h2 className="mb-section-heading flex flex-align-center">
                    <strong className="upper">{heading}</strong>
                </h2>
                <div className="mb-section-judges">
                    {loading ? (
                        <>
                            <div className="mtop10">
                                <PdLoadingSquare size="large" />
                            </div>
                            <div className="mtop10">
                                <PdLoadingSquare size="large" />
                            </div>
                            <div className="mtop10">
                                <PdLoadingSquare size="large" />   
                            </div>
                            <div className="mtop10">
                                <PdLoadingSquare size="large" /> 
                            </div>
                            <div className="mtop10">
                                <PdLoadingSquare size="large" /> 
                            </div>
                        </>
                    ) : (
                        <>
                            {!imagazine ? (
                                <>
                                    <FeaturedLargeMobileArticle data = {postsList}
                                                                index = {0}
                                                                thumbnailpos = {thumbnailLargePos} />
                                    <FeaturedMobileArticle data = {postsList}
                                                            index = {1}                                            
                                                            showexcerpt = {showExcerptNormalPost}
                                                            showthumbnail = {showThumbnailNormalPost} />
                                    <FeaturedMobileArticle data = {postsList}
                                                            index = {2}                                            
                                                            showexcerpt = {showExcerptNormalPost}
                                                            showthumbnail = {showThumbnailNormalPost} />
                                    <FeaturedMobileArticle data = {postsList}
                                                            index = {3}                                            
                                                            showexcerpt = {showExcerptNormalPost}
                                                            showthumbnail = {showThumbnailNormalPost} />
                                    <FeaturedMobileArticle data = {postsList}
                                                            index = {4}                                            
                                                            showexcerpt = {showExcerptNormalPost}
                                                            showthumbnail = {showThumbnailNormalPost} />
                                </>
                            ) : (
                                <>
                                    {postsList}
                                </>
                            )}
                        </>
                    )}
                </div>
            </div>
        </div>
    )
}
