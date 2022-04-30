import React, {useState, useEffect} from 'preact/compat'
import Heading from './components/heading'
import FeaturedDiscoverBox from './components/featured-discover-box';
import { cataloguesEntries } from "@constants/constants";
import {connect} from 'react-redux'
import { isDiff } from '@js_dir/utils/arrayUtils';
function getTempItems(entries, data) {
    const arrCataloguesBox = [];
    for ( let i = 0; i < entries.length; i++ ) {
        const item = entries[i];                
        item.data = data[i];
        arrCataloguesBox.push(<FeaturedDiscoverBox key={`cataloguebox__${i}`}
                                                    loading = {false}
                                                    data = {item} />);
    }
    return arrCataloguesBox;
}
function HomeExploreNewsWidget({ homeExploreNewsWidgetData }) {
    const [widgetData, setWidgetData] = useState(homeExploreNewsWidgetData);
    const [cataloguesBox, setCataloguesBox] = useState(null); 
    useEffect(() => {
        const arrCataloguesBox = cataloguesEntries.map((item, i) => <FeaturedDiscoverBox key={`cataloguebox__featured__${i}`}
                                                                                        loading = {true}
                                                                                        data = {item} />);
        setCataloguesBox(arrCataloguesBox);
    }, []);
    useEffect(() => {
        if ( isDiff(homeExploreNewsWidgetData, widgetData) || 
                homeExploreNewsWidgetData ) {
            const arrCataloguesBox = getTempItems(cataloguesEntries, homeExploreNewsWidgetData);
            setCataloguesBox(arrCataloguesBox);
            setWidgetData(homeExploreNewsWidgetData);
        }
    }, [homeExploreNewsWidgetData]);
    return (
        <section className="home-discover">
            <div className="container">
                <Heading />
                <div className="module__content">
                    <div className="discover">
                        {cataloguesBox}
                    </div>
                </div>
            </div>
        </section>
    )
}
function mapStateToProps(state) {   
    return {
        homeExploreNewsWidgetData : state.homeReducer.homeExploreNewsWidgetData
    }
}
function mapDispatchToProps(dispatch) {
    return {
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(HomeExploreNewsWidget);