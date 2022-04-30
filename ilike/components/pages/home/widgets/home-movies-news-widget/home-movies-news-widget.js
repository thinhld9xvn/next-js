import React, {useState, useEffect} from 'preact/compat'
import Heading from './components/heading'
import FeaturedLargeArticle from './components/featured-large-article'
import FeaturedArticle from './components/featured-article'
import {connect} from 'react-redux'
import { isDiff } from '@js_dir/utils/arrayUtils'
function HomeMoviesNewsWidget({ homeMoviesNewsWidgetData }) {
    const [loading, setLoading] = useState(true);
    const [postsList, setPostsList] = useState(homeMoviesNewsWidgetData); 
    useEffect(async () => {
        if ( isDiff(homeMoviesNewsWidgetData, postsList) ) {
            setPostsList(homeMoviesNewsWidgetData);
            setLoading(false);
        }
        else {
            if ( postsList && loading ) {
                setLoading(false);
            }
        }
    }, [homeMoviesNewsWidgetData]);
    return (
        <section className="home-film">
            <div className="container">
                <Heading />
                <div className="module__content">
                    <div className="film">
                        <div className="film__item">
                            <FeaturedLargeArticle loading = {loading}
                                                  data = {postsList} 
                                                  index = {0} />
                            <FeaturedLargeArticle loading = {loading}
                                                  data = {postsList} 
                                                  index = {1} />
                        </div>
                        <div className="film__sidebar">
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
        homeMoviesNewsWidgetData : state.homeReducer.homeMoviesNewsWidgetData
    }
}
function mapDispatchToProps(dispatch) {
    return {
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(HomeMoviesNewsWidget);
