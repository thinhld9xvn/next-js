import React, {useState, useEffect} from 'preact/compat'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import { connect } from 'react-redux';
import { cloneArray } from '@js_dir/utils/arrayUtils';
import { setupLazyLoading } from '@js_dir/utils/setupLazyLoading';
const HomeNewsWidget = dynamic(() => import('@home_featured_widget/home-featured-widget'));
const HomeFeaturedWidget = dynamic(() => import('@components/pages/home/widgets/home-news-widget/home-news-widget'));
const HomeLifeNewsWidget = dynamic(() => import('@home_life_news_widget/home-life-news-widget'));
const HomeMoviesNewsWidget = dynamic(() => import('@home_movies_news_widget/home-movies-news-widget'));
const HomeSportsNewsWidget = dynamic(() => import('@home_sports_news_widget/home-sports-news-widget'));
const HomeShowbizNewsWidget = dynamic(() => import('@home_showbiz_news_widget/home-showbiz-news-widget'));
const HomeMagazineNewsWidget = dynamic(() => import('@home_magazine_news_widget/home-magazine-news-widget'));
const HomeExploreNewsWidget = dynamic(() => import('@home_explore_news_widget/home-explore-news-widget'));
const GlBanner = dynamic(() => import('@home_gl_banner_widget/gl-banner'));
function HomePage({ pageContext, 
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
                                                updateHomeMagazinesWidgetData }) {
    const [loadingBanner, setLoadingBanner] = useState(true);
    const [bannerMiddleOne, setBannerMiddleOne] = useState(null);
    const [bannerMiddleTwo, setBannerMiddleTwo] = useState(null);
    const [bannerBottom, setBannerBottom] = useState(null);
    const { title = '',
                keywords = '', 
                    description = '',
                        data : siteOptionsData} = pageContext.siteOptions || {};
    useEffect(async () => {
        setLoadingBanner(true);
        const {ads, widgets, primaryMenu} = pageContext;
        const {banner_middle1, banner_middle2, banner_bottom} = ads;
        const {newsPostsList, featuredPostsList, lifesCatPostsList, moviesCatPostsList, sportsCatPostsList, showbizCatPostsList, exploreNewsCataloguesList, managazinePostsList} = widgets;
        updateSiteOptions(cloneArray(siteOptionsData));
        updatePrimaryMenu(cloneArray(primaryMenu));
        updateAds(cloneArray(ads));
        setBannerMiddleOne(banner_middle1);
        setBannerMiddleTwo(banner_middle2);
        setBannerBottom(banner_bottom);
        setTimeout(function() {
            setLoadingBanner(false);
        }, 200);    
        updateHomeFeaturedWidgetData(cloneArray(newsPostsList));
        updateHomeNewsWidgetData(cloneArray(featuredPostsList));
        updateHomeLifeNewsWidgetData(cloneArray(lifesCatPostsList));    
        updateHomeMoviesNewsWidgetData(cloneArray(moviesCatPostsList));
        updateHomeSportsNewsWidgetData(cloneArray(sportsCatPostsList));
        updateHomeShowbizNewsWidgetData(cloneArray(showbizCatPostsList));
        updateHomeExploreNewsWidgetData(cloneArray(exploreNewsCataloguesList));  
        updateHomeMagazinesWidgetData(cloneArray(managazinePostsList));          
        return () => {
        }
    }, []);
    useEffect(() => {
        setTimeout(function() {
            setupLazyLoading();
        }, 200);
    });
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta description={description} />
                <meta keywords={keywords} />
            </Head>
            <div className="wrapper">            
                <main id="main">
                    <HomeNewsWidget />
                    <HomeFeaturedWidget />
                    <GlBanner loading = {loadingBanner}
                              data = {bannerMiddleOne} />
                    <HomeLifeNewsWidget />
                    <HomeMoviesNewsWidget />                
                    <GlBanner loading = {loadingBanner} 
                              data = {bannerMiddleTwo} />
                    <HomeSportsNewsWidget />
                    <HomeShowbizNewsWidget />
                    <GlBanner loading = {loadingBanner} 
                              data = {bannerBottom} />
                    <HomeMagazineNewsWidget />
                    <HomeExploreNewsWidget />
                </main>
            </div>
        </>
    )
}
function mapStateToProps(state) {   
    return {
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

    }
  }
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);