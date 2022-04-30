import { PAGES } from "@constants/constants";
import { getAboutUsOption } from "@lib/getAboutUsOptionApi";
import { getFactoryOption } from "@lib/getFactoryOptionApi";
import { getNewsPageOption } from "@lib/getNewsPageOptionApi";
import { getProjectDesignOption } from "@lib/getProjectDesignOptionApi";
import { getProjectOption } from "@lib/getProjectOptionApi";
import { getProjectTypeOption } from "@lib/getProjectTypeOptionApi";
import { getRecruitPageOption } from "@lib/getRecruitPageOptions";
import { getShopOption } from "@lib/getShopOptionApi";

export async function getPageExtrasData(slug) {

    let data = {
        footerStyleId : 3,
        enablePsScroll : true,
        defaultPage : false
    };

    if ( PAGES.ABOUT_US.slug === slug ) {

        return Object.assign(data, await getAboutUsOption());

    }

    if ( PAGES.FACTORY.slug === slug ) {

        return Object.assign(data, await getFactoryOption());

    }

    if ( PAGES.PROJECT.slug === slug ) {

        return Object.assign(data, {footerStyleId : 1, 
                                        options : await getProjectOption()});

    }

    if ( PAGES.PROJECT_DESIGN.slug === slug ) {

        return Object.assign(data, {footerStyleId : 1, 
                                        enablePsScroll : false, 
                                            options : await getProjectDesignOption()});
    }

    if ( PAGES.PROJECT_TYPE.slug === slug ) {

        return Object.assign(data, {footerStyleId : 1, 
                                        enablePsScroll : false, 
                                            options : await getProjectTypeOption()});
    }

    if ( PAGES.SHOP.slug === slug ) {

        return Object.assign(data, {options : await getShopOption()});
    }

    if ( PAGES.NEWS.slug === slug ) {

        return Object.assign(data, {options : await getNewsPageOption()});
    }

    if ( PAGES.RECRUIT.slug === slug ) {

        return Object.assign(data, {options : await getRecruitPageOption()});
    }

    return {...data, defaultPage: true};

}