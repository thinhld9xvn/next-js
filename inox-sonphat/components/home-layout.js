import React, {useEffect, useState} from 'preact/compat'
import { connect } from 'react-redux';
import { useRouter } from 'next/router';
import HomeSlider from '@templates/home/slider';
import AboutSection from '@templates/home/about-section';
import FeaturedProductsSection from '@templates/home/featured-products-section';
import BlogSection from '@templates/home/blog-section';
import PartnerSection from '@templates/home/partner-section';
import GlBanner from '@templates/home/gl-banner';
import FeedbackSection from './templates/home/feedback-section';
import { isDiff } from '@js_dir/utils/arrayUtils';
import SeoHelmet from './seo-helmet';
import { getSeoExtrasPage } from '@js_dir/utils/seoUtils';
function HomeLayout({ pageContext, siteOptions, UpdateSiteOptions }) {    
    const router = useRouter();
    const {siteOptions : mySiteOptions, homePageData} = pageContext;
    const {slidersList, gioithieuSection, productsTabLists, 
            bannerSectionOne, testimolatesSection, articlesList,
            bannerSectionTwo, clientsSectionInfo, seo} = homePageData;
    const [sliderListData, setSliderListData] = useState(slidersList);
    const [gioithieuSectionData, setGioiThieuSectionData] = useState(gioithieuSection);
    const [productsTabListsData, setProductsTabListsData] = useState(productsTabLists);
    const [bannerSectionOneData, setBannerSectionOneData] = useState(bannerSectionOne);
    const [bannerSectionTwoData, setBannerSectionTwoData] = useState(bannerSectionTwo);
    const [clientsSectionInfoData, setClientsSectionInfoData] = useState(clientsSectionInfo);
    const [testimolatesSectionData, setTestimolatesSectionData] = useState(testimolatesSection);
    const [articlesListData, setArticlesListData] = useState(articlesList);
    const yoastseo = getSeoExtrasPage(seo);
    useEffect(() => {
        if ( isDiff(mySiteOptions, siteOptions) ) {            
            UpdateSiteOptions({...mySiteOptions});
        }
        if ( isDiff(slidersList, sliderListData) ) {
            setSliderListData(slidersList);
        }
        if ( isDiff(gioithieuSection, gioithieuSectionData) ) {
            setGioiThieuSectionData(gioithieuSection);
        }
        if ( isDiff(productsTabLists, productsTabListsData) ) {
            setProductsTabListsData(productsTabLists);
        }
        if ( isDiff(bannerSectionOne, bannerSectionOneData) ) {
            setBannerSectionOneData(bannerSectionOne);
        }
        if ( isDiff(bannerSectionTwo, bannerSectionTwoData) ) {
            setBannerSectionTwoData(bannerSectionTwo);
        }
        if ( isDiff(clientsSectionInfo, clientsSectionInfoData) ) {
             setClientsSectionInfoData(clientsSectionInfo);
        }
        if ( isDiff(testimolatesSection, testimolatesSectionData) ) {
            setTestimolatesSectionData(testimolatesSection);
        }
        if ( isDiff(articlesList, articlesListData) ) {
            setArticlesListData(articlesList);
        }
    }, [, router.locale, router.query.slug]);
    return (
        <>
            <SeoHelmet data = {yoastseo} />
            <main>
                <HomeSlider data = {sliderListData} />
                <AboutSection data = {gioithieuSectionData}
                              locale = {router.locale} />                
                <FeaturedProductsSection data = {productsTabListsData} />
                <GlBanner data = {bannerSectionOneData} />
                <FeedbackSection data = {testimolatesSectionData} />
                <BlogSection data = {articlesListData} />
                <GlBanner data = {bannerSectionTwoData} />
                <PartnerSection data = {clientsSectionInfoData} />
            </main>
        </>
    )
}
function mapStateToProps(state) {   
    return { 
        siteOptions: state.globalReducer.siteOptions
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
export default connect(mapStateToProps, mapDispatchToProps)(HomeLayout);
