import { isDiff } from '@js_dir/utils/arrayUtils';
import React, {useEffect, useState} from 'preact/compat'
import { connect } from 'react-redux';
import TemplateKnowledgeItem from '@templates/template-knowledge-item'
import Banner from './services/category/banner';
import TemplatePaginationBar from '@templates/template-pagination-bar';
import { getArticles } from '@js_dir/utils/articleUtils';
import { CATEGORY_PER_PAGE } from '@constants/constants';
import TemplateEmptyList from './templates/template-empty-list';
import { Grid } from 'react-loader-spinner';
function ProductsCategoryLayout({ pageContext, siteOptions, UpdateSiteOptions }) {
    const {headSchema, siteOptions : mySiteOptions, pageData, termPageData} = pageContext;
    const [loading, setLoading] = useState(true);
    const [paged, setPaged] = useState(1);
    const [total, setTotal] = useState(null);
    const [filteredData, setFilteredData] = useState(null);
    const [numPerPage, setNumPerPage] = useState(CATEGORY_PER_PAGE);
    const {termsList, articlesList} = termPageData;
    const {title} = pageData;
    const {name, thumbnail} = termsList[0];
    useEffect(() => {
        if ( isDiff(mySiteOptions, siteOptions) ) {            
            UpdateSiteOptions({...mySiteOptions});
        }
        setPaged(1);
    }, [,pageContext]);
    useEffect(() => {
        if ( pageContext ) {
            setLoading(true);
            setTimeout(() => {
                const elem = document.querySelector('.knowledge-inner');
                const top = elem.getClientRects()[0].top;
                const innerHeight = elem.clientHeight;
                window.scroll(0, top + window.scrollY - innerHeight);
                const arrArticles = getArticles(articlesList, paged, numPerPage);
                setFilteredData(arrArticles.map(item => <TemplateKnowledgeItem  key = {item.id}
                                                                                data = {item} />));
                setTotal(articlesList.length);
                setTimeout(() => {
                    setLoading(false);
                }, 500);
            }, 100);
        }
    }, [pageContext, paged]);
    return (
        <>
            {headSchema ? (
                <head dangerouslySetInnerHTML={{
                    __html : headSchema
                }}></head>
            ) : null}
            <Banner data = {{title, name, thumbnail}} />
            <main>
            <section className="service-detail">
                <div className="container">
                    <div className="knowledge-inner">
                    {!loading ? (
                        <>
                            {filteredData && filteredData.length ? filteredData : <TemplateEmptyList />}
                        </>
                    ) : <div className="grid-loading" style={{width : '100%', marginBottom : '96px'}}><Grid color="#3B7CBE" height={80} width={80} /></div>}
                    </div>
                </div>
                {!loading ? (
                    <TemplatePaginationBar data = {{paged, numPerPage, total, setPaged}} />
                ) : null}
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
export default connect(mapStateToProps, mapDispatchToProps)(ProductsCategoryLayout);