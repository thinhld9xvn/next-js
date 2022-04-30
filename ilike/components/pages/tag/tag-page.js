import React, {useState, useEffect} from 'preact/compat'
import Head from 'next/head'
import { useRouter } from 'next/router';
import Header from '@categorypage/components/header';
import GlBanner from '@categorypage/components/gl-banner';
import StickyPosts from '@categorypage/components/default-layout/sticky-posts';
import OldPosts from '@categorypage/components/default-layout/old-posts';
import { cloneArray } from '@js_dir/utils/arrayUtils';
import { CATEGORY_POSTS_NUM, DEFAULT_PAGE, CATPAGE_POSTS_NUM, ADS_POSITION, DEFAULT_BANNER, NEWEST_POSTS_NUM, FEATURED_POSTS_NUM } from '@constants/constants';
import BlogPagination from '@templates/blog-pagination';
import { getTagApi } from '@lib/getTagApi.js';
import { scrollToTopStickySection } from '@js_dir/utils/scrollToTopUtils';
import { getOldPostsList, getStickyPostsList } from '@js_dir/utils/categoriesUtils';
import { getPostsList } from '@lib/getPostsListApi';
import { setupLazyLoading } from '@js_dir/utils/setupLazyLoading';
import { getAds } from '@lib/getAdsApi';
import { getSiteOption } from '@lib/getSiteOptionApi';
import { getMenuItems } from '@lib/getMenuItemsApi';
import { connect } from 'react-redux';
import { isMobile } from '@js_dir/utils/deviceUtils';
import HeaderMobile from '@components/templates/mobile/category/header-mobile';
import MainMobile from '@components/templates/mobile/category/main-mobile';
import TagsRecents from '../category/components/widgets/tags-recents';
import NewsWidget from '../category/components/widgets/news-widget';
import { getImageUrlFromAmazonS3 } from '@js_dir/utils/imageUtils';
import { addExcludes, getFilteredFromExcludes, getHomeFeaturedLists } from '@js_dir/utils/articleUtils';
function TagPage({ siteOptions, siteMenu, updateSiteOptions, updatePrimaryMenu, updateAds, updateShowFooter, pageContext }) {
    const router = useRouter();
    const [locationUrl, setLocationUrl] = useState(null);
    const [loading, setLoading] = useState(true);
    const [loadingBanner, setLoadingBanner] = useState(true);
    const [stickyPostsList, setStickyPostsList] = useState(null);
    const [oldPostsList, setOldPostsList] = useState(null);
    const [newsPostsListData, setNewsPostsList] = useState(null);
    const [featuredPostsListData, setFeaturedPostsList] = useState(null);
    const [paged, setPaged] = useState(DEFAULT_PAGE);
    const [loadMoreSuccess, setLoadMoreSuccess] = useState(false);
    const [loadMoreEnd, setLoadMoreEnd] = useState(false);
    const [bannerMiddle, setBannerMiddle] = useState(null);
    const [bannerSidebarOne, setBannerSidebarOne] = useState(null);
    const [bannerSidebarTwo, setBannerSidebarTwo] = useState(null);
    const [mobilePostsList, setMobilePostsList] = useState(null);
    const [isMobileDevice, setMobileDevice] = useState(false);
    //const [breadcrumbsData, setBreadcrumbsData] = useState(null);
    async function updateDataByPage() {
        const {id, breadcrumbs} = pageContext;
        const postsList = (await getPostsList(null, id, CATPAGE_POSTS_NUM)).map(e => e._source);
        const stickyPostsList = getStickyPostsList(postsList);
        const oldPostsList = getOldPostsList(postsList);
        setStickyPostsList(cloneArray(stickyPostsList));
        setOldPostsList(cloneArray(oldPostsList));
        setMobilePostsList(cloneArray(stickyPostsList.concat(oldPostsList)));
        //setBreadcrumbsData(addBreadcrumbsContext(breadcrumbs));
        setPaged(DEFAULT_PAGE);
    }
    async function processLoadMore(page) {
        setLoadMoreSuccess(false);
        const {id} = pageContext;
        const postsList = (await getPostsList(null, id, CATEGORY_POSTS_NUM, page)).map(e => e._source);
        const myPostsList = oldPostsList ? oldPostsList.concat(postsList) : postsList;
        const myMobilePostsList = mobilePostsList ? mobilePostsList.concat(postsList) : postsList;        
        setOldPostsList(cloneArray(myPostsList));
        setMobilePostsList(cloneArray(myMobilePostsList));
        setPaged(page);
        setLoadMoreSuccess(true);
        setLoadMoreEnd(!postsList || postsList.length === 0);
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
            updateShowFooter(true);
            //setLoadingBanner(true);
            //setBreadcrumbsData(null);
            /*const ads = await getAds();
            let banner_top = ads.filter(e => e.position === ADS_POSITION.CATEGORY.TOP);
                banner_top = banner_top.length ? banner_top[0] : DEFAULT_BANNER;
            let adsMiddle = ads.filter(e => e.position === ADS_POSITION.CATEGORY.MIDDLE);
                adsMiddle = adsMiddle.length ? adsMiddle[0] : DEFAULT_BANNER;
            let adsSidebarOne = ads.filter(e=> e.position === ADS_POSITION.CATEGORY.SIDEBAR_1);
                adsSidebarOne = adsSidebarOne.length ? adsSidebarOne[0] : DEFAULT_BANNER;
            let adsSidebarTwo = ads.filter(e=> e.position === ADS_POSITION.CATEGORY.SIDEBAR_2); 
                adsSidebarTwo = adsSidebarTwo.length ? adsSidebarTwo[0] : DEFAULT_BANNER;
            setBannerMiddle(adsMiddle);
            setBannerSidebarOne(adsSidebarOne);
            setBannerSidebarTwo(adsSidebarTwo);
            updateAds(cloneArray(ads));  */
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
                const homeExcludeIds = [];
                const {featuredPostsList, newsPostsList} = await getHomeFeaturedLists();
                addExcludes(featuredPostsList, homeExcludeIds);
                setNewsPostsList((getFilteredFromExcludes(newsPostsList, homeExcludeIds)).filter((e, i) => i < FEATURED_POSTS_NUM));
                setFeaturedPostsList(featuredPostsList.filter((e, i) => i < FEATURED_POSTS_NUM));
                //scrollToTopStickySection();
                await updateDataByPage();
                setTimeout(function() {
                    setLoading(false);
                    setTimeout(function() {
                        setupLazyLoading();
                    }, 200);
                }, 500);
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
    const {name = '', meta_keyword = '', meta_description = '', content, image, profile} = pageContext || {};
    const imageUrl = image ? getImageUrlFromAmazonS3(image) : null;
    const postsListAll = !loading && stickyPostsList && oldPostsList ? stickyPostsList.concat(oldPostsList) : [];
    return (
        <>
            <Head>
                <title>{name}</title>
                <meta keywords = {meta_keyword} />
                <meta description = {meta_description} />
                <link rel="canonical" href={locationUrl} />
            </Head>
            {!isMobileDevice ? (
                <div className="v-desktop">
                    <main id="main">
                        {/*<Breadcrumbs data = {breadcrumbsData} />*/}
                        <div className="rowTags">
                            <div className="container">
                                <div className="rowContainer flex">
                                    <div className="colFillTags heroFillCol">
                                        <Header loading = {loading}
                                                data = {{name, content, image : imageUrl, profile}}
                                                isTag = {true}
                                                prefixContent = "Tag: " /> 
                                        <OldPosts loading = {loading}
                                                    title = "Bài viết"
                                                    loadingBanner = {loadingBanner}
                                                    bannersList = {{bannerSidebarOne, bannerSidebarTwo}}
                                                    data = {postsListAll} />         
                                        <BlogPagination loading = {loading}
                                                        props = {{paged, loadMoreSuccess, loadMoreEnd, setPaged}} />                         
                                    </div>
                                    <div className="colFillTags heroFillCol">
                                        {/*<TagsRecents />*/}
                                        <NewsWidget loading = {loading} 
                                                    data = {newsPostsListData} />
                                        <NewsWidget loading = {loading}
                                                    className="featured-widget"
                                                    title = "tin nổi bật"
                                                    data = {featuredPostsListData} />
                                    </div>
                                </div>
                            </div>
                        </div>                        
                        {/*<StickyPosts loading = {loading} 
                                    data = {stickyPostsList} />
                        <GlBanner loading = {loadingBanner}
                                    data = {bannerMiddle} />*/}
                        
                    </main>
                </div>
            ) : (
                <div className="v-mobile">
                    <div className="wrapper">
                        <main id="main" className="main-mobile">
                            <div className="main-mobile-page main-cat-page">
                                <div className="container">
                                    <HeaderMobile loading = {loading} 
                                                  data = {{name}}
                                                  prefixContent = "Tag: "
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
export default connect(mapStateToProps, mapDispatchToProps)(TagPage);