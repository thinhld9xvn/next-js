import React, {useState, useEffect} from 'preact/compat'
import Head from 'next/head'
import { useRouter } from 'next/router';
import { getAds } from '@lib/getAdsApi';
import Header from './components/header';
import { cloneArray, reverse } from '@js_dir/utils/arrayUtils';
import { ADS_POSITION, CATEGORY_LAYOUT, 
            CATPAGE_POSTS_NUM, 
                DEFAULT_BANNER, 
                DEFAULT_PAGE, 
                    SICKY_BEAUTY_POST_NUM, 
                        SICKY_MOVIE_POST_NUM, 
                            SICKY_POST_NUM } from '@constants/constants';
import BlogPagination from '@templates/blog-pagination';
import { getCatParentLists, getOldPostsList, getStickyPostsList, isLastEntryLevel } from '@js_dir/utils/categoriesUtils';
import CategoryDefaultLayout from './components/category-default-layout';
import CategoryMagazineLayout from './components/category-magazine-layout';
import CategoryBeautyLayout from './components/category-beauty-layout';
import CategoryMovieLayout from './components/category-movie-layout';
import { getPostsList } from '@lib/getPostsListApi';
import { setupLazyLoading } from '@js_dir/utils/setupLazyLoading';
import { connect } from 'react-redux';
import { getSiteOption } from '@lib/getSiteOptionApi';
import { getMenuItems } from '@lib/getMenuItemsApi';
import { isMobile } from '@js_dir/utils/deviceUtils';
import HeaderMobile from '@templates/mobile/category/header-mobile';
import MainMobile from '@templates/mobile/category/main-mobile';
function CategoryPage({ siteOptions, siteMenu, updateSiteOptions, updatePrimaryMenu, updateAds, pageContext, updateShowFooter }) {
    const router = useRouter();
    const [locationUrl, setLocationUrl] = useState(null);
    const [loading, setLoading] = useState(true);
    const [loadingBanner, setLoadingBanner] = useState(true);
    const [categoryData, setCategoryData] = useState(null);
    const [stickyPostsList, setStickyPostsList] = useState(null);
    const [oldPostsList, setOldPostsList] = useState(null);
    const [mobilePostsList, setMobilePostsList] = useState(null);
    const [treeCategoriesList, setTreeCategoriesList] = useState(null);
    const [bannerMiddle, setBannerMiddle] = useState(null);
    const [bannerSidebarOne, setBannerSidebarOne] = useState(null);
    const [bannerSidebarTwo, setBannerSidebarTwo] = useState(null);
    const [paged, setPaged] = useState(DEFAULT_PAGE);
    const [loadMoreSuccess, setLoadMoreSuccess] = useState(false);
    const [loadMoreEnd, setLoadMoreEnd] = useState(false);
    const [isMobileDevice, setMobileDevice] = useState(false);
    function getCatNumByLayout(layout) {
        if ( layout === CATEGORY_LAYOUT.beauty ) {
            return SICKY_BEAUTY_POST_NUM;
        }
        if ( layout === CATEGORY_LAYOUT.movie ) {
            return SICKY_MOVIE_POST_NUM;
        }
        return SICKY_POST_NUM;
    }
    async function updateDataByPage() {
        const {name, id, parent_id, layout} = pageContext;
        const limit = layout === CATEGORY_LAYOUT.movie ? CATPAGE_POSTS_NUM - 2 : 
                            (layout === CATEGORY_LAYOUT.beauty ? CATPAGE_POSTS_NUM - 5 : CATPAGE_POSTS_NUM);
        const treeCatsLists = await getCatParentLists(id);
        const postsList = await getPostsList(id, null, limit, DEFAULT_PAGE);
        const stickyPostsList = getStickyPostsList(postsList, getCatNumByLayout(layout), 2);
        const oldPostsList = getOldPostsList(postsList, getCatNumByLayout(layout), 2);
        setCategoryData({id, name, parent_id});
        setStickyPostsList(cloneArray(stickyPostsList));
        setOldPostsList(cloneArray(oldPostsList));
        setMobilePostsList(cloneArray(stickyPostsList.concat(oldPostsList)));
        setTreeCategoriesList(cloneArray(treeCatsLists));
        setPaged(DEFAULT_PAGE);
    }
    async function processLoadMore(page) {
        const {id, layout} = pageContext;
        const limit = layout === CATEGORY_LAYOUT.movie ? CATPAGE_POSTS_NUM - 2 : 
                            (layout === CATEGORY_LAYOUT.beauty ? 
                                    CATPAGE_POSTS_NUM - 5 : CATPAGE_POSTS_NUM);
        setLoadMoreSuccess(false);
        const postsListData = (await getPostsList(id, null, limit, page)).map(e => e._source);
        const myPostsList = oldPostsList ? oldPostsList.concat(postsListData) : postsListData;
        const myMobilePostsList = mobilePostsList ? mobilePostsList.concat(postsListData) : postsListData;
        setOldPostsList(cloneArray(myPostsList));
        setMobilePostsList(cloneArray(myMobilePostsList));
        setPaged(page);
        setLoadMoreSuccess(true);
        setLoadMoreEnd(!postsListData || postsListData.length === 0);
    }
    useEffect(() => {
        setMobileDevice(isMobile());
        return () => {
        }
    }, []);
    useEffect(async () => {  
        if ( router.query.slug ) {
            setLocationUrl(window.location.origin + window.location.pathname);
            setLoading(true);    
            setLoadingBanner(true);
            updateShowFooter(false);
            const ads = await getAds();
            let banner_top = ads.filter(e => e.position === ADS_POSITION.CATEGORY.TOP);
                banner_top = banner_top.length ? banner_top[0] : null;
            let adsMiddle = ads.filter(e => e.position === ADS_POSITION.CATEGORY.MIDDLE);
                adsMiddle = adsMiddle.length ? adsMiddle[0] : null;
            let adsSidebarOne = ads.filter(e=> e.position === ADS_POSITION.CATEGORY.SIDEBAR_1);
                adsSidebarOne = adsSidebarOne.length ? adsSidebarOne[0] : null;
            let adsSidebarTwo = ads.filter(e=> e.position === ADS_POSITION.CATEGORY.SIDEBAR_2); 
                adsSidebarTwo = adsSidebarTwo.length ? adsSidebarTwo[0] : null;
            setBannerMiddle(adsMiddle);
            setBannerSidebarOne(adsSidebarOne);
            setBannerSidebarTwo(adsSidebarTwo);
            updateAds({banner_top, adsMiddle, adsSidebarOne, adsSidebarTwo});
            setTimeout(async function () {
                setLoadingBanner(false);
                if ( !siteOptions ) {
                    const options = await getSiteOption();
                    updateSiteOptions(cloneArray(options));
                }
                if ( !siteMenu ) {
                    const primaryMenu = await getMenuItems();
                    updatePrimaryMenu(cloneArray(primaryMenu));                
                }                
                setTimeout(async function() {
                    //scrollToTopStickySection();  
                    await updateDataByPage();
                    setTimeout(function() {
                        setLoading(false);                        
                    }, 500);
                }, 200);
            }, 200);      
        }
    }, [router.query.slug]);
    useEffect(async () => {
        if ( router.query.slug ) {
            if ( paged > DEFAULT_PAGE ) {
                await processLoadMore(paged);                
            }
        }
    }, [paged]);
    useEffect(() => {
        setTimeout(function() {
            setupLazyLoading();
        }, 200);
    });
    const {meta_title = '', 
                meta_keyword = '', 
                    meta_description = '', 
                        layout = CATEGORY_LAYOUT.default,
                            child_layout = false} = pageContext || {}; 
    return (
        <>
            <Head>
                <title>{meta_title}</title>
                <meta keywords = {meta_keyword} />
                <meta description = {meta_description} />
                <link rel="canonical" href={locationUrl} />
            </Head>
            {!isMobileDevice ? (
                <div className="v-desktop">
                    <main id="main">
                        <Header loading = {loading}
                                data = {categoryData}
                                treeCategoriesList = {treeCategoriesList}
                                layout = {layout}
                                child_layout = {child_layout} />
                        {layout === CATEGORY_LAYOUT.default ? (
                            <CategoryDefaultLayout loading = {loading}   
                                                loadingBanner = {loadingBanner}
                                                bannersLists = {{ bannerMiddle, bannerSidebarOne, bannerSidebarTwo}}
                                                stickyPostsList = {stickyPostsList}
                                                oldPostsList = {oldPostsList} />
                        ) : null}
                        {layout === CATEGORY_LAYOUT.magazine ? (
                            <CategoryMagazineLayout loading = {loading}
                                                    loadingBanner = {loadingBanner}
                                                    bannersLists = {{ bannerMiddle, bannerSidebarOne, bannerSidebarTwo}}
                                                    stickyPostsList = {stickyPostsList} />
                        ) : null}
                        {layout === CATEGORY_LAYOUT.beauty ? (                    
                            <CategoryBeautyLayout loading = {loading}
                                                loadingBanner = {loadingBanner}
                                                bannersLists = {{ bannerMiddle, bannerSidebarOne, bannerSidebarTwo}}
                                                    stickyPostsList = {stickyPostsList}
                                                    oldPostsList = {oldPostsList} />                 
                        ) : null}
                        {layout === CATEGORY_LAYOUT.movie ? (
                            <CategoryMovieLayout loading = {loading}
                                                loadingBanner = {loadingBanner}
                                                bannersLists = {{ bannerMiddle, bannerSidebarOne, bannerSidebarTwo}}
                                                stickyPostsList = {stickyPostsList}
                                                oldPostsList = {oldPostsList} /> 
                        ) : null}
                        <BlogPagination loading = {loading}
                                        props = {{paged, loadMoreSuccess, loadMoreEnd, setPaged}} />
                    </main>
                </div>
            ) : (
                <div className="v-mobile">
                    <div className="wrapper">
                        <main id="main" className="main-mobile">
                            <div className="main-mobile-page main-cat-page">
                                <div className="container">
                                    <HeaderMobile loading = {loading} 
                                                  data = {categoryData}
                                                  treeCategoriesList = {treeCategoriesList} />
                                    <MainMobile loading = {loading}    
                                                data = {mobilePostsList} />
                                    <BlogPagination loading = {loading}
                                                    props = {{paged, loadMoreSuccess, loadMoreEnd, setPaged}} />
                                </div>
                            </div>
                        </main>
                    </div>
                </div>
            )}
        </>
    )
}
function mapStateToProps(state) {   
    return {
        siteOptions : state.globalReducer.siteOptions,
        siteMenu : state.globalReducer.siteMenu,
    }
  }
  function mapDispatchToProps(dispatch) {
    return {
        updateSiteOptions : async (v) => await dispatch({
            type : "UPDATE_SITE_OPTIONS",
            payload : v
        }),
        updatePrimaryMenu : async (v) => await dispatch({
            type : "UPDATE_PRIMARY_MENU",
            payload : v
        }),
        updateAds : async (v) => await dispatch({
            type : "UPDATE_Ads",
            payload : v
        }),
        updateShowFooter : async (v) => await dispatch({
            type : "UPDATE_SHOW_FOOTER",
            payload : v
        })
    }
  }
export default connect(mapStateToProps, mapDispatchToProps)(CategoryPage);