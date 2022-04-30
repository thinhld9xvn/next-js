import React, {useEffect, useState} from 'preact/compat'
import Heading from '@home_life_news_widget/components/heading'
import FeaturedArticle from '@home_life_news_widget/components/featured-article'
import FeaturedLargeArticle from '@home_life_news_widget/components/featured-large-article'
import TextArticle from '@home_life_news_widget/components/text-article';
import {connect} from 'react-redux'
import { isDiff } from '@js_dir/utils/arrayUtils';
function HomeLifeNewsWidget({ homeLifeNewsWidgetData }) {
    const [loading, setLoading] = useState(true);
    const [postsList, setPostsList] = useState(homeLifeNewsWidgetData); 
    useEffect(async () => {
        if ( isDiff(homeLifeNewsWidgetData, postsList) ) {
            setPostsList(homeLifeNewsWidgetData);
            setLoading(false);
        }
        else {
            if ( postsList && loading ) {
                setLoading(false);
            }
        }
    }, [homeLifeNewsWidgetData]);
    return (
        <section className="home-life">
            <div className="container">
                <Heading />
                <div className="module__content">
                    <div className="life">
                        <div className="life__item">
                            <FeaturedLargeArticle loading = {loading}
                                                    data = {postsList} 
                                                    index = {0} />
                            <FeaturedArticle loading = {loading}
                                            data = {postsList} 
                                            index = {1}
                                            showthumbnail = {true}
                                            thumbnail = "small" />
                            <FeaturedArticle loading = {loading}
                                            data = {postsList} 
                                            index = {2}
                                            showthumbnail = {true}
                                            thumbnail = "small" />
                            <FeaturedArticle loading = {loading}
                                            data = {postsList} 
                                            index = {3}
                                            showthumbnail = {true}
                                            thumbnail = "small" />
                        </div>
                        <div className="file__sidebar">
                            <TextArticle loading = {loading}
                                         data = {postsList}
                                         index = {4} />
                            <TextArticle loading = {loading}
                                         data = {postsList}
                                         index = {5} />
                            <TextArticle loading = {loading}
                                         data = {postsList}
                                         index = {6} />
                            <TextArticle loading = {loading}
                                         data = {postsList}
                                         index = {7} />
                            <TextArticle loading = {loading}
                                         data = {postsList}
                                         index = {8} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
function mapStateToProps(state) {   
    return {
        homeLifeNewsWidgetData : state.homeReducer.homeLifeNewsWidgetData
    }
}
function mapDispatchToProps(dispatch) {
    return {
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(HomeLifeNewsWidget);
