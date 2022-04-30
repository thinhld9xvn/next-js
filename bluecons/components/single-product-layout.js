import React, {useEffect, useState} from 'preact/compat'
import { isDiff } from '@js_dir/utils/arrayUtils';
import Banner from './services/category/banner'
import { connect } from 'react-redux';
import { formatPostContents, getHeadingsOfContents } from '@js_dir/utils/domUtils';
import TablesOfContents from './templates/tables-of-contents';
function SingleProductLayout({ pageContext, siteOptions, UpdateSiteOptions }) {
    const {headSchema, siteOptions : mySiteOptions, articlePage} = pageContext;
    const {thumbnail, title, name, contents} = articlePage;
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
            <Banner data = {{thumbnail, title, name}} />
            <main>
                <section className="product">
                    <div className="container">
                        <div className="new">
                            <div className="new-content">
                                <TablesOfContents data = {headingsTable} />
                                <div className="main-content" dangerouslySetInnerHTML={{
                                    __html : contents
                                }}></div>
                            </div>
                        </div>
                    </div>
                </section>
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
export default connect(mapStateToProps, mapDispatchToProps)(SingleProductLayout);
