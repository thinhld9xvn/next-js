import React, {useEffect, useState} from 'preact/compat'
import Heading from './components/heading'
import FeaturedLargeArticle from './components/featured-large-article'
import FeaturedArticle from './components/featured-article';
import {connect} from 'react-redux'
import { isDiff } from '@js_dir/utils/arrayUtils';
function HomeNewsWidget({ homeNewsWidgetData }) {
    const [loading, setLoading] = useState(true);
    const [postsList, setPostsList] = useState(homeNewsWidgetData); 
    useEffect(async () => {
        if ( isDiff(homeNewsWidgetData, postsList) ) {
            setPostsList(homeNewsWidgetData);
            setLoading(false);
        }
        else {
            if ( postsList && loading ) {
                setLoading(false);
            }
        }
    }, [homeNewsWidgetData]);
    return (
        <section className="home-care">
            <div className="container">
                <Heading />
                <div className="module__content">
                    <div className="care">
                        <div className="care__item">
                            <FeaturedLargeArticle loading = {loading}
                                                  data = {postsList} 
                                                  index = {0}
                                                  thumbnailpos = "right"
                                                  thumbnail = "large"
                                                  fluidrow = {true} />
                            <FeaturedArticle loading = {loading}
                                            data = {postsList} 
                                            index = {1} />
                            <FeaturedArticle loading = {loading}
                                             data = {postsList} 
                                            index = {2} 
                                            showthumbnail = {true}
                                            thumbnailpos = "right"
                                            thumbnail = "small" />
                        </div>
                        <div className="care__sidebar">
                            <FeaturedArticle loading = {loading}
                                             data = {postsList} 
                                             index = {3} 
                                             showthumbnail = {true}
                                             thumbnail = "small" />
                            <FeaturedArticle loading = {loading} 
                                            data = {postsList} 
                                            index = {4} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
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
export default connect(mapStateToProps, mapDispatchToProps)(HomeNewsWidget);