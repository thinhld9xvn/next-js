import { PAGES } from "@constants/constants";
import dynamic from "next/dynamic";

const AboutUsPage = dynamic(() => import("@components/pages/about-us-page"));
const NhaMayPage = dynamic(() => import("@components/pages/nha-may-page"));
const DuanPage = dynamic(() => import("@components/pages/du-an-page"));
const KieuDuAnPage = dynamic(() => import("@components/pages/du-an-template-page"));
const KieuTKPage = dynamic(() => import("@components/pages/du-an-template-page"));
const ShopPage = dynamic(() => import("@components/pages/shop-page"));
const BlogTemplatePage = dynamic(() => import("@components/pages/blog-template-page"));
const DefaultTemplatePage = dynamic(() => import("@components/pages/default-template-page"));

export function getPageComponent(slug) {

    if ( slug === PAGES.ABOUT_US.slug ) {

        return AboutUsPage;

    }      

    if ( slug === PAGES.FACTORY.slug ) {
        
        return NhaMayPage;

    }

    if ( slug === PAGES.PROJECT.slug ) {
        
        return DuanPage;

    }

    if ( slug === PAGES.PROJECT_DESIGN.slug ) {
        
        return KieuTKPage;

    }

    if ( slug === PAGES.PROJECT_TYPE.slug ) {

        return KieuDuAnPage;

    }

    if ( slug === PAGES.SHOP.slug ) {
        
        return ShopPage;

    }

    if ( slug === PAGES.NEWS.slug || slug === PAGES.RECRUIT.slug ) {
        
        return BlogTemplatePage;

    }

    return DefaultTemplatePage;

}