import React, {useState, useEffect} from 'preact/compat'
import Head from 'next/head'
import { connect } from 'react-redux';
import { cloneArray } from '@js_dir/utils/arrayUtils';
import { setupLazyLoading } from '@js_dir/utils/setupLazyLoading';
import { getSiteOption } from '@lib/getSiteOptionApi';
import { getAds } from '@lib/getAdsApi';
import { ADS_POSITION, 
            cataloguesEntries, 
                CATEGORIES, 
                    CAT_FEATURED_ID,
                    DEFAULT_BANNER, 
                        DEFAULT_HOME_DESCRIPTION, 
                        DEFAULT_HOME_KEYWORDS,
                        DEFAULT_PAGE, 
                            DEFAULT_POSTS_NUM, 
                                EMAGAZINE_POSTS_NUM, EXPLORE_POSTS_NUM, FEATURED_POSTS_NUM, HEADING_HOMEPAGE, NEWEST_POSTS_NUM } from '@constants/constants';
import { getPostsList } from '@lib/getPostsListApi';
import { getMenuItems } from '@lib/getMenuItemsApi';
import { getMagazineList } from '@lib/getMagazineListApi';
import HomeFeaturedWidget from '@home_featured_widget/home-featured-widget';
import HomeNewsWidget from '@home_news_widget/home-news-widget';
import HomeLifeNewsWidget from '@home_life_news_widget/home-life-news-widget';
import HomeMoviesNewsWidget from '@home_movies_news_widget/home-movies-news-widget';
import HomeSportsNewsWidget from '@home_sports_news_widget/home-sports-news-widget';
import HomeShowbizNewsWidget from '@home_showbiz_news_widget/home-showbiz-news-widget';
import HomeMagazineNewsWidget from '@home_magazine_news_widget/home-magazine-news-widget';
import GlBanner from '@home_gl_banner_widget/gl-banner';
import MbBanner from '@components/templates/mobile/home/mb-banner';
import MbTrendingBox from '@components/templates/mobile/home/mb-trending-box';
import MbFeaturedBox from '@components/templates/mobile/home/mb-featured-box';
import MbRecentSearchBox from '@components/templates/mobile/home/mb-recent-search-box';
import MbAdsBox from '@components/templates/mobile/home/mb-ads-box';
import MbCategoryBox from '@components/templates/mobile/home/mb-category-box';
import MbDiscoveryBox from '@components/templates/mobile/home/mb-discovery-box';
import { isMobile } from '@js_dir/utils/deviceUtils';
import HomeBeautyNewsWidget from './widgets/home-beauty-news-widget/home-beauty-news-widget';
import HomeYoungplacesNewsWidget from './widgets/home-youngplaces-news-widget/home-youngplaces-news-widget';
import HomeTechnologyNewsWidget from './widgets/home-technologoy-news-widget/home-technology-news-widget';
import { addExcludes, getFilteredFromExcludes, getHomeFeaturedLists, getWidgetPostsListWithExcludes, setWidgetPostsListWithExcludes } from '@js_dir/utils/articleUtils';
import HomeExploreNewsWidget from './widgets/home-explore-news-widget/home-explore-news-widget';
import { useRouter } from 'next/router';
async function getCataloguesEntriesData(entries, homeExcludeIds) {
    const data = {};
    for ( let i = 0; i < entries.length; i++ ) {
        const item = entries[i];
        data[i] = await new Promise((resolve, reject) => {
            setTimeout(async function() {
                resolve(await getWidgetPostsListWithExcludes(item.id, homeExcludeIds, EXPLORE_POSTS_NUM));
                //resolve((await getPostsList(item.id, null, EXPLORE_POSTS_NUM)).map(e => e._source));
            }, 100);
        });
    }
    return data;
  }
function getNewsPostsList(data) {
    const start = 0,
            end = NEWEST_POSTS_NUM + start;
    return data.filter((e, i) => i >= start && i < end);
}
function getFeaturedPostsList(data) {
    const start = NEWEST_POSTS_NUM,
            end = FEATURED_POSTS_NUM + start;
    return data.filter((e, i) => i >= start && i < end);
}
function HomePage({ pageContext, 
                        siteOptions,
                        siteMenu,
                        ads,
                        homeSportsNewsWidgetData,
                        homeMoviesNewsWidgetData,
                        homeShowbizNewsWidgetData,
                        homeLifeNewsWidgetData,
                        homeBeautyWidgetData,
                        homeTechnologyWidgetData,
                        homeYoungPlacesWidgetData,
                        homeMagazinesWidgetData,
                        homeMusicWidgetData,
                        updateSiteOptions,
                        updatePrimaryMenu,
                        updateAds,
                        updateHomeFeaturedWidgetData, 
                        updateHomeNewsWidgetData,
                            updateHomeLifeNewsWidgetData,
                                updateHomeMoviesNewsWidgetData,
                                    updateHomeSportsNewsWidgetData,
                                        updateHomeShowbizNewsWidgetData,
                                            updateHomeExploreNewsWidgetData,
                                                updateHomeMagazinesWidgetData,
                                                updateHomeMusicWidgetData,
                                                    updateHomeBeautyWidgetData,
                                                        updateHomeTechnologyWidgetData,
                                                            updateHomeYoungPlacesWidgetData,
                                                                updateShowFooter }) {
    const router = useRouter();
    const [loadingBanner, setLoadingBanner] = useState(true);
    const [bannerMiddleOne, setBannerMiddleOne] = useState(null);
    const [bannerMiddleTwo, setBannerMiddleTwo] = useState(null);
    const [bannerBottom, setBannerBottom] = useState(null);
    const [locationUrl, setLocationUrl] = useState(null);
    const [isMobileDevice, setMobileDevice] = useState(false);
    const { title = '', 
                keywords = '', 
                    description = ''} = pageContext || {};
    useEffect(async () => {
        const homeExcludeIds = [];
        setMobileDevice(isMobile());
        setLocationUrl(window.location.origin + window.location.pathname);
        if ( !isMobile() ) {
            updateShowFooter(true);
            setLoadingBanner(true); 
            setBannerMiddleOne(null);
            setBannerMiddleTwo(null);
            setBannerBottom(null);
            const ads = await getAds();
            let banner_top = ads.filter(e => e.position === ADS_POSITION.HOME.TOP);
                banner_top = banner_top.length ? banner_top[0] : null;
            let banner_middle1 = ads.filter(e => e.position === ADS_POSITION.HOME.MIDDLE_1); 
            if ( banner_middle1.length === 0 ) {
                banner_middle1 = null;
            }
            else {
                const bann = banner_middle1.filter(e => e.name.toLowerCase() === 'test thử');
                if ( bann.length ) {
                    banner_middle1 = bann[0];
                }
                else {
                    banner_middle1 = banner_middle1[0];
                }
            }                
            let banner_middle2 = ads.filter(e => e.position === ADS_POSITION.HOME.MIDDLE_2);
                banner_middle2 = banner_middle2.length ? banner_middle2[0] : null;
            let banner_bottom = ads.filter(e => e.position === ADS_POSITION.HOME.BOTTOM);
                banner_bottom = banner_bottom.length ? banner_bottom[0] : null;
            updateAds(cloneArray({banner_top, banner_middle1, banner_middle2, banner_bottom}));
            setBannerMiddleOne(banner_middle1);
            setBannerMiddleTwo(banner_middle2);
            setBannerBottom(banner_bottom);
        }
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
            if ( !isMobile() ) {
                const {featuredPostsList, newsPostsList} = await getHomeFeaturedLists();
                addExcludes(featuredPostsList, homeExcludeIds);
                const newsPostsListFiltered = getFilteredFromExcludes(newsPostsList, homeExcludeIds);
                addExcludes(newsPostsListFiltered, homeExcludeIds);
                updateHomeFeaturedWidgetData(cloneArray(featuredPostsList));
                updateHomeNewsWidgetData(cloneArray(newsPostsListFiltered));
                //
                await setWidgetPostsListWithExcludes(CATEGORIES.LIFES.id, homeExcludeIds, updateHomeLifeNewsWidgetData, NEWEST_POSTS_NUM);
                //
                await setWidgetPostsListWithExcludes(CATEGORIES.MOVIES.id, homeExcludeIds, updateHomeMoviesNewsWidgetData);
                //
                await setWidgetPostsListWithExcludes(CATEGORIES.SPORTS.id, homeExcludeIds, updateHomeSportsNewsWidgetData);
                //
                await setWidgetPostsListWithExcludes(CATEGORIES.SHOWBIZ.id, homeExcludeIds, updateHomeShowbizNewsWidgetData, 4);
                //
                await setWidgetPostsListWithExcludes(CATEGORIES.MUSIC.id, homeExcludeIds, updateHomeMusicWidgetData);
                //
                await setWidgetPostsListWithExcludes(CATEGORIES.BEAUTY.id, homeExcludeIds, updateHomeBeautyWidgetData);
                //
                await setWidgetPostsListWithExcludes(CATEGORIES.TECHNOLOGY.id, homeExcludeIds, updateHomeTechnologyWidgetData);
                //
                await setWidgetPostsListWithExcludes(CATEGORIES.YOUNGPLACES.id, homeExcludeIds, updateHomeYoungPlacesWidgetData);
                //
                const exploreNewsCataloguesList = await getCataloguesEntriesData(cataloguesEntries, homeExcludeIds);
                updateHomeExploreNewsWidgetData(cloneArray(exploreNewsCataloguesList));
                //
                const managazinePostsList = (await getMagazineList(DEFAULT_PAGE, EMAGAZINE_POSTS_NUM)).map(e => e._source);
                updateHomeMagazinesWidgetData(cloneArray(managazinePostsList));
            }
            setTimeout(function() {                
                setupLazyLoading();
            }, 200);  
        }, 200); 
        return () => {
        }
    }, [, router.query.slug]);
    useEffect(() => {
        setTimeout(function() {
            setupLazyLoading();
        }, 200);
    });    
    const {banner_middle1, banner_middle2, banner_bottom} = ads || {};
    return (
        <>
            <Head>
                <title>{title || DEFAULT_HOME_DESCRIPTION}</title>
                <meta description={description || DEFAULT_HOME_DESCRIPTION} />
                <meta keywords={keywords || DEFAULT_HOME_KEYWORDS} />
                <link rel="canonical" href={locationUrl} />
            </Head>
            {!isMobileDevice ? (
                <div className="v-desktop">
                    <div className="wrapper">            
                        <main id="main">
                            <h1 style={{display: 'none'}}>{HEADING_HOMEPAGE}</h1>
                            <HomeNewsWidget />
                            <HomeFeaturedWidget />
                            <GlBanner loading = {loadingBanner}
                                      data = {bannerMiddleOne} />
                            <HomeLifeNewsWidget />   
                            <HomeShowbizNewsWidget />
                            <GlBanner loading = {loadingBanner} 
                                    data = {bannerMiddleTwo} />
                            <HomeMoviesNewsWidget />   
                            <HomeSportsNewsWidget />
                            <GlBanner loading = {loadingBanner} 
                                    data = {bannerBottom} />
                            <HomeExploreNewsWidget />
                            <HomeMagazineNewsWidget />
                        </main>
                    </div>
                </div>
            ) : (
                <div className="v-mobile">
                    <div className="wrapper">            
                        <main id="main" className="main-mobile" style={{paddingTop: '40px'}}>
                            {/*<MbBanner />*/}
                            <MbFeaturedBox />
                            <MbTrendingBox />                            
                            {/*<MbRecentSearchBox />*/}
                            <MbCategoryBox data = {homeLifeNewsWidgetData}                                     
                                        layout = 'films'
                                        heading = "Đời sống"
                                        thumbnailLargePos = "top"
                                        showThumbnailNormalPost = {true}
                                        showExcerptNormalPost = {false} />   
                            <MbCategoryBox data = {homeShowbizNewsWidgetData}                                     
                                        layout = 'films'
                                        heading = "Sao"
                                        thumbnailLargePos = "bottom"
                                        showThumbnailNormalPost = {false}
                                        showExcerptNormalPost = {false} />
                            <MbAdsBox data = {banner_middle1} />
                            <MbCategoryBox data = {homeMoviesNewsWidgetData}                                     
                                        layout = 'films'
                                        heading = "Phim"
                                        thumbnailLargePos = "top"
                                        showThumbnailNormalPost = {true}
                                        showExcerptNormalPost = {true} />   
                            <MbCategoryBox data = {homeSportsNewsWidgetData}
                                            layout = 'sports'
                                            heading = "Thể thao" />                              
                            <MbAdsBox data = {banner_middle2} />
                            {/*<MbCategoryBox data = {homeBeautyWidgetData}                                     
                                        layout = 'films'
                                        heading = "Đẹp"
                                        thumbnailLargePos = "top"
                                        showThumbnailNormalPost = {true}
                                        showExcerptNormalPost = {false} /> 
                            <MbCategoryBox data = {homeYoungPlacesWidgetData}                                     
                                        layout = 'films'
                                        heading = "Điểm đến trẻ"
                                        thumbnailLargePos = "top"
                                        showThumbnailNormalPost = {true}
                                        showExcerptNormalPost = {false} />
                            
                            <MbCategoryBox data = {homeTechnologyWidgetData}                                     
                                        layout = 'films'
                                        heading = "Công nghệ"
                                        thumbnailLargePos = "top"
                                        showThumbnailNormalPost = {true}
                                        showExcerptNormalPost = {false} />*/}
                            <MbDiscoveryBox heading = "Nhạc"
                                            data = {homeMusicWidgetData} />
                            <MbDiscoveryBox heading = "Đẹp"
                                            data = {homeBeautyWidgetData} />
                            <MbDiscoveryBox heading = "Điểm đến trẻ"
                                            data = {homeYoungPlacesWidgetData} />
                            <MbDiscoveryBox heading = "Công nghệ"
                                            data = {homeTechnologyWidgetData} />
                            <MbCategoryBox data = {homeMagazinesWidgetData}                                     
                                        layout = 'films'
                                        heading = "Imagazine"
                                        thumbnailLargePos = "top"
                                        showThumbnailNormalPost = {true}
                                        showExcerptNormalPost = {false}
                                        imagazine = {true} />
                            <MbAdsBox data = {banner_bottom} />
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
        ads : state.globalReducer.ads,
        bannerScripts : state.globalReducer.bannerScripts,
        homeSportsNewsWidgetData : state.homeReducer.homeSportsNewsWidgetData,
        homeMoviesNewsWidgetData : state.homeReducer.homeMoviesNewsWidgetData,
        homeShowbizNewsWidgetData : state.homeReducer.homeShowbizNewsWidgetData,
        homeBeautyWidgetData : state.homeReducer.homeBeautyWidgetData,
        homeLifeNewsWidgetData : state.homeReducer.homeLifeNewsWidgetData,
        homeTechnologyWidgetData : state.homeReducer.homeTechnologyWidgetData,
        homeYoungPlacesWidgetData : state.homeReducer.homeYoungPlacesWidgetData,
        homeMagazinesWidgetData : state.homeReducer.homeMagazinesWidgetData,
        homeExploreNewsWidgetData : state.homeReducer.homeExploreNewsWidgetData,
        homeMusicWidgetData : state.homeReducer.homeMusicWidgetData,        
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
        updateHomeFeaturedWidgetData : async (v) => await dispatch({
            type : "UPDATE_HOME_FEATURED_WIDGET_DATA",
            payload : v
        }),
        updateHomeNewsWidgetData : async (v) => await dispatch({
            type : "UPDATE_HOME_NEWS_WIDGET_DATA",
            payload : v
        }),
        updateHomeLifeNewsWidgetData : async (v) => await dispatch({
            type : "UPDATE_HOME_LIFE_NEWS_WIDGET_DATA",
            payload : v
        }),
        updateHomeMoviesNewsWidgetData : async (v) => await dispatch({
            type : "UPDATE_HOME_MOVIES_NEWS_WIDGET_DATA",
            payload : v
        }),
        updateHomeSportsNewsWidgetData : async (v) => await dispatch({
            type : "UPDATE_HOME_SPORTS_NEWS_WIDGET_DATA",
            payload : v
        }),
        updateHomeShowbizNewsWidgetData : async (v) => await dispatch({
            type : "UPDATE_HOME_SHOWBIZ_NEWS_WIDGET_DATA",
            payload : v
        }),
        updateHomeExploreNewsWidgetData : async (v) => await dispatch({
            type : "UPDATE_HOME_EXPLORE_NEWS_WIDGET_DATA",
            payload : v
        }),
        updateHomeMagazinesWidgetData : async (v) => await dispatch({
            type : "UPDATE_HOME_MAGAZINES_WIDGET_DATA",
            payload : v
        }),
        updateHomeBeautyWidgetData : async (v) => await dispatch({
            type : "UPDATE_HOME_BEAUTY_WIDGET_DATA",
            payload : v
        }),
        updateHomeTechnologyWidgetData : async (v) => await dispatch({
            type : "UPDATE_HOME_TECHNOLOGY_WIDGET_DATA",
            payload : v
        }),
        updateHomeMusicWidgetData : async (v) => await dispatch({
            type : "UPDATE_HOME_MUSIC_WIDGET_DATA",
            payload : v
        }),
        updateHomeYoungPlacesWidgetData : async (v) => await dispatch({
            type : "UPDATE_HOME_YOUNGPLACES_WIDGET_DATA",
            payload : v
        }),       
        updateShowFooter : async (v) => await dispatch({
            type : "UPDATE_SHOW_FOOTER",
            payload : v
        }) 
    }
  }
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);