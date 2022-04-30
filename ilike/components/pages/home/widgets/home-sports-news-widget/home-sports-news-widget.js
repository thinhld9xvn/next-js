import React, {useState, useEffect} from 'preact/compat'
import Heading from './components/heading'
import FeaturedLargeArticle from './components/featured-large-article'
import FeaturedArticle from './components/featured-article'
import {connect} from 'react-redux'
import { isDiff } from '@js_dir/utils/arrayUtils'
function HomeSportsNewsWidget({ homeSportsNewsWidgetData }) {
    const [loading, setLoading] = useState(true);
    const [postsList, setPostsList] = useState(homeSportsNewsWidgetData); 
    useEffect(async () => {
        if ( isDiff(homeSportsNewsWidgetData, postsList) ) {
            setPostsList(homeSportsNewsWidgetData);
            setLoading(false);
        }
        else {
            if ( postsList && loading ) {
                setLoading(false);
            }
        }
    }, [homeSportsNewsWidgetData]);
    return (
        <section className="home-sports">
            <div className="container">
                <Heading />
                <div className="module__content">
                    <div className="sports">
                        <div className="sports__item">
                            <FeaturedLargeArticle loading = {loading}
                                                  data = {postsList} 
                                                  index = {0} />
                        </div>
                        <div className="sports__sidebar">
                            <FeaturedArticle loading = {loading}
                                             data = {postsList} 
                                            index = {1} 
                                            showthumbnail = {true} />
                            <FeaturedArticle loading = {loading}
                                             data = {postsList} 
                                            index = {2} 
                                            showthumbnail = {true} />
                            <FeaturedArticle loading = {loading}
                                             data = {postsList} 
                                            index = {3} 
                                            showthumbnail = {true} />
                            <FeaturedArticle loading = {loading}
                                             data = {postsList} 
                                            index = {4} 
                                            showthumbnail = {true} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
function mapStateToProps(state) {   
    return {
        homeSportsNewsWidgetData : state.homeReducer.homeSportsNewsWidgetData
    }
}
function mapDispatchToProps(dispatch) {
    return {
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(HomeSportsNewsWidget);
