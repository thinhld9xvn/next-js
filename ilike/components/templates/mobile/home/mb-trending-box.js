import PdLoadingSquare from '@components/loading/pd-loading-square';
import { isDiff } from '@js_dir/utils/arrayUtils';
import FeaturedMobileTrendingArticle from '@templates/featured-mobile-trending-article'
import React, {useState, useEffect} from 'preact/compat'
import {connect} from 'react-redux'
function MbTrendingBox({ homeFeaturedWidgetData }) {
    const [loading, setLoading] = useState(true);
    const [postsList, setPostsList] = useState([]);
    useEffect(async () => {
        if ( isDiff(homeFeaturedWidgetData, postsList) ) {
            setPostsList(homeFeaturedWidgetData);
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
    }, [homeFeaturedWidgetData]);
    return (
        <div className="fullwith-section mb-section mb-trending-box">
            <div className="container">
                <h2 className="mb-section-heading flex flex-align-center">
                    <img src="/static/images/top-trending-icon.svg" /> 
                    <strong className="padleft5 upper">Được quan tâm</strong>
                </h2>
                <div className="mb-section-harquant">
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
                            <FeaturedMobileTrendingArticle data = {postsList}
                                                        index = {0} />
                            <FeaturedMobileTrendingArticle data = {postsList}
                                                        index = {1} />
                            <FeaturedMobileTrendingArticle data = {postsList}
                                                        index = {2} /> 
                            <FeaturedMobileTrendingArticle data = {postsList}
                                                        index = {3} />
                            <FeaturedMobileTrendingArticle data = {postsList}
                                                        index = {4} />
                            <FeaturedMobileTrendingArticle data = {postsList}
                                                        index = {5} />   
                            <FeaturedMobileTrendingArticle data = {postsList}
                                                        index = {6} />   
                        </>
                    )}                                              
                    
                </div>
            </div>
        </div>
    )
}
function mapStateToProps(state) {   
    return {
        homeFeaturedWidgetData : state.homeReducer.homeFeaturedWidgetData
    }
}
function mapDispatchToProps(dispatch) {
    return {
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(MbTrendingBox);
