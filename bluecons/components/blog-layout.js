import { isDiff } from '@js_dir/utils/arrayUtils';
import { filterArticlesByCatId, getArticles, getFeaturedImage } from '@js_dir/utils/articleUtils';
import React, {useEffect, useState, useCallback} from 'preact/compat'
import { connect } from 'react-redux'
import TemplatePageBanner from '@templates/template-page-banner';
import Link from 'next/link'
import { CATEGORY_PER_PAGE } from '@constants/constants';
import TemplateKnowledgeItem from '@templates/template-knowledge-item';
import TemplateServiceArticleItem from '@templates/template-service-article-item';
import TemplatePaginationBar from '@templates/template-pagination-bar';
import TemplateEmptyList from './templates/template-empty-list';
import { Grid } from 'react-loader-spinner';
const ALL_FILTER_ID = -1;
function TemplateBlogCatItem({ data, activeCatId, handleFilter }) {
    const {id, url, title} = data;
    return (
        <a className={"news-cate-item ".concat(activeCatId === id ? 'active' : '')}
            href="#"
            onClick={handleFilter}>
            {title}
        </a>
    )
}
function addAll(data) {
    if ( data.find(e => e.id === ALL_FILTER_ID) ) return data;
    data.splice(0, 0, {
        id : ALL_FILTER_ID,
        url : "#",
        title : "Tất cả"
    });
    return data;
}
function BlogLayout({ pageContext, siteOptions, UpdateSiteOptions }) {    
    const {headSchema, siteOptions : mySiteOptions, pageData, termsList, articlesList} = pageContext;
    const {title, featuredImage} = pageData;
    const [loading, setLoading] = useState(true);
    const [termsListData, setTermsListData] = useState(null);
    const [largeArticle, setLargeArticle] = useState(null);
    const [activeCatId, setActiveCatId] = useState(ALL_FILTER_ID);
    const [paged, setPaged] = useState(1);
    const [total, setTotal] = useState(null);
    const [filteredData, setFilteredData] = useState(null);
    const [numPerPage, setNumPerPage] = useState(CATEGORY_PER_PAGE);
    const bannerImage = getFeaturedImage(featuredImage, mySiteOptions);
    const handleCatClick = useCallback((cid, e) => {
        e.preventDefault();        
        setActiveCatId(cid);
        setPaged(1);
    }, [,pageContext, activeCatId, paged]);
    const handleFilter = useCallback((cid, page, e) => {
        e && e.preventDefault();  
        setLoading(true);
        setFilteredData(null);
        setTotal(null);
        if ( cid !== activeCatId ) {
            setActiveCatId(cid);
        }
        setTimeout(() => {
            const elem = document.querySelector('.news-cate');
            const top = elem.getClientRects()[0].top;
            const innerHeight = elem.clientHeight;
            window.scroll(0, top + window.scrollY - innerHeight);
            const resultsList = filterArticlesByCatId(articlesList, cid || activeCatId);
            const arrArticles = getArticles(resultsList, page, numPerPage);
            setFilteredData(arrArticles.map((item, i) => {
                if ( i === 0) {
                    setLargeArticle(<TemplateServiceArticleItem key = {item.id}
                                                                data = {item} />);
                }
                return <TemplateKnowledgeItem key = {item.id} 
                                                data = {item} />;
            }));   
            setTotal(resultsList.length);
            if ( page !== paged ) {
                setPaged(page);
            }
            setTimeout(() => {
                setLoading(false);
            }, 500);
        }, 100);
    }, [,pageContext, activeCatId, paged]);    
    useEffect(() => {
        if ( isDiff(mySiteOptions, siteOptions) ) {            
            UpdateSiteOptions({...mySiteOptions});
        }
        setActiveCatId(ALL_FILTER_ID);  
        try {
            setTimeout(() => {
                document.querySelector('.news-cate-inner').scroll(0, 0);      
            }, 200);
        } catch {}
    }, [,pageContext]);
    useEffect(() => {
        setTermsListData(addAll(termsList).map(item => <TemplateBlogCatItem key = {item.id}
                                                                            data = {item}
                                                                            activeCatId = {activeCatId}
                                                                            handleFilter = {handleCatClick.bind(this, item.id)} />));
    }, [activeCatId]);
    useEffect(() => {  
        handleFilter(activeCatId, paged);
    }, [activeCatId, paged]);
    if ( filteredData && filteredData.length ) {
        filteredData.splice(0, 1);
    }
    return (
        <>
            <head dangerouslySetInnerHTML={{
                __html : headSchema
            }}></head>
            <TemplatePageBanner data = {{bannerImage, title }} />
            <main>
                <section className="news">
                    <div className="news-cate">
                        <div className="container">
                            <div className="news-cate-inner">
                                {termsListData}
                            </div>
                        </div>
                    </div>
                    {!loading ? (
                        <>
                            {largeArticle ? (
                                <section className="news-intro">
                                    <div className="container">
                                        {largeArticle}
                                    </div>
                                </section>
                            ) : null}
                        </>
                    ) : <div className="grid-loading"><Grid color="#3B7CBE" height={80} width={80} /></div>}
                    {!loading && filteredData && filteredData.length ? (
                        <section className="news-list">
                            <div className="container">
                                <div className="knowledge-inner">
                                    {filteredData}
                                </div>
                            </div>
                        </section>
                    ) : null}
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
export default connect(mapStateToProps, mapDispatchToProps)(BlogLayout);

