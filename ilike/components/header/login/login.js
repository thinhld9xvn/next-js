import React, {useState, useEffect} from 'preact/compat'
import { PAGES, USER_THUMBNAIL } from '@constants/constants'
import { onClick_handleLogout } from 'handleEvents/onClick_handleLogout';
import { connect } from 'react-redux';
import { useSession, signIn, signOut } from "next-auth/react"
function Login({props, isLoggedIn, userActiveInfo}) {
    const {data : session} = useSession();
    const [showInfoDropdown, setShowInfoDropdown] = useState(false);
    const {updateShowLoginModal} = props;
    useEffect(async () => {        
        const mouseUpUserInfoBoxEvent = function(e) {
            const target = e.target;
            const boxElem = document.querySelector('.addon__user-action');
            if ( boxElem && !boxElem.contains(target) ) {
                setShowInfoDropdown(false);
            }
        }        
        document.addEventListener('mouseup', mouseUpUserInfoBoxEvent);
        return () => {
            document.removeEventListener('mouseup', mouseUpUserInfoBoxEvent);
        }
    }, []);
    const {username = '', useremail = ''} = userActiveInfo;
    return (
        <>  
            {! isLoggedIn ? (
                <>
                    <a href={PAGES.REGISTER.path} className="btn btn__login hidden-xs"> Đăng ký </a>
                    <a href={PAGES.LOGIN.path} className="btn btn__res hidden-xs"> Đăng nhập </a>
                    <div className="addon__user-action"
                         onClick={e => updateShowLoginModal(true)}>
                        <div className="action-dropdown">
                            <span className="fa fa-user"></span>
                        </div>
                    </div>
                </>
            ) : (            
                <>
                    <div className="addon__user hidden-xs">
                        <div className="user__header">
                            <img src={USER_THUMBNAIL} alt="user" />
                            <figcaption>
                                <span>{username}</span>
                                <span className="email">{useremail}</span>
                                <a href="#"
                                    onClick={onClick_handleLogout.bind(this, session)}>Đăng xuất</a>
                            </figcaption>
                        </div>
                    </div>
                    <div className={"addon__user-action ".concat(showInfoDropdown ? 'active' : '')}
                         onClick={e => setShowInfoDropdown(!showInfoDropdown)}>
                        <div className="action-dropdown">
                            <span className="fa fa-user"></span>
                            <span className={`fa fa-angle-${showInfoDropdown ? 'up' : 'down'} arrowdown padleft5`}></span>
                        </div>
                        <div className="dropdownlist">
                            <div className="user__header">
                                <img src={USER_THUMBNAIL} alt="user" />
                                <figcaption>
                                    <span>{username}</span>
                                    <span className="email">{useremail}</span>
                                    <a href="#"
                                       onClick={onClick_handleLogout.bind(this, session)}>Đăng xuất</a>
                                </figcaption>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </>
    )
}
function mapStateToProps(state) {   
    return {
        isLoggedIn : state.globalReducer.isLoggedIn,
        userActiveInfo : state.globalReducer.userActiveInfo
    }
  }
  function mapDispatchToProps(dispatch) {
    return {
    }
  }
export default connect(mapStateToProps, mapDispatchToProps)(Login);