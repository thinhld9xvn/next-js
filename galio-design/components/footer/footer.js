import { GIFTS_FORMS } from '@constants/constants';
import { is_homepage } from '@js_dir/utils/urlUtils';
import ContactPopup from '@templates/footer-page/contact-popup';
import React, {useState, useEffect} from 'preact/compat'
import { FormattedMessage } from 'react-intl'
import { connect } from 'react-redux';
import FooterSocial from './components/footer-social';
function Footer({ siteOptions }) {
    const [showPopupGifts, setShowPopupGifts] = useState(is_homepage());
    useEffect(() => {        
        document.addEventListener('mouseup', function(e) {            
            try {
                const modal = document.querySelector('.popup.__gifts .content-modal');
                if ( !modal.contains(e.target) ) {
                    setShowPopupGifts(false);
                }
            } catch {}
        });
    }, []);
    if ( !siteOptions ) {
        return null;
    }    
    const {getCtInfoList, getSocialNetWorkList} = siteOptions;
    const {description, gifts_form} = getCtInfoList;
    return (
        <>
            <footer id="footer">
                <div className="container">
                    <div className="footer__group">
                        <div className="footer__register">
                            <form action="" className="form__register">
                                <h2 className="footer__title">
                                    <FormattedMessage id="signup_information" />
                                </h2>
                                <div className="input__contact">
                                    <input type="text" placeholder="Email" className="form__input" />
                                    <button className="btn btn__register">
                                        <FormattedMessage id="register" />
                                    </button>
                                </div>
                            </form>
                            <span className="footer__desc"
                                dangerouslySetInnerHTML={{
                                    __html : description
                                }}>
                            </span>
                        </div>
                        <FooterSocial data = {getSocialNetWorkList} />
                    </div>
                </div>
            </footer>
            {/*<ContactPopup data = {gifts_form}
                          showPopup = {showPopupGifts}
                          setShowPopup = {setShowPopupGifts}
                          cfForms = {GIFTS_FORMS}
                          className = '__gifts'
                            buttonClassName = 'button__black' />*/}
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