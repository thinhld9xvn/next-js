import React from 'preact/compat'
import Link from 'next/link'
import { ACCOUNT_TABS } from '@constants/constants';
import { connect } from 'react-redux';
function handleChooseTab(props, e) {
    const { UpdateAccountTabActiveId, id} = props;
    UpdateAccountTabActiveId(id);
}
function IAccountDashboard({data, UpdateAccountTabActiveId}) {
    const {username = '', useremail = ''} = data;
    return (
        <div className="account-information">
            <h3 className="account-sm-heading">Thông tin tài khoản</h3>
            <div className="account-entries-cnt">
                <div className="account-sm-entry">
                    <label className="mb-section-heading account-sm-entry-text flex flex-align-center nopad"> 
                        <strong className="">Tên tài khoản</strong>
                    </label>
                    <label className="mb-section-heading account-sm-entry-no flex flex-align-center nopad"> 
                        {username}
                    </label>
                </div>
                <div className="account-sm-entry flex flex-justify-space-between">
                    <div>
                        <label className="mb-section-heading account-sm-entry-text flex flex-align-center nopad"> 
                            <strong className="">Email</strong>
                        </label>
                        <label className="mb-section-heading account-sm-entry-no flex flex-align-center nopad">
                            {useremail}
                        </label>
                    </div>
                </div>
                <div className="account-sm-entry flex flex-justify-space-between">
                    <div>
                        <label className="mb-section-heading account-sm-entry-text flex flex-align-center nopad"> 
                            <strong className="">Mật khẩu</strong>
                        </label>
                        <label className="mb-section-heading account-sm-entry-no flex flex-align-center nopad">
                            ********
                        </label>
                    </div>
                    <div>
                        <Link href={ACCOUNT_TABS.PASSWORD.url}>
                            <a className="mb-button mb-link-button"
                                onClick={handleChooseTab.bind(this, {UpdateAccountTabActiveId, id : ACCOUNT_TABS.PASSWORD.id})}>Cập nhật</a>
                        </Link></div>
                </div>
            </div>
        </div>
    )
}

function mapStateToProps(state) {   
    return {
        accountTabActiveId : state.globalReducer.accountTabActiveId,
    }
}
function mapDispatchToProps(dispatch) {
return {
    UpdateAccountTabActiveId : async (v) => await dispatch({
        type : "UPDATE_ACCOUNT_TAB_ACTIVE_ID",
        payload : v
    }),

}
}
export default connect(mapStateToProps, mapDispatchToProps)(IAccountDashboard);

