import React, {useState, useEffect} from 'preact/compat'
import Link from 'next/link'
import { onClick_handleShowHeaderPMenu } from 'handleEvents/onClick_handleShowHeaderPMenu';
import { ADS_POSITION, DEFAULT_BANNER, mobileCatMenuEntries, MOBILE_LOGO, 
            CATEGORIES, FEATURED_POSTS_NUM, DEFAULT_PAGE, EMAGAZINE_POSTS_NUM, MAX_POSTS_NUM, NEWEST_POSTS_NUM, EXPLORE_POSTS_NUM, cataloguesEntries } from '@constants/constants';
import TemplatePrimarySnapMenuItem from './components/template-primary-snap-menu-item';
import MbTrendingBox from '../home/mb-trending-box';
import MbFeaturedBox from '../home/mb-featured-box';
import MbRecentSearchBox from '../home/mb-recent-search-box';
import MbCategoryBox from '../home/mb-category-box';
import MbAdsBox from '../home/mb-ads-box';
import { connect } from 'react-redux';
import { getAds } from '@lib/getAdsApi';
import { cloneArray } from '@js_dir/utils/arrayUtils';
import { getSiteOption } from '@lib/getSiteOptionApi';
import { getMenuItems } from '@lib/getMenuItemsApi';
import { getPostsList } from '@lib/getPostsListApi';
import { setupLazyLoading } from '@js_dir/utils/setupLazyLoading';
import { toggleBodyScroll } from '@js_dir/utils/deviceUtils';
import { addExcludes, getFilteredFromExcludes, getHomeFeaturedLists, getWidgetPostsListWithExcludes, setWidgetPostsListWithExcludes } from '@js_dir/utils/articleUtils';
import { getMagazineList } from '@lib/getMagazineListApi';
import MbDiscoveryBox from '../home/mb-discovery-box';
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
function HeaderPrimarySnapMenu({props, ads, siteOptions, siteMenu, homeNewsWidgetData, homeFeaturedWidgetData, 
                                            homeSportsNewsWidgetData, 
                                            homeMoviesNewsWidgetData,
                                                homeShowbizNewsWidgetData,
                                                    homeBeautyWidgetData,
                                                    homeMusicWidgetData,
                                                        homeLifeNewsWidgetData,
                                                            homeTechnologyWidgetData,
                                                                homeYoungPlacesWidgetData,
                                                                homeMagazinesWidgetData,
                                                                updateSiteOptions,
                                                                updatePrimaryMenu,
                                                                updateAds,
                                                                updateHomeFeaturedWidgetData, 
                                                                updateHomeNewsWidgetData,
                                                                    updateHomeLifeNewsWidgetData,
                                                                        updateHomeMoviesNewsWidgetData,
                                                                            updateHomeSportsNewsWidgetData,
                                                                                updateHomeShowbizNewsWidgetData,
                                                                                            updateHomeBeautyWidgetData,
                                                                                                updateHomeTechnologyWidgetData,
                                                                                                    updateHomeYoungPlacesWidgetData,
                                                                                                        updateHomeMagazinesWidgetData,
                                                                                                        updateHomeMusicWidgetData,
                                                                                                            updateHomeExcludeIds}) {
   
    const {showMenu, setShowMenu} = props;
    const arrCatMenuItems = mobileCatMenuEntries.map((item, i) => <TemplatePrimarySnapMenuItem data = {item}
                                                                                                props = {props}
                                                                                                key = {item.id} />);
    const handleLinkInSnapEvent = (e) => {
        e.preventDefault();
        toggleBodyScroll();
        setShowMenu(false);
    }
    useEffect(async () => {
        const homeExcludeIds = [];
        if ( !ads.length ) {
            const myAds = await getAds();
            let banner_top = myAds.filter(e => e.position === ADS_POSITION.HOME.TOP);
                banner_top = banner_top.length ? banner_top[0] : DEFAULT_BANNER;
            let banner_middle1 = myAds.filter(e => e.position === ADS_POSITION.HOME.MIDDLE_1); 
                banner_middle1 = banner_middle1.length ? banner_middle1[0] : DEFAULT_BANNER;
            let banner_middle2 = myAds.filter(e => e.position === ADS_POSITION.HOME.MIDDLE_2);
                banner_middle2 = banner_middle2.length ? banner_middle2[0] : DEFAULT_BANNER;
            let banner_bottom = myAds.filter(e => e.position === ADS_POSITION.HOME.BOTTOM);
                banner_bottom = banner_bottom.length ? banner_bottom[0] : DEFAULT_BANNER;
            updateAds(cloneArray({banner_top, banner_middle1, banner_middle2, banner_bottom}));
        }
        setTimeout(async function() {
            if ( !siteOptions ) {
                const options = await getSiteOption();
                updateSiteOptions(cloneArray(options));
            }
            if ( !siteMenu ) {
                const primaryMenu = await getMenuItems();
                updatePrimaryMenu(cloneArray(primaryMenu));
            }
            if ( !homeNewsWidgetData && 
                    !homeFeaturedWidgetData ) {
                const {featuredPostsList, newsPostsList} = await getHomeFeaturedLists();
                addExcludes(featuredPostsList, homeExcludeIds);
                const newsPostsListFiltered = getFilteredFromExcludes(newsPostsList, homeExcludeIds);
                addExcludes(newsPostsListFiltered, homeExcludeIds);
                updateHomeFeaturedWidgetData(cloneArray(featuredPostsList));
                updateHomeNewsWidgetData(cloneArray(newsPostsListFiltered));
            }
            if ( !homeMusicWidgetData ) {
                await setWidgetPostsListWithExcludes(CATEGORIES.MUSIC.id, homeExcludeIds, updateHomeMusicWidgetData);
            }
            if ( !homeLifeNewsWidgetData ) {
                await setWidgetPostsListWithExcludes(CATEGORIES.LIFES.id, homeExcludeIds, updateHomeLifeNewsWidgetData);
            }
            if ( !homeMoviesNewsWidgetData ) {
                await setWidgetPostsListWithExcludes(CATEGORIES.MOVIES.id, homeExcludeIds, updateHomeMoviesNewsWidgetData);
            }
            if ( !homeSportsNewsWidgetData ) {
                await setWidgetPostsListWithExcludes(CATEGORIES.SPORTS.id, homeExcludeIds, updateHomeSportsNewsWidgetData);
            }
            if ( !homeShowbizNewsWidgetData ) {
                await setWidgetPostsListWithExcludes(CATEGORIES.SHOWBIZ.id, homeExcludeIds, updateHomeShowbizNewsWidgetData);
            }
            if ( !homeBeautyWidgetData ) {
                await setWidgetPostsListWithExcludes(CATEGORIES.BEAUTY.id, homeExcludeIds, updateHomeBeautyWidgetData);
            }
            if ( !homeTechnologyWidgetData ) {
                await setWidgetPostsListWithExcludes(CATEGORIES.TECHNOLOGY.id, homeExcludeIds, updateHomeTechnologyWidgetData);
            }
            if ( !homeYoungPlacesWidgetData ) {
                await setWidgetPostsListWithExcludes(CATEGORIES.YOUNGPLACES.id, homeExcludeIds, updateHomeYoungPlacesWidgetData);
            }
            if ( !homeMagazinesWidgetData ) {
                const managazinePostsList = (await getMagazineList(DEFAULT_PAGE, EMAGAZINE_POSTS_NUM)).map(e => e._source);
                updateHomeMagazinesWidgetData(cloneArray(managazinePostsList));
            }
            setTimeout(function() {  
                const formMain = document.querySelector('.snap-navigation.snap-navigation-box .form-main');
                formMain.querySelectorAll('.fullwith-section a:not([href^="#"])').forEach(link => {
                    link.addEventListener('click', handleLinkInSnapEvent);
                });              
                setupLazyLoading();
            }, 200);  
        }, 200); 
        return () => {
        }
    }, []);
    useEffect(() => {
        setTimeout(function() {
            setupLazyLoading();
        }, 200);
    });
    const {banner_middle1, banner_middle2, banner_bottom} = ads || {};
    return (
        <div className={"mobile-modal single-comments-modal snap-navigation snap-navigation-box ".concat(showMenu ? 'show' : '')}>
            <header className="header-mobile">
                <div className="container">
                    <div className="wrapper flex flex-align-center flex-justify-center">
                        <div className="logo">
                            <Link href="/">
                                <a onClick={onClick_handleShowHeaderPMenu.bind(this, {...props, prevent : false})}>
                                    <img src={MOBILE_LOGO} />
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </header>
            <a className="modal-close-button" 
                href="#"
                onClick={onClick_handleShowHeaderPMenu.bind(this, props)}>
                <span className="fa fa-times"></span>
            </a>
            <div className="form-main pt45">
                <div className="container">
                    <div className="search flex flex-align-center">
                        <input type="text" name="txtSearch" className="mb-form-field mb-form-comment-field mb-form-search-field" placeholder="Tìm kiếm" value="" />
                        <button type="button" name="btnSearch" className="mb-button mb-black-button mb-5rounded mb-search-button">
                            <span className="fa fa-search"></span>
                        </button>
                    </div>
                    <label className="mb-section-heading flex flex-align-center font15"> 
                        <strong className="">Danh mục</strong>
                    </label>
                    <ul className="mb-def-lists mb-cat-menu flex flex-justify-space-between">
                        {arrCatMenuItems}
                    </ul>
                    <hr className="mb-hr-line single single __lg" />
                    <MbTrendingBox />
                    <MbFeaturedBox />
                    <MbRecentSearchBox />
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
                    <MbDiscoveryBox heading = "Nhạc"
                                    data = {homeMusicWidgetData} />
                    <MbDiscoveryBox heading = "Đẹp"
                                    data = {homeBeautyWidgetData} />
                    <MbDiscoveryBox heading = "Điểm đến trẻ"
                                    data = {homeYoungPlacesWidgetData} />
                    <MbDiscoveryBox heading = "Công nghệ"
                                    data = {homeTechnologyWidgetData} />
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
                                showExcerptNormalPost = {false} />*/}                    
                    {/*<MbCategoryBox data = {homeTechnologyWidgetData}                                     
                                layout = 'films'
                                heading = "Công nghệ"
                                thumbnailLargePos = "top"
                                showThumbnailNormalPost = {true}
                                showExcerptNormalPost = {false} />*/}
                    <MbCategoryBox data = {homeMagazinesWidgetData}                                     
                                    layout = 'films'
                                    heading = "Imagazine"
                                    thumbnailLargePos = "top"
                                    showThumbnailNormalPost = {true}
                                    showExcerptNormalPost = {false}
                                    imagazine = {true} />
                    <MbAdsBox data = {banner_bottom} />
                </div>
            </div>
        </div>
    )
}
function mapStateToProps(state) {   
    return {
        siteOptions : state.globalReducer.siteOptions,
        siteMenu : state.globalReducer.siteMenu,
        ads : state.globalReducer.ads,
        homeNewsWidgetData : state.homeReducer.homeNewsWidgetData,
        homeFeaturedWidgetData : state.homeReducer.homeFeaturedWidgetData,
        homeSportsNewsWidgetData : state.homeReducer.homeSportsNewsWidgetData,
        homeMoviesNewsWidgetData : state.homeReducer.homeMoviesNewsWidgetData,
        homeShowbizNewsWidgetData : state.homeReducer.homeShowbizNewsWidgetData,
        homeBeautyWidgetData : state.homeReducer.homeBeautyWidgetData,
        homeLifeNewsWidgetData : state.homeReducer.homeLifeNewsWidgetData,
        homeTechnologyWidgetData : state.homeReducer.homeTechnologyWidgetData,
        homeYoungPlacesWidgetData : state.homeReducer.homeYoungPlacesWidgetData,
        homeMusicWidgetData : state.homeReducer.homeMusicWidgetData,
        homeMagazinesWidgetData : state.homeReducer.homeMagazinesWidgetData,
        homeExcludeIds : state.homeReducer.homeExcludeIds
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
        updateHomeYoungPlacesWidgetData : async (v) => await dispatch({
            type : "UPDATE_HOME_YOUNGPLACES_WIDGET_DATA",
            payload : v
        }),
        updateHomeMusicWidgetData : async (v) => await dispatch({
            type : "UPDATE_HOME_MUSIC_WIDGET_DATA",
            payload : v
        }),
        updateHomeMagazinesWidgetData : async (v) => await dispatch({
            type : "UPDATE_HOME_MAGAZINES_WIDGET_DATA",
            payload : v
        }),
        updateHomeExploreNewsWidgetData : async (v) => await dispatch({
            type : "UPDATE_HOME_EXPLORE_NEWS_WIDGET_DATA",
            payload : v
        }),
        updateHomeExcludeIds : async (v) => await dispatch({
            type : "UPDATE_HOME_EXCLUDE_IDS",
            payload : v
        }),
        
    }
  }
export default connect(mapStateToProps, mapDispatchToProps)(HeaderPrimarySnapMenu);
