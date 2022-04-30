import React, {useState, useEffect} from 'preact/compat'
import Head from 'next/head'
import { useRouter } from 'next/router';
import Header from '@categorypage/components/header';
import GlBanner from '@categorypage/components/gl-banner';
import StickyPosts from '@categorypage/components/magazine-layout/sticky-posts';
import { cloneArray } from '@js_dir/utils/arrayUtils';
import { ADS_POSITION, CATEGORIES, CATPAGE_POSTS_NUM, DEFAULT_BANNER, DEFAULT_PAGE, SICKY_POST_NUM } from '@constants/constants';
import BlogPagination from '@templates/blog-pagination';
import { getStickyPostsList } from '@js_dir/utils/categoriesUtils';
import { setupLazyLoading } from '@js_dir/utils/setupLazyLoading';
import { getMagazineList } from '@lib/getMagazineListApi';
import { connect } from 'react-redux';
import { getSiteOption } from '@lib/getSiteOptionApi';
import { getMenuItems } from '@lib/getMenuItemsApi';
import { getAds } from '@lib/getAdsApi';
import { isMobile } from '@js_dir/utils/deviceUtils';
import HeaderMobile from '@templates/mobile/category/header-mobile';
import MainMobile from '@components/templates/mobile/imagazine/main-mobile';
//import Breadcrumbs from '@components/templates/breadcrumbs';
//import { addBreadcrumbsContext } from '@js_dir/utils/addBreadcrumbsContextUtils';
const childCatsList = {
    id : 'imagazine',
    name : 'iMagazine',
    parent_id : 0,
    data : [
        {   
            id : 'imagazine',
            name : 'iMagazine',
            parent_id : 0,
            data : [
                {
                    id : CATEGORIES.LIFES.id,
                    name : 'Đời sống',
                    slug: CATEGORIES.LIFES.slug,
                    code: CATEGORIES.LIFES.code
                },
                {
                    id : CATEGORIES.BEAUTY.id,
                    name : 'Làm đẹp',
                    slug: CATEGORIES.BEAUTY.slug,
                    code: CATEGORIES.BEAUTY.code
                },
                {
                    id : CATEGORIES.SPORTS.id,
                    name : 'Thể thao',
                    slug: CATEGORIES.SPORTS.slug,
                    code: CATEGORIES.SPORTS.code
                }
            ]
        }        
    ]
};
function EmagazinePage({ siteOptions, siteMenu, updateSiteOptions, updatePrimaryMenu, updateAds, pageContext, updateShowFooter }) {
    const router = useRouter();
    const [loading, setLoading] = useState(true);
    const [isMobileDevice, setMobileDevice] = useState(false);
    const [postData, setPostData] = useState(null);
    const [stickyPostsList, setStickyPostsList] = useState(null);
    const [paged, setPaged] = useState(DEFAULT_PAGE);
    const [loadMoreSuccess, setLoadMoreSuccess] = useState(false);
    const [loadMoreEnd, setLoadMoreEnd] = useState(false);
    const [loadingBanner, setLoadingBanner] = useState(true);
    const [bannerMiddle, setBannerMiddle] = useState(null);
    const [breadcrumbsData, setBreadcrumbsData] = useState(null);
    const [mobilePostsList, setMobilePostsList] = useState(null);
    const [childCategoriesList, setChildCategoriesList] = useState(null);
    async function processLoadMore(page) {
        setLoadMoreSuccess(false);
        const postsListData = (await getMagazineList(page, CATPAGE_POSTS_NUM)).map(e => e._source);
        const myPostsList = stickyPostsList ? stickyPostsList.concat(postsListData) : postsListData;
        const myMobilePostsList = mobilePostsList ? mobilePostsList.concat(postsListData) : postsListData;
        setStickyPostsList(cloneArray(myPostsList));
        setMobilePostsList(cloneArray(myMobilePostsList));
        setPaged(page);
        setLoadMoreSuccess(true);
        setLoadMoreEnd(!postsListData || postsListData.length === 0);
    }
    async function updateDataByPage() {
        const {category, breadcrumbs} = pageContext;
        const {postsList} = category;
        setPostData({ name : 'iMagazine' });
        const myPostsList = getStickyPostsList(postsList, SICKY_POST_NUM, 2);
        setStickyPostsList(cloneArray(myPostsList));
        setMobilePostsList(cloneArray(myPostsList));
        setChildCategoriesList(cloneArray(childCatsList));
        //setBreadcrumbsData(addBreadcrumbsContext(breadcrumbs));
        setPaged(DEFAULT_PAGE);
    }
    useEffect(() => {
        setMobileDevice(isMobile());
    }, []);
    useEffect(async () => {
        if ( router.query.slug ) {  
            updateShowFooter(true);
            setLoading(true);
            setLoadingBanner(true);
            //setBreadcrumbsData(null);
            const adsMiddle = await getAds(ADS_POSITION.CATEGORY.MIDDLE);
            setBannerMiddle(adsMiddle.length ? adsMiddle[0] : DEFAULT_BANNER);
            setTimeout(async function() {
                setLoadingBanner(false);
                if ( !siteOptions ) {
                    const options = await getSiteOption();
                    updateSiteOptions(cloneArray(options));
                }
                if ( !siteMenu ) {
                    const primaryMenu = await getMenuItems();
                    updatePrimaryMenu(cloneArray(primaryMenu));                
                }                
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
                setTimeout(function() {
                    setupLazyLoading();
                }, 200);
            }
        }
    }, [paged]);
    return (
        <>
            <Head>
                <title>iMagazine</title>
            </Head>
            {!isMobileDevice ? (
                <div className="v-desktop">
                    <main id="main">
                        {/*<Breadcrumbs data = {breadcrumbsData} />*/}
                        <Header loading = {loading}
                                data = {postData}
                                setFormatTitle = {false}
                                treeCategoriesList = {childCategoriesList} />
                        <StickyPosts loading = {loading} 
                                    data = {stickyPostsList} />
                        <GlBanner loading = {loadingBanner}
                                data = {bannerMiddle} />
                        <StickyPosts loading = {loading} 
                                    data = {stickyPostsList}
                                    showHeader = {false}
                                    startIndx = {9} />
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
                                                  data = {postData}
                                                  treeCategoriesList = {childCategoriesList}  />                                    
                                    <MainMobile loading = {loading}
                                                data = {mobilePostsList}  />
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
export default connect(mapStateToProps, mapDispatchToProps)(EmagazinePage);