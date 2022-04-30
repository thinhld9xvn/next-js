import React from 'preact/compat'

import BlogPagination from '@components/templates/blog-pagination';
import BlogGrid from '@components/templates/blog-grid';

import { connect } from 'react-redux';

export function BlogTemplatePage({ data, updateResultsFiltered, updatedPaged }) {

    const {options, default_banner} = data;

    const {title, heading, banner, options : postsList} = options; 

    updateResultsFiltered(JSON.parse(JSON.stringify(postsList)));
    updatedPaged(1);
    
    return (
        <section className="vk-content">
            <div className="vk-blog">
                <div className="vk-blog__banner" 
                    style={{
                        backgroundImage : `url(${banner ? banner : default_banner})`
                    }}>
                    <div className="container">
                        <div className="_content">
                            <div className="_box">
                                <h1 className="vk-blog__title">{title}</h1>
                                <div dangerouslySetInnerHTML={{
                                    __html : heading
                                }}>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container pt-60 pb-60 pt-lg-100 pb-lg-100">

                    <BlogGrid />

                    <BlogPagination />

                </div>

            </div>

        </section>

    )
}

function mapStateToProps(state) {   

    return { }

}

function mapDispatchToProps(dispatch) {

    return {

        updateResultsFiltered : async (v) => await dispatch({
            type : "UPDATE_RESULTS_FILTERED",           
            payload : v
        }),
        updatedPaged : async (v) => await dispatch({

            type : "UPDATED_CURRENT_PAGED",
            payload : v

        })
 
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(BlogTemplatePage);