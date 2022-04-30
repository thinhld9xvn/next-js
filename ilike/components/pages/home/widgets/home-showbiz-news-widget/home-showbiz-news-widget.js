import React, {useState, useEffect} from 'preact/compat'
import Heading from './components/heading'
import FeaturedLargeArticle from './components/featured-large-article'
import FeaturedArticle from './components/featured-article'
import {connect} from 'react-redux'
import { isDiff } from '@js_dir/utils/arrayUtils'
function HomeShowbizNewsWidget({ homeShowbizNewsWidgetData }) {
    const [loading, setLoading] = useState(true);
    const [postsList, setPostsList] = useState(homeShowbizNewsWidgetData); 
    useEffect(async () => {
        if ( isDiff(homeShowbizNewsWidgetData, postsList) ) {
            setPostsList(homeShowbizNewsWidgetData);
            setLoading(false);
        } 
        else {
            if ( postsList && loading ) {
                setLoading(false);
            }
        }
    }, [homeShowbizNewsWidgetData]);
    return (
        <section className="home-showbiz">
            <div className="container">
                <Heading />
                <div className="module__content">
                    <div className="showbiz">
                        <div className="showbiz__item">
                            <FeaturedLargeArticle loading = {loading}
                                                  data = {postsList} 
                                                  index = {0} />
                            <FeaturedLargeArticle loading = {loading}
                                                  data = {postsList} 
                                                  index = {1} />
                        </div>
                        <div className="showbiz__sidebar">
                            <FeaturedArticle loading = {loading}
                                             data = {postsList} 
                                            index = {2} 
                                            showthumbnail = {true} />
                            <FeaturedArticle loading = {loading}
                                             data = {postsList} 
                                            index = {3} 
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
        homeShowbizNewsWidgetData : state.homeReducer.homeShowbizNewsWidgetData
    }
}
function mapDispatchToProps(dispatch) {
    return {
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(HomeShowbizNewsWidget);