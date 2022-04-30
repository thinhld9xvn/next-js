import React, {useEffect, useState} from 'preact/compat'
import FeaturedArticle from './components/featured-article'
import FeaturedLargeArticle from './components/featured-large-article'
import Heading from './components/heading'
import {connect} from 'react-redux'
import { isDiff } from '@js_dir/utils/arrayUtils'
import { useRouter } from 'next/router'
function HomeFeaturedWidget({ homeFeaturedWidgetData }) {
    const router = useRouter();
    const [loading, setLoading] = useState(true);
    const [postsList, setPostsList] = useState(homeFeaturedWidgetData); 
    useEffect(async () => { 
        if ( isDiff(homeFeaturedWidgetData, postsList) ) {
            setPostsList(homeFeaturedWidgetData);  
            setLoading(false);
        }    
        else {
            if ( postsList && loading ) {
                setLoading(false);
            }
        }
    }, [homeFeaturedWidgetData]); 
    return (
        <section className="home-new" style={{marginTop: '20px'}}>
            <div className="container">
                <div className="module__header header__global">
                    <h2 className="title__global">Được quan tâm</h2>
                </div>
                <div className="module__content">
                    <div className="group">
                        <div className="item">
                            <div className="gulp__header">
                                <FeaturedLargeArticle loading = {loading}
                                                      data = {postsList} 
                                                      index = {0} />
                                <div className="gulp__group">
                                    <FeaturedArticle loading = {loading}
                                                    data = {postsList} 
                                                    index = {2} />
                                    <FeaturedArticle  loading = {loading}
                                                    data = {postsList} 
                                                    index = {3} />
                                </div>
                            </div>
                            <div className="grulp__bottom">
                                <FeaturedArticle  loading = {loading}
                                                 data = {postsList} 
                                                 index = {1} />
                                <FeaturedArticle  loading = {loading}
                                                 data = {postsList} 
                                                 index = {4} />
                            </div>
                        </div>
                        <div className="item__sidebar">
                            <FeaturedArticle  loading = {loading}
                                             data = {postsList} 
                                             index = {5}
                                             showthumbnail = {true}
                                             thumbnail = "small" />
                            <FeaturedArticle  loading = {loading}
                                              data = {postsList} 
                                              index = {6}
                                              showthumbnail = {true}
                                              thumbnail = "small" />
                            <FeaturedArticle loading = {loading} 
                                            data = {postsList} 
                                             index = {7}
                                             showthumbnail = {true}
                                             thumbnail = "small" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
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
export default connect(mapStateToProps, mapDispatchToProps)(HomeFeaturedWidget);
