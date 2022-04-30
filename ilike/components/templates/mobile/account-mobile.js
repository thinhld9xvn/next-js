import React, {useEffect, useState} from 'preact/compat'
import HeaderDashboard from './header/dashboard/header-dashboard';
import IAccountDashboard from './account/components/dashboard/iaccount-dashboard';
import IAccountFavoriteDashboard from './account/components/dashboard/iaccount-favorite-dashboard';
import { connect } from 'react-redux'
import PdLoadingArticle from '@components/loading/pd-loading-article';
function AccountMobile({ isLoggedIn, userActiveInfo }) {
    if ( !isLoggedIn ) return (
        <div className="mtop30">
            <PdLoadingArticle />
        </div>
    )
    return (
        <>
            <div className="wrapper">
                <main id="main" className="main-mobile">
                    <div className="container">
                        <HeaderDashboard data = {userActiveInfo} />
                        <hr className="mb-hr-line __mtop40" />
                        <IAccountDashboard data = {userActiveInfo} />
                        <hr className="mb-hr-line" />
                        <IAccountFavoriteDashboard />
                    </div>
                </main>
            </div>
        </>
    )
}
function mapStateToProps(state) {   
    return {
        showPostCommentsModal : state.globalReducer.showPostCommentsModal,
        isLoggedIn : state.globalReducer.isLoggedIn,
        userActiveInfo : state.globalReducer.userActiveInfo
    }
  }
  function mapDispatchToProps(dispatch) {
    return {
        updateShowPostCommentsModal : async (v) => await dispatch({
            type : "UPDATE_SHOW_POST_COMMENTS_MODAL",
            payload : v
        }),
    }
  }
export default connect(mapStateToProps, mapDispatchToProps)(AccountMobile);