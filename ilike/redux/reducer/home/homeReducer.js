const initialStates = {  
    homeNewsWidgetData : null,
    homeFeaturedWidgetData : null,
    homeLifeNewsWidgetData : null,
    homeMoviesNewsWidgetData : null,
    homeSportsNewsWidgetData : null,
    homeShowbizNewsWidgetData : null,
    homeExploreNewsWidgetData : null,
    homeMagazinesWidgetData: null,
    homeBeautyWidgetData: null,
    homeTechnologyWidgetData: null,
    homeYoungPlacesWidgetData: null,
    homeMusicWidgetData : null,
    homeExcludeIds : []
};
export const homeReducer = (state = initialStates, action) => {
    switch ( action.type ) {   
        case 'UPDATE_HOME_FEATURED_WIDGET_DATA' :
            state.homeFeaturedWidgetData = action.payload;
            return JSON.parse( JSON.stringify(state) );
         case 'UPDATE_HOME_NEWS_WIDGET_DATA' :
            state.homeNewsWidgetData = action.payload;
            return JSON.parse( JSON.stringify(state) );
        case 'UPDATE_HOME_LIFE_NEWS_WIDGET_DATA' :
            state.homeLifeNewsWidgetData = action.payload;
            return JSON.parse( JSON.stringify(state) );
        case 'UPDATE_HOME_MOVIES_NEWS_WIDGET_DATA' :
            state.homeMoviesNewsWidgetData = action.payload;
            return JSON.parse( JSON.stringify(state) );
        case 'UPDATE_HOME_SPORTS_NEWS_WIDGET_DATA' :
            state.homeSportsNewsWidgetData = action.payload;
            return JSON.parse( JSON.stringify(state) );
        case 'UPDATE_HOME_SHOWBIZ_NEWS_WIDGET_DATA' :
            state.homeShowbizNewsWidgetData = action.payload;
            return JSON.parse( JSON.stringify(state) );
        case 'UPDATE_HOME_EXPLORE_NEWS_WIDGET_DATA' :
            state.homeExploreNewsWidgetData = action.payload;
            return JSON.parse( JSON.stringify(state) );
        case 'UPDATE_HOME_BEAUTY_WIDGET_DATA' :
            state.homeBeautyWidgetData = action.payload;
            return JSON.parse( JSON.stringify(state) );
        case 'UPDATE_HOME_MAGAZINES_WIDGET_DATA' :
            state.homeMagazinesWidgetData = action.payload;
            return JSON.parse( JSON.stringify(state) );
        case 'UPDATE_HOME_TECHNOLOGY_WIDGET_DATA' :
            state.homeTechnologyWidgetData = action.payload;
            return JSON.parse( JSON.stringify(state) );
        case 'UPDATE_HOME_YOUNGPLACES_WIDGET_DATA' :
            state.homeYoungPlacesWidgetData = action.payload;
            return JSON.parse( JSON.stringify(state) );
        case 'UPDATE_HOME_MUSIC_WIDGET_DATA' :
            state.homeMusicWidgetData = action.payload;
            return JSON.parse( JSON.stringify(state) );
        case 'UPDATE_HOME_EXCLUDE_IDS' :
            state.homeExcludeIds = action.payload;
            return JSON.parse( JSON.stringify(state) );
        default :
            break;
    }
    return JSON.parse( JSON.stringify(state) );
}