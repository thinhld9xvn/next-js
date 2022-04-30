import PdLoadingSquare from '@components/loading/pd-loading-square';
import { isDiff } from '@js_dir/utils/arrayUtils';
import FeaturedLargeMobileArticle from '@templates/featured-large-mobile-article'
import FeaturedMobileArticle from '@templates/featured-mobile-article'
import React, {useState, useEffect} from 'preact/compat'
import { connect } from 'react-redux'

function MbFeaturedBox({ homeNewsWidgetData }) {
    const [loading, setLoading] = useState(true);
    const [postsList, setPostsList] = useState([]);
    useEffect(async () => {
        if ( isDiff(homeNewsWidgetData, postsList) ) {
            setPostsList(homeNewsWidgetData);
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
    }, [homeNewsWidgetData]);
    return (
        <div className="fullwith-section mb-section mb-featured-box">
            <div className="container">
                {/*<hr className="mb-hr-line" />*/}
                <h2 className="mb-section-heading flex flex-align-center">
                    <img src="/static/images/star-icon.svg" /> 
                    <strong className="padleft5 upper">Tin mới</strong>
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
                            <FeaturedLargeMobileArticle data = {homeNewsWidgetData}
                                                        index = {0}
                                                        thumbnailpos = "bottom" />
                            <FeaturedMobileArticle data = {homeNewsWidgetData}
                                                    index = {1}                                            
                                                    showexcerpt = {true}
                                                    showthumbnail = {true}
                                                    thumbnailpos = "right" />
                            <FeaturedMobileArticle data = {homeNewsWidgetData}
                                                    index = {2}                                            
                                                    showexcerpt = {true}
                                                    showthumbnail = {true}
                                                    thumbnailpos = "right" />
                            <FeaturedMobileArticle data = {homeNewsWidgetData}
                                                    index = {3}                                            
                                                    showexcerpt = {true}
                                                    showthumbnail = {true}
                                                    thumbnailpos = "right" />
                            <FeaturedMobileArticle data = {homeNewsWidgetData}
                                                    index = {4}                                            
                                                    showexcerpt = {true}
                                                    showthumbnail = {true}
                                                    thumbnailpos = "right" />
                        </>
                    )}
                </div>
            </div>
        </div>
    )
}
function mapStateToProps(state) {   
    return {
        homeNewsWidgetData : state.homeReducer.homeNewsWidgetData
    }
}
function mapDispatchToProps(dispatch) {
    return {
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(MbFeaturedBox);

