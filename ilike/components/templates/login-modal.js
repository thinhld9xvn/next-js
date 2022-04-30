import React, {useEffect, useState} from 'preact/compat'
import Link from 'next/link'
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import { connect } from 'react-redux';
import FormLoginBody from '@loginpage/components/form-login-body';
import { signIn } from "next-auth/react"
import { isMobile, showBodyScroll, hideBodyScroll } from '@js_dir/utils/deviceUtils';
import MainLoginMobileBody from './mobile/main-login-mobile-body';
import { MOBILE_LOGO } from '@constants/constants';
import { hasMobileModalActiveInst } from '@js_utils/modalUtils'
function LoginModal({ providers, showLoginModal, updateShowLoginModal, updateShowRegisterModal }) {
    const [isMobileDevice, setMobileDevice] = useState(false);
    const [tabActiveId, setTabActiveId] = useState(0);
    const onCloseModal = () => {
        updateShowLoginModal(false);
        setTabActiveId(0);
    }
    const onShowRegisterModal = (e) => {
        e.preventDefault();
        updateShowLoginModal(false);
        updateShowRegisterModal(true);
    }
    const onClick_switchTab = (e, id) => {
        setTabActiveId(id);
    }
    useEffect(() => {
        setMobileDevice(isMobile());
    }, []);
    useEffect(() => {
        if ( showLoginModal ) {
            setTimeout(() => {
                hideBodyScroll();
            }, 200);
        }
        else {
            if ( !hasMobileModalActiveInst() ) {
                showBodyScroll();
            }
        }
    }, [showLoginModal]);
    return (
        <div>            
            <Modal open={showLoginModal} onClose={onCloseModal} center>
                <div className="login-alert-modal">
                    {!isMobileDevice ? (
                        <>
                            <div className="tabsList">
                                <h2 className={tabActiveId === 0 ? 'active' : ''}
                                    onClick={e => onClick_switchTab(e, 0)}>Đăng nhập</h2>
                                <h2 className={tabActiveId === 1 ? 'active' : ''} 
                                    onClick={e => onClick_switchTab(e, 1)}>Tạo tài khoản</h2>
                            </div>
                            <div className="tabsMainCPanel">
                                <div className={"tabLogin ".concat(tabActiveId === 0 ? 'active' : '')}>
                                    <FormLoginBody />
                                </div>
                                <div className={"tabRegister ".concat(tabActiveId === 1 ? 'active' : '')}>
                                    
                                </div>
                            </div>
                        </>
                    ) : (
                        <>
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
                                    <MainLoginMobileBody providers = {providers}
                                                        signIn = {signIn}
                                                        showRegisterModalCallback = {onShowRegisterModal} />
                                </div>
                            </main>
                        </>
                    )}
                </div>
            </Modal>
        </div>
    );
}
function mapStateToProps(state) {   
    return {
        showLoginModal : state.globalReducer.showLoginModal,
        showRegisterModal : state.globalReducer.showRegisterModal
    }
  }
  function mapDispatchToProps(dispatch) {
    return {
        updateShowLoginModal : async (v) => await dispatch({
            type : "UPDATE_SHOW_LOGIN_MODAL",
            payload : v
        }),
        updateShowRegisterModal : async (v) => await dispatch({
            type : "UPDATE_SHOW_REGISTER_MODAL",
            payload : v
        }),
    }
  }
export default connect(mapStateToProps, mapDispatchToProps)(LoginModal);
