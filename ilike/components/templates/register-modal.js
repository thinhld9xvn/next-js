import React, {useEffect} from 'preact/compat'
import Link from 'next/link'
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import { connect } from 'react-redux';
import { showBodyScroll, hideBodyScroll } from '@js_dir/utils/deviceUtils';
import { MOBILE_LOGO } from '@constants/constants';
import MainRegisterMobileBody from './mobile/main-register-mobile-body';
import { hasMobileModalActiveInst } from '@js_dir/utils/modalUtils';
function RegisterModal({ providers, showRegisterModal, updateShowRegisterModal, updateShowLoginModal }) {
    const onCloseModal = () => {
        updateShowRegisterModal(false);
    }
    const onShowLoginModal = (e) => {
        e.preventDefault();
        updateShowRegisterModal(false);
        updateShowLoginModal(true);
    }
    useEffect(() => {
        if ( showRegisterModal ) {
            setTimeout(() => {
                hideBodyScroll();
            }, 200);
        }
        else {
            if ( !hasMobileModalActiveInst() ) {
                showBodyScroll();
            }
        }
    }, [showRegisterModal]);
    return (
        <div>            
            <Modal open={showRegisterModal} onClose={onCloseModal} center>
                <div className="login-alert-modal">
                    <header className="header-mobile">
                        <div className="container">
                            <div className="wrapper flex flex-align-center flex-justify-center">
                                <div className="logo">
                                    <Link href="/">
                                        <img src={MOBILE_LOGO} />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </header>
                    <main id="main" className="main-mobile">
                        <div className="container">
                            <MainRegisterMobileBody showLoginModalCallback = {onShowLoginModal} />
                        </div>
                    </main>
                </div>
            </Modal>
        </div>
    );
}
function mapStateToProps(state) {   
    return {
        showRegisterModal : state.globalReducer.showRegisterModal
    }
  }
  function mapDispatchToProps(dispatch) {
    return {
        updateShowRegisterModal : async (v) => await dispatch({
            type : "UPDATE_SHOW_REGISTER_MODAL",
            payload : v
        }),
        updateShowLoginModal : async (v) => await dispatch({
            type : "UPDATE_SHOW_LOGIN_MODAL",
            payload : v
        }),
    }
  }
export default connect(mapStateToProps, mapDispatchToProps)(RegisterModal);
