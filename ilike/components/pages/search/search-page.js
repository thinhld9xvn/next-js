import React, {useState, useEffect} from 'preact/compat'
import Head from 'next/head'
import { useRouter } from 'next/router';
import Header from '@categorypage/components/header';
import GlBanner from '@categorypage/components/gl-banner';
import StickyPosts from '@categorypage/components/default-layout/sticky-posts';
import OldPosts from '@categorypage/components/default-layout/old-posts';
import { cloneArray } from '@js_dir/utils/arrayUtils';
import { ADS_POSITION, CATPAGE_POSTS_NUM, DEFAULT_BANNER, DEFAULT_PAGE } from '@constants/constants';
import BlogPagination from '@templates/blog-pagination';
import { scrollToTopStickySection } from '@js_dir/utils/scrollToTopUtils';
import { getOldPostsList, getStickyPostsList } from '@js_dir/utils/categoriesUtils';
import { GetSearchPostsList } from '@lib/getSearchPostsListApi';
import { getParamFromURL } from '@js_utils/urlUtils';
import { getAds } from '@lib/getAdsApi';
import { setupLazyLoading } from '@js_dir/utils/setupLazyLoading';
import { connect } from 'react-redux';
import { getSiteOption } from '@lib/getSiteOptionApi';
import { getMenuItems } from '@lib/getMenuItemsApi';
import { isMobile } from '@js_dir/utils/deviceUtils';
import HeaderMobile from '@components/templates/mobile/category/header-mobile';
import MainMobile from '@components/templates/mobile/category/main-mobile';
function SearchPage({ siteOptions, siteMenu, updateSiteOptions, updatePrimaryMenu, updateAds, pageContext, updateShowFooter }) {
    const router = useRouter();
    const [loading, setLoading] = useState(true);
    const [isMobileDevice, setMobileDevice] = useState(false);
    const [loadingBanner, setLoadingBanner] = useState(true);
    const [bannerMiddle, setBannerMiddle] = useState(null);
    const [bannerSidebarOne, setBannerSidebarOne] = useState(null);
    const [bannerSidebarTwo, setBannerSidebarTwo] = useState(null);
    const [searchData, setSearchData] = useState(null);
    const [stickyPostsList, setStickyPostsList] = useState(null);
    const [mobilePostsList, setMobilePostsList] = useState(null);
    const [oldPostsList, setOldPostsList] = useState(null);
    const [paged, setPaged] = useState(DEFAULT_PAGE);
    const [loadMoreSuccess, setLoadMoreSuccess] = useState(false);
    const [loadMoreEnd, setLoadMoreEnd] = useState(false);
    //const [breadcrumbsData, setBreadcrumbsData] = useState(null);
    async function updateDataByPage(keyword, page) {
        //const {breadcrumbs} = pageContext;
        const postsListData = (await GetSearchPostsList(keyword, CATPAGE_POSTS_NUM, page)).map(e => e._source);
        setSearchData({ name : '"' + decodeURIComponent(keyword) + '"' });
        const postsList = getStickyPostsList(postsListData);
        const oldPostsList = getOldPostsList(postsListData);
        setStickyPostsList(cloneArray(postsList));
        setOldPostsList(cloneArray(oldPostsList));
        setMobilePostsList(cloneArray(postsList.concat(oldPostsList)));
        //setBreadcrumbsData(addBreadcrumbsContext(breadcrumbs));
        setPaged(page);
    }
    async function processLoadMore(keyword, page) {
        setLoadMoreSuccess(false);
        const postsListData = (await GetSearchPostsList(keyword, CATPAGE_POSTS_NUM, page)).map(e => e._source);
        setSearchData({ name : '"' + decodeURIComponent(keyword) + '"' });
        const myPostsList = oldPostsList ? oldPostsList.concat(postsListData) : postsListData;
        const myMobilePostsList = mobilePostsList ? mobilePostsList.concat(postsListData) : postsListData;
        setOldPostsList(cloneArray(myPostsList));
        setMobilePostsList(cloneArray(myMobilePostsList));
        setPaged(page);
        setLoadMoreSuccess(true);
        setLoadMoreEnd(!postsListData || postsListData.length === 0);
    }
    function openDefSearchBar() {
        document.querySelector('.searchbar')
                .classList
                .add('active');
        document.getElementById('header-search')
                .value = getParamFromURL('s');
    }
    useEffect(() => {
        setMobileDevice(isMobile());
    }, []);
    useEffect(async () => {  
        updateShowFooter(true);
        setLoading(true);    
        setLoadingBanner(true);
        //const adsMiddle = await getAds(ADS_POSITION.CATEGORY.MIDDLE);
        setBannerMiddle(DEFAULT_BANNER);
        //const adsSidebarOne = await getAds(ADS_POSITION.CATEGORY.SIDEBAR_1);
        setBannerSidebarOne(DEFAULT_BANNER);
        //const adsSidebarTwo = await getAds(ADS_POSITION.CATEGORY.SIDEBAR_2); 
        setBannerSidebarTwo(DEFAULT_BANNER);
        setTimeout(function () {
            setLoadingBanner(false);
            setTimeout(async function() {
                if ( !siteOptions ) {
                    const options = await getSiteOption();
                    updateSiteOptions(cloneArray(options));
                }
                if ( !siteMenu ) {
                    const primaryMenu = await getMenuItems();
                    updatePrimaryMenu(cloneArray(primaryMenu));                
                }
                //scrollToTopStickySection();
                const keyword = getParamFromURL('s');
                await updateDataByPage(keyword, DEFAULT_PAGE);
                setTimeout(function() {
                    setLoading(false);
                    setTimeout(function() {
                        setupLazyLoading();
                    }, 200);
                }, 500);               
            }, 200);
        }, 200); 
    }, [router.query.slug]);
    useEffect(async () => {
        if ( paged > DEFAULT_PAGE ) { 
            const keyword = getParamFromURL('s');    
            await processLoadMore(keyword, paged);
        }
    }, [paged]);
    useEffect(() => {
        setTimeout(function() {
            setupLazyLoading();
        }, 200);
    });
    const {name = ''} = pageContext || {};
    return (
        <>
            <Head>
                <title>{name}</title>
            </Head>
            {!isMobileDevice ? (
                <div className="v-desktop">
                    <main id="main">
                        {/*<Breadcrumbs data = {breadcrumbsData} />*/}
                        <Header loading = {loading}
                                data = {searchData}
                                prefixContent = "Tìm kiếm: " />
                        <StickyPosts loading = {loading} 
                                    data = {stickyPostsList} />
                        <GlBanner loading = {loadingBanner}
                                data = {bannerMiddle} />
                        <OldPosts loading = {loading}
                                loadingBanner = {loadingBanner}
                                bannersList = {{bannerSidebarOne, bannerSidebarTwo}}
                                data = {oldPostsList} />
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
                                                  data = {searchData}
                                                  prefixContent = "Tìm kiếm: "
                                                  setFormatTitle = {false} />
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
export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);