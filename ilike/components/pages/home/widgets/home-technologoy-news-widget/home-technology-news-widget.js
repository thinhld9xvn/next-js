import React, {useEffect, useState} from 'preact/compat'
import Heading from '@home_showbiz_news_widget/components/heading'
import FeaturedArticle from '@home_showbiz_news_widget/components/featured-article'
import FeaturedLargeArticle from '@home_showbiz_news_widget/components/featured-large-article'
import {connect} from 'react-redux'
import { isDiff } from '@js_dir/utils/arrayUtils';
function HomeTechnologyNewsWidget({ homeTechnologyWidgetData }) {
    const [loading, setLoading] = useState(true);
    const [postsList, setPostsList] = useState(homeTechnologyWidgetData); 
    useEffect(async () => {
        if ( isDiff(homeTechnologyWidgetData, postsList) ) {
            setPostsList(homeTechnologyWidgetData);
            setLoading(false);
        }
        else {
            if ( postsList && loading ) {
                setLoading(false);
            }
        }
    }, [homeTechnologyWidgetData]);
    return (
        <section className="home-film">
            <div className="container">
                <Heading text = {"Công nghệ"} />
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
        homeTechnologyWidgetData : state.homeReducer.homeTechnologyWidgetData
    }
}
function mapDispatchToProps(dispatch) {
    return {
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(HomeTechnologyNewsWidget);
