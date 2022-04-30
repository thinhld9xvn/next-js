import React, {useState, useEffect} from 'preact/compat'
import { connect } from 'react-redux';
import HeaderPrimary from './header-primary'
import HeaderPrimarySnapMenu from './header-primary-snap-menu'
function HeaderPrimaryMobile({props, isLoggedIn}) {
    const {updateShowLoginModal} = props;
    const [showMenu, setShowMenu] = useState(false);
    return (
        <div>
            <HeaderPrimary props = {{login : isLoggedIn, showMenu, setShowMenu, updateShowLoginModal}} />
            <HeaderPrimarySnapMenu props = {{showMenu, setShowMenu}} />
        </div>
    )
}

function mapStateToProps(state) {   
    return {
        isLoggedIn : state.globalReducer.isLoggedIn
    }
  }
  function mapDispatchToProps(dispatch) {
    return {
    }
  }
export default connect(mapStateToProps, mapDispatchToProps)(HeaderPrimaryMobile);
