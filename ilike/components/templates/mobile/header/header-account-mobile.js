import React, {useState, useEffect} from 'preact/compat'
import HeaderPrimarySnapMenu from './header-primary-snap-menu'
import HeaderIAccountMobile from './header-iaccount-mobile';
import { useSession, signIn, signOut } from "next-auth/react"
import { getUserLoginInfo, isUserLogin } from '@js_dir/utils/membership';
import { connect } from 'react-redux';
import PdLoadingSquare from '@components/loading/pd-loading-square';
function HeaderAccountMobile({ isLoggedIn, UpdateIsLoggedIn, UpdateActiveUserInfo, UpdateActiveFullUserInfo }) {
    const {data : session} = useSession();
    const [loading, setLoading] = useState(true);
    const [showMenu, setShowMenu] = useState(false);
    const [showAccountMenu, setShowAccountMenu] = useState(false);
    useEffect(async () => {
        setLoading(true);
        UpdateIsLoggedIn(false);
        UpdateActiveUserInfo({});
        UpdateActiveFullUserInfo({});
        if ( !session ) {
            const isLoggedIn = await isUserLogin();
            if ( isLoggedIn ) {
                const {user} = getUserLoginInfo();                                
                const {name, email} = user;
                UpdateActiveUserInfo({username : name, useremail : email});
                UpdateActiveFullUserInfo({...user});
            }
            UpdateIsLoggedIn(isLoggedIn);
        }
        else {
            const user = session.user;
            const username = user.name;
            const useremail = user.email;
            UpdateActiveUserInfo({username, useremail});
            UpdateActiveFullUserInfo({});
            UpdateIsLoggedIn(true);
        }
        setLoading(false);
    }, [,session]);
    if ( loading ) return (
        <div>
            <div className="container">
                <PdLoadingSquare size = "small" />
            </div>
        </div>
    )
    return (
        <>
            <head>
                <title>Thông tin tài khoản</title>
            </head>
            <HeaderIAccountMobile props = {{showMenu, setShowMenu, 
                                            showAccountMenu, setShowAccountMenu}} />
            <HeaderPrimarySnapMenu props = {{showMenu, setShowMenu}} />
        </>
    )
}
function mapStateToProps(state) {   
    return {
        isLoggedIn : state.globalReducer.isLoggedIn
    }
  }
  function mapDispatchToProps(dispatch) {
    return {
        UpdateIsLoggedIn : async (v) => await dispatch({
            type : "UPDATE_IS_LOGGED_IN",
            payload : v
        }),
        UpdateActiveUserInfo : async (v) => await dispatch({
            type : "UPDATE_ACTIVE_USER_INFO",
            payload : v
        }),
        UpdateActiveFullUserInfo : async (v) => await dispatch({
            type : "UPDATE_ACTIVE_USER_FULL_INFO",
            payload : v
        }),
    }
  }
export default connect(mapStateToProps, mapDispatchToProps)(HeaderAccountMobile);
