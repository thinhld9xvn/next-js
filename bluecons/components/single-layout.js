import React, {useEffect, useState} from 'preact/compat'
import { isDiff } from '@js_dir/utils/arrayUtils';
import { connect } from 'react-redux';
import TemplatePageBanner from '@templates/template-page-banner';
import { getSingleFeaturedImage } from '@js_dir/utils/articleUtils';
import TemplateSingleShare from '@templates/template-single-share';
import TemplateKnowledgeItem from './templates/template-knowledge-item';
import TemplateEmptyList from './templates/template-empty-list';
import { formatPostContents, getHeadingsOfContents } from '@js_dir/utils/domUtils';
import TablesOfContents from './templates/tables-of-contents';
function SingleLayout({ pageContext, siteOptions, UpdateSiteOptions }) {
    const {headSchema, siteOptions : mySiteOptions, articlePage, relatedLists} = pageContext;
    const {thumbnail, contents} = articlePage;
    const bannerImage = getSingleFeaturedImage(thumbnail, mySiteOptions);
    const arrRelatedLists = relatedLists.map(item => <TemplateKnowledgeItem key = {item.id}
                                                                            data = {item} />);
    const [headingsTable, setHeadingTable] = useState([]);
    useEffect(() => {
        if ( isDiff(mySiteOptions, siteOptions) ) {            
            UpdateSiteOptions({...mySiteOptions});
        }        
    }, [,pageContext]);
    setTimeout(() => {
        formatPostContents();        
    }, 200);
    useEffect(() => {
        setTimeout(() => {
            setHeadingTable(getHeadingsOfContents());
        }, 200);
    }, [pageContext]);
    return (
        <>
            {headSchema ? (
                <head dangerouslySetInnerHTML={{
                    __html : headSchema
                }}></head>
            ) : null}
            <TemplatePageBanner data = {{...articlePage, bannerImage}}
                                layout = {process.env.POSTS_POST_TYPE} />
          
            <main>
                <div className="new">
                    <div className="container">
                        <div className="new-inner">
                            <TemplateSingleShare />                            
                            <div className="new-content">
                                <TablesOfContents data = {headingsTable} />
                                <div className="main-content" dangerouslySetInnerHTML={{
                                    __html : contents
                                }}></div>
                            </div>                            
                        </div>                        
                        <section className="new-relative">
                            <div className="block-title-primary">
                                <h2>Có thể bạn quan tâm</h2>
                            </div>
                            <div className="knowledge-inner">
                                {arrRelatedLists && arrRelatedLists.length ? 
                                    <>{arrRelatedLists}</> : <TemplateEmptyList />}
                            </div>
                        </section>
                    </div>
                </div>
            </main>
        </>
    )
}
function mapStateToProps(state) {   
    return { 
        siteOptions : state.globalReducer.siteOptions
    }
}
function mapDispatchToProps(dispatch) {
    return {
        UpdateSiteOptions : async (v) => await dispatch({
            type : "UPDATE_SITE_OPTIONS",
            payload : v
        })
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SingleLayout);
