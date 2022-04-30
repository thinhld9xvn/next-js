import React, {useState, useEffect} from 'preact/compat'
import Heading from './components/heading'
import MagazineTempItem from '@templates/magazine-temp-item'
import { connect } from 'react-redux';
function HomeMagazineNewsWidget({ homeMagazinesWidgetData }) {
    const [managazineListData, setMagazineListData] = useState([]);    
    useEffect(async () => {
        const arrMagazinesList = homeMagazinesWidgetData ? homeMagazinesWidgetData.map((item, i) => <MagazineTempItem  key = {i}
                                                                                                                        data = {item} />) : [];
        setMagazineListData(arrMagazinesList);
    }, [homeMagazinesWidgetData]);  
    return (
        <section className="home-magazine">
            <div className="container">
                <Heading />
                <div className="module__content">
                    <div className="magazine">
                        {managazineListData}
                    </div>
                </div>
            </div>
        </section>
    )
}
function mapStateToProps(state) {   
    return {
        homeMagazinesWidgetData : state.homeReducer.homeMagazinesWidgetData
    }
}
function mapDispatchToProps(dispatch) {
    return {
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(HomeMagazineNewsWidget);
