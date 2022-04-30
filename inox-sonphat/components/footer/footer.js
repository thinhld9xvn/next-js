import React, {useEffect, useState} from 'preact/compat'
import ScrollToTop from '@templates/scroll-to-top';
import AddToCartModal from '@templates/addtocart-modal';
import { connect } from 'react-redux';
import ColInfo from '@templates/footer/col-info';
import ColSupporter from '@templates/footer/col-supporter';
import ColCskh from '@templates/footer/col-cskh';
import ColAbout from '@templates/footer/col-about';
import Copyright from '@templates/footer/copyright';
import RowHeading from '@templates/footer/row-heading';
function Footer({ siteOptions }) {    
    const [infoData, setInfoData] = useState(null);
    const [supporterData, setSupporterData] = useState(null);
    const [aboutData, setAboutData] = useState(null);
    const [copyrightData, setCopyrightData] = useState(null);
    const [footerMenu, setFooterMenu] = useState([]);
    useEffect(() => {
        if ( siteOptions ) {
            const {ctInfoList, footerMenuItemsList} = siteOptions;
            const {address, copyright, email, hotline, intro, intro_bg, website, supporter, socials} = ctInfoList;
            setInfoData({address, email, hotline, website});
            setSupporterData(supporter);
            setAboutData({intro, intro_bg, socials});
            setCopyrightData(copyright);
            setFooterMenu(footerMenuItemsList);
        }
    }, [siteOptions]);
    return (
        <>
            <ScrollToTop />
            <footer className="b1 text-white ft">
                <div className="container">
                    {siteOptions ? (
                        <>
                            <div className="ft-1 section-pad-xs">
                                <div className="ft-row">
                                    <div className="row">
                                        <RowHeading />
                                        <ColInfo data = {infoData} />
                                        <ColSupporter data = {supporterData} />
                                        <ColCskh data = {footerMenu} />
                                        <ColAbout data = {aboutData} />
                                    </div>
                                </div>
                            </div>
                            <Copyright data = {copyrightData} />
                        </>
                    ) : null}
                </div>
            </footer>
            <AddToCartModal />
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
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Footer);
