import { ACCOUNT_TABS } from "@constants/constants";

const initialStates = {  
    siteOptions : null,
    siteMenu : null,
    resultsFiltered : null,
    paged : 1,
    showLoginModal : false,
    showRegisterModal : false,
    showPostCommentsModal : false,
    savedPostsList : [],
    accountTabActiveId : ACCOUNT_TABS.DASHBOARD.id,
    isLoggedIn : false,
    userActiveInfo : {},
    userActiveFullInfo : {},
    bannerScripts : [],
    showFooter : true,
    ads : []
};
export const globalReducer = (state = initialStates, action) => {
    switch ( action.type ) {   
        case 'UPDATE_SITE_OPTIONS' :
            state.siteOptions = action.payload;
            return {...state};
         case 'UPDATE_PRIMARY_MENU' :
            state.siteMenu = action.payload;
            return {...state};
            //return JSON.parse( JSON.stringify(state) );
        case 'UPDATE_RESULTS_FILTER' :
            state.resultsFiltered = action.payload;
            return {...state};
        case 'UPDATE_SHOW_LOGIN_MODAL' :
            state.showLoginModal = action.payload;
            return {...state};
        case 'UPDATE_SHOW_REGISTER_MODAL' :
            state.showRegisterModal = action.payload;
            return {...state};
        case 'UPDATE_SHOW_POST_COMMENTS_MODAL' :
            state.showPostCommentsModal = action.payload;
            return {...state};
        case 'UPDATE_SAVED_POSTS_LIST' :
            state.savedPostsList = action.payload;
            return {...state};
        case 'UPDATE_Ads' :
            state.ads = action.payload;
            return {...state};
        case 'UPDATE_ACCOUNT_TAB_ACTIVE_ID' :
            state.accountTabActiveId = action.payload;
            return {...state};
        case 'UPDATE_IS_LOGGED_IN' :
            state.isLoggedIn = action.payload;
            return {...state};
        case 'UPDATE_ACTIVE_USER_INFO' :
            state.userActiveInfo = action.payload;
            return {...state};
        case 'UPDATE_BANNER_SCRIPTS' :
            state.bannerScripts = action.payload;
            return {...state};
        case 'UPDATE_ACTIVE_USER_FULL_INFO' :
            state.userActiveFullInfo = action.payload;
            return {...state};
        case 'UPDATE_SHOW_FOOTER' :
            state.showFooter = action.payload;
            return {...state};
        default :
            break;
    }
    return {...state};
}